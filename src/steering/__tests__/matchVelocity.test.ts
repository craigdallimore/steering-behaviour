import MatchVelocity from "../matchVelocity";
import { fc, arbitraryKinematic } from "@test-utils";

const arbitraryMatchVelocityConfig = fc.record({
  targetId: fc.string(),
  timeToTarget: fc.float({ min: 0 }),
});

describe("MatchVelocity", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryMatchVelocityConfig,
        arbitraryKinematic(),
        arbitraryKinematic(),
        (config, kinematic, target) => {
          const matchVelocity = new MatchVelocity(
            config.targetId,
            config.timeToTarget
          );
          const steering = matchVelocity.calculate(kinematic, target);
          return steering.angular === 0;
        }
      )
    );
  });
});
