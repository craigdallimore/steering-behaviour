// @flow

import { initialState } from "./state.js";
import { type State, type SteeringBehaviour } from "./state.js";
import { type Vector } from "../../lib/vector.js";
import {
  emptySteering,
  getAlignSteering,
  getArriveSteering,
  getFaceSteering,
  getLookWhereYouAreGoingSteering,
  getMatchVelocitySteering,
  getPursueSteering,
  getSeekSteering,
  getWanderSteering,
} from "../../src/steering.js";
import updateKinematic from "../../src/updateKinematic.js";

const TICK = "TICK";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";
const RESET_BUTTON_CLICKED = "RESET_BUTTON_CLICKED";
const POS_MOUSE_CHANGED = "POS_MOUSE_CHANGED";
const CANVAS_CLICKED = "CANVAS_CLICKED";
const CHARACTER_BEHAVIOUR_CHANGED = "CHARACTER_BEHAVIOUR_CHANGED";
const CHARACTER_ORIENTATION_CHANGED = "CHARACTER_ORIENTATION_CHANGED";
const CHARACTER_POSX_CHANGED = "CHARACTER_POSX_CHANGED";
const CHARACTER_POSZ_CHANGED = "CHARACTER_POSZ_CHANGED";
const TARGET_ORIENTATION_CHANGED = "TARGET_ORIENTATION_CHANGED";
const TARGET_POSX_CHANGED = "TARGET_POSX_CHANGED";
const TARGET_POSZ_CHANGED = "TARGET_POSZ_CHANGED";

export type Action =
  | {|
      type: typeof TICK,
      payload: number,
    |}
  | {|
      type: typeof CHARACTER_BEHAVIOUR_CHANGED,
      payload: SteeringBehaviour,
    |}
  | {|
      type: typeof CHARACTER_ORIENTATION_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof CHARACTER_POSX_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof CHARACTER_POSZ_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof TARGET_ORIENTATION_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof TARGET_POSX_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof TARGET_POSZ_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof POS_MOUSE_CHANGED,
      payload: "TARGET" | "CHARACTER",
    |}
  | {|
      type: typeof CANVAS_CLICKED,
      payload: Vector,
    |}
  | {|
      type: typeof PLAY_BUTTON_CLICKED,
    |}
  | {|
      type: typeof RESET_BUTTON_CLICKED,
    |};

export function update(state: State, action: Action): State {
  switch (action.type) {
    case "RESET_BUTTON_CLICKED":
      return {
        isPaused: true,
        ...initialState,
      };
    case "PLAY_BUTTON_CLICKED":
      return {
        ...state,
        isPaused: !state.isPaused,
      };
    case "POS_MOUSE_CHANGED":
      return {
        ...state,
        selectedItem: action.payload,
      };
    case "CANVAS_CLICKED":
      return {
        ...state,
        target:
          state.selectedItem === "TARGET"
            ? { ...state.target, position: action.payload }
            : state.target,
        character:
          state.selectedItem === "CHARACTER"
            ? { ...state.character, position: action.payload }
            : state.character,
      };

    case "CHARACTER_BEHAVIOUR_CHANGED":
      return {
        ...state,
        selectedBehaviour: action.payload,
      };
    case "CHARACTER_ORIENTATION_CHANGED":
      return {
        ...state,
        character: {
          ...state.character,
          orientation: Math.PI * action.payload,
        },
      };
    case "CHARACTER_POSX_CHANGED":
      return {
        ...state,
        character: {
          ...state.character,
          position: [action.payload, state.character.position[1]],
        },
      };
    case "CHARACTER_POSZ_CHANGED":
      return {
        ...state,
        character: {
          ...state.character,
          position: [state.character.position[0], action.payload],
        },
      };

    case "TARGET_ORIENTATION_CHANGED":
      return {
        ...state,
        target: {
          ...state.target,
          orientation: Math.PI * action.payload,
        },
      };
    case "TARGET_POSX_CHANGED":
      return {
        ...state,
        target: {
          ...state.target,
          position: [action.payload, state.target.position[1]],
        },
      };
    case "TARGET_POSZ_CHANGED":
      return {
        ...state,
        target: {
          ...state.target,
          position: [state.target.position[0], action.payload],
        },
      };

    case "TICK": {
      if (state.isPaused) {
        return state;
      }
      const time = action.payload;

      switch (state.selectedBehaviour) {
        case "ALIGN": {
          const steering = getAlignSteering(state.character, state.target);
          if (!steering) {
            return state;
          }
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: updateKinematic(steering, state.character, time),
          };
        }
        case "ARRIVE": {
          const steering = getArriveSteering(state.character, state.target);
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: steering
              ? updateKinematic(steering, state.character, time)
              : state.character,
          };
        }
        case "FACE": {
          const steering = getFaceSteering(state.character, state.target);
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: updateKinematic(steering, state.character, time),
          };
        }
        case "LOOK_WHERE_YOU_ARE_GOING": {
          const steering = getLookWhereYouAreGoingSteering(
            state.character,
            state.target
          );
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: updateKinematic(steering, state.character, time),
          };
        }
        case "MATCH_VELOCITY": {
          const steering = getMatchVelocitySteering(
            state.character,
            state.target
          );
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: updateKinematic(steering, state.character, time),
          };
        }
        case "PURSUE": {
          const steering = getPursueSteering(state.character, state.target);
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: updateKinematic(steering, state.character, time),
          };
        }
        case "SEEK": {
          const steering = getSeekSteering(state.character, state.target);
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: updateKinematic(steering, state.character, time),
          };
        }
        case "WANDER": {
          const steering = getWanderSteering(state.character, state.target);
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: updateKinematic(steering, state.character, time),
          };
        }
        default:
          return state;
      }
    }

    default:
      return state;
  }
}
