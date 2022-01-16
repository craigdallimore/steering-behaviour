import { getParam, getPosition } from "../../lib/path.js";
import { add, multiply } from "../../lib/vector.js";
import { seek } from "./seek.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";
export function predictiveFollow(character, path, config, alignConfig) {
    // Find the predicted future location
    const futurePos = add(character.position, multiply(character.velocity, config.predictTime));
    // Find the predicted position on the path
    const currentParam = getParam(path, futurePos);
    // Offset it
    const targetParam = currentParam + config.pathOffset;
    // Get the target position
    const targetPosition = getPosition(path, targetParam);
    const { angular } = lookWhereYouAreGoing(character, alignConfig);
    const { linear } = seek(character, targetPosition, {
        maxAcceleration: config.maxAcceleration,
    });
    return { angular, linear };
}
