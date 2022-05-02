import React from "react";
import { render } from "@test-utils";
import KinematicControls from "../KinematicControls";
import { fireEvent } from "@testing-library/react";
import Character from "@domain/character";

describe("KinematicControls", () => {
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
    const character = new Character();
    const { container } = render(<KinematicControls character={character} />, {
      dispatch,
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
