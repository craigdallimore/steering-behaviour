import React from "react";
import { Behaviour, Character, SteeringBehaviourName } from "@domain/types";
import BehaviourSwitch from "./behaviours/BehaviourSwitch";
import AddBehaviour from "./AddBehaviour";
import RemoveBehaviour from "./RemoveBehaviour";

import { Action } from "@domain/reducer";
import None from "@steering/none";

type Props = {
  character: Character;
  dispatch: (action: Action) => void;
};

const getName = (name: SteeringBehaviourName): string => {
  switch (name) {
    case "ALIGN":
      return "Align";
    case "ARRIVE":
      return "Arrive";
    case "COLLISION_AVOIDANCE":
      return "Collision avoidance";
    case "EVADE":
      return "Evade";
    case "FACE":
      return "Face";
    case "FLEE":
      return "Flee";
    case "FOLLOW_PATH_CHASE_RABBIT":
      return "Follow path (chase the rabbit)";
    case "FOLLOW_PATH_PREDICT":
      return "Follow path (predict)";
    case "LOOK_WHERE_YOU_ARE_GOING":
      return "Look where you are going";
    case "MATCH_VELOCITY":
      return "Match velocity";
    case "OBSTACLE_AVOIDANCE":
      return "Obstacle avoidance";
    case "PURSUE":
      return "Pursue";
    case "SEEK":
      return "Seek";
    case "SEPARATION":
      return "Separation";
    case "WANDER":
      return "Wander";
    default:
      return "No behaviour";
  }
};

const Behaviours = (props: Props) => {
  return (
    <fieldset className="behaviours">
      <legend>Behaviours</legend>
      <ul>
        <li>
          <header>
            <h3>{getName(props.character.behaviour.name)}</h3>
            {props.character.behaviour instanceof None || <RemoveBehaviour />}
          </header>
          <BehaviourSwitch
            behaviour={props.character.behaviour}
            onBehaviourChange={(payload: Behaviour) => {
              props.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload,
              });
            }}
          />
          {props.character.behaviour instanceof None && (
            <AddBehaviour
              onBehaviourChange={(payload: Behaviour) => {
                props.dispatch({
                  type: "BEHAVIOUR_CHANGED",
                  payload,
                });
              }}
            />
          )}
        </li>
      </ul>
    </fieldset>
  );
};

export default Behaviours;
