import updateKinematic from "@lib/updateKinematic";
import getCharacter from "@lib/getCharacter";
import { Behaviour, Character, Scenario, Steering } from "@domain/types";
import { multiply } from "./vector";

function getSteering(
  char: Character,
  scenario: Scenario,
  behaviour: Behaviour
): Steering | null {
  switch (behaviour.name) {
    case "ALIGN": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }
      return behaviour.calculate(char.kinematic, target.kinematic.orientation);
    }
    case "ARRIVE": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }
      return behaviour.calculate(char.kinematic, target.kinematic.position);
    }
    case "COLLISION_AVOIDANCE": {
      const others = [...scenario.characters.values()]
        .filter((ent) => ent !== char)
        .map((char) => char.kinematic);
      return behaviour.calculate(char.kinematic, others);
    }
    case "EVADE": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }
      return behaviour.calculate(char.kinematic, target.kinematic);
    }
    case "FACE": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }
      return behaviour.calculate(char.kinematic, target.kinematic.position);
    }
    case "FLEE": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }
      return behaviour.calculate(char.kinematic, target.kinematic.position);
    }
    case "FOLLOW_PATH_CHASE_RABBIT": {
      const path = scenario.paths.get(behaviour.pathId);
      if (!path) {
        return null;
      }
      return behaviour.calculate(char.kinematic, path);
    }
    case "FOLLOW_PATH_PREDICT": {
      const path = scenario.paths.get(behaviour.pathId);
      if (!path) {
        return null;
      }
      return behaviour.calculate(char.kinematic, path);
    }
    case "LOOK_WHERE_YOU_ARE_GOING": {
      return behaviour.calculate(char.kinematic);
    }
    case "MATCH_VELOCITY": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }

      return behaviour.calculate(char.kinematic, target.kinematic);
    }
    case "OBSTACLE_AVOIDANCE": {
      return behaviour.calculate(char.kinematic, [...scenario.shapes.values()]);
    }
    case "PURSUE": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }
      return behaviour.calculate(char.kinematic, target.kinematic);
    }
    case "SEEK": {
      const target = getCharacter(behaviour.targetId, scenario.characters);
      if (!target) {
        return null;
      }
      return behaviour.calculate(char.kinematic, target.kinematic.position);
    }
    case "SEPARATION": {
      const others = [...scenario.characters.values()]
        .filter((ent) => ent !== char)
        .map((char) => char.kinematic);
      return behaviour.calculate(char.kinematic, others);
    }
    case "WANDER": {
      return behaviour.calculate(char.kinematic);
    }
    default: {
      return null;
    }
  }
}

function blendSteerings(steerings: Array<[Steering, number]>): Steering {
  return steerings.reduce(
    (acc: Steering, [steering, weight]): Steering => {
      if (weight === 0) {
        return acc;
      }

      const scaledLinear = multiply(steering.linear, weight);
      const scaledAngular =
        steering.angular === 0 ? 0 : steering.angular * weight;

      const angular = acc.angular + scaledAngular;
      const linear =
        acc.linear[0] === 0 && acc.linear[1] === 0 ? scaledLinear : acc.linear;

      return {
        linear,
        angular,
      };
    },
    {
      linear: [0, 0],
      angular: 0,
    }
  );
}

export default function applyBehaviours(
  char: Character,
  time: number,
  scenario: Scenario
): Character {
  const steerings = char.behaviours.reduce(
    (
      acc: Array<[Steering, number]>,
      behaviour: Behaviour
    ): Array<[Steering, number]> => {
      const steering = getSteering(char, scenario, behaviour);
      return steering ? [...acc, [steering, behaviour.weight]] : acc;
    },
    []
  );

  const steering = blendSteerings(steerings);

  char.kinematic = updateKinematic(steering, char.kinematic, time);
  return char;
}
