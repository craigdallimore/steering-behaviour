import React from "react";
import { render, userEvent } from "@test-utils";
import AddBehaviour from "../AddBehaviour";

describe("AddBehaviour", () => {
  const getProps = (changes = {}) => {
    return {
      onBehaviourChange: jest.fn(),
      ...changes,
    };
  };

  test("clicking the Add Behaviour button will show a select with all available behaviours as options", () => {
    const props = getProps();
    const { getByText, container } = render(<AddBehaviour {...props} />);
    userEvent.click(getByText("Add behaviour"));

    const select = container.querySelector("select");
    const cancelButton = getByText("Cancel");
    expect(select).not.toBeNull();
    expect(cancelButton).not.toBeNull();
  });
  test("cancelling behaviour selection will reveal the Add Behaviour button again", () => {
    const props = getProps();
    const { getByText, queryByText, container } = render(
      <AddBehaviour {...props} />
    );
    userEvent.click(getByText("Add behaviour"));

    expect(queryByText("Add behaviour")).toBeNull();

    userEvent.click(getByText("Cancel"));
    expect(container.querySelector("select")).toBeNull();
    expect(queryByText("Cancel")).toBeNull();
    expect(getByText("Add behaviour")).not.toBeNull();
  });

  test.each([
    ["ALIGN"],
    ["ARRIVE"],
    ["COLLISION_AVOIDANCE"],
    ["EVADE"],
    ["FACE"],
    ["FLEE"],
    ["FOLLOW_PATH_CHASE_RABBIT"],
    ["FOLLOW_PATH_PREDICT"],
    ["LOOK_WHERE_YOU_ARE_GOING"],
    ["MATCH_VELOCITY"],
    ["OBSTACLE_AVOIDANCE"],
    ["PURSUE"],
    ["SEEK"],
    ["SEPARATION"],
    ["WANDER"],
  ])(
    "selecting %s, a behaviour will call a callback prop with the expected behaviour",
    (name) => {
      const props = getProps();
      const { getByText, container } = render(<AddBehaviour {...props} />);
      userEvent.click(getByText("Add behaviour"));

      const select = container.querySelector("select") as HTMLSelectElement;
      userEvent.selectOptions(select, [name]);
      expect(props.onBehaviourChange.mock.calls[0][0].name).toBe(name);
    }
  );
});
