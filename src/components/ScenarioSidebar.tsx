import React from "react";
import { Dialog } from "@reach/dialog";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import { ScenarioId, StateConfig } from "@domain/types";
import { getScenario } from "@domain/initialState";
import DebugControl from "./DebugControl";
import qs from "query-string";

const ScenarioSidebar = () => {
  const [showDialog, setShowDialog] = React.useState(false);
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
            const config: StateConfig = qs.parse(window.location.hash);
            window.location.hash = qs.stringify({
              ...config,
              scenarioId: e.target.value,
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
        <DebugControl />
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

      <button
        data-id="about-dialog-button"
        id="about"
        type="button"
        onClick={() => {
          setShowDialog(true);
        }}
      >
        About this app
      </button>
      <Dialog
        data-id="about-dialog"
        aria-label="About this app dialog"
        isOpen={showDialog}
        onDismiss={() => {
          setShowDialog(false);
        }}
      >
        <header>
          <h2>About</h2>
          <button
            type="button"
            onClick={() => {
              setShowDialog(false);
            }}
          >
            Close
          </button>
        </header>

        <p>
          <em>Steering Behaviours!</em> is a zoo and playground for exploring
          steering behaviours as described in the book{" "}
          <a target="_blank" href="https://isbnsearch.org/isbn/0367670569">
            AI for Games
          </a>{" "}
          by Ian Millington.
        </p>
        <p>
          This project uses the{" "}
          <a href="https://opensource.org/licenses/MIT" target="_blank">
            MIT License
          </a>{" "}
          and includes code from{" "}
          <a
            href="https://github.com/craigdallimore/steering-behaviour/blob/main/package.json"
            target="_blank"
          >
            other open source projects
          </a>{" "}
          which carry their respective licenses.
        </p>
        <p>
          <a
            href="https://github.com/craigdallimore/steering-behaviour"
            target="_blank"
          >
            Github
          </a>
        </p>
        <p>
          Copyright &copy; 2022{" "}
          <a href="mailto:decoy9697@gmail.com">Craig Dallimore</a>.
        </p>
      </Dialog>
    </aside>
  );
};

export default ScenarioSidebar;
