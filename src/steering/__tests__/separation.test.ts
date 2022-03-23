import Separation from "../separation";
import { fc, arbitraryKinematic } from "@test-utils";

const arbitrarySeparationConfig = fc.record({
  threshold: fc.float({ min: 0 }),
  decayCoefficient: fc.float({ min: 0 }),
});

describe("Separation", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitrarySeparationConfig,
        arbitraryKinematic(),
        fc.array(arbitraryKinematic()),
        (config, kinematic, targets) => {
          const separation = new Separation(
            config.threshold,
            config.decayCoefficient
          );
          const steering = separation.calculate(kinematic, targets);
          return steering.angular === 0;
        }
      )
    );
  });
  it("does not provide linear steering given there are no targets", () => {
    fc.assert(
      fc.property(
        arbitrarySeparationConfig,
        arbitraryKinematic(),
        (config, kinematic) => {
          const separation = new Separation(
            config.threshold,
            config.decayCoefficient
          );
          const steering = separation.calculate(kinematic, []);

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
