import React from "react";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import getFocussedScenario from "@lib/getFocussedScenario";
import { Scenario, ScenarioId } from "@domain/types";

const ScenarioSidebar = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  const focussedScenario = getFocussedScenario(state);

  return (
    <aside className="scenario-sidebar" aria-label="Scenario sidebar">
      <h1>Steering Behaviours!</h1>
      <fieldset>
        <label htmlFor="pick-scenario">Pick a scenario</label>
        <select
          data-id="pick-scenario"
          value={state.ui.focussedScenarioId || undefined}
          onChange={(e) => {
            dispatch({
              type: "SCENARIO_CHANGED",
              payload: e.target.value as ScenarioId,
            });
          }}
        >
          {[...state.scenarioMap].map(
            ([id, scenario]: [id: ScenarioId, scenario: Scenario]) => (
              <option key={id} value={id}>
                {scenario.name}
              </option>
            )
          )}
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
