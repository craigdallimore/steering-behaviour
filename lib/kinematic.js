// @flow

import type { Vector } from "./vector.js";

export type Kinematic = {
  position: Vector,
  orientation: number,
  velocity: Vector,
  rotation: number,
};
