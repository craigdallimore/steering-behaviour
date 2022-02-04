import { fc } from "@test-utils";
import limitOrientation from "../limitOrientation";

describe("limitOrientation", () => {
  test("the returned value is always below 2PI", () =>
    fc.assert(
      fc.property(fc.float(), (i: number) => limitOrientation(i) < 2 * Math.PI)
    ));
  test("the returned value is always above -2PI", () =>
    fc.assert(
      fc.property(fc.float(), (i: number) => limitOrientation(i) > -2 * Math.PI)
    ));
  test("values within the boundaries are passed through unchanged", () =>
    fc.assert(
      fc.property(
        fc.float({ min: -2 * Math.PI, max: 2 * Math.PI }),
        (i: number) => limitOrientation(i) === i
      )
    ));
});
