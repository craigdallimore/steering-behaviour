import { subtract, multiply, normalise } from "../../lib/vector.js";
export function seek(character, targetPosition, config) {
    const linear = multiply(normalise(subtract(targetPosition, character.position)), config.maxAcceleration);
    const angular = 0;
    return {
        angular,
        linear,
    };
}
