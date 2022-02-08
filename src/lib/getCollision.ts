import { distance, subtract, normalise } from "@lib/vector";
import type { Edge, Vector, Shape } from "@domain/types";

import { findFirstIntersection } from "@lib/shape";

type Collision = {
  position: Vector;
  normal: Vector;
};

function getNormals([a, b]: Edge): [Vector, Vector] {
  const [dx, dy] = subtract(a, b);
  return [
    [-dy, dx],
    [dy, -dx],
  ];
}

export default function getCollision(
  edge: Edge,
  shape: Shape
): Collision | null {
  const intersection = findFirstIntersection(edge, shape);

  if (intersection) {
    // Here we get the normals for the intersected edge
    const normals = getNormals(intersection.edge);

    // We want the normal on the same side as the kinematic
    const closestNormal =
      distance(normals[0], edge[0]) < distance(normals[1], edge[0])
        ? normals[1]
        : normals[0];

    // Let's define the normal as a vector relative to the intersection point,
    // with a distance of 1, on the kinematic side of the intersection.

    return {
      position: intersection.point,
      normal: normalise(closestNormal),
    };
  }

  return null;
}
