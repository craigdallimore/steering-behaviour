import Flee from "../flee";
import { fc, arbitraryKinematic, arbitraryVector } from "@test-utils";

const arbitraryFleeConfig = fc.record({
  targetId: fc.string(),
});

describe("Flee", () => {
  it("does not provide angular steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryFleeConfig,
        arbitraryKinematic(),
        arbitraryVector(),
        (config, kinematic, position) => {
          const flee = new Flee(config.targetId);
          const steering = flee.calculate(kinematic, position);
          return steering.angular === 0;
        }
      )
    );
  });
});
