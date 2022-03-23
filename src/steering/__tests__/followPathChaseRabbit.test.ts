import FollowPathChaseRabbit from "../followPathChaseRabbit";
import { fc, arbitraryKinematic, arbitraryPath } from "@test-utils";

const arbitraryFollowPathChaseRabbitConfig = fc.record({
  pathId: fc.string(),
  pathOffset: fc.float(),
});

describe("FollowPathChaseRabbit", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryFollowPathChaseRabbitConfig,
        arbitraryKinematic(),
        arbitraryPath(),
        (config, kinematic, path) => {
          const followPathChaseRabbit = new FollowPathChaseRabbit(
            config.pathId,
            config.pathOffset
          );
          const steering = followPathChaseRabbit.calculate(kinematic, path);
          return steering.angular === 0;
        }
      )
    );
  });
});
