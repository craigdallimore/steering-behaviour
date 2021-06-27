// @flow

import { type State } from "./state.js";
import { distance } from "../../lib/vector.js";
import { getSeekSteering, getArriveSteering } from "../../src/steering.js";
import updateKinematic from "../../src/updateKinematic.js";

const TICK = "TICK";
const PLAY_BUTTON_CLICKED = "PLAY_BUTTON_CLICKED";

export type Action =
  | {|
      type: typeof TICK,
      payload: number,
    |}
  | {|
      type: typeof PLAY_BUTTON_CLICKED,
    |};

export function update(state: State, action: Action): State {
  switch (action.type) {
    case "PLAY_BUTTON_CLICKED":
      return {
        ...state,
        isPaused: !state.isPaused,
      };

    case "TICK": {
      if (state.isPaused) {
        return state;
      }
      const time = action.payload;

      const seekSteering = getSeekSteering(state.character, state.target);
      const arriveSteering = getArriveSteering(state.character, state.target);

      const gap = distance(state.target.position, state.character.position);
      const inArrivalZone = gap < 60 || true;

      if (inArrivalZone) {
        return {
          ...state,
          character: arriveSteering
            ? updateKinematic(arriveSteering, state.character, time)
            : state.character,
        };
      }

      return {
        ...state,
        character: updateKinematic(seekSteering, state.character, time),
      };
    }

    default:
      return state;
  }
}
