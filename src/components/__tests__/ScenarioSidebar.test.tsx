import React from "react";
import { render, userEvent } from "@test-utils";
import ScenarioSidebar from "../ScenarioSidebar";
import { getScenario, getState as getInitialState } from "@domain/initialState";

describe("Scenario sidebar", () => {
  const getState = (changes = {}) => {
    return {
      ...getInitialState("SC_BLANK"),
      ...changes,
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

    userEvent.selectOptions(select, ["SC_WANDER"]);

    expect(dispatch).toBeCalledWith({
      type: "SCENARIO_CHANGED",
      payload: "SC_WANDER",
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

    state.scenarioIds.forEach((id) => {
      const option = select.querySelector(`[value="${id}"]`);
      expect(option).not.toBe(null);
      expect(option?.textContent).toBe(getScenario(id)?.name);
    });
  });

  it("shows a description of the selected scenario", () => {
    const state = getState({
      ui: {
        ...getInitialState("SC_WANDER").ui,
      },
      scenario: getScenario("SC_WANDER"),
    });
    const { getByDataId } = render(<ScenarioSidebar />, {
      state,
    });
    const description = getByDataId("scenario-description");

    expect(description?.textContent).toBe(
      getScenario("SC_WANDER")?.description
    );
  });

  test(`given the scenario is paused
- the play/pause button will indicate that clicking it will unpause
- clicking the play/pause button will unpause the scenario`, () => {
    const dispatch = jest.fn();
    const state = getState({
      ui: {
        ...getInitialState("SC_BLANK").ui,
        isPaused: true,
      },
    });
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
    const state = getState({
      ui: {
        ...getInitialState("SC_BLANK").ui,
        isPaused: false,
      },
    });
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
