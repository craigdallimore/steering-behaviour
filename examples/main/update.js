// @flow

import { initialState } from "./state.js";
import {
  type State,
  type SteeringBehaviour,
  type CharacterId,
  type Character,
} from "./state.js";
import { type Vector } from "../../lib/vector.js";
import {
  getAlignSteering,
  getArriveSteering,
  //getChaseRabbitSteering,
  getFaceSteering,
  getLookWhereYouAreGoingSteering,
  getMatchVelocitySteering,
  //getPredictiveFollowSteering,
  getPursueSteering,
  getSeekSteering,
  getSeparationSteering,
  getWanderSteering,
} from "../../src/steering.js";
import updateKinematic from "../../src/updateKinematic.js";

// TYPES ----------------------------------------------------------------------

type CharacterMap = Map<CharacterId, Character>;

const TICK = "TICK";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";
const RESET_BUTTON_CLICKED = "RESET_BUTTON_CLICKED";
const CANVAS_CLICKED = "CANVAS_CLICKED";
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

// HELPERS --------------------------------------------------------------------

const updateCharacter = (
  fn: (CharacterId, Character) => Character,
  map: CharacterMap
): CharacterMap => new Map([...map].map(([key, cha]) => [key, fn(key, cha)]));

const getCharacter = (
  id: ?CharacterId,
  characters: CharacterMap
): Character | null => {
  if (!id) {
    return null;
  }
  const char = characters.get(id);
  return char || null;
};

const applyBehaviour = (
  char: Character,
  time: number,
  characters: CharacterMap
): Character => {
  switch (char.behaviour) {
    case "ALIGN": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = getAlignSteering(char.kinematic, target.kinematic);
      if (!steering) {
        return char;
      }
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "ARRIVE": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = getArriveSteering(char.kinematic, target.kinematic);
      if (!steering) {
        return char;
      }
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    /*
    case "FOLLOW_PATH_CHASE_RABBIT": {
      const steering = getChaseRabbitSteering(char.kinematic, state.path);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "FOLLOW_PATH_PREDICT": {
      const steering = getPredictiveFollowSteering(
        char.kinematic,
        state.path
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    */
    case "SEPARATION": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = getSeparationSteering(char.kinematic, target.kinematic);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "FACE": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = getFaceSteering(char.kinematic, target.kinematic);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "LOOK_WHERE_YOU_ARE_GOING": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = getLookWhereYouAreGoingSteering(
        char.kinematic,
        target.kinematic
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "MATCH_VELOCITY": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }

      const steering = getMatchVelocitySteering(
        char.kinematic,
        target.kinematic
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "PURSUE": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = getPursueSteering(char.kinematic, target.kinematic);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }

    case "SEEK": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = getSeekSteering(char.kinematic, target.kinematic);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "WANDER": {
      const steering = getWanderSteering(char.kinematic);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }

    case "NONE":
    default: {
      return char;
    }
  }
};

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
      */

    case "BEHAVIOUR_CHANGED":
      return {
        ...state,
        characters: updateCharacter(
          (key, char) =>
            key === state.focussedCharacterId
              ? {
                  ...char,
                  behaviour: action.payload,
                }
              : char,
          state.characters
        ),
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

      state.characters = new Map(
        [...state.characters].map(([id, char]) => {
          const nextChar = applyBehaviour(char, time, state.characters);
          return [id, nextChar];
        })
      );
      return state;
    }

    default:
      return state;
  }
}
