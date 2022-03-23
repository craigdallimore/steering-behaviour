import FollowPathPredict from "../followPathPredict";
import { fc, arbitraryKinematic, arbitraryPath } from "@test-utils";

const arbitraryFollowPathPredictConfig = fc.record({
  pathId: fc.string(),
  pathOffset: fc.float(),
  predictTime: fc.float({ min: 0 }),
});

describe("FollowPathPredict", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryFollowPathPredictConfig,
        arbitraryKinematic(),
        arbitraryPath(),
        (config, kinematic, path) => {
          const followPathPredict = new FollowPathPredict(
            config.pathId,
            config.pathOffset,
            config.predictTime
          );
          const steering = followPathPredict.calculate(kinematic, path);
          return steering.angular === 0;
        }
      )
    );
  });
});
