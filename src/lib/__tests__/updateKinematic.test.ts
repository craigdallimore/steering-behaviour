import { Kinematic, Steering, Vector } from "@domain/types";
import updateKinematic from "@lib/updateKinematic";
import { length } from "@lib/vector";
import { fc } from "@test-utils";

const arbitraryVector = () => fc.tuple(fc.float(), fc.float());

const arbitraryKinematic = () =>
  fc.record({
    maxAcceleration: fc.float(),
    maxAngularAcceleration: fc.float(),
    maxSpeed: fc.float(),
    position: arbitraryVector(),
    rotation: fc.float(),
    orientation: fc.float(),
    velocity: arbitraryVector(),
  });

const arbitrarySteering = () =>
  fc.record({
    linear: fc.tuple(fc.float(), fc.float()),
    angular: fc.float(),
  });

describe("updateKinematic", () => {
  test("given no steering and no velocity, a change it time does not affect the next position", () => {
    const initialPosition: Vector = [0, 0];
    const steering: Steering = {
      linear: [0, 0],
      angular: 0,
    };
    const time = 1;
    const kinematic: Kinematic = {
      maxAcceleration: 5,
      maxAngularAcceleration: 5,
      maxSpeed: 10,
      position: initialPosition,
      rotation: 0,
      orientation: 0,
      velocity: [0, 0],
    };

    const nextKinematic = updateKinematic(steering, kinematic, time);

    expect(nextKinematic.position).toEqual(initialPosition);
  });

  test("the final velocity does not exceed the max speed (for non-0 max speeds)", () =>
    fc.assert(
      fc.property(
        arbitraryKinematic(),
        arbitrarySteering(),
        fc.float({ min: 0 }),
        (kinematic, steering, time) => {
          const nextK = updateKinematic(steering, kinematic, time);
          const speed = length(nextK.velocity);
          return speed <= nextK.maxSpeed + 0.0000001; // consider floating point errors
        }
      )
    ));
});
