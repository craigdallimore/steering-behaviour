import { useImmerReducer } from "use-immer";
import { enableMapSet } from "immer";
import React from "react";
import Header from "./Header.js";
import Canvas from "./Canvas.js";
import Behaviours from "./Behaviours.js";
import NumericField from "./NumericField.js";
import useRAF from "../hooks/useRAF.js";
import { reducer } from "@domain/reducer.js";
import { initialState } from "@domain/initialState.js";
import type { Behaviour, Character, CharacterId } from "@domain/types.js";
import getFocussedCharacter from "@lib/getFocussedCharacter.js";
import DispatchContext from "./DispatchContext.js";
import StateContext from "./StateContext.js";
import "../css/main.css";

enableMapSet(); // immer can understand Map and Set

const getClassname = (behaviour: Behaviour): string => {
  return "targetId" in behaviour ? "has-target" : "";
};

const Main = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  const focussedCharacter = getFocussedCharacter(state);

  const className = focussedCharacter
    ? getClassname(focussedCharacter.behaviour)
    : "";

  const legendText = state.focussedCharacterId
    ? `Character ${state.focussedCharacterId}`
    : "Character not selected";

  useRAF((tick: number) => {
    dispatch({ type: "TICK", payload: tick });
  });

  return (
    <>
      <Header/>
      <main>
        <Canvas state={state} dispatch={dispatch} />
      </main>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <form className={className}>
            <fieldset>
              <legend>{legendText}</legend>

              <label htmlFor="orientation">Orientation</label>
              <input
                id="orientation"
                type="range"
                min="-2"
                max="2"
                step="0.1"
                value={focussedCharacter?.kinematic.orientation.toString()}
                onChange={(e) => {
                  if (e.target instanceof HTMLInputElement) {
                    dispatch({
                      type: "ORIENTATION_CHANGED",
                      payload: parseFloat(e.target.value),
                    });
                  }
                }}
              />

              <NumericField
                label="Rotation"
                id="rotation"
                value={focussedCharacter?.kinematic.rotation}
                onChange={(payload) => {
                  dispatch({
                    type: "ROTATION_CHANGED",
                    payload,
                  });
                }}
              />

              <NumericField
                label="Horizontal position"
                id="position-x"
                min={0}
                max={800}
                value={focussedCharacter?.kinematic.position[0]}
                onChange={(payload) => {
                  dispatch({
                    type: "POSX_CHANGED",
                    payload,
                  });
                }}
              />

              <NumericField
                label="Vertical position"
                id="position-z"
                min={0}
                max={800}
                value={focussedCharacter?.kinematic.position[1]}
                onChange={(payload) => {
                  dispatch({
                    type: "POSZ_CHANGED",
                    payload,
                  });
                }}
              />

              <NumericField
                label="Horizontal velocity"
                id="vel-x"
                value={focussedCharacter?.kinematic.velocity[0]}
                onChange={(payload) => {
                  dispatch({
                    type: "VELX_CHANGED",
                    payload,
                  });
                }}
              />

              <NumericField
                label="Vertical velocity"
                id="vel-z"
                value={focussedCharacter?.kinematic.velocity[1]}
                onChange={(payload) => {
                  dispatch({
                    type: "VELZ_CHANGED",
                    payload,
                  });
                }}
              />
            </fieldset>
            {focussedCharacter && (
              <Behaviours dispatch={dispatch} character={focussedCharacter} />
            )}

            <button
              type="button"
              id="play-pause"
              onClick={() => {
                dispatch({ type: "PLAY_BUTTON_CLICKED" });
              }}
            >
              {state.isPaused ? "Play" : "Pause"}
            </button>
            <button
              type="button"
              id="reset"
              onClick={() => {
                dispatch({ type: "RESET_BUTTON_CLICKED" });
              }}
            >
              Reset
            </button>
          </form>
        </StateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
};

export default Main;
