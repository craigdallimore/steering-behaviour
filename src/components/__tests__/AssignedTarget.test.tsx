import React from "react";
import { render } from "@test-utils";
import AssignedTarget from "../AssignedTarget";

describe("AssignedTarget", () => {
  const getProps = (changes = {}) => {
    return {
      targetId: null,
      ...changes,
    };
  };

  it("indicates no target is assigned, given no targetId", () => {
    const props = getProps({
      targetId: null,
    });
    const { queryByText } = render(<AssignedTarget {...props} />);

    expect(queryByText("No target has been assigned yet")).not.toBe(null);
    expect(queryByText("Current target")).toBe(null);
  });

  it("indicates a target is assigned, given a targetId", () => {
    const props = getProps({
      targetId: "AAAAAA",
    });
    const { queryByText } = render(<AssignedTarget {...props} />);

    expect(queryByText("No target has been assigned yet")).toBe(null);
    expect(queryByText("Current target")).not.toBe(null);
  });
});
