import React from "react";
import { render, userEvent } from "@test-utils";
import RemoveBehaviour from "../RemoveBehaviour";

describe("RemoveBehaviour", () => {
  test("clicking the Remove Behaviour button will dispatch the REMOVE_BEHAVIOUR action with the name as a payload", () => {
    const dispatch = jest.fn();
    const { getByDataId } = render(<RemoveBehaviour name="WANDER" />, {
      dispatch,
    });
    userEvent.click(getByDataId("remove-behaviour"));

    expect(dispatch).toBeCalledWith({
      type: "BEHAVIOUR_REMOVED",
      payload: "WANDER",
    });
  });
});
