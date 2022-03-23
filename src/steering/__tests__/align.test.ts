import Align from "../align";
import { fc, arbitraryKinematic } from "@test-utils";

const arbitraryAlignConfig = fc.record({
  targetId: fc.string(),
  maxRotation: fc.float(),
  decelerationTolerance: fc.float(),
  alignTolerance: fc.float(),
  timeToTarget: fc.float(),
});

describe("Align", () => {
  it("does not provide linear steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryAlignConfig,
        arbitraryKinematic(),
        fc.float(),
        (config, kinematic, orientation) => {
          const align = new Align(
            "",
            config.maxRotation,
            config.decelerationTolerance,
            config.alignTolerance,
            config.timeToTarget
          );
          const steering = align.calculate(kinematic, orientation);
          return steering.linear[0] === 0 && steering.linear[1] === 0;
        }
      )
    );
  });
});
