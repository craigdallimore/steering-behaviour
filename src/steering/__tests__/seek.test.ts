import Seek from "../seek";
import { fc, arbitraryKinematic, arbitraryVector } from "@test-utils";

const arbitrarySeekConfig = fc.record({
  targetId: fc.string(),
});

describe("Seek", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitrarySeekConfig,
        arbitraryKinematic(),
        arbitraryVector(),
        (config, kinematic, position) => {
          const seek = new Seek(config.targetId);
          const steering = seek.calculate(kinematic, position);
          return steering.angular === 0;
        }
      )
    );
  });
});
