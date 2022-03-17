import React from "react";
import { render, fireEvent } from "@test-utils";
import NumericField from "../NumericField";

describe("NumericField", () => {
  const getProps = (changes = {}) => {
    return {
      id: "ID",
      label: "LABEL",
      onChange: jest.fn(),
      ...changes,
    };
  };

  test("the input displays the given value fixed to two decimal places", () => {
    const props = getProps({
      value: 10 / 3,
    });
    const { container } = render(<NumericField {...props} />);

    const input = container.querySelector("input") as HTMLInputElement;

    expect(input.value).toBe("3.33"); // not recurring
  });

  test("a non fixed value can by typed into the input, and when blurred it becomes fixed again", () => {
    const props = getProps({
      value: 10 / 3,
    });
    const { container, rerender } = render(<NumericField {...props} />);

    const input = container.querySelector("input") as HTMLInputElement;

    expect(input.value).toBe("3.33"); // not recurring

    fireEvent.focus(input);

    expect(props.onChange).toBeCalledWith(3.33); // ensure the app state matches the input

    expect(input.value).toBe(`${10 / 3}`); // 3.33333333335

    fireEvent.change(input, { target: { value: 4.44444 } });

    expect(props.onChange).toBeCalledWith(4.44444); // app state matches user input

    const nextProps = getProps({
      value: 4.44444,
    });

    rerender(<NumericField {...nextProps} />);

    fireEvent.blur(input);

    expect(input.value).toBe("4.44");
  });
});
