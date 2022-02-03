import React from "react";
import { render, userEvent } from "@test-utils";
import ScenarioSidebar from "../ScenarioSidebar";
import { initialState } from "@domain/initialState";

describe("Scenario sidebar", () => {
  it("dispatches an action identifying the chosen scenario", () => {
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

    const mockDispatch = jest.fn();
    const mockState = {
      ...initialState,
      scenarioMap: new Map([
        ["SC_01", scenario1],
        ["SC_02", scenario2],
      ]),
    };
    const { getByDataId } = render(<ScenarioSidebar />, {
      dispatch: mockDispatch,
      state: mockState,
    });
    const select = getByDataId("pick-scenario");

    userEvent.selectOptions(select, ["SC_02"]);

    expect(mockDispatch).toBeCalledWith({
      type: "SCENARIO_CHANGED",
      payload: "SC_02",
    });
  });

  it.skip("dispatches an action when the reset button is pressed", () => {});

  it.skip("lists all the scenarios in the select", () => {});

  it.skip("shows a description of the selected scenario", () => {});
});
