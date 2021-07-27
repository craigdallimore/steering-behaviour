// @flow

import { initialState } from "./state.js";
import { type State, type SteeringBehaviour } from "./state.js";
import { type Vector } from "../../lib/vector.js";
import {
  emptySteering,
  getAlignSteering,
  getArriveSteering,
  getChaseRabbitSteering,
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
const MOUSE_CONTROL_CHANGED = "MOUSE_CONTROL_CHANGED";
const CANVAS_CLICKED = "CANVAS_CLICKED";
const CANVAS_MOUSE_MOVE = "CANVAS_MOUSE_MOVE";
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
      type: typeof MOUSE_CONTROL_CHANGED,
      payload: "TARGET-CLICK" | "TARGET-MOVE" | "CHARACTER-CLICK",
    |}
  | {|
      type: typeof CANVAS_CLICKED,
      payload: Vector,
    |}
  | {|
      type: typeof CANVAS_MOUSE_MOVE,
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
    case "MOUSE_CONTROL_CHANGED":
      return {
        ...state,
        mouseEffect: action.payload,
      };
    case "CANVAS_CLICKED":
      return {
        ...state,
        target:
          state.mouseEffect === "TARGET-CLICK"
            ? { ...state.target, position: action.payload }
            : state.target,
        character:
          state.mouseEffect === "CHARACTER-CLICK"
            ? { ...state.character, position: action.payload }
            : state.character,
      };
    case "CANVAS_MOUSE_MOVE":
      return {
        ...state,
        target:
          state.mouseEffect === "TARGET-MOVE"
            ? { ...state.target, position: action.payload }
            : state.target,
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
        case "CHASE_RABBIT": {
          const steering = getChaseRabbitSteering(state.character, state.path);
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
          const steering = getWanderSteering(state.character);
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
