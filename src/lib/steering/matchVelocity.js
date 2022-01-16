import { length, subtract, multiply, normalise } from "../../lib/vector.js";
export function matchVelocity(character, target, config) {
    const angular = 0;
    const linear = subtract(target.velocity, character.velocity);
    const dividedLinear = multiply(linear, 1 / config.timeToTarget);
    const finalLinear = length(dividedLinear) > config.maxAcceleration
        ? multiply(normalise(linear), config.maxAcceleration)
        : linear;
    return {
        angular,
        linear: finalLinear,
    };
}
