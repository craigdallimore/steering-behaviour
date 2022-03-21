import React from "react";
import { render, fireEvent } from "@test-utils";
import * as steering from "@steering/index";
import AlignControls from "@components/behaviours/Align";
import ArriveControls from "@components/behaviours/Arrive";
//import CollisionAvoidanceControls from "@components/behaviours/CollisionAvoidance";
//import EvadeControls from "@components/behaviours/Evade";
//import FaceControls from "@components/behaviours/Face";
//import FollowPathChaseRabbitControls from "@components/behaviours/FollowPathChaseRabbit";
//import FollowPathPredictControls from "@components/behaviours/FollowPathPredict";
//import LookWhereYouAreGoingControls from "@components/behaviours/LookWhereYouAreGoing";
//import MatchVelocityControls from "@components/behaviours/MatchVelocity";
//import ObstacleAvoidanceControls from "@components/behaviours/ObstacleAvoidance";
//import PursueControls from "@components/behaviours/Pursue";
//import SeparationControls from "@components/behaviours/Separation";
//import WanderControls from "@components/behaviours/Wander";

describe("Behaviour controls", () => {
  test('Align: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [
      ["max-rotation", "maxRotation"],
      ["deceleration-tolerance", "decelerationTolerance"],
      ["align-tolerance", "alignTolerance"],
      ["time-to-target", "timeToTarget"],
    ];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.Align(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<AlignControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('Arrive: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [
      ["target-radius", "targetRadius"],
      ["slow-radius", "slowRadius"],
      ["time-to-target", "timeToTarget"],
    ];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.Arrive(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<ArriveControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  /*
    {
      Behaviour: new steering.CollisionAvoidance(),
      Controls: CollisionAvoidanceControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.Evade(""),
      Controls: EvadeControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.Face(""),
      Controls: FaceControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.FollowPathChaseRabbit(""),
      Controls: FollowPathChaseRabbitControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.FollowPathPredict(""),
      Controls: FollowPathPredictControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.LookWhereYouAreGoing(),
      Controls: LookWhereYouAreGoingControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.MatchVelocity(""),
      Controls: MatchVelocityControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.ObstacleAvoidance(),
      Controls: ObstacleAvoidanceControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.Pursue(""),
      Controls: PursueControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.Separation(),
      Controls: SeparationControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    {
      Behaviour: new steering.Wander(),
      Controls: WanderControls,
      fields: [
        ["max-rotation", "maxRotation"],
        ["deceleration-tolerance", "decelerationTolerance"],
        ["align-tolerance", "alignTolerance"],
        ["time-to-target", "timeToTarget"],
      ],
    },
    */
});
