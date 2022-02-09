import React from "react";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import { ScenarioId } from "@domain/types";
import { getScenario } from "@domain/initialState";

const ScenarioSidebar = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  const focussedScenario = state.scenario;

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
          {...state.scenarioIds.map((id: ScenarioId) => (
            <option key={id} value={id}>
              {getScenario(id)?.name}
            </option>
          ))}
        </select>
        <span data-id="scenario-description">
          {focussedScenario?.description}
        </span>
      </fieldset>

      <button
        data-id="play-pause-button"
        type="button"
        id="play-pause"
        onClick={() => {
          dispatch({ type: "PLAY_BUTTON_CLICKED" });
        }}
      >
        {state.ui.isPaused ? "Start" : "Pause"}
      </button>
      <button
        data-id="reset-button"
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
