import type {
  Vector,
  Kinematic,
  Steering,
  CharacterId,
  SteeringBehaviourName,
} from "@domain/types.js";
import {
  add,
  dot,
  distance,
  length,
  normalise,
  multiply,
  subtract,
} from "@lib/vector.js";

abstract class B {
  abstract readonly name: SteeringBehaviourName;
}

// HELPERS ------------------------------------------------

function mapToRange(orientation: number): number {
  // To rotate all the way clockwise, use the value 6.283
  // 6.3 is (I expect) NE 0.01...
  const nextOrientation =
    Math.abs(orientation) > Math.PI
      ? orientation - Math.PI * 2 * Math.sign(orientation)
      : orientation;

  return nextOrientation % (Math.PI * 2);
}

// CLASSES ------------------------------------------------

export class Align extends B {
  readonly name = "ALIGN";
  targetId: CharacterId;
  maxAngularAcceleration: number;
  maxRotation: number;
  decelerationTolerance: number;
  alignTolerance: number;
  timeToTarget: number;

  constructor(
    targetId: CharacterId,
    maxAngularAcceleration?: number,
    maxRotation?: number,
    decelerationTolerance?: number,
    alignTolerance?: number,
    timeToTarget?: number
  ) {
    super();
    this.targetId = targetId;
    this.maxAngularAcceleration = maxAngularAcceleration || 140;
    this.maxRotation = maxRotation || 120;
    this.decelerationTolerance = decelerationTolerance || 2;
    this.alignTolerance = alignTolerance || 0.01;
    this.timeToTarget = timeToTarget || 0.1;
  }

  calculate(kinematic: Kinematic, orientation: number): Steering {
    const linear: Vector = [0, 0];

    const rotation = mapToRange(orientation - kinematic.orientation);
    const rotationSize = Math.abs(rotation);

    if (rotationSize < this.alignTolerance) {
      return {
        linear,
        angular: 0,
      };
    }

    const isSlowed = rotationSize <= this.decelerationTolerance;

    const idealRotation = isSlowed
      ? (this.maxRotation * rotationSize) / this.decelerationTolerance
      : this.maxRotation;

    const nextIdealRotation = idealRotation * (rotation / rotationSize);

    const angular =
      (nextIdealRotation - kinematic.rotation) / this.timeToTarget;

    const angularAcceleration = Math.abs(angular);
    const finalAngular =
      angularAcceleration > this.maxAngularAcceleration
        ? (angular * this.maxAngularAcceleration) / angularAcceleration
        : angular;

    return {
      angular: finalAngular,
      linear,
    };
  }
}

export class Arrive extends B {
  readonly name = "ARRIVE";
  targetId: CharacterId;
  maxAcceleration: number;
  timeToTarget: number;
  maxSpeed: number;
  targetRadius: number;
  slowRadius: number;
  constructor(
    targetId: CharacterId,
    maxAcceleration?: number,
    timeToTarget?: number,
    maxSpeed?: number,
    targetRadius?: number,
    slowRadius?: number
  ) {
    super();
    this.targetId = targetId;
    this.maxAcceleration = maxAcceleration || 25;
    this.timeToTarget = timeToTarget || 3;
    this.maxSpeed = maxSpeed || 55;
    this.targetRadius = targetRadius || 5;
    this.slowRadius = slowRadius || 60;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering | null {
    const distanceToTarget = distance(kinematic.position, targetPosition);
    const directionToTarget = subtract(targetPosition, kinematic.position);

    if (distanceToTarget < this.targetRadius) {
      return null;
    }

    const idealSpeed =
      distanceToTarget > this.slowRadius
        ? this.maxSpeed
        : this.maxSpeed * (distanceToTarget / this.slowRadius);

    // Here we appear to take a vector from the two points, and relate it to
    // the ideal speed
    const idealVelocity = multiply(normalise(directionToTarget), idealSpeed);

    const reduced = subtract(idealVelocity, kinematic.velocity);

    // A higher value will arrive sooner
    const linear = multiply(reduced, 1 / this.timeToTarget);

    const finalLinear =
      length(linear) > this.maxAcceleration
        ? multiply(normalise(linear), this.maxAcceleration)
        : linear;

    return {
      angular: 0,
      linear: finalLinear,
    };
  }
}

/*
export class FollowPathChaserabbit extends B {
  readonly name = "FOLLOW_PATH_CHASE_RABBIT";
  pathOffset: number;
  seekConfig: SeekConfig;
  constructor() {
    super();
  // Holds the distance along the path to generate the target. Can be negative
  // if the character is to move along the reverse direction
  pathOffset: 30,
  seekConfig: {
    name: "SEEK",
    maxAcceleration: 25,
  },

  }
  calculate(): Steering {
  // Find the current position on the path
  const currentParam = getParam(path, kinematic.position);

  // Offset it
  const targetParam = currentParam + this.pathOffset;

  // Get the target position
  const targetPosition = getPosition(path, targetParam);

  const { linear } = seek(kinematic, targetPosition, this.seekConfig);
  return { angular: 0, linear };
  }
}
export class FollowPathPredict extends B {
  readonly name = "FOLLOW_PATH_PREDICT";
  pathOffset: number;
  predictTime: number;
  seekConfig: SeekConfig;
  constructor() {
    super();
  // Holds the distance along the path to generate the target. Can be negative
  // if the character is to move along the reverse direction
  pathOffset: 30,
  // Holds the time in the future to predict the character position
  predictTime: 0.1,
  seekConfig: {
    name: "SEEK",
    maxAcceleration: 25,
  },

  }
  calculate(): Steering {
  // Find the predicted future location
  const futurePos = add(
    kinematic.position,
    multiply(kinematic.velocity, this.predictTime)
  );

  // Find the predicted position on the path
  const currentParam = getParam(path, futurePos);

  // Offset it
  const targetParam = currentParam + this.pathOffset;

  // Get the target position
  const targetPosition = getPosition(path, targetParam);

  const { linear } = seek(kinematic, targetPosition, this.seekConfig);
  return { angular: 0, linear };
  }
}
*/
type Final = {
  shortestTime: number;
  firstMinSeparation: number;
  firstDistance: number;
  firstRelativePos: Vector;
  firstRelativeVel: Vector;
  firstTarget: Kinematic | null;
};

export class CollisionAvoidance extends B {
  readonly name = "COLLISION_AVOIDANCE";
  maxAcceleration: number;
  radius: number;
  constructor(maxAcceleration?: number, radius?: number) {
    super();
    // Holds the maximum acceleration
    this.maxAcceleration = maxAcceleration || 5;
    // Holds the collision radius of a character (we assume all characters have the
    // same radius here)
    this.radius = radius || 7.5;
  }
  calculate(kinematic: Kinematic, targets: Array<Kinematic>): Steering {
    const init: Final = {
      shortestTime: Infinity,
      firstMinSeparation: 0,
      firstDistance: 0,
      firstRelativePos: [0, 0],
      firstRelativeVel: [0, 0],
      firstTarget: null,
    };

    const final = targets.reduce((acc, target) => {
      // Calculate the time to collision
      const relativePos = subtract(target.position, kinematic.position);
      const relativeVel = subtract(target.velocity, kinematic.velocity);
      const relativeSpeed = length(relativeVel);
      const timeToCollision =
        dot(relativePos, relativeVel) / relativeSpeed ** 2;

      const distance = length(relativePos);
      const minSeparation = distance - relativeSpeed * acc.shortestTime;

      if (minSeparation > 2 * this.radius) {
        return acc;
      }
      if (timeToCollision > 0 && timeToCollision < acc.shortestTime) {
        return {
          shortestTime: timeToCollision,
          firstMinSeparation: minSeparation,
          firstDistance: distance,
          firstRelativePos: relativePos,
          firstRelativeVel: relativeVel,
          firstTarget: target,
        };
      }

      return acc;
    }, init);

    if (!final.firstTarget) {
      return {
        angular: 0,
        linear: [0, 0],
      };
    }

    const relativePos =
      final.firstMinSeparation <= 0 || final.firstDistance < 2 * this.radius
        ? // If we’re going to hit exactly, or if we’re already colliding, then
          // do the steering based on current position.
          subtract(kinematic.position, final.firstTarget.position)
        : // Otherwise calculate the future relative position
          add(
            final.firstRelativePos,
            multiply(final.firstRelativeVel, final.shortestTime)
          );

    // Avoid the target
    return {
      linear: multiply(normalise(relativePos), this.maxAcceleration),
      angular: 0,
    };
  }
}
/*
export class Evade extends B {
  readonly name = "EVADE";
  maxPrediction: number;
  fleeConfig: FleeConfig;
  constructor() {
    super();
  maxPrediction: 1,
  fleeConfig: {
    name: "FLEE",
    maxAcceleration: 25,
  },

  }
  calculate(): Steering {
  const direction = subtract(target.position, kinematic.position);
  const distance = length(direction);
  const speed = length(kinematic.velocity);

  const prediction =
    speed <= distance / this.maxPrediction
      ? this.maxPrediction
      : distance / speed;

  const nextTargetPosition = add(
    target.position,
    multiply(target.velocity, prediction)
  );

  const nextTarget = {
    ...target,
    position: nextTargetPosition,
  };

  return flee(kinematic, nextTarget, this.fleeConfig);
  }
}
export class Face extends B {
  readonly name = "FACE";
  alignConfig: AlignConfig;
  constructor() {
    super();

  }
  calculate(): Steering {
  const direction = subtract(position, kinematic.position);

  if (length(direction) === 0) {
    return emptySteering;
  }

  const nextOrientation = Math.atan2(direction[0], -direction[1]);

  return align(kinematic, nextOrientation, this.alignConfig);
  }
}
*/
export class Flee extends B {
  readonly name = "FLEE";
  targetId: CharacterId;
  maxAcceleration: number;
  constructor(targetId: CharacterId, maxAcceleration?: number) {
    super();
    this.targetId = targetId;
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering {
    const linear = multiply(
      normalise(subtract(kinematic.position, targetPosition)),
      this.maxAcceleration
    );

    const angular = 0;

    return {
      angular,
      linear,
    };
  }
}
/*
export class LookWhereYouAreGoing extends B {
  readonly name = "LOOK_WHERE_YOU_ARE_GOING";
  alignConfig: AlignConfig;
  constructor() {
    super();

  alignConfig: {
    name: "ALIGN",
    maxAngularAcceleration: 140,
    maxRotation: 120,
    decelerationTolerance: 2,
    alignTolerance: 0.01,
    timeToTarget: 0.1,
  },
  }
  calculate(): Steering {
  if (length(kinematic.velocity) === 0) {
    return emptySteering;
  }

  const orientation = vectorToRadians(kinematic.velocity);

  return align(kinematic, orientation, this.alignConfig);
  }
}
*/
export class MatchVelocity extends B {
  readonly name = "MATCH_VELOCITY";
  targetId: CharacterId;
  timeToTarget: number;
  maxAcceleration: number;
  constructor(
    targetId: CharacterId,
    timeToTarget?: number,
    maxAcceleration?: number
  ) {
    super();
    this.targetId = targetId;
    this.timeToTarget = timeToTarget || 0.1;
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, target: Kinematic): Steering {
    const angular = 0;
    const linear = subtract(target.velocity, kinematic.velocity);
    const dividedLinear = multiply(linear, 1 / this.timeToTarget);
    const finalLinear =
      length(dividedLinear) > this.maxAcceleration
        ? multiply(normalise(linear), this.maxAcceleration)
        : linear;

    return {
      angular,
      linear: finalLinear,
    };
  }
}
/*
import { findFirstIntersection } from "@lib/shape.js";

import { seek } from "./seek.js";

type Collision = {
  position: Vector;
  normal: Vector;
};

export function getNormals([a, b]: Edge): [Vector, Vector] {
  const [dx, dy] = subtract(a, b);
  return [
    [-dy, dx],
    [dy, -dx],
  ];
}

export function getCollision(seg: Edge, shape: Shape): Collision | null {
  // The line extending from the kinematic

  const intersection = findFirstIntersection(seg, shape);

  if (intersection) {
    // Here we get the normals for the intersected edge
    const normals = getNormals(intersection.edge);

    // We want the normal on the same side as the kinematic
    const closestNormal =
      distance(normals[0], seg[0]) < distance(normals[1], seg[0])
        ? normals[0]
        : normals[1];

    // Let's define the normal as a vector relative to the intersection point,
    // with a distance of 1, on the kinematic side of the intersection.

    return {
      position: intersection.point,
      normal: normalise(closestNormal),
    };
  }

  return null;
}

function getWhiskerRay(k: Kinematic, radians: number, magnitude: number): Edge {
  const bearing = vectorToRadians(k.velocity) - radians;
  return [
    k.position,
    add(k.position, multiply(radiansToVector(bearing), magnitude)),
  ];
}

export class ObstacleAvoidance extends B {
  readonly name = "OBSTACLE_AVOIDANCE";
  avoidDistance: number;
  lookaheadMain: number;
  lookaheadSide: number;
  seekConfig: SeekConfig;
  constructor() {
    super();
  // Holds the minimum distance to a wall (i.e., how far to avoid collision)
  // should be greater than the radius of the character
  avoidDistance: 20,
  // Holds the distance to look ahead for a collision
  // (i.e., the length of the collision ray)
  lookaheadMain: 150,
  lookaheadSide: 75,

  seekConfig: {
    name: "SEEK",
    maxAcceleration: 15,
  },

  }
  calculate(): Steering {
  const w0 = getWhiskerRay(kinematic, 0, this.lookaheadMain);
  const w1 = getWhiskerRay(kinematic, 0.2, this.lookaheadSide);
  const w2 = getWhiskerRay(kinematic, -0.2, this.lookaheadSide);

  const collision =
    getCollision(w1, shape) ||
    getCollision(w2, shape) ||
    getCollision(w0, shape);

  // If have no collision, do nothing
  if (!collision) {
    return {
      angular: 0,
      linear: [0, 0],
    };
  }

  // Otherwise create a target
  const targetPosition = add(
    collision.position,
    multiply(collision.normal, this.avoidDistance)
  );

  // 2. Delegate to seek
  return seek(kinematic, targetPosition, this.seekConfig);
  }
}
export class Pursue extends B {
  readonly name = "PURSUE";
  maxPrediction: number;
  seekConfig: SeekConfig;
  constructor() {
    super();
  maxPrediction: 1,
  seekConfig: {
    name: "SEEK",
    maxAcceleration: 25,
  },

  }
  calculate(): Steering {
  const direction = subtract(target.position, kinematic.position);
  const distance = length(direction);
  const speed = length(kinematic.velocity);

  const prediction =
    speed <= distance / this.maxPrediction
      ? this.maxPrediction
      : distance / speed;

  const nextTargetPosition = add(
    target.position,
    multiply(target.velocity, prediction)
  );

  return seek(kinematic, nextTargetPosition, this.seekConfig);
  }
}
*/
export class Seek extends B {
  readonly name = "SEEK";
  targetId: CharacterId;
  maxAcceleration: number;
  constructor(targetId: CharacterId, maxAcceleration?: number) {
    super();
    this.targetId = targetId;
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, targetPosition: Vector): Steering {
    const linear = multiply(
      normalise(subtract(targetPosition, kinematic.position)),
      this.maxAcceleration
    );

    const angular = 0;

    return {
      angular,
      linear,
    };
  }
}
export class Separation extends B {
  readonly name = "SEPARATION";
  threshold: number;
  decayCoefficient: number;
  maxAcceleration: number;
  constructor(
    threshold?: number,
    decayCoefficient?: number,
    maxAcceleration?: number
  ) {
    super();
    // The threshold to take action
    this.threshold = threshold || 250;
    // Holds the constant coefficient of decay for the inverse square law force
    this.decayCoefficient = decayCoefficient || 1500;
    // Holds the maximum acceleration of the character
    this.maxAcceleration = maxAcceleration || 25;
  }
  calculate(kinematic: Kinematic, targets: Array<Kinematic>): Steering {
    return targets.reduce(
      (acc: Steering, target: Kinematic): Steering => {
        const direction = subtract(kinematic.position, target.position);
        const distance = length(direction);

        if (distance < this.threshold) {
          const strength = Math.min(
            this.decayCoefficient / distance ** 2,
            this.maxAcceleration
          );

          const normalDirection = normalise(direction);
          const linear = multiply(normalDirection, strength);

          return {
            linear: add(linear, acc.linear),
            angular: 0,
          };
        }

        return acc;
      },
      {
        linear: [0, 0],
        angular: 0,
      }
    );
  }
}
/*
export class Wander extends B {
  readonly name = "WANDER";
  wanderOffset: number;
  wanderRadius: number;
  maxAcceleration: number;
  faceConfig: FaceConfig;
  constructor() {
    super();
  maxAcceleration: 25,
  wanderOffset: 50,
  wanderRadius: 20,
  faceConfig: {
    name: "FACE",
    alignConfig: {
      name: "ALIGN",
      maxAngularAcceleration: 140,
      maxRotation: 120,
      decelerationTolerance: 2,
      alignTolerance: 0.01,
      timeToTarget: 0.1,
    },
  },

  }
  calculate(): Steering {
  const wanderPosition: Vector = add(
    kinematic.position,
    multiply(radiansToVector(kinematic.orientation), this.wanderOffset)
  );

  const wanderOrientation = Math.random() * 360;

  const nextTargetPosition = add(
    wanderPosition,
    multiply(degreesToVector(wanderOrientation), this.wanderRadius * 2)
  );

  const { angular } = face(kinematic, nextTargetPosition, this.faceConfig);

  const linear = multiply(
    radiansToVector(kinematic.orientation),
    this.maxAcceleration
  );

  return {
    angular,
    linear,
  };
  }
}

*/
export class None extends B {
  readonly name = "NONE";
  calculate(): Steering {
    return {
      linear: [0, 0],
      angular: 0,
    };
  }
}
