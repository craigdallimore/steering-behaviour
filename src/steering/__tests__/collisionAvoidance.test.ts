import CollisionAvoidance from "../collisionAvoidance";
import { fc, arbitraryKinematic } from "@test-utils";

const arbitraryCollisionAvoidanceConfig = fc.record({
  radius: fc.float({ min: 0 }),
});

describe("CollisionAvoidance", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryCollisionAvoidanceConfig,
        arbitraryKinematic(),
        fc.array(arbitraryKinematic()),
        (config, kinematic, targets) => {
          const collisionAvoidance = new CollisionAvoidance(config.radius);
          const steering = collisionAvoidance.calculate(kinematic, targets);
          return steering.angular === 0;
        }
      )
    );
  });
  it("does not provide linear steering given there are no targets", () => {
    fc.assert(
      fc.property(
        arbitraryCollisionAvoidanceConfig,
        arbitraryKinematic(),
        (config, kinematic) => {
          const collisionAvoidance = new CollisionAvoidance(config.radius);
          const steering = collisionAvoidance.calculate(kinematic, []);

          return (
            steering.angular === 0 &&
            steering.linear[0] === 0 &&
            steering.linear[1] === 0
          );
        }
      )
    );
  });
});
