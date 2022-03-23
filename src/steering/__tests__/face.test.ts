import Face from "../face";
import { fc, arbitraryKinematic, arbitraryVector } from "@test-utils";

const arbitraryFaceConfig = fc.record({
  targetId: fc.string(),
});

describe("Face", () => {
  it("does not provide linear steering at all", () => {
    fc.assert(
      fc.property(
        arbitraryFaceConfig,
        arbitraryKinematic(),
        arbitraryVector(),
        (config, kinematic, position) => {
          const face = new Face(config.targetId);
          const steering = face.calculate(kinematic, position);
          return steering.linear[0] === 0 && steering.linear[1] === 0;
        }
      )
    );
  });
  it("does not provide angular steering given the character is at the target position", () => {
    fc.assert(
      fc.property(
        arbitraryFaceConfig,
        arbitraryKinematic(),
        (config, kinematic) => {
          const face = new Face(config.targetId);
          const steering = face.calculate(kinematic, kinematic.position);

          return steering.angular === 0;
        }
      )
    );
  });
});
