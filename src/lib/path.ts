import type { Edge, Vector, Path } from "@domain/types";
import { distance, subtract, multiply, normalise } from "./vector";

const zero2D: Vector = [0, 0];

function vectorToEdge2D(
  t: number,
  [px, pz]: Vector,
  [[ax, az], [bx, bz]]: Edge
): Vector {
  return [(1 - t) * ax + t * bx - px, (1 - t) * az + t * bz - pz];
}

function sqDiag([x, z]: Vector) {
  return x ** 2 + z ** 2;
}

export function findEdgeIntersection(
  [a1, a2]: Edge,
  [b1, b2]: Edge
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

function findClosestPointOnEdge(
  [[ax, az], [bx, bz]]: Edge,
  [px, pz]: Vector
): Vector {
  const v: Vector = [bx - ax, bz - az]; // distance from a to b
  const u: Vector = [ax - px, az - pz]; // distance from p to a

  const vu = v[0] * u[0] + v[1] * u[1]; // sum the multiplied distances?
  const vv = sqDiag(v); // dist from a->b squared
  const t = -vu / vv;

  if (t >= 0 && t <= 1) {
    return vectorToEdge2D(t, zero2D, [
      [ax, az],
      [bx, bz],
    ]);
  }

  const g0 = sqDiag(
    vectorToEdge2D(
      0,
      [px, pz],
      [
        [ax, az],
        [bx, bz],
      ]
    )
  );
  const g1 = sqDiag(
    vectorToEdge2D(
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
    node: path.points[0],
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
    node: path.points[0],
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

export function distanceToEdge(
  [[ax, az], [bx, bz]]: Edge,
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

export function findClosestEdgeToPoint(
  point: Vector,
  path: Path
): [Vector, Vector] {
  const initialEdges: Edge[] = [];

  const edges: Edge[] = path.points.reduce(
    (acc: Edge[], vecB: Vector, index: number): Edge[] => {
      if (index === 0) {
        return acc;
      }

      const vecA: Vector = path.points[index - 1];
      const edge: Edge = [vecA, vecB];

      return [...acc, edge];
    },
    initialEdges
  );

  const distances = edges.map((seg, index) => {
    return { dist: distanceToEdge(seg, point), index };
  });

  const shortest = distances.reduce(
    (acc, d) => (acc.dist <= d.dist ? acc : d),
    {
      dist: Infinity,
      index: -1,
    }
  );

  return edges[shortest.index];
}

export function findClosestPointOnPath(path: Path, point: Vector): Vector {
  if (path.points.length < 2) {
    return point;
  }
  return findClosestPointOnEdge(findClosestEdgeToPoint(point, path), point);
}
