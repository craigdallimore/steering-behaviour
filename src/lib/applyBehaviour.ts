import updateKinematic from "@lib/updateKinematic";
import getCharacter from "@lib/getCharacter";
import { Character, CharacterMap, PathMap, ShapeMap } from "@domain/types";
export default function applyBehaviour(
  char: Character,
  time: number,
  characters: CharacterMap,
  paths: PathMap,
  shapes: ShapeMap
): Character {
  switch (char.behaviour.name) {
    case "ALIGN": {
      const target = getCharacter(char.behaviour.targetId, characters);
      if (!target) {
        return char;
      }
      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic.orientation
      );
      if (!steering) {
        return char;
      }
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "ARRIVE": {
      const target = getCharacter(char.behaviour.targetId, characters);
      if (!target) {
        return char;
      }
      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic.position
      );
      if (!steering) {
        return char;
      }
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "COLLISION_AVOIDANCE": {
      const others = [...characters.values()]
        .filter((ent) => ent !== char)
        .map((char) => char.kinematic);
      const steering = char.behaviour.calculate(char.kinematic, others);
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "FOLLOW_PATH_CHASE_RABBIT": {
      const path = paths.get(char.behaviour.pathId);
      if (!path) {
        return char;
      }
      const steering = char.behaviour.calculate(char.kinematic, path);
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "FOLLOW_PATH_PREDICT": {
      const path = paths.get(char.behaviour.pathId);
      if (!path) {
        return char;
      }
      const steering = char.behaviour.calculate(char.kinematic, path);
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "SEPARATION": {
      const others = [...characters.values()]
        .filter((ent) => ent !== char)
        .map((char) => char.kinematic);
      const steering = char.behaviour.calculate(char.kinematic, others);
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "FACE": {
      const target = getCharacter(char.behaviour.targetId, characters);
      if (!target) {
        return char;
      }
      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic.position
      );
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "LOOK_WHERE_YOU_ARE_GOING": {
      const steering = char.behaviour.calculate(char.kinematic);
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "MATCH_VELOCITY": {
      const target = getCharacter(char.behaviour.targetId, characters);
      if (!target) {
        return char;
      }

      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic
      );
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "OBSTACLE_AVOIDANCE": {
      const shape = shapes.get(char.behaviour.shapeId);
      if (!shape) {
        return char;
      }
      const steering = char.behaviour.calculate(char.kinematic, shape);
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "PURSUE": {
      const target = getCharacter(char.behaviour.targetId, characters);
      if (!target) {
        return char;
      }
      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic
      );
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "EVADE": {
      const target = getCharacter(char.behaviour.flee.targetId, characters);
      if (!target) {
        return char;
      }
      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic
      );
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "FLEE": {
      const target = getCharacter(char.behaviour.targetId, characters);
      if (!target) {
        return char;
      }
      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic.position
      );
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "SEEK": {
      const target = getCharacter(char.behaviour.targetId, characters);
      if (!target) {
        return char;
      }
      const steering = char.behaviour.calculate(
        char.kinematic,
        target.kinematic.position
      );
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "WANDER": {
      const steering = char.behaviour.calculate(char.kinematic);
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    case "NONE": {
      const steering = char.behaviour.calculate();
      char.kinematic = updateKinematic(steering, char.kinematic, time);
      return char;
    }
    default: {
      return char;
    }
  }
}
