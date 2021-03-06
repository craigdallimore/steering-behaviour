import { getScenario } from "@domain/initialState";
import {
  CharacterId,
  State,
  Behaviour,
  Vector,
  ScenarioId,
  SteeringBehaviourName,
} from "@domain/types";
import { distance } from "@decoy9697/vector";
import updateFocussedCharacter from "@lib/updateFocussedCharacter";
import applyBehaviours from "@lib/applyBehaviours";
import getFirstTargetId from "@lib/getFirstTargetId";

// TYPES ----------------------------------------------------------------------

const BEHAVIOUR_ADDED = "BEHAVIOUR_ADDED";
const BEHAVIOUR_CHANGED = "BEHAVIOUR_CHANGED";
const BEHAVIOUR_REMOVED = "BEHAVIOUR_REMOVED";
const CANVAS_CLICKED = "CANVAS_CLICKED";
const CANVAS_RESIZED = "CANVAS_RESIZED";
const DEBUG_MODE_CHANGED = "DEBUG_MODE_CHANGED";
const ORIENTATION_CHANGED = "ORIENTATION_CHANGED";
const MAX_ANGULAR_ACCELERATION_CHANGED = "MAX_ANGULAR_ACCELERATION_CHANGED";
const MAX_ACCELERATION_CHANGED = "MAX_ACCELERATION_CHANGED";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";
const POSX_CHANGED = "POSX_CHANGED";
const POSZ_CHANGED = "POSZ_CHANGED";
const RESET_BUTTON_CLICKED = "RESET_BUTTON_CLICKED";
const ROTATION_CHANGED = "ROTATION_CHANGED";
const SCENARIO_CHANGED = "SCENARIO_CHANGED";
const TICK = "TICK";
const VELX_CHANGED = "VELX_CHANGED";
const VELZ_CHANGED = "VELZ_CHANGED";

export type Action =
  | {
      type: typeof TICK;
      payload: number;
    }
  | {
      type: typeof BEHAVIOUR_ADDED;
      payload: Behaviour;
    }
  | {
      type: typeof BEHAVIOUR_CHANGED;
      payload: Behaviour;
    }
  | {
      type: typeof BEHAVIOUR_REMOVED;
      payload: SteeringBehaviourName;
    }
  | {
      type: typeof SCENARIO_CHANGED;
      payload: ScenarioId;
    }
  | {
      type: typeof DEBUG_MODE_CHANGED;
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
      type: typeof MAX_ACCELERATION_CHANGED;
      payload: number;
    }
  | {
      type: typeof MAX_ANGULAR_ACCELERATION_CHANGED;
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
    case "RESET_BUTTON_CLICKED": {
      state.ui.isPaused = true;
      state.scenario = state.ui.focussedScenarioId
        ? getScenario(state.ui.focussedScenarioId)
        : null;
      return state;
    }
    case "PLAY_BUTTON_CLICKED":
      state.ui.isPaused = !state.ui.isPaused;
      return state;
    case "DEBUG_MODE_CHANGED":
      state.ui.isDebugMode = !state.ui.isDebugMode;
      return state;
    case "CANVAS_RESIZED":
      state.ui.canvasDimensions = action.payload;
      return state;
    case "CANVAS_CLICKED": {
      if (!state.scenario) {
        return state;
      }

      const clickPosition: Vector = action.payload;

      const distanceMap = [...state.scenario.characters].reduce(
        (m, [id, char]) => {
          const d = distance(clickPosition, char.kinematic.position);
          m.set(id, d);
          return m;
        },
        new Map()
      );

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
          char.behaviours.forEach((behaviour) => {
            if ("targetId" in behaviour) {
              behaviour.targetId = clickedCharacterId;
            }
          });
          return char;
        });
        nextState.ui.actionFeedbackCount = 60;
        return nextState;
      }

      state.ui.focussedCharacterId = clickedCharacterId;

      const focussedCharacter =
        state.scenario.characters.get(clickedCharacterId);

      // The newly focussed character may be able to have a target assigned.
      state.ui.isSettingTarget = !!(
        focussedCharacter && getFirstTargetId(focussedCharacter.behaviours)
      );
      return state;
    }
    case "BEHAVIOUR_ADDED": {
      const nextState = updateFocussedCharacter(state, (char) => {
        char.behaviours = [...char.behaviours, action.payload];
        return char;
      });

      if ("targetId" in action.payload) {
        nextState.ui.isSettingTarget = true;
      }

      return nextState;
    }
    case "BEHAVIOUR_CHANGED": {
      const nextState = updateFocussedCharacter(state, (char) => {
        const index = char.behaviours.findIndex(
          (behaviour) => behaviour.name === action.payload.name
        );
        if (index > -1) {
          char.behaviours[index] = action.payload;
        }

        return char;
      });

      if ("targetId" in action.payload) {
        nextState.ui.isSettingTarget = true;
      }

      return nextState;
    }
    case "BEHAVIOUR_REMOVED": {
      const nextState = updateFocussedCharacter(state, (char) => {
        char.behaviours = char.behaviours.filter(
          (behaviour: Behaviour) => behaviour.name !== action.payload
        );

        if (char.behaviours.length === 0) {
          char.kinematic.velocity = [0, 0];
        }
        return char;
      });

      return nextState;
    }
    case "SCENARIO_CHANGED":
      state.ui.focussedScenarioId = action.payload;
      state.scenario = getScenario(action.payload);
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
        char.kinematic.orientation = action.payload;
        return char;
      });
    case "MAX_ACCELERATION_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        char.kinematic.maxAcceleration = action.payload;
        return char;
      });
    case "MAX_ANGULAR_ACCELERATION_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        char.kinematic.maxAngularAcceleration = action.payload;
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

      if (!state.scenario) {
        return state;
      }

      const scenario = state.scenario;

      if (state.ui.actionFeedbackCount > -1) {
        state.ui.actionFeedbackCount--;
      }

      scenario.characters = new Map(
        [...scenario.characters].map(([id, char]) => {
          const nextChar = applyBehaviours(char, time, scenario);
          return [id, nextChar];
        })
      );
      return state;
    }

    default:
      return state;
  }
}
