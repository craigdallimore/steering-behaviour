import { AbstractBehaviour } from "./abstractBehaviour.js";
import { getParam, getPosition } from "@lib/path.js";
import { Kinematic, Path, PathId, Steering } from "@domain/types.js";
import { add, multiply } from "@lib/vector.js";
import Seek from "./seek.js";

export default class FollowPathPredict extends AbstractBehaviour {
  readonly name = "FOLLOW_PATH_PREDICT";
  pathId: PathId;
  pathOffset: number;
  predictTime: number;
  seek: Seek;
  constructor(pathId: PathId, pathOffset?: number, predictTime?: number) {
    super();
    this.pathId = pathId;
    // Holds the distance along the path to generate the target. Can be negative
    // if the character is to move along the reverse direction
    this.pathOffset = pathOffset || 30;
    // Holds the time in the future to predict the character position
    this.predictTime = predictTime || 0.1;
    this.seek = new Seek("");
  }
  calculate(kinematic: Kinematic, path: Path): Steering {
    // Find the predicted future location
    const futurePos = add(
      kinematic.position,
      multiply(kinematic.velocity, this.predictTime)
    );

    // Find the predicted position on the path
    const currentParam = getParam(path, futurePos);

    // Offset it
    const targetParam = currentParam + this.pathOffset;

    // Get the target position
    const targetPosition = getPosition(path, targetParam);

    const { linear } = this.seek.calculate(kinematic, targetPosition);
    return { angular: 0, linear };
  }
}