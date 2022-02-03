import React from "react";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";

const ScenarioSidebar = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  return (
    <aside className="scenario-sidebar" aria-label="Scenario sidebar">
      <h1>Steering Behaviours!</h1>
      <fieldset>
        <label htmlFor="pick-scenario">Pick a scenario</label>
        <select data-id="pick-scenario">
          <option>TODO</option>
        </select>
        <span>
          The <em>align behaviour</em> makes an item rotate to match the
          orientation of another item.
        </span>
      </fieldset>

      <button
        type="button"
        id="play-pause"
        onClick={() => {
          dispatch({ type: "PLAY_BUTTON_CLICKED" });
        }}
      >
        {state.ui.isPaused ? "Start" : "Pause"}
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
