// @flow

import type { Vector } from "./vector.js";
export type Path = {
  position: Vector,
  points: Array<[number, number]>,
};
export type PathId = string;
import { distance, subtract, multiply, normalise } from "./vector.js";

export type Segment = [Vector, Vector];

const zero2D = [0, 0];

function vectorToSegment2D(
  t: number,
  [px, pz]: Vector,
  [[ax, az], [bx, bz]]: Segment
): Vector {
  return [(1 - t) * ax + t * bx - px, (1 - t) * az + t * bz - pz];
}

function sqDiag([x, z]: Vector) {
  return x ** 2 + z ** 2;
}

export function findSegmentIntersection(
  [a1, a2]: Segment,
  [b1, b2]: Segment
): Vector | null {
  const [s1x, s1y] = subtract(a2, a1);
  const [s2x, s2y] = subtract(b2, b1);

  const s =
    (-s1y * (a1[0] - b1[0]) + s1x * (a1[1] - b1[1])) / (-s2x * s1y + s1x * s2y);
  const t =
    (s2x * (a1[1] - b1[1]) - s2y * (a1[0] - b1[0])) / (-s2x * s1y + s1x * s2y);

  if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
    const x = a1[0] + t * s1x;
    const z = a1[1] + t * s1y;
    return [x, z];
  }

  return null;
}

function findClosestPointOnSegment(
  [[ax, az], [bx, bz]]: Segment,
  [px, pz]: Vector
): Vector {
  const v = [bx - ax, bz - az]; // distance from a to b
  const u = [ax - px, az - pz]; // distance from p to a

  const vu = v[0] * u[0] + v[1] * u[1]; // sum the multiplied distances?
  const vv = sqDiag(v); // dist from a->b squared
  const t = -vu / vv;

  if (t >= 0 && t <= 1) {
    return vectorToSegment2D(t, zero2D, [
      [ax, az],
      [bx, bz],
    ]);
  }

  const g0 = sqDiag(
    vectorToSegment2D(
      0,
      [px, pz],
      [
        [ax, az],
        [bx, bz],
      ]
    )
  );
  const g1 = sqDiag(
    vectorToSegment2D(
      1,
      [px, pz],
      [
        [ax, az],
        [bx, bz],
      ]
    )
  );

  return g0 <= g1 ? [ax, az] : [bx, bz];
}

export function getParam(path: Path, characterPosition: Vector): number {
  const closestPoint = findClosestPointOnPath(path, characterPosition);

  const init = {
    distance: 0,
    node: path[0],
    done: false,
  };

  return path.points.reduce((acc, node) => {
    if (acc.done) {
      return acc;
    }

    const distanceToNextNode = distance(acc.node, node);
    const distanceToClosestPoint = distance(acc.node, closestPoint);

    if (distanceToClosestPoint < distanceToNextNode) {
      return {
        done: true,
        distance: acc.distance + distanceToClosestPoint,
        node: closestPoint,
      };
    }

    return {
      done: false,
      node,
      distance: acc.distance + distanceToNextNode,
    };
  }, init).distance;
}

// Returns the position at {param} distance along the path.
export function getPosition(path: Path, param: number): Vector {
  const init = {
    distance: 0,
    node: path[0],
    done: false,
  };

  return path.points.reduce((acc, node) => {
    if (acc.done) {
      return acc;
    }

    const accDist = acc.distance + distance(acc.node, node);

    if (accDist < param) {
      // have not reached param yet
      return {
        distance: accDist,
        node,
        done: false,
      };
    }

    const remainingDistanceToParam = param - acc.distance;
    const v = subtract(acc.node, node);
    const nodeAtParam = subtract(
      acc.node,
      multiply(normalise(v), remainingDistanceToParam)
    );

    return {
      distance: acc.distance,
      node: nodeAtParam,
      done: true,
    };
  }, init).node;
}

export function distanceToSegment(
  [[ax, az], [bx, bz]]: Segment,
  [px, pz]: Vector // point
): number {
  const A = px - ax;
  const B = pz - az;
  const C = bx - ax;
  const D = bz - az;

  const dot = A * C + B * D;
  const lengthSquared = C ** 2 + D ** 2;
  const param = lengthSquared === 0 ? -1 : dot / lengthSquared;

  if (param < 0) {
    const dx = px - ax;
    const dy = pz - az;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  if (param > 1) {
    const dx = px - bx;
    const dy = pz - bz;
    return Math.sqrt(dx ** 2 + dy ** 2);
  }

  const dx = px - (ax + param * C);
  const dy = pz - (az + param * D);

  return Math.sqrt(dx ** 2 + dy ** 2);
}

export function findClosestSegmentToPoint(
  point: Vector,
  path: Path
): [Vector, Vector] {
  const segments = path.points.reduce((acc, vec, index) => {
    return index === 0 ? acc : [...acc, [path[index - 1], vec]];
  }, []);

  const distances = segments.map((seg, index) => {
    return { dist: distanceToSegment(seg, point), index };
  });

  const shortest = distances.reduce(
    (acc, d) => (acc.dist <= d.dist ? acc : d),
    {
      dist: Infinity,
      index: -1,
    }
  );

  return segments[shortest.index];
}

export function findClosestPointOnPath(path: Path, point: Vector): Vector {
  if (path.points.length < 2) {
    return point;
  }
  return findClosestPointOnSegment(
    findClosestSegmentToPoint(point, path),
    point
  );
}
