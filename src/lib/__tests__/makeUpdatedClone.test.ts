import makeUpdatedClone from "@lib/makeUpdatedClone";
import Seek from "@steering/seek";

describe("makeUpdatedClone", () => {
  test("the clone does not reference the original", () => {
    const original = new Seek("_");

    const clone = makeUpdatedClone(original, "x", 5);

    expect(Object.is(original, clone)).toBe(false);
  });
});
