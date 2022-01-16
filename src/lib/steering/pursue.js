import { subtract, multiply, add, length } from "../../lib/vector.js";
import { seek } from "./seek.js";
export function pursue(character, target, config) {
    const direction = subtract(target.position, character.position);
    const distance = length(direction);
    const speed = length(character.velocity);
    const prediction = speed <= distance / config.maxPrediction
        ? config.maxPrediction
        : distance / speed;
    const nextTargetPosition = add(target.position, multiply(target.velocity, prediction));
    return seek(character, nextTargetPosition, {
        maxAcceleration: config.maxAcceleration,
    });
}
