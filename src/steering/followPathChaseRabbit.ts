import { AbstractBehaviour } from "./abstractBehaviour";
import { getParam, getPosition } from "@lib/path";
import type { PathId, Kinematic, Path, Steering } from "@domain/types";
import Seek from "./seek";

export default class FollowPathChaseRabbit extends AbstractBehaviour {
  readonly name = "FOLLOW_PATH_CHASE_RABBIT";
  pathId: PathId;
  pathOffset: number;
  seek: Seek;
  constructor(pathId: PathId, pathOffset?: number) {
    super();
    this.pathId = pathId;
    // Holds the distance along the path to generate the target. Can be negative
    // if the character is to move along the reverse direction
    this.pathOffset = pathOffset ?? 30;
    this.seek = new Seek("");
  }
  calculate(kinematic: Kinematic, path: Path): Steering {
    // Find the current position on the path
    const currentParam = getParam(path, kinematic.position);

    // Offset it
    const targetParam = currentParam + this.pathOffset;

    // Get the target position
    const targetPosition = getPosition(path, targetParam);

    this.debug.points = [targetPosition];

    const { linear } = this.seek.calculate(kinematic, targetPosition);
    return { angular: 0, linear };
  }
}
