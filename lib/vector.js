// @flow

export type Vector = [number, number];

export function add([ax, az]: Vector, [bx, bz]: Vector): Vector {
  return [ax + bx, az + bz];
}

export function subtract([ax, az]: Vector, [bx, bz]: Vector): Vector {
  return [ax - bx, az - bz];
}
