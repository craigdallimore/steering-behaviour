import { Align, Seek, None } from "@steering/behaviours";

export type Vector = [x: number, z: number];

export type CharacterId = string;

export type Character = {
  kinematic: Kinematic;
  behaviour: Behaviour;
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

export type Behaviour = Align | Seek | None;

export type SteeringBehaviourName = Behaviour["name"];

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
