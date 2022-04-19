import { AbstractBehaviour } from "./abstractBehaviour";
import {
  add,
  cross,
  length,
  multiply,
  normalise,
  radiansToVector,
  subtract,
  vectorToRadians,
} from "@decoy9697/vector";
import type {
  Collision,
  Edge,
  Kinematic,
  Shape,
  Steering,
} from "@domain/types";

import Seek from "./seek";
import getCollision from "@lib/shape";

function getWhiskerRay(k: Kinematic, radians: number, magnitude: number): Edge {
  const bearing = vectorToRadians(k.velocity) - radians;
  return [
    k.position,
    add(k.position, multiply(radiansToVector(bearing), magnitude)),
  ];
}

export default class ObstacleAvoidance extends AbstractBehaviour {
  readonly name = "OBSTACLE_AVOIDANCE";
  seek: Seek;
  avoidDistance: number;
  lookaheadMain: number; // TODO remove?
  lookaheadSide: number;

  constructor(
    avoidDistance?: number,
    lookaheadMain?: number, // TODO remove?
    lookaheadSide?: number
  ) {
    super();
    // Holds the minimum distance to a wall (i.e., how far to avoid collision)
    // should be greater than the radius of the character
    this.avoidDistance = avoidDistance ?? 10;
    // Holds the distance to look ahead for a collision
    // (i.e., the length of the collision ray)
    this.lookaheadMain = lookaheadMain ?? 50; // TODO remove?
    this.lookaheadSide = lookaheadSide ?? 25; // TODO remove?

    this.seek = new Seek("");
  }

  calculate(kinematic: Kinematic, shapes: Array<Shape>): Steering {
    const rays = [
      getWhiskerRay(kinematic, -0.9, 10),
      getWhiskerRay(kinematic, -0.4, 20),
      getWhiskerRay(kinematic, -0.1, 30),
      getWhiskerRay(kinematic, 0.1, 30),
      getWhiskerRay(kinematic, 0.4, 20),
      getWhiskerRay(kinematic, 0.9, 10),
    ];

    // find the nearest collision to the kinematic
    const collision: Collision | null = rays.reduce(
      (acc: Collision | null, edge: Edge) => {
        const collision = getCollision(edge, shapes);
        if (!acc) {
          return collision;
        }
        if (!collision) {
          return acc;
        }

        const distanceFromCollision = length(
          subtract(kinematic.position, collision.position)
        );
        const distanceFromAcc = length(
          subtract(kinematic.position, acc.position)
        );

        return distanceFromCollision < distanceFromAcc ? collision : acc;
      },
      null
    );

    // Show the whiskers
    this.debug.edges = rays;

    // If have no collision, do nothing
    if (!collision) {
      this.debug.points = [];
      this.debug.circles = [];
      return {
        angular: 0,
        linear: [0, 0],
      };
    }

    // Show collision points
    this.debug.points = [collision.position];

    const relativeColl = subtract(kinematic.position, collision.position);
    // Find whether the collision is to the left or right of the kinematics direction of travel
    const isLeftOfBearing = cross(kinematic.position, relativeColl) > 0;

    const distanceFromCollision = length(
      subtract(kinematic.position, collision.position)
    );

    const collBearing = vectorToRadians(relativeColl);
    const charBearing = vectorToRadians(kinematic.velocity);

    const difference = Math.abs(charBearing - collBearing);

    const nextBearing = isLeftOfBearing
      ? charBearing - difference
      : charBearing + difference;

    const targetOffset = multiply(
      normalise(radiansToVector(nextBearing)),
      distanceFromCollision
    );

    const targetPosition = subtract(kinematic.position, targetOffset);

    this.debug.circles = [
      {
        position: targetPosition,
        radius: 2,
        fillStyle: "rgba(0, 255,0, 0.5)",
      },
    ];

    // 2. Delegate to seek
    return this.seek.calculate(kinematic, targetPosition);
  }
}
