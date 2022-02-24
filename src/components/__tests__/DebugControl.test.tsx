import React from "react";
import { render, userEvent } from "@test-utils";
import DebugControl from "../DebugControl";
import { getState as getInitialState } from "@domain/initialState";

describe("Debug Control", () => {
  const getState = (changes = {}) => {
    return {
      ...getInitialState(),
      ...changes,
    };
  };

  it("dispatches an action when clicked", () => {
    const dispatch = jest.fn();
    const state = getState();
    const { container } = render(<DebugControl />, {
      dispatch,
      state,
    });
    const input = container.querySelector("input") as HTMLInputElement;

    userEvent.click(input);

    expect(dispatch).toBeCalledWith({
      type: "DEBUG_MODE_CHANGED",
    });
  });

  it("reflects the state", () => {
    const dispatch = jest.fn();
    const state = getState();
    state.ui.isDebugMode = true;
    const { container, rerender } = render(<DebugControl />, {
      dispatch,
      state,
    });
    const input = container.querySelector("input") as HTMLInputElement;

    expect(input.checked).toBe(true);

    state.ui.isDebugMode = false;

    rerender(<DebugControl />);

    expect(input.checked).toBe(false);
  });
});
