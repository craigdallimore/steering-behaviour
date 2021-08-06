// @flow

import { type Vector } from "../../lib/vector.js";

export type Steering = {
  // Negative x is Left
  // Negative z is Up
  linear: Vector,
  angular: number,
};

import { align } from "./align.js";
import { arrive } from "./arrive.js";
import { chaseRabbit } from "./chaseRabbit.js";
import { face } from "./face.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";
import { matchVelocity } from "./matchVelocity.js";
import { predictiveFollow } from "./predictiveFollow.js";
import { pursue } from "./pursue.js";
import { seek } from "./seek.js";
import { separation } from "./separation.js";
import { wander } from "./wander.js";

const emptySteering: Steering = { angular: 0, linear: [0, 0] };

export {
  align,
  arrive,
  chaseRabbit,
  emptySteering,
  face,
  lookWhereYouAreGoing,
  matchVelocity,
  predictiveFollow,
  pursue,
  seek,
  separation,
  wander,
};
