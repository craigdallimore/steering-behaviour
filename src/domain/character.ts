import { Behaviour, Kinematic } from "./types";
import { immerable } from "immer";

export default class Character {
  [immerable] = true;
  constructor(kinematic?: Kinematic, behaviours?: Array<Behaviour>) {
    this.kinematic = kinematic || {
      maxSpeed: 45,
      position: [0, 0],
      velocity: [0, 0],
      orientation: 0,
      rotation: 0,
    };
    this.behaviours = behaviours || [];
  }
  kinematic: Kinematic;
  behaviours: Array<Behaviour>;
}
