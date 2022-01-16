import { length } from "../../lib/vector.js";
import { emptySteering } from "./steering.js";
import { align } from "./align.js";
export function lookWhereYouAreGoing(character, config) {
    if (length(character.velocity) === 0) {
        return emptySteering;
    }
    const orientation = Math.atan2(character.velocity[0], -character.velocity[1]);
    return align(character, orientation, config);
}
