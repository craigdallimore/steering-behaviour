import React from "react";
import { render } from "@test-utils";
import CharacterSidebar from "../CharacterSidebar";
import initBlank from "@domain/scenario_blank";
import { getState } from "@domain/initialState";

describe("CharacterSidebar", () => {
  it('indicates "nothing is selected" when no character is focussed', () => {
    const dispatch = jest.fn();
    const blank = initBlank();
    const state = getState({ scenarioId: "SC_BLANK" });
    state.scenario = blank;
    state.ui.focussedCharacterId = null;
    const { getByText } = render(<CharacterSidebar />, {
      dispatch,
      state,
    });

    expect(getByText("Nothing selected")).not.toBe(null);
  });

  test("given a character is focussed, the character id is displayed", () => {
    const dispatch = jest.fn();
    const blank = initBlank();
    const state = getState({ scenarioId: "SC_BLANK" });
    state.scenario = blank;
    state.ui.focussedCharacterId = "_1";
    const { getByDataId } = render(<CharacterSidebar />, {
      dispatch,
      state,
    });

    const kinematicId = getByDataId("kinematic-id");

    expect(kinematicId.textContent).toContain(state.ui.focussedCharacterId);
  });
});
