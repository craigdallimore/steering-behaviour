import { Edge, Path, Vector } from "@domain/types";
import {
  distanceToEdge,
  findClosestPointOnPath,
  findEdgeIntersection,
  getPosition,
  getParam,
} from "@lib/path";

describe("findClosestPointOnPath", () => {
  it("gives back the target point, given the path has fewer than two points", () => {
    const point: Vector = [0, 0];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [[1, 1]],
    };

    expect(findClosestPointOnPath(path, point)).toBe(point);
  });

  it("finds a point 00", () => {
    //   0  1  2  3  4  5  6
    // 0          *
    // 1
    // 2
    // 3 *--------x--------*
    // 4
    // 5
    const point: Vector = [3, 0];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = [3, 3];

    expect(findClosestPointOnPath(path, point)).toEqual(expected);
  });

  it("finds a point 01", () => {
    //   0  1  2  3  4  5  6
    // 0 *
    // 1
    // 2
    // 3 x-----------------*
    // 4
    // 5
    const point: Vector = [0, 0];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = [0, 3];

    expect(findClosestPointOnPath(path, point)).toEqual(expected);
  });

  it("finds a point 02", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1
    // 2
    // 3 *--------x--------*
    // 4          *
    // 5
    const point: Vector = [3, 4];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = [3, 3];

    expect(findClosestPointOnPath(path, point)).toEqual(expected);
  });

  it("finds a point 03", () => {
    //   0  1  2  3  4  5  6
    // 0 *--------x--------*
    // 1 |                 |
    // 2 |        *        |
    // 3 *                 *
    // 4
    // 5
    const point: Vector = [3, 2];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [0, 0],
        [6, 0],
        [6, 3],
      ],
    };
    const expected = [3, 0];

    expect(findClosestPointOnPath(path, point)).toEqual(expected);
  });
});

describe("distanceToEdge", () => {
  it("finds the distance 00", () => {
    //   0  1  2  3  4  5  6
    // 0          *
    // 1
    // 2
    // 3 *-----------------*
    // 4
    // 5
    const point: Vector = [3, 0];
    const edge: Edge = [
      [0, 3],
      [6, 3],
    ];
    const expected = 3;

    expect(distanceToEdge(edge, point)).toEqual(expected);
  });
  it("finds the distance 01", () => {
    //   0  1  2  3  4  5  6
    // 0             *
    // 1
    // 2
    // 3 *
    // 4 |
    // 5 *
    const point: Vector = [4, 0];
    const edge: Edge = [
      [0, 3],
      [0, 5],
    ];
    const expected = 5;

    expect(distanceToEdge(edge, point)).toEqual(expected);
  });
  it("finds the distance 02", () => {
    //   0  1  2  3  4  5  6
    // 0             *
    // 1             |
    // 2             *
    // 3
    // 4
    // 5 *
    const point: Vector = [0, 5];
    const edge: Edge = [
      [4, 0],
      [4, 2],
    ];
    const expected = 5;

    expect(distanceToEdge(edge, point)).toEqual(expected);
  });
  it("finds the distance 03", () => {
    //   0  1  2  3  4  5  6
    // 0 *-----x-----*
    // 1
    // 2
    // 3
    // 4
    // 5
    const point: Vector = [2, 0];
    const edge: Edge = [
      [0, 0],
      [4, 0],
    ];
    const expected = 0;

    expect(distanceToEdge(edge, point)).toEqual(expected);
  });
});

describe("findEdgeIntersection", () => {
  it("returns null given the edges do not intersect 00", () => {
    //   0  1  2  3  4  5  6
    // 0 *-----------*
    // 1 *-----------*
    // 2
    // 3
    // 4
    // 5
    const edge1: Edge = [
      [0, 0],
      [4, 0],
    ];
    const edge2: Edge = [
      [0, 1],
      [4, 1],
    ];

    expect(findEdgeIntersection(edge1, edge2)).toBe(null);
  });
  it("returns null given the edges do not intersect 02", () => {
    //   0  1  2  3  4  5  6
    // 0 *-----------*
    // 1             *
    // 2             |
    // 3             |
    // 4             *
    // 5
    const edge1: Edge = [
      [0, 0],
      [4, 0],
    ];
    const edge2: Edge = [
      [4, 1],
      [4, 4],
    ];

    expect(findEdgeIntersection(edge1, edge2)).toBe(null);
  });
  it("returns the point of intersection 00", () => {
    //   0  1  2  3  4  5  6
    // 0 *-----------x
    // 1             |
    // 2             |
    // 3             |
    // 4             *
    // 5
    const edge1: Edge = [
      [0, 0],
      [4, 0],
    ];
    const edge2: Edge = [
      [4, 0],
      [4, 4],
    ];
    const expected = [4, 0];

    expect(findEdgeIntersection(edge1, edge2)).toEqual(expected);
  });
  it("returns the point of intersection 01", () => {
    //   0  1  2  3  4  5  6
    // 0       *
    // 1       |
    // 2 *-----x-----*
    // 3       |
    // 4       *
    // 5
    const edge1: Edge = [
      [2, 0],
      [2, 4],
    ];
    const edge2: Edge = [
      [0, 2],
      [4, 2],
    ];
    const expected = [2, 2];

    expect(findEdgeIntersection(edge1, edge2)).toEqual(expected);
  });
});

describe("getPosition", () => {
  it("finds a point 00", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1
    // 2
    // 3 *--------x--------*
    // 4
    // 5
    const param = 3;
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = [3, 3];

    expect(getPosition(path, param)).toEqual(expected);
  });
  it("finds a point 01", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1
    // 2
    // 3 x-----------------*
    // 4
    // 5
    const param = 0;
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = [0, 3];

    expect(getPosition(path, param)).toEqual(expected);
  });
  it("finds a point 02", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1
    // 2
    // 3 x-----------------*
    // 4
    // 5
    const param = -10;
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = [0, 3];

    expect(getPosition(path, param)).toEqual(expected);
  });
  it("finds a point 03", () => {
    //   0  1  2  3  4  5  6
    // 0          *
    // 1          |
    // 2          x
    // 3          |
    // 4 *--------*
    // 5
    const param = 5;
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 4],
        [3, 4],
        [3, 0],
      ],
    };
    const expected = [3, 2];

    expect(getPosition(path, param)).toEqual(expected);
  });
});

describe("getParam", () => {
  it("finds the distance 00", () => {
    //   0  1  2  3  4  5  6
    // 0          *
    // 1
    // 2
    // 3 *--------x--------*
    // 4
    // 5
    const point: Vector = [3, 0];
    const path: Path = {
      label: "A",
      position: [3, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = 3;

    expect(getParam(path, point)).toEqual(expected);
  });
  it("finds the distance 01", () => {
    //   0  1  2  3  4  5  6
    // 0 *
    // 1
    // 2
    // 3 x-----------------*
    // 4
    // 5
    const point: Vector = [0, 0];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = 0;

    expect(getParam(path, point)).toEqual(expected);
  });
  it("finds the distance 02", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1
    // 2
    // 3 *--------x--------*
    // 4          *
    // 5
    const point: Vector = [3, 4];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [6, 3],
      ],
    };
    const expected = 3;

    expect(getParam(path, point)).toEqual(expected);
  });
  it("finds the distance 03", () => {
    //   0  1  2  3  4  5  6
    // 0 *--------x--------*
    // 1 |                 |
    // 2 |        *        |
    // 3 *                 *
    // 4
    // 5
    const point: Vector = [3, 2];
    const path: Path = {
      label: "A",
      position: [0, 0],
      points: [
        [0, 3],
        [0, 0],
        [6, 0],
        [6, 3],
      ],
    };
    const expected = 6;

    expect(getParam(path, point)).toEqual(expected);
  });
  it("finds the distance 04", () => {
    //   0  1  2  3  4  5  6  7
    // 0
    // 1    *-----x-----------*
    // 2    |     o           |
    // 3    |                 |
    // 4    *                 *
    // 5
    const point: Vector = [3, 2];
    const path: Path = {
      label: "p",
      position: [1, 1],
      points: [
        [0, 3],
        [0, 0],
        [6, 0],
        [6, 3],
      ],
    };
    const expected = 6;

    expect(getParam(path, point)).toEqual(expected);
  });
});
