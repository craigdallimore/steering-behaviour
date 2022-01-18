// https://geekrodion.medium.com/linear-algebra-vectors-f7610e9a0f23

export type Vector = [x: number, z: number];

export function add([ax, az]: Vector, [bx, bz]: Vector): Vector {
  return [ax + bx, az + bz];
}

export function subtract([ax, az]: Vector, [bx, bz]: Vector): Vector {
  return [ax - bx, az - bz];
}

export function multiply([x, z]: Vector, i: number): Vector {
  return [x * i, z * i];
}

export function dot([ax, az]: Vector, [bx, bz]: Vector): number {
  return ax * bx + az * bz;
}

export function cross([ax, az]: Vector, [bx, bz]: Vector): number {
  return ax * bz - az * bx;
}

export function length([x, z]: Vector): number {
  return Math.hypot(x, z);
}

export function vectorToRadians([x, z]: Vector): number {
  return Math.atan2(z, x);
}

export function degreesToVector(angle: number): Vector {
  const theta = (angle * Math.PI) / 180;
  return [Math.cos(theta), Math.sin(theta)];
}

export function radiansToVector(rad: number): Vector {
  return [Math.sin(rad), Math.cos(rad)];
}

export function normalise(v: Vector): Vector {
  const l = length(v);
  return l === 0 ? v : multiply(v, 1 / length(v));
}

export function distance(v1: Vector, v2: Vector): number {
  return length(subtract(v1, v2));
}
