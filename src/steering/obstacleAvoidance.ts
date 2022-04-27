import { AbstractBehaviour } from "./abstractBehaviour";
import {
  add,
  length,
  multiply,
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
import mapToRange from "@lib/mapToRange";

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

  rayIndex: number;
  collisionIndex: number;
  incrementing: boolean;
  collisions: Array<Collision | null>;

  constructor(avoidDistance?: number) {
    super();
    // Holds the minimum distance to a wall (i.e., how far to avoid collision)
    // should be greater than the radius of the character
    this.avoidDistance = avoidDistance ?? 10;
    // Holds the distance to look ahead for a collision
    // (i.e., the length of the collision ray)

    this.seek = new Seek("");

    this.rayIndex = 0;
    this.collisionIndex = -1;
    this.incrementing = true;
    this.collisions = [null, null, null, null, null, null];
  }

  // This selects a ray, such that we sweep back and forth between selected rays
  // on each tick.
  updateRayIndex() {
    if (this.incrementing) {
      this.rayIndex++;
      if (this.rayIndex === 5) {
        this.incrementing = false;
      }
      return;
    }
    if (!this.incrementing) {
      this.rayIndex--;
      if (this.rayIndex === 0) {
        this.incrementing = true;
      }
    }
  }

  calculate(kinematic: Kinematic, shapes: Array<Shape>): Steering {
    const speed = length(kinematic.velocity);

    const rays = [
      getWhiskerRay(kinematic, -0.9, 0.3 * speed),
      getWhiskerRay(kinematic, -0.3, 1 * speed),
      getWhiskerRay(kinematic, -0.1, 2.1 * speed),
      getWhiskerRay(kinematic, 0.1, 2.1 * speed),
      getWhiskerRay(kinematic, 0.3, 1 * speed),
      getWhiskerRay(kinematic, 0.9, 0.3 * speed),
    ];

    // We have a set of "rays", like whiskers that extend from the character.
    // We sweep across the rays, checking one ray on each tick for a collision.
    // For each sweep we select the ray with the closest collision, and given
    // such a ray exists, we halt sweeping and continue to check that ray for
    // collisions on each tick until they no longer are present.
    // Sweeping then resumes.
    const hasRayWithCollision: boolean =
      this.collisionIndex > -1 &&
      !!getCollision(rays[this.collisionIndex], shapes);

    if (!hasRayWithCollision) {
      this.collisionIndex = -1;
      this.updateRayIndex();
    }

    this.collisions[this.rayIndex] = getCollision(rays[this.rayIndex], shapes);

    if (this.rayIndex === 0 || this.rayIndex === 5) {
      // find the nearest collision to the kinematic
      this.collisionIndex = this.collisions.reduce(
        (acc: number, item: Collision | null, index: number): number => {
          if (!item) {
            return acc;
          }

          const accCollision: Collision | null = this.collisions[acc];

          if (!accCollision) {
            return index;
          }

          const distanceFromCollision = length(
            subtract(kinematic.position, item.position)
          );
          const distanceFromAcc = length(
            subtract(kinematic.position, accCollision.position)
          );

          return distanceFromCollision < distanceFromAcc ? index : acc;
        },
        -1
      );
    }

    const collision: Collision | null = this.collisions[this.collisionIndex];

    // Show the whiskers
    this.debug.edges = rays.map((edge, index) => {
      let strokeStyle = "rgb(224, 224, 224)";
      if (index === this.rayIndex) {
        strokeStyle = "rgb(191, 54, 12)";
      }
      if (index === this.collisionIndex) {
        strokeStyle = "rgb(68, 138, 255)";
      }

      return {
        edge,
        strokeStyle,
      };
    });

    // If have no collision, do nothing
    if (!collision) {
      this.debug.points = [];
      this.debug.circles = [];
      delete this.debug.text;
      return {
        angular: 0,
        linear: [0, 0],
      };
    }

    // Show collision points
    this.debug.points = [
      {
        fillStyle: "rgba(245, 0, 87)",
        position: collision.position,
      },
    ];

    // Given a collision, we make the steering seek a target such that the character
    // steers away from the side with the collision, and change velocity relative to
    // the collision proximity.

    const projectedPosition = kinematic.velocity;
    const relPos = subtract(kinematic.position, collision.position);
    // Find whether the collision is to the left or right of the kinematics direction of travel
    const isLeftOfBearing =
      -projectedPosition[0] * relPos[1] + projectedPosition[1] * relPos[0] < 0;

    const charBearing = vectorToRadians(kinematic.velocity);

    const adjustment = isLeftOfBearing ? (-2 * Math.PI) / 9 : (2 * Math.PI) / 9;
    const nextBearing = mapToRange(charBearing - Math.PI + adjustment);

    const distanceFromCollision = length(
      subtract(kinematic.position, collision.position)
    );

    const magnitude = Math.max(distanceFromCollision * 0.8, 5);

    const targetPosition = add(
      kinematic.position,
      multiply(radiansToVector(nextBearing), magnitude)
    );

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
