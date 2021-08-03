// @flow

import { initialState } from "./state.js";
import {
  type State,
  type SteeringBehaviour,
  type CharacterId,
  type Character,
} from "./state.js";
import { type Vector } from "../../lib/vector.js";
//import { type Kinematic } from "../../lib/kinematic.js";
import {
  emptySteering,
  getAlignSteering,
  getArriveSteering,
  getChaseRabbitSteering,
  getFaceSteering,
  getLookWhereYouAreGoingSteering,
  getMatchVelocitySteering,
  getPredictiveFollowSteering,
  getSeparationSteering,
  getPursueSteering,
  getSeekSteering,
  getWanderSteering,
} from "../../src/steering.js";
import updateKinematic from "../../src/updateKinematic.js";

const updateCharacter = (
  fn: (CharacterId, Character) => Character,
  map: Map<CharacterId, Character>
): Map<CharacterId, Character> =>
  new Map([...map].map(([key, cha]) => [key, fn(key, cha)]));

/*
const getFocussedCharacter = (state: State): Character | null => {
  if (!state.focussedCharacterId) {
    return null;
  }
  const focussedCharacter = state.characters.get(state.focussedCharacterId);
  return focussedCharacter || null;
};
*/

const TICK = "TICK";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";
const RESET_BUTTON_CLICKED = "RESET_BUTTON_CLICKED";
//const MOUSE_CONTROL_CHANGED = "MOUSE_CONTROL_CHANGED";
const CANVAS_CLICKED = "CANVAS_CLICKED";
const CANVAS_MOUSE_MOVE = "CANVAS_MOUSE_MOVE";
const BEHAVIOUR_CHANGED = "BEHAVIOUR_CHANGED";
const ORIENTATION_CHANGED = "ORIENTATION_CHANGED";
const POSX_CHANGED = "POSX_CHANGED";
const POSZ_CHANGED = "POSZ_CHANGED";

export type Action =
  | {|
      type: typeof TICK,
      payload: number,
    |}
  | {|
      type: typeof BEHAVIOUR_CHANGED,
      payload: SteeringBehaviour,
    |}
  | {|
      type: typeof ORIENTATION_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof POSX_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof POSZ_CHANGED,
      payload: number,
    |}
  /*
  | {|
      type: typeof MOUSE_CONTROL_CHANGED,
      payload: "TARGET-CLICK" | "TARGET-MOVE" | "CHARACTER-CLICK",
    |}
*/
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
    /*
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
      */

    case "BEHAVIOUR_CHANGED":
      return {
        ...state,
        selectedBehaviour: action.payload,
      };

    case "ORIENTATION_CHANGED":
      return {
        ...state,
        characters: updateCharacter(
          (key, char) =>
            key === state.focussedCharacterId
              ? {
                  ...char,
                  orientation: Math.PI * action.payload,
                }
              : char,
          state.characters
        ),
      };
    case "POSX_CHANGED":
      return {
        ...state,
        characters: updateCharacter(
          (key, char) =>
            key === state.focussedCharacterId
              ? {
                  ...char,
                  position: [action.payload, char.kinematic.position[1]],
                }
              : char,
          state.characters
        ),
      };
    case "POSZ_CHANGED":
      return {
        ...state,
        characters: updateCharacter(
          (key, char) =>
            key === state.focussedCharacterId
              ? {
                  ...char,
                  position: [char.kinematic.position[0], action.payload],
                }
              : char,
          state.characters
        ),
      };

    case "TICK": {
      if (state.isPaused) {
        return state;
      }
      const time = action.payload;

      switch (state.selectedBehaviour) {
        /*
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
        */
        /*
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
        case "FOLLOW_PATH_CHASE_RABBIT": {
          const steering = getChaseRabbitSteering(state.character, state.path);
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: steering
              ? updateKinematic(steering, state.character, time)
              : state.character,
          };
        }
        case "FOLLOW_PATH_PREDICT": {
          const steering = getPredictiveFollowSteering(
            state.character,
            state.path
          );
          return {
            ...state,
            target: updateKinematic(emptySteering, state.target, time),
            character: steering
              ? updateKinematic(steering, state.character, time)
              : state.character,
          };
        }
        case "SEPARATION": {
          const steering = getSeparationSteering(state.character, state.target);
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
                     */
        case "WANDER": {
          return {
            ...state,
            characters: updateCharacter((key, char: Character) => {
              if (key === state.focussedCharacterId) {
                const steering = getWanderSteering(char.kinematic);
                return {
                  ...char,
                  kinematic: updateKinematic(steering, char.kinematic, time),
                };
              }
              return char;
            }, state.characters),
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
