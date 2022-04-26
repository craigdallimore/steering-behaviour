import { Behaviour, Kinematic } from "./types";
import { immerable } from "immer";

export default class Character {
  [immerable] = true;
  constructor(
    kinematic?: Kinematic,
    behaviours?: Array<Behaviour>,
    // Suggested: a single emoji
    label?: string
  ) {
    this.kinematic = kinematic || {
      maxAcceleration: 25,
      maxAngularAcceleration: 140,
      maxSpeed: 45,
      position: [0, 0],
      velocity: [0, 0],
      orientation: 0,
      rotation: 0,
    };
    this.behaviours = behaviours || [];
    this.label = label;
  }
  label?: string;
  kinematic: Kinematic;
  behaviours: Array<Behaviour>;
}
