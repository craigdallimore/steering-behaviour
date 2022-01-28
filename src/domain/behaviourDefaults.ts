import {
  AlignConfig,
  ArriveConfig,
  CollisionAvoidanceConfig,
  EvadeConfig,
  FleeConfig,
  FollowPathChaseRabbitConfig,
  FollowPathPredictConfig,
  LookWhereYouAreGoingConfig,
  MatchVelocityConfig,
  ObstacleAvoidanceConfig,
  PursueConfig,
  SeekConfig,
  SeparationConfig,
  WanderConfig,
} from "@domain/types.js";

export const alignConfig: AlignConfig = {
  name: "ALIGN",
  maxAngularAcceleration: 140,
  maxRotation: 120,
  decelerationTolerance: 2,
  alignTolerance: 0.01,
  timeToTarget: 0.1,
};

export const arriveConfig: ArriveConfig = {
  name: "ARRIVE",
  maxAcceleration: 25,
  timeToTarget: 3,
  maxSpeed: 55,
  targetRadius: 5,
  slowRadius: 60,
};

export const collisionAvoidanceConfig: CollisionAvoidanceConfig = {
  name: "COLLISION_AVOIDANCE",
  // Holds the maximum acceleration
  maxAcceleration: 5,
  // Holds the collision radius of a character (we assume all characters have the
  // same radius here)
  radius: 7.5,
};

export const followPathChaseRabbitConfig: FollowPathChaseRabbitConfig = {
  name: "FOLLOW_PATH_CHASE_RABBIT",
  // Holds the distance along the path to generate the target. Can be negative
  // if the character is to move along the reverse direction
  pathOffset: 30,
  seekConfig: {
    name: "SEEK",
    maxAcceleration: 25,
  },
};

export const followPathPredictConfig: FollowPathPredictConfig = {
  name: "FOLLOW_PATH_PREDICT",
  // Holds the distance along the path to generate the target. Can be negative
  // if the character is to move along the reverse direction
  pathOffset: 30,
  // Holds the time in the future to predict the character position
  predictTime: 0.1,
  seekConfig: {
    name: "SEEK",
    maxAcceleration: 25,
  },
};

export const separationConfig: SeparationConfig = {
  name: "SEPARATION",
  // The threshold to take action
  threshold: 250,
  // Holds the constant coefficient of decay for the inverse square law force
  decayCoefficient: 1500,
  // Holds the maximum acceleration of the character
  maxAcceleration: 25,
};

export const lookWhereYouAreGoingConfig: LookWhereYouAreGoingConfig = {
  name: "LOOK_WHERE_YOU_ARE_GOING",
  alignConfig: {
    name: "ALIGN",
    maxAngularAcceleration: 140,
    maxRotation: 120,
    decelerationTolerance: 2,
    alignTolerance: 0.01,
    timeToTarget: 0.1,
  },
};

export const matchVelocityConfig: MatchVelocityConfig = {
  name: "MATCH_VELOCITY",
  timeToTarget: 0.1,
  maxAcceleration: 25,
};

export const obstacleAvoidanceConfig: ObstacleAvoidanceConfig = {
  name: "OBSTACLE_AVOIDANCE",
  // Holds the minimum distance to a wall (i.e., how far to avoid collision)
  // should be greater than the radius of the character
  avoidDistance: 20,
  // Holds the distance to look ahead for a collision
  // (i.e., the length of the collision ray)
  lookaheadMain: 150,
  lookaheadSide: 75,

  seekConfig: {
    name: "SEEK",
    maxAcceleration: 15,
  },
};

export const pursueConfig: PursueConfig = {
  name: "PURSUE",
  maxPrediction: 1,
  seekConfig: {
    name: "SEEK",
    maxAcceleration: 25,
  },
};

export const evadeConfig: EvadeConfig = {
  name: "EVADE",
  maxPrediction: 1,
  fleeConfig: {
    name: "FLEE",
    maxAcceleration: 25,
  },
};

export const fleeConfig: FleeConfig = {
  name: "FLEE",
  maxAcceleration: 25,
};

export const seekConfig: SeekConfig = {
  name: "SEEK",
  maxAcceleration: 25,
};

export const wanderConfig: WanderConfig = {
  name: "WANDER",
  maxAcceleration: 25,
  wanderOffset: 50,
  wanderRadius: 20,
  faceConfig: {
    name: "FACE",
    alignConfig: {
      name: "ALIGN",
      maxAngularAcceleration: 140,
      maxRotation: 120,
      decelerationTolerance: 2,
      alignTolerance: 0.01,
      timeToTarget: 0.1,
    },
  },
};
