import { initialState } from "@domain/initialState.js";
import {
  Character,
  CharacterId,
  State,
  Behaviour,
  Vector,
} from "@domain/types.js";
import { distance } from "@lib/vector.js";
import updateFocussedCharacter from "@lib/updateFocussedCharacter";
import applyBehaviour from "@lib/applyBehaviour";

// TYPES ----------------------------------------------------------------------

const TICK = "TICK";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";
const RESET_BUTTON_CLICKED = "RESET_BUTTON_CLICKED";
const SET_TARGET_BUTTON_CLICKED = "SET_TARGET_BUTTON_CLICKED";
const CANVAS_CLICKED = "CANVAS_CLICKED";
const CANVAS_RESIZED = "CANVAS_RESIZED";
const BEHAVIOUR_CHANGED = "BEHAVIOUR_CHANGED";
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
      type: typeof SET_TARGET_BUTTON_CLICKED;
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
    case "SET_TARGET_BUTTON_CLICKED":
      state.isSettingTarget = true;
      return state;
    case "RESET_BUTTON_CLICKED":
      return initialState;
    case "PLAY_BUTTON_CLICKED":
      state.isPaused = !state.isPaused;
      return state;
    case "CANVAS_RESIZED":
      state.scene = action.payload;
      return state;
    case "CANVAS_CLICKED": {
      const clickPosition: Vector = action.payload;
      const pairs = [...state.characters];

      const clickedCharacterId = pairs.reduce((acc, pair) => {
        const id: CharacterId = pair[0];
        const char: Character = pair[1];

        const distanceToClick = distance(
          clickPosition,
          char.kinematic.position
        );
        return distanceToClick < 15 ? id : acc;
      }, pairs[0][0]);

      if (state.isSettingTarget) {
        const nextState = updateFocussedCharacter(state, (char) => {
          if ("targetId" in char.behaviour) {
            char.behaviour.targetId = clickedCharacterId;
          }
          return char;
        });
        nextState.isSettingTarget = false;
        return nextState;
      }

      state.focussedCharacterId = clickedCharacterId;
      return state;
    }

    case "BEHAVIOUR_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          behaviour: action.payload,
        };
      });

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
      if (state.isPaused) {
        return state;
      }
      const time = action.payload;

      state.characters = new Map(
        [...state.characters].map(([id, char]) => {
          const nextChar = applyBehaviour(
            char,
            time,
            state.characters,
            state.paths,
            state.shapes
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
