import { Behaviour } from "@domain/types";
import getFirstTargetId from "@lib/getFirstTargetId";
import * as steering from "@steering/index";

describe("getFirstTargetId", () => {
  it("returns null, given no behaviours", () => {
    const behaviours: Array<Behaviour> = [];

    const result = getFirstTargetId(behaviours);
    expect(result).toBe(null);
  });
  it("returns null, given no behaviours with targetIds", () => {
    const behaviours: Array<Behaviour> = [
      new steering.Wander(),
      new steering.Separation(),
    ];

    const result = getFirstTargetId(behaviours);
    expect(result).toBe(null);
  });
  it("returns the first targetId", () => {
    const behaviours: Array<Behaviour> = [
      new steering.Seek("_1"),
      new steering.Seek("_2"),
      new steering.Seek("_3"),
    ];

    const result = getFirstTargetId(behaviours);
    expect(result).toBe("_1");
  });
});
