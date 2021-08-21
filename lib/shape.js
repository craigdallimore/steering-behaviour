// @flow

import type { Path, Segment } from "./path.js";
import type { Vector } from "./vector.js";
import { add } from "./vector.js";
import { findSegmentIntersection } from "./path.js";
export type Shape = {
  path: Path,
};
export type ShapeId = string;

type Intersection = {
  segment: Segment,
  point: Vector,
};

export function findIntersection(
  seg: Segment, // Segment, absolutely positioned
  shape: Shape
): Intersection | null {
  return shape.path.points.reduce((acc, point, index) => {
    if (acc) {
      return acc;
    }

    const lastIndex = index === 0 ? shape.path.points.length - 1 : index - 1;
    const [relA, relB]: Segment = [point, shape.path.points[lastIndex]];
    const absoluteEdge = [
      add(shape.path.position, relA),
      add(shape.path.position, relB),
    ];

    const p = findSegmentIntersection(seg, absoluteEdge);
    if (p) {
      return {
        point: p,
        segment: absoluteEdge,
      };
    }

    return null;
  }, null);
}
