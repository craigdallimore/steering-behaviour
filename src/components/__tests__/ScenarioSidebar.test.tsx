import React from "react";
import { render, userEvent } from "@test-utils";
import ScenarioSidebar from "../ScenarioSidebar";
import { initialState } from "@domain/initialState";

describe("Scenario sidebar", () => {
  const getState = () => {
    const scenario1 = {
      name: "Scenario 1",
      description: "Scenario 1 description",
      characters: new Map(),
      shapes: new Map(),
      paths: new Map(),
    };
    const scenario2 = {
      name: "Scenario 2",
      description: "Scenario 2 description",
      characters: new Map(),
      shapes: new Map(),
      paths: new Map(),
    };

    return {
      ...initialState,
      scenarioMap: new Map([
        ["SC_01", scenario1],
        ["SC_02", scenario2],
      ]),
    };
  };

  it("dispatches an action identifying the chosen scenario", () => {
    const dispatch = jest.fn();
    const state = getState();
    const { getByDataId } = render(<ScenarioSidebar />, {
      dispatch,
      state,
    });
    const select = getByDataId("pick-scenario");

    userEvent.selectOptions(select, ["SC_02"]);

    expect(dispatch).toBeCalledWith({
      type: "SCENARIO_CHANGED",
      payload: "SC_02",
    });
  });

  it("dispatches an action when the reset button is pressed", () => {
    const dispatch = jest.fn();
    const { getByDataId } = render(<ScenarioSidebar />, {
      dispatch,
    });
    const resetButton = getByDataId("reset-button");

    userEvent.click(resetButton);

    expect(dispatch).toBeCalledWith({
      type: "RESET_BUTTON_CLICKED",
    });
  });

  it("lists all the scenarios in the select", () => {
    const state = getState();
    const { getByDataId } = render(<ScenarioSidebar />, {
      state,
    });
    const select = getByDataId("pick-scenario");

    for (let key in state.scenarioMap.keys()) {
      const option = select.querySelector(`[value="${key}"]`);
      expect(option).not.toBe(null);
      expect(option?.textContent).toBe(state.scenarioMap.get(key)?.name);
    }
  });

  it("shows a description of the selected scenario", () => {
    const state = getState();
    state.ui.focussedScenarioId = "SC_02";
    const { getByDataId } = render(<ScenarioSidebar />, {
      state,
    });
    const description = getByDataId("scenario-description");

    expect(description?.textContent).toBe(
      state.scenarioMap.get("SC_02")?.description
    );
  });

  test(`given the scenario is paused
- the play/pause button will indicate that clicking it will unpause
- clicking the play/pause button will unpause the scenario`, () => {
    const dispatch = jest.fn();
    const state = getState();
    state.ui.isPaused = true;
    const { getByDataId } = render(<ScenarioSidebar />, {
      state,
      dispatch,
    });
    const playPauseButton = getByDataId("play-pause-button");
    expect(playPauseButton.textContent).toBe("Start");
    userEvent.click(playPauseButton);
    expect(dispatch).toBeCalledWith({
      type: "PLAY_BUTTON_CLICKED",
    });
  });
  test(`given the scenario is running
- the play/pause button will indicate that clicking it will pause
- clicking the play/pause button will pause the scenario`, () => {
    const dispatch = jest.fn();
    const state = getState();
    state.ui.isPaused = false;
    const { getByDataId } = render(<ScenarioSidebar />, {
      state,
      dispatch,
    });
    const playPauseButton = getByDataId("play-pause-button");
    expect(playPauseButton.textContent).toBe("Pause");
    userEvent.click(playPauseButton);
    expect(dispatch).toBeCalledWith({
      type: "PLAY_BUTTON_CLICKED",
    });
  });
});
