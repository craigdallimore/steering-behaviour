import React from "react";
import { Behaviour, Character } from "@domain/types";
import AlignControls from "./behaviours/Align";
import ArriveControls from "./behaviours/Arrive";
import { Action } from "@domain/reducer";

type Props = {
  character: Character;
  dispatch: (action: Action) => void;
};

type ItemProps = {
  behaviour: Behaviour;
  dispatch: (action: Action) => void;
};

const BehaviourItem = (itemProps: ItemProps) => {
  const getBehaviourSpecificControls = (
    behaviour: Behaviour
  ): React.ReactNode => {
    switch (behaviour.name) {
      case "ALIGN":
        return (
          <AlignControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "ARRIVE":
        return (
          <ArriveControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "COLLISION_AVOIDANCE":
      case "EVADE":
      case "FACE":
      case "FLEE":
      case "FOLLOW_PATH_CHASE_RABBIT":
      case "FOLLOW_PATH_PREDICT":
      case "LOOK_WHERE_YOU_ARE_GOING":
      case "MATCH_VELOCITY":
      case "OBSTACLE_AVOIDANCE":
      case "PURSUE":
      case "SEEK":
      case "SEPARATION":
      case "WANDER":
        return <h4>controls</h4>;
      default:
        return null;
    }
  };

  return (
    <li>
      <h3>{itemProps.behaviour.name}</h3>
      {getBehaviourSpecificControls(itemProps.behaviour)}
    </li>
  );
};

const Behaviours = (props: Props) => {
  return (
    <fieldset className="behaviours">
      <legend>Behaviours</legend>
      <ul>
        <BehaviourItem
          dispatch={props.dispatch}
          behaviour={props.character.behaviour}
        />
      </ul>
      <h4>TODO: add-behaviour controls</h4>
    </fieldset>
  );
};

export default Behaviours;
