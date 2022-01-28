import updateKinematic from "@lib/updateKinematic.js";
import getCharacter from "@lib/getCharacter";
import { Character, CharacterMap, PathMap, ShapeMap } from "@domain/types.js";
import {
  align,
  arrive,
  chaseRabbit,
  collisionAvoidance,
  emptySteering,
  evade,
  face,
  flee,
  lookWhereYouAreGoing,
  matchVelocity,
  obstacleAvoidance,
  predictiveFollow,
  pursue,
  seek,
  separation,
  wander,
} from "../steering/index.js";
export default function applyBehaviour(
  char: Character,
  time: number,
  characters: CharacterMap,
  paths: PathMap,
  shapes: ShapeMap
): Character {
  switch (char.behaviour.name) {
    case "ALIGN": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = align(
        char.kinematic,
        target.kinematic.orientation,
        char.behaviour
      );
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
      const steering = arrive(char.kinematic, target.kinematic, char.behaviour);
      if (!steering) {
        return char;
      }
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "COLLISION_AVOIDANCE": {
      const others = [...characters.values()]
        .filter((ent) => ent !== char)
        .map((char) => char.kinematic);
      const steering = collisionAvoidance(
        char.kinematic,
        others,
        char.behaviour
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "FOLLOW_PATH_CHASE_RABBIT": {
      const path = char.path ? paths.get(char.path) : null;
      if (!path) {
        return char;
      }
      const steering = chaseRabbit(char.kinematic, path, char.behaviour);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "FOLLOW_PATH_PREDICT": {
      const path = char.path ? paths.get(char.path) : null;
      if (!path) {
        return char;
      }
      const steering = predictiveFollow(char.kinematic, path, char.behaviour);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "SEPARATION": {
      const others = [...characters.values()]
        .filter((ent) => ent !== char)
        .map((char) => char.kinematic);
      const steering = separation(char.kinematic, others, char.behaviour);
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
      const steering = face(
        char.kinematic,
        target.kinematic.position,
        char.behaviour
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "LOOK_WHERE_YOU_ARE_GOING": {
      const steering = lookWhereYouAreGoing(char.kinematic, char.behaviour);
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

      const steering = matchVelocity(
        char.kinematic,
        target.kinematic,
        char.behaviour
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "OBSTACLE_AVOIDANCE": {
      const shape = shapes.get("s1"); // TODO should not be a single hardcoded shape id
      if (!shape) {
        return char;
      }
      const steering = obstacleAvoidance(char.kinematic, shape, char.behaviour);
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
      const steering = pursue(char.kinematic, target.kinematic, char.behaviour);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "EVADE": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = evade(char.kinematic, target.kinematic, char.behaviour);
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "FLEE": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = flee(char.kinematic, target.kinematic, char.behaviour);
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
      const steering = seek(
        char.kinematic,
        target.kinematic.position,
        char.behaviour
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "WANDER": {
      const steering = wander(char.kinematic, char.behaviour);
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
}
