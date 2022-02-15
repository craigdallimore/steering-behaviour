import { AbstractBehaviour } from "./abstractBehaviour";
import { add, dot, length, subtract, multiply, normalise } from "@lib/vector";
import type { Kinematic, Vector, Steering } from "@domain/types";

type Acc = {
  timeToCollision: number;
  minSeparation: number;
  distance: number;
  relativePos: Vector;
  relativeVel: Vector;
  target: Kinematic | null;
};

export default class CollisionAvoidance extends AbstractBehaviour {
  readonly name = "COLLISION_AVOIDANCE";
  maxAcceleration: number;
  radius: number;
  constructor(maxAcceleration?: number, radius?: number) {
    super();
    // Holds the maximum acceleration
    this.maxAcceleration = maxAcceleration || 45;
    // Holds the collision radius of a character (we assume all characters have
    // the same radius here)
    this.radius = radius || 10;
  }
  calculate(kinematic: Kinematic, targets: Array<Kinematic>): Steering {
    const init: Acc = {
      timeToCollision: Infinity,
      minSeparation: 0,
      distance: 0,
      relativePos: [0, 0],
      relativeVel: [0, 0],
      target: null,
    };

    const final = targets.reduce((acc, target) => {
      // We find the relationship between the character kinematic and each target kinematic
      const relativePos = subtract(target.position, kinematic.position);
      const relativeVel = subtract(kinematic.velocity, target.velocity);
      const relativeSpeed = length(relativeVel);

      // A positive value for the dot product implies the character and target may cross paths
      const timeToCollision =
        dot(relativePos, relativeVel) / relativeSpeed ** 2;

      // `distance` is the gap between the kinematics in pixels
      const distance = length(relativePos);

      // `minSeparation` is the distance between the two kinematics at the time of the closest
      // approach. Given they will not collide, no steering is needed.
      const minSeparation = distance - relativeSpeed * timeToCollision;

      if (minSeparation > 2 * this.radius) {
        return acc;
      }

      // Given a negative timeToCollision, the characters are moving apart.
      if (timeToCollision > 0 && timeToCollision < acc.timeToCollision) {
        // Will collide with this target first
        return {
          timeToCollision,
          minSeparation,
          distance,
          relativePos,
          relativeVel,
          target,
        };
      }

      return acc;
    }, init);

    if (!final.target) {
      this.debug.circles = [
        {
          position: kinematic.position,
          radius: this.radius,
          fillStyle: "rgba(0, 255, 0, 0.1)",
        },
      ];
      return {
        angular: 0,
        linear: [0, 0],
      };
    }

    const isCollisionExpected =
      final.minSeparation <= 0 || final.distance < 2 * this.radius;

    // Avoid by altering course
    const steeringBasedOnCurrentPosition = subtract(
      kinematic.position,
      final.target.position
    );

    // Avoid by slamming the brakes and altering course
    const steeringBasedOnFutureRelativePosition = add(
      final.relativePos,
      multiply(final.relativeVel, final.timeToCollision)
    );

    const relativePos = isCollisionExpected
      ? // If we’re going to hit exactly, or if we’re already colliding, then
        // do the steering based on current position.
        steeringBasedOnCurrentPosition
      : // Otherwise calculate the future relative position
        steeringBasedOnFutureRelativePosition;

    this.debug.circles = [
      {
        position: kinematic.position,
        radius: this.radius,
        fillStyle: isCollisionExpected
          ? "rgba(255, 0, 0, 0.1)"
          : "rgba(0, 255, 0, 0.1)",
      },
      {
        // Green
        position: add(
          kinematic.position,
          steeringBasedOnFutureRelativePosition
        ),
        radius: 2,
        fillStyle: "rgba(0, 255, 0, 1)",
      },
      {
        // Red
        position: add(kinematic.position, steeringBasedOnCurrentPosition),
        radius: 2,
        fillStyle: "rgba(255, 0, 0, 1)",
      },
    ];

    // Avoid the target
    return {
      linear: multiply(normalise(relativePos), this.maxAcceleration),
      angular: 0,
    };
  }
}
