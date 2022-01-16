import { add, length, subtract, multiply, normalise, } from "../../lib/vector.js";
import { lookWhereYouAreGoing } from "./lookWhereYouAreGoing.js";
export function separation(character, targets, config, alignConfig) {
    const { angular } = lookWhereYouAreGoing(character, alignConfig);
    return targets.reduce((acc, target) => {
        const direction = subtract(character.position, target.position);
        const distance = length(direction);
        if (distance < config.threshold) {
            const strength = Math.min(config.decayCoefficient / distance ** 2, config.maxAcceleration);
            const normalDirection = normalise(direction);
            const linear = multiply(normalDirection, strength);
            return {
                linear: add(linear, acc.linear),
                angular,
            };
        }
        return acc;
    }, {
        linear: [0, 0],
        angular,
    });
}
