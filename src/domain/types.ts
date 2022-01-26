export type Vector = [x: number, z: number];

export type Kinematic = {
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

export type CharacterId = string;

export type Character = {
  kinematic: Kinematic;
  behaviour: SteeringBehaviour;
  target: CharacterId | null;
  path: PathId | null;
};

export type SteeringBehaviour =
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
