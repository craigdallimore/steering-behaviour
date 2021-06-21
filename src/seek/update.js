// @flow

import { type State } from "./state.js";
import { getSeekSteering } from "../steering.js";
import updateKinematic from "./updateKinematic.js";

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

      const steering = getSeekSteering(state.character, state.target);
      const nextCharacter = updateKinematic(steering, state.character, time);

      return {
        ...state,
        character: nextCharacter,
      };
    }

    default:
      return state;
  }
}
