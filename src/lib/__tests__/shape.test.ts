import { Edge, Shape } from "@domain/types";
import getCollision, { findFirstIntersection } from "@lib/shape";

describe("findFirstIntersection", () => {
  it("returns null, given there is no intersection", () => {
    //   0  1  2  3  4  5  6
    // 0 *--*     *--*
    // 1 | A|     | B|
    // 2 *--*     *--*
    // 3
    // 4 *-----------------*
    // 5
    const edge: Edge = [
      [0, 4],
      [6, 4],
    ];
    const shapes: Array<Shape> = [
      {
        path: {
          label: "A",
          position: [0, 0],
          points: [
            [0, 0],
            [1, 0],
            [1, 2],
            [0, 2],
          ],
        },
      },
      {
        path: {
          label: "B",
          position: [0, 0],
          points: [
            [3, 0],
            [4, 0],
            [4, 2],
            [3, 2],
          ],
        },
      },
    ];
    const expected = null;

    expect(findFirstIntersection(edge, shapes)).toEqual(expected);
  });

  it("returns the intersection closest to the first point on the edge 00", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1       *--*  *--*
    // 2       | A|  | B|
    // 3       |  |  |  |
    // 4 a-----x--+--+--+--b
    // 5       |  |  |  |
    // 6       *--*  *--*
    // 7
    const edge: Edge = [
      [0, 4],
      [6, 4],
    ];
    const shapes: Array<Shape> = [
      {
        path: {
          label: "A",
          position: [0, 0],
          points: [
            [2, 1],
            [3, 1],
            [3, 6],
            [2, 6],
          ],
        },
      },
      {
        path: {
          label: "B",
          position: [0, 0],
          points: [
            [4, 1],
            [5, 1],
            [5, 6],
            [4, 6],
          ],
        },
      },
    ];
    const expected = {
      edge: [
        [2, 1],
        [2, 6],
      ],
      point: [2, 4],
    };

    expect(findFirstIntersection(edge, shapes)).toEqual(expected);
  });
  it("returns the intersection closest to the first point on the edge 01", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1       *--*  *--*
    // 2       | A|  | B|
    // 3       |  |  |  |
    // 4 b-----+--+--+--X--a
    // 5       |  |  |  |
    // 6       *--*  *--*
    // 7
    const edge: Edge = [
      [6, 4],
      [0, 4],
    ];
    const shapes: Array<Shape> = [
      {
        path: {
          label: "A",
          position: [0, 0],
          points: [
            [2, 1],
            [3, 1],
            [3, 6],
            [2, 6],
          ],
        },
      },
      {
        path: {
          label: "B",
          position: [0, 0],
          points: [
            [4, 1],
            [5, 1],
            [5, 6],
            [4, 6],
          ],
        },
      },
    ];
    const expected = {
      edge: [
        [5, 6],
        [5, 1],
      ],
      point: [5, 4],
    };

    expect(findFirstIntersection(edge, shapes)).toEqual(expected);
  });
});

describe("getCollision", () => {
  it("returns null, given no intersection", () => {
    //   0  1  2  3  4  5  6
    // 0 *--*     *--*
    // 1 | A|     | B|
    // 2 *--*     *--*
    // 3
    // 4 a-----------------b
    // 5

    const ray: Edge = [
      [0, 4],
      [6, 4],
    ];
    const shapes: Array<Shape> = [
      {
        path: {
          label: "A",
          position: [0, 0],
          points: [
            [0, 0],
            [1, 0],
            [1, 2],
            [0, 2],
          ],
        },
      },
      {
        path: {
          label: "B",
          position: [0, 0],
          points: [
            [3, 0],
            [4, 0],
            [4, 2],
            [3, 2],
          ],
        },
      },
    ];
    const expected = null;

    expect(getCollision(ray, shapes)).toEqual(expected);
  });
  it("returns a collision closest to the first point on the edge", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1       a--b  *--*
    // 2       | A|  | B|
    // 3       |  |  |  |
    // 4 g-----x--+--+--+--h
    // 5       |  |  |  |
    // 6       d--c  *--*
    // 7
    const edge: Edge = [
      [0, 4], // g
      [6, 4], // h
    ];
    const shapes: Array<Shape> = [
      {
        path: {
          label: "A",
          position: [0, 0],
          points: [
            [2, 1], // a
            [3, 1], // b
            [3, 6], // c
            [2, 6], // d
          ],
        },
      },
      {
        path: {
          label: "B",
          position: [0, 0],
          points: [
            [4, 1],
            [5, 1],
            [5, 6],
            [4, 6],
          ],
        },
      },
    ];
    const expected = {
      position: [2, 4],
      normal: [-1, -0],
    };

    expect(getCollision(edge, shapes)).toEqual(expected);
  });
  it("returns a collision closest to the first point on the edge 01", () => {
    //   0  1  2  3  4  5  6
    // 0
    // 1       *--*  a--b
    // 2       | A|  | B|
    // 3       |  |  |  |
    // 4 h-----+--+--+--X--g
    // 5       |  |  |  |
    // 6       *--*  d--c
    // 7
    const edge: Edge = [
      [6, 4], // g
      [0, 4], // h
    ];
    const shapes: Array<Shape> = [
      {
        path: {
          label: "A",
          position: [0, 0],
          points: [
            [2, 1],
            [3, 1],
            [3, 6],
            [2, 6],
          ],
        },
      },
      {
        path: {
          label: "B",
          position: [0, 0],
          points: [
            [4, 1], // a
            [5, 1], // b
            [5, 6], // c
            [4, 6], // d
          ],
        },
      },
    ];
    const expected = {
      position: [5, 4],
      normal: [1, -0],
    };

    expect(getCollision(edge, shapes)).toEqual(expected);
  });
});
