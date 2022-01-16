import { subtract, multiply, normalise } from "../../lib/vector.js";
export function flee(character, target, config) {
    const linear = multiply(normalise(subtract(character.position, target.position)), config.maxAcceleration);
    const angular = 0;
    return {
        angular,
        linear,
    };
}
