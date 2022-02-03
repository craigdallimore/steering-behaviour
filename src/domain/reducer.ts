import { initialState } from "@domain/initialState.js";
import {
  CharacterId,
  State,
  Behaviour,
  Vector,
  Scenario,
  ScenarioId,
} from "@domain/types.js";
import { distance } from "@lib/vector.js";
import updateFocussedCharacter from "@lib/updateFocussedCharacter";
import applyBehaviour from "@lib/applyBehaviour";
import getFocussedScenario from "@lib/getFocussedScenario";

// TYPES ----------------------------------------------------------------------

const TICK = "TICK";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";
const RESET_BUTTON_CLICKED = "RESET_BUTTON_CLICKED";
const CANVAS_CLICKED = "CANVAS_CLICKED";
const CANVAS_RESIZED = "CANVAS_RESIZED";
const BEHAVIOUR_CHANGED = "BEHAVIOUR_CHANGED";
const SCENARIO_CHANGED = "SCENARIO_CHANGED";
const ORIENTATION_CHANGED = "ORIENTATION_CHANGED";
const ROTATION_CHANGED = "ROTATION_CHANGED";
const POSX_CHANGED = "POSX_CHANGED";
const POSZ_CHANGED = "POSZ_CHANGED";
const VELX_CHANGED = "VELX_CHANGED";
const VELZ_CHANGED = "VELZ_CHANGED";

export type Action =
  | {
      type: typeof TICK;
      payload: number;
    }
  | {
      type: typeof BEHAVIOUR_CHANGED;
      payload: Behaviour;
    }
  | {
      type: typeof SCENARIO_CHANGED;
      payload: ScenarioId;
    }
  | {
      type: typeof ROTATION_CHANGED;
      payload: number;
    }
  | {
      type: typeof ORIENTATION_CHANGED;
      payload: number;
    }
  | {
      type: typeof POSX_CHANGED;
      payload: number;
    }
  | {
      type: typeof POSZ_CHANGED;
      payload: number;
    }
  | {
      type: typeof VELX_CHANGED;
      payload: number;
    }
  | {
      type: typeof VELZ_CHANGED;
      payload: number;
    }
  | {
      type: typeof CANVAS_CLICKED;
      payload: Vector;
    }
  | {
      type: typeof CANVAS_RESIZED;
      payload: Vector;
    }
  | {
      type: typeof PLAY_BUTTON_CLICKED;
    }
  | {
      type: typeof RESET_BUTTON_CLICKED;
    };

// HELPERS --------------------------------------------------------------------

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "RESET_BUTTON_CLICKED":
      const canvasDimensions = state.ui.canvasDimensions;
      return {
        ...initialState,
        ui: {
          ...initialState.ui,
          canvasDimensions,
        },
      };
    case "PLAY_BUTTON_CLICKED":
      state.ui.isPaused = !state.ui.isPaused;
      return state;
    case "CANVAS_RESIZED":
      state.ui.canvasDimensions = action.payload;
      return state;
    case "CANVAS_CLICKED": {
      const scenario = getFocussedScenario(state);

      if (!scenario) {
        return state;
      }

      const clickPosition: Vector = action.payload;

      const distanceMap = [...scenario.characters].reduce((m, [id, char]) => {
        const d = distance(clickPosition, char.kinematic.position);
        m.set(id, d);
        return m;
      }, new Map());

      const closestToClick = [...distanceMap].reduce(
        (acc, entry) => {
          return acc[1] < entry[1] ? acc : entry;
        },
        [null, Infinity]
      );

      const [clickedCharacterId, clickedCharacterDistance]: [
        CharacterId | null,
        number
      ] = closestToClick;

      if (!clickedCharacterId) {
        // Suppose there are no characters on the board
        return state;
      }

      if (clickedCharacterDistance > 15) {
        // Too far away from any character; we consider this as deselection
        state.ui.isSettingTarget = false;
        state.ui.focussedCharacterId = null;
        return state;
      }

      if (
        state.ui.isSettingTarget &&
        clickedCharacterId !== state.ui.focussedCharacterId // A character cannot target themselves
      ) {
        const nextState = updateFocussedCharacter(state, (char) => {
          if ("targetId" in char.behaviour) {
            char.behaviour.targetId = clickedCharacterId;
          }
          return char;
        });
        nextState.ui.actionFeedbackCount = 60;
        return nextState;
      }

      state.ui.focussedCharacterId = clickedCharacterId;

      const focussedCharacter = scenario.characters.get(clickedCharacterId);

      // The newly focussed character may be able to have a target assigned.
      state.ui.isSettingTarget = !!(
        focussedCharacter && "targetId" in focussedCharacter.behaviour
      );
      return state;
    }

    case "BEHAVIOUR_CHANGED":
      const nextState = updateFocussedCharacter(state, (char) => {
        char.behaviour = action.payload;
        return char;
      });

      if ("targetId" in action.payload) {
        nextState.ui.isSettingTarget = true;
      }

      return nextState;

    case "SCENARIO_CHANGED":
      state.ui.focussedScenarioId = action.payload;
      return state;

    case "ROTATION_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          kinematic: {
            ...char.kinematic,
            rotation: action.payload,
          },
        };
      });
    case "ORIENTATION_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        char.kinematic.orientation = Math.PI * action.payload;
        return char;
      });
    case "POSX_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          kinematic: {
            ...char.kinematic,
            position: [action.payload, char.kinematic.position[1]],
          },
        };
      });
    case "POSZ_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          kinematic: {
            ...char.kinematic,
            position: [char.kinematic.position[0], action.payload],
          },
        };
      });
    case "VELX_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          kinematic: {
            ...char.kinematic,
            velocity: [action.payload, char.kinematic.velocity[1]],
          },
        };
      });
    case "VELZ_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          kinematic: {
            ...char.kinematic,
            velocity: [char.kinematic.velocity[0], action.payload],
          },
        };
      });

    case "TICK": {
      if (state.ui.isPaused) {
        return state;
      }
      const time = action.payload;

      const scenario = getFocussedScenario(state);

      if (!scenario) {
        return state;
      }

      if (state.ui.actionFeedbackCount > -1) {
        state.ui.actionFeedbackCount--;
      }

      scenario.characters = new Map(
        [...scenario.characters].map(([id, char]) => {
          const nextChar = applyBehaviour(
            char,
            time,
            scenario.characters,
            scenario.paths,
            scenario.shapes
          );
          return [id, nextChar];
        })
      );
      return state;
    }

    default:
      return state;
  }
}
