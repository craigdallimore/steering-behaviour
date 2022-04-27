import ObstacleAvoidance from "../obstacleAvoidance";
import { fc, arbitraryKinematic, arbitraryShape } from "@test-utils";

const arbitraryObstacleAvoidanceConfig = fc.record({
  avoidDistance: fc.float({ min: 0 }),
});

describe("ObstacleAvoidance", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryObstacleAvoidanceConfig,
        arbitraryKinematic(),
        fc.array(arbitraryShape()),
        (config, kinematic, shapes) => {
          const obstacleAvoidance = new ObstacleAvoidance(config.avoidDistance);
          const steering = obstacleAvoidance.calculate(kinematic, shapes);
          return steering.angular === 0;
        }
      )
    );
  });
  it("does not provide linear steering given there are no shapes", () => {
    fc.assert(
      fc.property(
        arbitraryObstacleAvoidanceConfig,
        arbitraryKinematic(),
        (config, kinematic) => {
          const obstacleAvoidance = new ObstacleAvoidance(config.avoidDistance);
          const steering = obstacleAvoidance.calculate(kinematic, []);

          return steering.linear[0] === 0 && steering.linear[1] === 0;
        }
      )
    );
  });
});
