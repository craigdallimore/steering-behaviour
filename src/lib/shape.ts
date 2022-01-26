import type { Edge, Intersection, Shape } from "@domain/types.js";
import { add, distance } from "./vector.js";
import { findEdgeIntersection } from "./path.js";

export function findAllIntersections(
  seg: Edge, // Edge, absolutely positioned
  shape: Shape
): Array<Intersection> {
  return shape.path.points.reduce(
    (acc: Intersection[], point, index): Intersection[] => {
      const lastIndex = index === 0 ? shape.path.points.length - 1 : index - 1;
      const [relA, relB]: Edge = [point, shape.path.points[lastIndex]];
      const absoluteEdge: Edge = [
        add(shape.path.position, relA),
        add(shape.path.position, relB),
      ];

      const p = findEdgeIntersection(seg, absoluteEdge);

      if (p) {
        const inter: Intersection = {
          point: p,
          edge: absoluteEdge,
        };
        return [...acc, inter];
      }

      return acc;
    },
    []
  );
}

type Init = {
  dist: number;
  int: Intersection | null;
};

// If the edge is from point A to point B, the first intersection is the one
// closest to point A
export function findFirstIntersection(
  edge: Edge,
  shape: Shape
): Intersection | null {
  const intersections = findAllIntersections(edge, shape);

  if (intersections.length === 0) {
    return null;
  }

  const a = edge[0];

  const init: Init = { int: null, dist: Infinity };

  return intersections.reduce((acc, int: Intersection) => {
    const dist = distance(a, int.point);
    return dist < acc.dist ? { int, dist } : acc;
  }, init).int;
}
