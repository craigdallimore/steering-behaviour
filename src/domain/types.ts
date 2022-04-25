import {
  Align,
  Arrive,
  CollisionAvoidance,
  Evade,
  Face,
  Flee,
  FollowPathChaseRabbit,
  FollowPathPredict,
  LookWhereYouAreGoing,
  MatchVelocity,
  ObstacleAvoidance,
  Pursue,
  Seek,
  Separation,
  Wander,
} from "@steering/index";
import Character from "./character";

export type Behaviour =
  | Align
  | Arrive
  | CollisionAvoidance
  | Evade
  | Face
  | Flee
  | FollowPathChaseRabbit
  | FollowPathPredict
  | LookWhereYouAreGoing
  | MatchVelocity
  | ObstacleAvoidance
  | Pursue
  | Seek
  | Separation
  | Wander;

export type Debug = {
  text?: string;
  edges: Array<{ strokeStyle: string; edge: Edge }>;
  points: Array<{ fillStyle: string; position: Vector }>;
  vectors: Array<{ fillStyle: string; position: Vector }>;
  circles: Array<{
    position: Vector;
    radius: number;
    fillStyle: string;
  }>;
};
export type SteeringBehaviourName = Behaviour["name"];

export type Vector = [x: number, z: number];

export type CharacterId = string;
export { Character };

export type CharacterMap = Map<CharacterId, Character>;

export type PathMap = Map<PathId, Path>;
export type ShapeMap = Map<ShapeId, Shape>;

export type Kinematic = {
  maxAcceleration: number;
  maxAngularAcceleration: number;
  maxSpeed: number;
  position: Vector;
  orientation: number;
  velocity: Vector;
  rotation: number;
};

export type Path = {
  label: string;
  position: Vector;
  isClosed: boolean;
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

export type Collision = {
  position: Vector;
  normal: Vector;
};

export type State = {
  ui: {
    actionFeedbackCount: number;
    canvasDimensions: Vector;
    isDebugMode: boolean;
    isPaused: boolean;
    isSettingTarget: boolean;
    focussedCharacterId: null | CharacterId;
    focussedScenarioId: null | ScenarioId;
  };
  scenarioIds: Array<ScenarioId>;
  scenario: Scenario | null;
};

export type ScenarioId = string;

export type Scenario = {
  name: string;
  description: string;
  characters: Map<CharacterId, Character>;
  paths: Map<PathId, Path>;
  shapes: Map<ShapeId, Shape>;
};

export type ScenarioMap = Map<ScenarioId, Scenario>;

export type StateConfig = {
  scenarioId?: ScenarioId;
  debug?: boolean;
};

export type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector;
  angular: number;
};
