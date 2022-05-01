import type {
  Collision,
  Edge,
  Intersection,
  Vector,
  Shape,
} from "@domain/types";
import { add, subtract, normalise, distance } from "@decoy9697/vector";
import { findEdgeIntersection } from "./path";

type Init = {
  dist: number;
  int: Intersection | null;
};

function getNormals([a, b]: Edge): [Vector, Vector] {
  const [dx, dy] = subtract(a, b);
  return [
    [-dy, dx],
    [dy, -dx],
  ];
}

export function findAllIntersections(
  edge: Edge, // Edge, absolutely positioned
  shapes: Array<Shape>
): Array<Intersection> {
  return shapes.reduce(function shapesReducer(
    acc: Array<Intersection>,
    shape: Shape
  ): Array<Intersection> {
    return shape.path.points.reduce(function pointsReducer(
      innerAcc: Intersection[],
      point,
      index
    ): Intersection[] {
      const lastIndex = index === 0 ? shape.path.points.length - 1 : index - 1;
      const [relA, relB]: Edge = [point, shape.path.points[lastIndex]];
      const absoluteEdge: Edge = [
        add(shape.path.position, relA),
        add(shape.path.position, relB),
      ];

      const p = findEdgeIntersection(edge, absoluteEdge);

      if (p) {
        const inter: Intersection = {
          point: p,
          edge: absoluteEdge,
        };
        return [...innerAcc, inter];
      }

      return innerAcc;
    },
    acc);
  },
  []);
}

// If the edge is from point A to point B, the first intersection is the one
// closest to point A
export function findFirstIntersection(
  edge: Edge,
  shapes: Array<Shape>
): Intersection | null {
  const intersections = findAllIntersections(edge, shapes);

  if (intersections.length === 0) {
    return null;
  }

  const a = edge[0];

  const init: Init = { int: null, dist: Infinity };

  return intersections.reduce(function findFirstReducer(
    acc,
    int: Intersection
  ) {
    const dist = distance(a, int.point);
    return dist < acc.dist ? { int, dist } : acc;
  },
  init).int;
}

export default function getCollision(
  edge: Edge,
  shapes: Array<Shape>
): Collision | null {
  const intersection = findFirstIntersection(edge, shapes);

  if (intersection) {
    // Here we get the normals for the intersected edge
    const normals = getNormals(intersection.edge);

    return {
      position: intersection.point,
      normal: normalise(normals[0]),
    };
  }

  return null;
}
