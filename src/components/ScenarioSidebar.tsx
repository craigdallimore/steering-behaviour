import React from "react";
import DispatchContext from "@components/DispatchContext.js";
import StateContext from "@components/StateContext.js";

const ScenarioSidebar = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  return (
    <aside className="scenario-sidebar">
      <h1>Steering Behaviours!</h1>
      <fieldset>
        <label htmlFor="pick-scenario">Pick a scenario</label>
        <select id="pick-scenario">
          <option>TODO</option>
        </select>
        <span>
          The <em>align behaviour</em> makes a character rotate to match the
          orientation of another character.
        </span>
      </fieldset>

      <button
        type="button"
        id="play-pause"
        onClick={() => {
          dispatch({ type: "PLAY_BUTTON_CLICKED" });
        }}
      >
        {state.isPaused ? "Start" : "Pause"}
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
    </aside>
  );
};

export default ScenarioSidebar;
