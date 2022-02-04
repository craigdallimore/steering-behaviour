import { Edge, Shape } from "@domain/types";
import { findFirstIntersection } from "@lib/shape";

describe("findFirstIntersection", () => {
  it("returns null, given there is no intersection", () => {
    //   0  1  2  3  4  5  6
    // 0 *--*
    // 1 |  |
    // 2 *--*
    // 3
    // 4 *-----------------*
    // 5
    const edge: Edge = [
      [0, 4],
      [6, 4],
    ];
    const shape: Shape = {
      path: {
        position: [0, 0],
        points: [
          [0, 0],
          [1, 0],
          [1, 2],
          [0, 2],
        ],
      },
    };
    const expected = null;

    expect(findFirstIntersection(edge, shape)).toEqual(expected);
  });

  it("returns the intersection closest to the first point on the edge 00", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1       *-----*
    // 2       |     |
    // 3       |     |
    // 4 a-----x-----+-----b
    // 5       |     |
    // 6       *-----*
    // 7
    const edge: Edge = [
      [0, 4],
      [6, 4],
    ];
    const shape: Shape = {
      path: {
        position: [0, 0],
        points: [
          [2, 1],
          [4, 1],
          [4, 6],
          [2, 6],
        ],
      },
    };
    const expected = {
      edge: [
        [2, 1],
        [2, 6],
      ],
      point: [2, 4],
    };

    expect(findFirstIntersection(edge, shape)).toEqual(expected);
  });
  it("returns the intersection closest to the first point on the edge 01", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1       *-----*
    // 2       |     |
    // 3       |     |
    // 4 b-----+-----x-----a
    // 5       |     |
    // 6       *-----*
    // 7
    const edge: Edge = [
      [6, 4],
      [0, 4],
    ];
    const shape: Shape = {
      path: {
        position: [0, 0],
        points: [
          [2, 1],
          [4, 1],
          [4, 6],
          [2, 6],
        ],
      },
    };
    const expected = {
      edge: [
        [4, 6],
        [4, 1],
      ],
      point: [4, 4],
    };

    expect(findFirstIntersection(edge, shape)).toEqual(expected);
  });
});
