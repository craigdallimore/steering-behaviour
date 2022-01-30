export default function makeUpdatedClone<Behaviour>(
  orig: Behaviour,
  field: string,
  value: number
) {
  const proto = Object.getPrototypeOf(orig);
  const clone = Object.assign(Object.create(proto), orig);
  clone[field] = value;
  return clone;
}
