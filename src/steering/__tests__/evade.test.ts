import Evade from "../evade";
import { fc, arbitraryKinematic } from "@test-utils";

const arbitraryEvadeConfig = fc.record({
  targetId: fc.string(),
  maxPrediction: fc.float({ min: 0 }),
});

describe("Evade", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryEvadeConfig,
        arbitraryKinematic(),
        arbitraryKinematic(),
        (config, kinematic, target) => {
          const evade = new Evade(config.targetId, config.maxPrediction);
          const steering = evade.calculate(kinematic, target);
          return steering.angular === 0;
        }
      )
    );
  });
});
