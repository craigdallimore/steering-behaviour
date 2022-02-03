import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import { initialState } from "@domain/initialState";
import React from "react";
import { render, userEvent } from "@test-utils";
import ScenarioSidebar from "../ScenarioSidebar";

describe("Scenario sidebar", () => {
  it.skip("dispatches an action identifying the chosen scenario", () => {
    const mockDispatch = jest.fn();
    const { getByDataId } = render(
      <DispatchContext.Provider value={mockDispatch}>
        <StateContext.Provider value={initialState}>
          <ScenarioSidebar />
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
    const select = getByDataId("pick-scenario");

    userEvent.selectOptions(select, ["SC_01"]);

    expect(mockDispatch).toBeCalledWith({
      type: "SCENARIO_CHANGED",
      payload: "SC_01",
    });
  });

  it.skip("dispatches an action when the reset button is pressed", () => {});

  it.skip("lists all the scenarios in the select", () => {});

  it.skip("shows a description of the selected scenario", () => {});
});
