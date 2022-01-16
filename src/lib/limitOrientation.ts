export default function limitOrientation(o: number): number {
  if (o > 2 * Math.PI) {
    return -2 * Math.PI;
  }
  if (o < -2 * Math.PI) {
    return 2 * Math.PI;
  }
  return o;
}
