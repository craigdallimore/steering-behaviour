import React from "react";
import { render } from "@test-utils";
import Behaviours from "../Behaviours";
import Character from "@domain/character";

describe("Behaviours", () => {
  const getProps = (changes = {}) => {
    return {
      dispatch: jest.fn(),
      character: new Character(),
      ...changes,
    };
  };

  it("shows no behaviour config UI, given the character has no assigned behaviours", () => {
    const props = getProps();
    const { getByDataId } = render(<Behaviours {...props} />);

    expect(props.character.behaviours.length).toBe(0); // sanity
    const list = getByDataId("behaviour-list");
    const items = list.querySelectorAll("li");
    expect(items.length).toBe(0);
  });

  /*
  test.each([])(
    "it shows %s UI given the %s character has the %s behaviour",
    () => {}
  );
  */
});
