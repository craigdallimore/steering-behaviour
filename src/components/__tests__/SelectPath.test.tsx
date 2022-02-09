import React from "react";
import { render, userEvent } from "@test-utils";
import SelectPath from "../SelectPath";
import { Path, PathId } from "@domain/types";

const path1: Path = {
  label: "Path 1",
  position: [0, 0],
  points: [
    [0, 0],
    [0, 10],
    [10, 10],
    [10, 0],
  ],
};
const path2: Path = {
  label: "Path 2",
  position: [20, 20],
  points: [
    [0, 0],
    [0, 10],
    [10, 10],
    [10, 0],
  ],
};
const path3: Path = {
  label: "Path 3",
  position: [40, 40],
  points: [
    [0, 0],
    [0, 10],
    [10, 10],
    [10, 0],
  ],
};

describe("SelectPath", () => {
  it("shows all the available paths as options", () => {
    const props = {
      pathId: undefined,
      onSelectPath: jest.fn(),
      pathMap: new Map([
        ["p1", path1],
        ["p2", path2],
        ["p3", path3],
      ]) as Map<PathId, Path>,
    };

    const { container } = render(<SelectPath {...props} />);
    const options = container.querySelectorAll(
      "option"
    ) as NodeListOf<HTMLOptionElement>;

    expect(options.length).toBe(3);

    expect(options[0].textContent).toBe(path1.label);
    expect(options[1].textContent).toBe(path2.label);
    expect(options[2].textContent).toBe(path3.label);
  });

  test("Selecting a path will call a callback with the pathId", () => {
    const props = {
      pathId: undefined,
      onSelectPath: jest.fn(),
      pathMap: new Map([
        ["p1", path1],
        ["p2", path2],
        ["p3", path3],
      ]) as Map<PathId, Path>,
    };

    const { container } = render(<SelectPath {...props} />);
    const select = container.querySelector("select") as HTMLSelectElement;

    userEvent.selectOptions(select, ["p2"]);

    expect(props.onSelectPath).toBeCalledWith("p2");
  });
});
