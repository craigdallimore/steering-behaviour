import { Vector } from "@domain/types";
import { fc } from "@test-utils";
import * as v from "../vector";

function equal(left: Vector, right: Vector): boolean {
  return left[0] === right[0] && left[1] === right[1];
}

describe("add", () => {
  test("the operation is associative", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2, v3) => {
          const r1 = v.add(v.add(v1, v2), v3);
          const r2 = v.add(v1, v.add(v2, v3));
          return equal(r1, r2);
        }
      )
    ));
  test("the operation is commutative", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2) => {
          const r1 = v.add(v1, v2);
          const r2 = v.add(v2, v1);
          return equal(r1, r2);
        }
      )
    ));
  test("the operation is distributive", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        fc.float(),
        (v1, v2, factor) => {
          const r1 = v.add(v.multiply(v1, factor), v.multiply(v2, factor));
          const r2 = v.multiply(v.add(v1, v2), factor);
          return equal(r1, r2);
        }
      )
    ));
  test("right identity", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        const r1 = v.add(v1, [0, 0]);
        return equal(r1, v1);
      })
    ));
  test("left identity", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        const r1 = v.add([0, 0], v1);
        return equal(r1, v1);
      })
    ));
});

describe("multiply", () => {
  test("one", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        const r1 = v.multiply(v1, 1);
        return equal(r1, v1);
      })
    ));
  test("zero", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        const r1 = v.multiply(v1, 0);
        return equal(r1, [0, 0]);
      })
    ));
});

describe("dot product", () => {
  test("the operation is commutative", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2) => {
          const r1 = v.dot(v1, v2);
          const r2 = v.dot(v2, v1);
          return r1 === r2;
        }
      )
    ));
  test("the operation is distributive over addition", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2, v3) => {
          const r1 = v.dot(v1, v2) + v.dot(v1, v3);
          const r2 = v.dot(v1, v.add(v2, v3));
          return r1 === r2;
        }
      )
    ));
});

describe("cross product", () => {
  test("the operation is anti-commutative", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2) => {
          const r1 = v.cross(v1, v2);
          const r2 = v.cross(v2, v1);
          return r1 !== r2;
        }
      )
    ));
  test("the operation is distributive over addition", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2, v3) => {
          const r1 = v.cross(v1, v2) + v.cross(v1, v3);
          const r2 = v.cross(v1, v.add(v2, v3));
          return r1 === r2;
        }
      )
    ));
});

describe("length", () => {
  test("the length (hypotenuse) is equal to or longer than either scalar in the vector", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), fc.float(), (v1) => {
        const d = v.length(v1);
        return d >= v1[0] && d >= v1[1];
      })
    ));
  test("the length (hypotenuse) is never greater than the sum of both scalars", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        const d = v.length(v1);
        return d <= v1[0] + v1[1];
      })
    ));
});

describe("vectorToRadians", () => {
  test("the returned value will be equal to or above -2PI", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        return v.vectorToRadians(v1) >= -2 * Math.PI;
      })
    ));
  test("the returned value will be equal to or below 2PI", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        return v.vectorToRadians(v1) <= 2 * Math.PI;
      })
    ));
});

describe("degreesToVector", () => {
  test("the returned vector will have a length of about 1", () =>
    fc.assert(
      fc.property(fc.float({ min: 0, max: 360 }), (angle) => {
        const vec = v.degreesToVector(angle);
        const l = v.length(vec);
        // IEEE 754
        return l > 0.09 && l < 1.01;
      })
    ));
});

describe("radiansToVector", () => {
  test("the returned vector will have a length of about 1", () =>
    fc.assert(
      fc.property(fc.float({ min: -2 * Math.PI, max: 2 * Math.PI }), (r) => {
        const vec = v.radiansToVector(r);
        const l = v.length(vec);
        // IEEE 754
        return l > 0.09 && l < 1.01;
      })
    ));
});

describe("normalise", () => {
  test("the normalised vector will point in about the same direction as the original", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        const r1 = v.vectorToRadians(v1);
        const r2 = v.vectorToRadians(v.normalise(v1));

        // IEEE 754
        return r1 - 0.01 < r2 && r1 + 0.01 > r2;
      })
    ));
  test("the returned vector will have a length of about 1", () =>
    fc.assert(
      fc.property(fc.tuple(fc.float(), fc.float()), (v1) => {
        fc.pre(v1[0] !== 0 && v1[1] !== 0);
        const l = v.length(v.normalise(v1));
        // IEEE 754
        return l > 0.9 && l < 1.1;
      })
    ));
});

describe("distance", () => {
  test("it is not negative", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2) => {
          const d = v.distance(v1, v2);
          return d >= 0;
        }
      )
    ));
  test("it is symmetric", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (v1, v2) => {
          const d1 = v.distance(v1, v2);
          const d2 = v.distance(v2, v1);
          return d1 === d2;
        }
      )
    ));
  it("obeys triangle inequality", () =>
    fc.assert(
      fc.property(
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        fc.tuple(fc.float(), fc.float()),
        (p, q, r) => {
          const d1 = v.distance(p, q);
          const d2 = v.distance(q, r);
          const d3 = v.distance(p, r);
          return d1 + d2 >= d3;
        }
      )
    ));
});
