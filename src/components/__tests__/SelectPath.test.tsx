import React from "react";
import { render, userEvent } from "@test-utils";
import SelectPath from "../SelectPath";
import { Path, PathId } from "@domain/types";

describe("SelectPath", () => {
  test.skip("Selecting a path will call a callback with the pathId", () => {
    const props = {
      pathId: undefined,
      onSelectPath: jest.fn(),
      pathMap: new Map([]) as Map<PathId, Path>,
    };

    const { container } = render(<SelectPath {...props} />);
    const select = container.querySelector("select") as HTMLSelectElement;

    userEvent.selectOptions(select, ["p1"]);

    expect(props.onSelectPath).toBeCalledWith("WANDER");
  });
});
