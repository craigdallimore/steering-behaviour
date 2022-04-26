import React from "react";
import { render, userEvent } from "@test-utils";
import ScenarioSidebar from "../ScenarioSidebar";
import { getScenario, getState as getInitialState } from "@domain/initialState";

describe("Scenario sidebar", () => {
  const getState = (changes = {}) => {
    return {
      ...getInitialState({ scenarioId: "SC_BLANK" }),
      ...changes,
    };
  };

  it("dispatches an action identifying the chosen scenario", async () => {
    const dispatch = jest.fn();
    const state = getState();
    const { getByDataId } = render(<ScenarioSidebar />, {
      dispatch,
      state,
    });
    const select = getByDataId("pick-scenario");

    await userEvent.selectOptions(select, ["SC_WANDER"]);

    expect(dispatch).toBeCalledWith({
      type: "SCENARIO_CHANGED",
      payload: "SC_WANDER",
    });
  });

  it("dispatches an action when the reset button is pressed", async () => {
    const dispatch = jest.fn();
    const { getByDataId } = render(<ScenarioSidebar />, {
      dispatch,
    });
    const resetButton = getByDataId("reset-button");

    await userEvent.click(resetButton);

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
        ...getInitialState({ scenarioId: "SC_WANDER" }).ui,
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
- clicking the play/pause button will unpause the scenario`, async () => {
    const dispatch = jest.fn();
    const state = getState({
      ui: {
        ...getInitialState({ scenarioId: "SC_BLANK" }).ui,
        isPaused: true,
      },
    });
    const { getByDataId } = render(<ScenarioSidebar />, {
      state,
      dispatch,
    });
    const playPauseButton = getByDataId("play-pause-button");
    expect(playPauseButton.textContent).toBe("Start");
    await userEvent.click(playPauseButton);
    expect(dispatch).toBeCalledWith({
      type: "PLAY_BUTTON_CLICKED",
    });
  });
  test(`given the scenario is running
- the play/pause button will indicate that clicking it will pause
- clicking the play/pause button will pause the scenario`, async () => {
    const dispatch = jest.fn();
    const state = getState({
      ui: {
        ...getInitialState({ scenarioId: "SC_BLANK" }).ui,
        isPaused: false,
      },
    });
    const { getByDataId } = render(<ScenarioSidebar />, {
      state,
      dispatch,
    });
    const playPauseButton = getByDataId("play-pause-button");
    expect(playPauseButton.textContent).toBe("Pause");
    await userEvent.click(playPauseButton);
    expect(dispatch).toBeCalledWith({
      type: "PLAY_BUTTON_CLICKED",
    });
  });
  test('clicking the "About" button will reveal a modal', async () => {
    const dispatch = jest.fn();
    const state = getState();
    const { getByDataId, queryByDataId } = render(<ScenarioSidebar />, {
      dispatch,
      state,
    });
    const aboutButton = getByDataId("about-dialog-button");

    expect(queryByDataId("about-dialog")).toBe(null);

    await userEvent.click(aboutButton);

    expect(getByDataId("about-dialog")).not.toBe(null);
  });
});
