// @flow

import type { Path } from "./drawPath.js";
import type { Vector } from "./vector.js";

const zero2D = [0, 0];

function vectorToSegment2D(
  t: number,
  [px, pz]: Vector,
  [ax, az]: Vector,
  [bx, bz]: Vector
): Vector {
  return [(1 - t) * ax + t * bx - px, (1 - t) * az + t * bz - pz];
}

function sqDiag([x, z]: Vector) {
  return x ** 2 + z ** 2;
}

function findClosestPoint(
  [ax, az]: Vector,
  [bx, bz]: Vector,
  [px, pz]: Vector
): Vector {
  const v = [bx - ax, bz - az]; // distance from a to b
  const u = [ax - px, az - pz]; // distance from p to a

  const vu = v[0] * u[0] + v[1] * u[1]; // sum the multiplied distances?
  const vv = sqDiag(v); // dist from a->b squared
  const t = -vu / vv;

  if (t >= 0 && t <= 1) {
    return vectorToSegment2D(t, zero2D, [ax, az], [bx, bz]);
  }

  const g0 = sqDiag(vectorToSegment2D(0, [px, pz], [ax, az], [bx, bz]));
  const g1 = sqDiag(vectorToSegment2D(1, [px, pz], [ax, az], [bx, bz]));

  return g0 <= g1 ? [ax, az] : [bx, bz];
}

export default function findClosestPointOnPath(
  path: Path,
  point: Vector
): Vector {
  if (path.length < 2) {
    return point;
  }
  return findClosestPoint(path[0], path[1], point);
}
