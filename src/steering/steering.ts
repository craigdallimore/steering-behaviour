import { type Vector } from "../lib/vector.js";

const linear: Vector = [0, 0];

export type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector;
  angular: number;
};

export const emptySteering: Steering = { angular: 0, linear };
