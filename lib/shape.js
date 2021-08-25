// @flow

import type { Path, Segment } from "./path.js";
import type { Vector } from "./vector.js";
import { add, distance } from "./vector.js";
import { findSegmentIntersection } from "./path.js";
export type Shape = {
  path: Path,
};
export type ShapeId = string;

type Intersection = {
  segment: Segment,
  point: Vector,
};

export function findAllIntersections(
  seg: Segment, // Segment, absolutely positioned
  shape: Shape
): Array<Intersection> {
  return shape.path.points.reduce((acc, point, index) => {
    const lastIndex = index === 0 ? shape.path.points.length - 1 : index - 1;
    const [relA, relB]: Segment = [point, shape.path.points[lastIndex]];
    const absoluteEdge = [
      add(shape.path.position, relA),
      add(shape.path.position, relB),
    ];

    const p = findSegmentIntersection(seg, absoluteEdge);
    return p
      ? [
          ...acc,
          {
            point: p,
            segment: absoluteEdge,
          },
        ]
      : acc;
  }, []);
}

// If the segment is from point A to point B, the first intersection is the one
// closest to point A
export function findFirstIntersection(
  seg: Segment,
  shape: Shape
): Intersection | null {
  const intersections = findAllIntersections(seg, shape);

  if (intersections.length === 0) {
    return null;
  }

  const a = seg[0];

  return intersections.reduce(
    (acc, int: Intersection) => {
      const dist = distance(a, int.point);
      return dist < acc.dist ? { int, dist } : acc;
    },
    { int: null, dist: Infinity }
  ).int;
}
