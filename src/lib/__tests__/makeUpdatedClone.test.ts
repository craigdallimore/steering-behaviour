import makeUpdatedClone from "@lib/makeUpdatedClone";

describe("makeUpdatedClone", () => {
  test("the clone does not reference the original", () => {
    const original = {};

    const clone = makeUpdatedClone(original, "behaviour", 5);

    expect(Object.is(original, clone)).toBe(false);
  });
});
