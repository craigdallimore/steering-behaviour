import { Behaviour } from "@domain/types";

export default function makeUpdatedClone(
  orig: Behaviour,
  field: string,
  value: number | string | Behaviour
) {
  const proto = Object.getPrototypeOf(orig);
  const clone = Object.assign(Object.create(proto), orig);
  clone[field] = value;
  return clone;
}
