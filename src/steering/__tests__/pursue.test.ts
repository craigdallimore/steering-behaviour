import Pursue from "../pursue";
import { fc, arbitraryKinematic } from "@test-utils";

const arbitraryPursueConfig = fc.record({
  targetId: fc.string(),
  maxPrediction: fc.float({ min: 0 }),
});

describe("Pursue", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryPursueConfig,
        arbitraryKinematic(),
        arbitraryKinematic(),
        (config, kinematic, target) => {
          const pursue = new Pursue(config.targetId, config.maxPrediction);
          const steering = pursue.calculate(kinematic, target);
          return steering.angular === 0;
        }
      )
    );
  });
});
