import Wander from "../wander";
import { fc, arbitraryKinematic } from "@test-utils";

const arbitraryWanderConfig = fc.record({
  wanderOffset: fc.float({ min: 0 }),
  wanderRadius: fc.float({ min: 0 }),
  wanderRate: fc.float({ min: 0 }),
  wanderOrientation: fc.float({ min: 0 }),
});

describe("Wander", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryWanderConfig,
        arbitraryKinematic(),
        (config, kinematic) => {
          const wander = new Wander(
            config.wanderOffset,
            config.wanderRadius,
            config.wanderRate
          );
          const steering = wander.calculate(kinematic);
          return steering.angular === 0;
        }
      )
    );
  });
});
