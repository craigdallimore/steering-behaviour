// @flow

import { initialState } from "./state.js";
import {
  type State,
  type SteeringBehaviour,
  type CharacterId,
  type Character,
} from "./state.js";
import { distance, type Vector } from "../../lib/vector.js";
import {
  emptySteering,
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
const VELX_CHANGED = "VELX_CHANGED";
const VELZ_CHANGED = "VELZ_CHANGED";

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
      type: typeof VELX_CHANGED,
      payload: number,
    |}
  | {|
      type: typeof VELZ_CHANGED,
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

const updateFocussedCharacter = (
  state: State,
  fn: (Character) => Character
): State => {
  if (!state.focussedCharacterId) {
    return state;
  }
  const id = state.focussedCharacterId;
  const char = state.characters.get(state.focussedCharacterId);
  if (!char) {
    return state;
  }
  state.characters.set(id, fn(char));
  return state;
};

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

    case "NONE": {
      return {
        ...char,
        kinematic: updateKinematic(emptySteering, char.kinematic, time),
      };
    }
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
    case "CANVAS_CLICKED": {
      const clickPosition: Vector = action.payload;

      const focussedCharacterId = [...state.characters].reduce(
        (acc, [id, char]) => {
          const distanceToClick = distance(
            clickPosition,
            char.kinematic.position
          );
          return distanceToClick < 15 ? id : acc;
        },
        null
      );

      return {
        ...state,
        focussedCharacterId,
      };
    }

    case "BEHAVIOUR_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          behaviour: action.payload,
        };
      });

    case "ORIENTATION_CHANGED":
      return updateFocussedCharacter(state, (char) => {
        return {
          ...char,
          kinematic: {
            ...char.kinematic,
            orientation: Math.PI * action.payload,
          },
        };
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
