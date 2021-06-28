// @flow

import { type State } from "./state.js";
import { getAlignSteering } from "../../src/steering.js";
import updateKinematic from "../../src/updateKinematic.js";

const TICK = "TICK";

export type Action = {|
  type: typeof TICK,
  payload: number,
|};

export function update(state: State, action: Action): State {
  switch (action.type) {
    case "TICK": {
      const time = action.payload;

      const alignSteering = getAlignSteering(state.character, state.target);

      if (!alignSteering) {
        return state;
      }

      return {
        ...state,
        character: updateKinematic(alignSteering, state.character, time),
      };
    }

    default:
      return state;
  }
}
