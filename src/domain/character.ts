import * as steering from "@steering/index";
import { Behaviour, Kinematic } from "./types";

export default class Character {
  constructor(kinematic?: Kinematic, behaviour?: Behaviour) {
    this.kinematic = kinematic || {
      maxSpeed: 45,
      position: [0, 0],
      velocity: [0, 0],
      orientation: 0,
      rotation: 0,
    };
    this.behaviour = behaviour || new steering.None();
  }
  kinematic: Kinematic;
  behaviour: Behaviour;
}
