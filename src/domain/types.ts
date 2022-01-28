export type Vector = [x: number, z: number];

export type CharacterId = string;

export type Character = {
  kinematic: Kinematic;
  behaviour: BehaviourConfig;
  target: CharacterId | null;
  path: PathId | null;
};

export type CharacterMap = Map<CharacterId, Character>;

export type PathMap = Map<PathId, Path>;
export type ShapeMap = Map<ShapeId, Shape>;

export type Kinematic = {
  maxSpeed: number;
  position: Vector;
  orientation: number;
  velocity: Vector;
  rotation: number;
};

export type Path = {
  position: Vector;
  points: Array<[number, number]>;
};

export type PathId = string;

export type Edge = [Vector, Vector];

export type Shape = {
  path: Path;
};

export type ShapeId = string;

export type Intersection = {
  edge: Edge;
  point: Vector;
};

export type SteeringBehaviourName =
  | "NONE"
  | "ALIGN"
  | "ARRIVE"
  | "COLLISION_AVOIDANCE"
  | "EVADE"
  | "FACE"
  | "FLEE"
  | "FOLLOW_PATH_CHASE_RABBIT"
  | "FOLLOW_PATH_PREDICT"
  | "LOOK_WHERE_YOU_ARE_GOING"
  | "MATCH_VELOCITY"
  | "OBSTACLE_AVOIDANCE"
  | "PURSUE"
  | "SEEK"
  | "SEPARATION"
  | "WANDER";

export type BehaviourConfig =
  | NoneConfig
  | AlignConfig
  | ArriveConfig
  | CollisionAvoidanceConfig
  | EvadeConfig
  | FaceConfig
  | FleeConfig
  | FollowPathChaseRabbitConfig
  | FollowPathPredictConfig
  | LookWhereYouAreGoingConfig
  | MatchVelocityConfig
  | ObstacleAvoidanceConfig
  | PursueConfig
  | SeekConfig
  | SeparationConfig
  | WanderConfig;

export type NoneConfig = {
  name: "NONE";
};
export type AlignConfig = {
  name: "ALIGN";
  maxAngularAcceleration: number;
  maxRotation: number;
  decelerationTolerance: number;
  alignTolerance: number;
  timeToTarget: number;
};
export type ArriveConfig = {
  name: "ARRIVE";
  maxAcceleration: number;
  timeToTarget: number;
  maxSpeed: number;
  targetRadius: number;
  slowRadius: number;
};

export type CollisionAvoidanceConfig = {
  name: "COLLISION_AVOIDANCE";
  maxAcceleration: number;
  radius: number;
};

export type EvadeConfig = {
  name: "EVADE";
  maxPrediction: number;
  fleeConfig: FleeConfig;
};

export type FaceConfig = {
  name: "FACE";
  alignConfig: AlignConfig;
};

export type FleeConfig = {
  name: "FLEE";
  maxAcceleration: number;
};

export type FollowPathChaseRabbitConfig = {
  name: "FOLLOW_PATH_CHASE_RABBIT";
  pathOffset: number;
  seekConfig: SeekConfig;
};

export type FollowPathPredictConfig = {
  name: "FOLLOW_PATH_PREDICT";
  pathOffset: number;
  predictTime: number;
  seekConfig: SeekConfig;
};

export type LookWhereYouAreGoingConfig = {
  name: "LOOK_WHERE_YOU_ARE_GOING";
  alignConfig: AlignConfig;
};

export type MatchVelocityConfig = {
  name: "MATCH_VELOCITY";
  timeToTarget: number;
  maxAcceleration: number;
};

export type ObstacleAvoidanceConfig = {
  name: "OBSTACLE_AVOIDANCE";
  avoidDistance: number;
  lookaheadMain: number;
  lookaheadSide: number;
  seekConfig: SeekConfig;
};

export type PursueConfig = {
  name: "PURSUE";
  maxPrediction: number;
  seekConfig: SeekConfig;
};

export type SeekConfig = {
  name: "SEEK";
  maxAcceleration: number;
};

export type SeparationConfig = {
  name: "SEPARATION";
  threshold: number;
  decayCoefficient: number;
  maxAcceleration: number;
};

export type WanderConfig = {
  name: "WANDER";
  wanderOffset: number;
  wanderRadius: number;
  maxAcceleration: number;
  faceConfig: FaceConfig;
};

export type State = {
  isPaused: boolean;
  isSettingTarget: boolean;
  focussedCharacterId: null | CharacterId;
  characters: Map<CharacterId, Character>;
  paths: Map<PathId, Path>;
  shapes: Map<ShapeId, Shape>;
};

export type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector;
  angular: number;
};
