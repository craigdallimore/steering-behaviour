import Arrive from "../arrive";
import { fc, arbitraryKinematic, arbitraryVector } from "@test-utils";
import { distance } from "@decoy9697/vector";

const arbitraryArriveConfig = fc.record({
  targetId: fc.string(),
  timeToTarget: fc.float(),
  targetRadius: fc.float({ min: 0 }),
  slowRadius: fc.float({ min: 0 }),
});

describe("Arrive", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryArriveConfig,
        arbitraryKinematic(),
        arbitraryVector(),
        (config, kinematic, targetPosition) => {
          const arrive = new Arrive(
            config.targetId,
            config.timeToTarget,
            config.targetRadius,
            config.slowRadius
          );
          const steering = arrive.calculate(kinematic, targetPosition);
          return !steering || steering.angular === 0;
        }
      )
    );
  });
  it("does not provide steering given the distance to the target is below the target radius", () => {
    fc.assert(
      fc.property(
        arbitraryArriveConfig,
        arbitraryKinematic(),
        arbitraryVector(),
        (config, kinematic, targetPosition) => {
          const arrive = new Arrive(
            config.targetId,
            config.timeToTarget,
            config.targetRadius,
            config.slowRadius
          );
          const steering = arrive.calculate(kinematic, targetPosition);

          fc.pre(!steering);

          const distanceToTarget = distance(kinematic.position, targetPosition);

          return distanceToTarget < config.targetRadius;
        }
      )
    );
  });
});
