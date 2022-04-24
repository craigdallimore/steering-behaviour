import React from "react";
import { render, userEvent } from "@test-utils";
import SelectBehaviour from "../SelectBehaviour";

describe("SelectBehaviour", () => {
  test("Selecting a behaviour will call a callback with the behaviour name", async () => {
    const props = {
      behaviourName: undefined,
      onSelectBehaviour: jest.fn(),
    };

    const { container } = render(<SelectBehaviour {...props} />);
    const select = container.querySelector("select") as HTMLSelectElement;

    await userEvent.selectOptions(select, ["WANDER"]);

    expect(props.onSelectBehaviour).toBeCalledWith("WANDER");
  });
});
