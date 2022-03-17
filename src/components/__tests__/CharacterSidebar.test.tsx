import React from "react";
import { render } from "@test-utils";
import CharacterSidebar from "../CharacterSidebar";
import initBlank from "@domain/scenario_blank";
import { getState } from "@domain/initialState";

describe("CharacterSidebar", () => {
  it('indicates "nothing is selected" when no character is focussed', () => {
    const dispatch = jest.fn();
    const blank = initBlank();
    const state = getState();
    state.scenario = blank;
    state.ui.focussedCharacterId = null;
    const { getByText } = render(<CharacterSidebar />, {
      dispatch,
      state,
    });

    expect(getByText("Nothing selected")).not.toBe(null);
  });
});
