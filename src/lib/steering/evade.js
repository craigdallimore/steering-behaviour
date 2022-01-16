import { subtract, multiply, add, length } from "../../lib/vector.js";
import { flee } from "./flee.js";
export function evade(character, target, config) {
    const direction = subtract(target.position, character.position);
    const distance = length(direction);
    const speed = length(character.velocity);
    const prediction = speed <= distance / config.maxPrediction
        ? config.maxPrediction
        : distance / speed;
    const nextTargetPosition = add(target.position, multiply(target.velocity, prediction));
    const nextTarget = Object.assign(Object.assign({}, target), { position: nextTargetPosition });
    return flee(character, nextTarget, {
        maxAcceleration: config.maxAcceleration,
    });
}
