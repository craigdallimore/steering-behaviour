// @flow

export type Vector = [number, number];

export function add([ax, az]: Vector, [bx, bz]: Vector): Vector {
  return [ax + bx, az + bz];
}

export function subtract([ax, az]: Vector, [bx, bz]: Vector): Vector {
  return [ax - bx, az - bz];
}

export function multiply([x, z]: Vector, i: number): Vector {
  return [x * i, z * i];
}

export function length([x, z]: Vector): number {
  return Math.sqrt(x * x + z * z);
}
