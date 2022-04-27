import React from "react";
import { render, fireEvent } from "@test-utils";
import * as steering from "@steering/index";
import AlignControls from "@components/behaviours/Align";
import ArriveControls from "@components/behaviours/Arrive";
import CollisionAvoidanceControls from "@components/behaviours/CollisionAvoidance";
import EvadeControls from "@components/behaviours/Evade";
import FaceControls from "@components/behaviours/Face";
import FollowPathChaseRabbitControls from "@components/behaviours/FollowPathChaseRabbit";
import FollowPathPredictControls from "@components/behaviours/FollowPathPredict";
import LookWhereYouAreGoingControls from "@components/behaviours/LookWhereYouAreGoing";
import MatchVelocityControls from "@components/behaviours/MatchVelocity";
import ObstacleAvoidanceControls from "@components/behaviours/ObstacleAvoidance";
import PursueControls from "@components/behaviours/Pursue";
import SeparationControls from "@components/behaviours/Separation";
import WanderControls from "@components/behaviours/Wander";

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

  test('CollisionAvoidance: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [["radius", "radius"]];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.CollisionAvoidance(),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<CollisionAvoidanceControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('Evade: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [["max-prediction", "maxPrediction"]];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.Evade(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<EvadeControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('Face: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [
      // From Align
      ["max-rotation", "maxRotation"],
    ];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.Face(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<FaceControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0].align[property]).toBe(
        value
      );
    });
  });

  test('FollowPathChaseRabbit: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [["path-offset", "pathOffset"]];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.FollowPathChaseRabbit(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(
        <FollowPathChaseRabbitControls {...props} />
      );

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('FollowPathPredict: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [
      ["path-offset", "pathOffset"],
      ["predict-time", "predictTime"],
    ];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.FollowPathPredict(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<FollowPathPredictControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('LookWhereYouAreGoing: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [
      // From Align.
      ["max-rotation", "maxRotation"],
    ];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.LookWhereYouAreGoing(),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<LookWhereYouAreGoingControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0].align[property]).toBe(
        value
      );
    });
  });

  test('MatchVelocity: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [["time-to-target", "timeToTarget"]];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.MatchVelocity(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<MatchVelocityControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('ObstacleAvoidance: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [["avoid-distance", "avoidDistance"]];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.ObstacleAvoidance(),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<ObstacleAvoidanceControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('Pursue: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [["max-prediction", "maxPrediction"]];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.Pursue(""),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<PursueControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('Separation: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [
      ["threshold", "threshold"],
      ["decay-coefficient", "decayCoefficient"],
    ];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.Separation(),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<SeparationControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });

  test('Wander: changing each control will cause "onBehaviourChange" to be called', () => {
    const fields = [
      ["wander-offset", "wanderOffset"],
      ["wander-radius", "wanderRadius"],
      ["wander-rate", "wanderRate"],
    ];
    expect.assertions(fields.length * 2);

    fields.forEach(([id, property]) => {
      const props = {
        behaviour: new steering.Wander(),
        onBehaviourChange: jest.fn(),
      };
      const { container } = render(<WanderControls {...props} />);

      const input = container.querySelector(`#${id}`) as HTMLInputElement;
      expect(input).not.toBeNull();
      const value = Math.random();

      fireEvent.change(input, { target: { value } });

      expect(props.onBehaviourChange.mock.calls[0][0][property]).toBe(value);
    });
  });
});
