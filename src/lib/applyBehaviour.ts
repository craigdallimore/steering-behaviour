import updateKinematic from "@lib/updateKinematic.js";
import getCharacter from "@lib/getCharacter";
import {
  AlignConfig,
  ArriveConfig,
  Character,
  CharacterMap,
  CollisionAvoidanceConfig,
  EvadeConfig,
  FleeConfig,
  FollowPathChaseRabbitConfig,
  FollowPathPredictConfig,
  MatchVelocityConfig,
  PathMap,
  PursueConfig,
  SeekConfig,
  ShapeMap,
  WanderConfig,
} from "@domain/types.js";
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
const alignConfig: AlignConfig = {
  maxAngularAcceleration: 140,
  maxRotation: 120,
  decelerationTolerance: 2,
  alignTolerance: 0.01,
  timeToTarget: 0.1,
};

const arriveConfig: ArriveConfig = {
  maxAcceleration: 25,
  timeToTarget: 3,
  maxSpeed: 55,
  targetRadius: 5,
  slowRadius: 60,
};
const collisionAvoidanceConfig: CollisionAvoidanceConfig = {
  // Holds the maximum acceleration
  maxAcceleration: 5,
  // Holds the collision radius of a character (we assume all characters have the
  // same radius here)
  radius: 7.5,
};

const followPathChaseRabbitConfig: FollowPathChaseRabbitConfig = {
  maxAcceleration: 25,
  // Holds the distance along the path to generate the target. Can be negative
  // if the character is to move along the reverse direction
  pathOffset: 30,
};

const followPathPredictConfig: FollowPathPredictConfig = {
  // Holds the distance along the path to generate the target. Can be negative
  // if the character is to move along the reverse direction
  pathOffset: 30,
  // Holds the time in the future to predict the character position
  predictTime: 0.1,
  maxAcceleration: 25,
};

const separationConfig = {
  // The threshold to take action
  threshold: 250,
  // Holds the constant coefficient of decay for the inverse square law force
  decayCoefficient: 1500,
  // Holds the maximum acceleration of the character
  maxAcceleration: 25,
};

const matchVelocityConfig: MatchVelocityConfig = {
  timeToTarget: 0.1,
  maxAcceleration: 25,
};

const obstacleAvoidanceConfig = {
  // Holds the minimum distance to a wall (i.e., how far to avoid collision)
  // should be greater than the radius of the character
  avoidDistance: 20,
  // Holds the distance to look ahead for a collision
  // (i.e., the length of the collision ray)
  lookaheadMain: 150,
  lookaheadSide: 75,
  maxAcceleration: 15,
};

const pursueConfig: PursueConfig = {
  maxPrediction: 1,
  maxAcceleration: 25,
};

const evadeConfig: EvadeConfig = {
  maxPrediction: 1,
  maxAcceleration: 25,
};

const fleeConfig: FleeConfig = {
  maxAcceleration: 25,
};

const seekConfig: SeekConfig = {
  maxAcceleration: 25,
};
const wanderConfig: WanderConfig = {
  maxAcceleration: 25,
  wanderOffset: 50,
  wanderRadius: 20,
};

export default function applyBehaviour(
  char: Character,
  time: number,
  characters: CharacterMap,
  paths: PathMap,
  shapes: ShapeMap
): Character {
  switch (char.behaviour) {
    case "ALIGN": {
      const target = getCharacter(char.target, characters);
      if (!target) {
        return char;
      }
      const steering = align(
        char.kinematic,
        target.kinematic.orientation,
        alignConfig
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
      const steering = arrive(char.kinematic, target.kinematic, arriveConfig);
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
        collisionAvoidanceConfig,
        alignConfig
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
      const steering = chaseRabbit(
        char.kinematic,
        path,
        followPathChaseRabbitConfig,
        alignConfig
      );
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
      const steering = predictiveFollow(
        char.kinematic,
        path,
        followPathPredictConfig,
        alignConfig
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "SEPARATION": {
      const others = [...characters.values()]
        .filter((ent) => ent !== char)
        .map((char) => char.kinematic);
      const steering = separation(
        char.kinematic,
        others,
        separationConfig,
        alignConfig
      );
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
        alignConfig
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "LOOK_WHERE_YOU_ARE_GOING": {
      const steering = lookWhereYouAreGoing(char.kinematic, alignConfig);
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
        matchVelocityConfig
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
      const steering = obstacleAvoidance(
        char.kinematic,
        shape,
        obstacleAvoidanceConfig,
        alignConfig
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
      const steering = pursue(char.kinematic, target.kinematic, pursueConfig);
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
      const steering = evade(char.kinematic, target.kinematic, evadeConfig);
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
      const steering = flee(char.kinematic, target.kinematic, fleeConfig);
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
        seekConfig
      );
      return {
        ...char,
        kinematic: updateKinematic(steering, char.kinematic, time),
      };
    }
    case "WANDER": {
      const steering = wander(char.kinematic, wanderConfig, alignConfig);
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
