import { AbstractBehaviour } from "./abstractBehaviour";
import { add, dot, length, subtract, multiply, normalise } from "@lib/vector";
import type { Kinematic, Vector, Steering, Debug } from "@domain/types";

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
  debug: Debug;
  maxAcceleration: number;
  radius: number;
  constructor(maxAcceleration?: number, radius?: number) {
    super();
    // Holds the maximum acceleration
    this.maxAcceleration = maxAcceleration || 45;
    // Holds the collision radius of a character (we assume all characters have
    // the same radius here)
    this.radius = radius || 10;
    this.debug = {
      circles: [],
      edges: [],
      points: [],
      vectors: [],
    };
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
      const relativePos = subtract(target.position, kinematic.position);
      const relativeVel = subtract(target.velocity, kinematic.velocity);
      const relativeSpeed = length(relativeVel);

      // Each target is examined.  The time to the nearest collision is given
      // by the dot product of the relative position and relative velocity,
      // divided by the square of the relative speed.

      // When characters are moving towards each other (regardless of whether
      // they'll collide) timeToCollision is negative - and it approaches 0 as
      // they close in on each other.  When characters move apart,
      // timeToCollision is positive and will increase as they separate.
      const timeToCollision =
        dot(relativePos, relativeVel) / relativeSpeed ** 2;

      const distance = length(relativePos);
      const minSeparation = distance - relativeSpeed * acc.timeToCollision;

      // THINK: minSeparation is -Infinity
      // This is because it is multiplied by acc.timeToCollision, which is initialised to Infinity.
      // As a result the
      console.log(`M ${minSeparation}`);

      if (minSeparation < 2 * this.radius) {
        return acc;
      }

      // Given a negative timeToCollision, the characters are moving apart.
      if (timeToCollision > 0 && timeToCollision < acc.timeToCollision) {
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

    if (isCollisionExpected) {
      //console.log(final);
    }

    const relativePos = isCollisionExpected
      ? // If we’re going to hit exactly, or if we’re already colliding, then
        // do the steering based on current position.
        subtract(kinematic.position, final.target.position)
      : // Otherwise calculate the future relative position
        add(
          final.relativePos,
          multiply(final.relativeVel, final.timeToCollision)
        );

    this.debug.vectors = [relativePos];
    this.debug.circles = [
      {
        position: kinematic.position,
        radius: this.radius,
        fillStyle: isCollisionExpected
          ? "rgba(255, 0, 0, 0.1)"
          : "rgba(0, 255, 0, 0.1)",
      },
    ];

    // Avoid the target
    return {
      linear: multiply(normalise(relativePos), this.maxAcceleration),
      angular: 0,
    };
  }
}
