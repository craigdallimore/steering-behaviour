import React from "react";
import { render, fireEvent, userEvent } from "@test-utils";
import Behaviours from "../Behaviours";
import * as steering from "@steering/index";
import { Behaviour } from "@domain/types";

describe("Behaviours", () => {
  const getProps = (changes = {}) => {
    return {
      dispatch: jest.fn(),
      behaviours: [] as Array<Behaviour>,
      ...changes,
    };
  };

  it("shows no behaviour config UI, given no assigned behaviours", () => {
    const props = getProps();
    const { getByDataId } = render(<Behaviours {...props} />);

    expect(props.behaviours.length).toBe(0); // sanity
    const list = getByDataId("behaviour-list");
    const items = list.querySelectorAll("li");
    expect(items.length).toBe(0);
  });

  test.each([
    new steering.Align(""),
    new steering.Arrive(""),
    new steering.CollisionAvoidance(),
    new steering.Evade(""),
    new steering.Face(""),
    new steering.Flee(""),
    new steering.FollowPathChaseRabbit("P"),
    new steering.FollowPathPredict("P"),
    new steering.LookWhereYouAreGoing(),
    new steering.MatchVelocity(""),
    new steering.ObstacleAvoidance(),
    new steering.Pursue(""),
    new steering.Seek(""),
    new steering.Separation(),
    new steering.Wander(),
  ])("it shows $name UI given the character has the $name behaviour", (s) => {
    const props = getProps();
    props.behaviours = [s];
    const { getByDataId } = render(<Behaviours {...props} />);
    const item = getByDataId(s.name);

    expect(item).not.toBeNull();
  });

  test("changing a behaviour will dispatch changes ", () => {
    const props = getProps();
    props.behaviours = [new steering.Separation()];
    const { getByDataId } = render(<Behaviours {...props} />);

    const thresholdInput = getByDataId("SEPARATION").querySelector(
      "#threshold"
    ) as HTMLInputElement;

    expect(thresholdInput).not.toBeNull();

    fireEvent.change(thresholdInput, { target: { value: 10 } });

    expect(props.dispatch.mock.calls[0][0].type).toBe("BEHAVIOUR_CHANGED");
  });

  test("adding a behaviour will dispatch changes", async () => {
    const props = getProps();
    const { container, getByText } = render(<Behaviours {...props} />);

    await userEvent.click(getByText("Add behaviour"));

    const select = container.querySelector("select") as HTMLSelectElement;
    await userEvent.selectOptions(select, ["SEPARATION"]);

    expect(props.dispatch.mock.calls[0][0].type).toBe("BEHAVIOUR_ADDED");
  });
});
