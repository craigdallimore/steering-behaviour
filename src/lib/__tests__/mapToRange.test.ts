import mapToRange from "@lib/mapToRange";
import { fc } from "@test-utils";

describe("mapToRange", () => {
  test("the output is between -2PI and 2PI", () => {
    fc.assert(
      fc.property(fc.float(), (orientation) => {
        const result = mapToRange(orientation);

        return result >= Math.PI * -2 && result <= Math.PI * 2;
      })
    );
  });
});
