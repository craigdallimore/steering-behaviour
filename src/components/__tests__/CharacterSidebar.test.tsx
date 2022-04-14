import React from "react";
import { render } from "@test-utils";
import CharacterSidebar from "../CharacterSidebar";
import initBlank from "@domain/scenario_blank";
import { getState } from "@domain/initialState";
import { fireEvent } from "@testing-library/react";

describe("CharacterSidebar", () => {
  it('indicates "nothing is selected" when no character is focussed', () => {
    const dispatch = jest.fn();
    const blank = initBlank();
    const state = getState("SC_BLANK");
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
    const state = getState("SC_BLANK");
    state.scenario = blank;
    state.ui.focussedCharacterId = "_1";
    const { getByDataId } = render(<CharacterSidebar />, {
      dispatch,
      state,
    });

    const kinematicId = getByDataId("kinematic-id");

    expect(kinematicId.textContent).toContain(state.ui.focussedCharacterId);
  });

  test.each([
    ["orientation", "ORIENTATION_CHANGED"],
    ["rotation", "ROTATION_CHANGED"],
    ["max-acceleration", "MAX_ACCELERATION_CHANGED"],
    ["max-angular-acceleration", "MAX_ANGULAR_ACCELERATION_CHANGED"],
    ["position-x", "POSX_CHANGED"],
    ["position-z", "POSZ_CHANGED"],
    ["vel-x", "VELX_CHANGED"],
    ["vel-z", "VELZ_CHANGED"],
  ])("changing the %s input will dispatch %s", (id, type) => {
    const dispatch = jest.fn();
    const blank = initBlank();
    const state = getState("SC_BLANK");
    state.scenario = blank;
    state.ui.focussedCharacterId = "_1";
    const { container } = render(<CharacterSidebar />, {
      dispatch,
      state,
    });

    const input = container.querySelector(`#${id}`) as HTMLInputElement;

    expect(input).not.toBeNull();

    fireEvent.change(input, { target: { value: 1 } });

    expect(dispatch).toBeCalledWith({
      type,
      payload: 1,
    });
  });
});
