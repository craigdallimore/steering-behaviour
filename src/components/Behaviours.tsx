import React from "react";
import { Behaviour, Character } from "@domain/types";
import BehaviourSwitch from "./behaviours/BehaviourSwitch";
import AddBehaviour from "./AddBehaviour";
import RemoveBehaviour from "./RemoveBehaviour";

import { Action } from "@domain/reducer";
import None from "@steering/none";

type Props = {
  character: Character;
  dispatch: (action: Action) => void;
};

const Behaviours = (props: Props) => {
  return (
    <fieldset className="behaviours">
      <legend>Behaviours</legend>
      <ul>
        <li>
          <h3>{props.character.behaviour.name}</h3>
          <BehaviourSwitch
            behaviour={props.character.behaviour}
            onBehaviourChange={(payload: Behaviour) => {
              props.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload,
              });
            }}
          />
          {props.character.behaviour instanceof None ? (
            <AddBehaviour
              onBehaviourChange={(payload: Behaviour) => {
                console.log({ payload });
                props.dispatch({
                  type: "BEHAVIOUR_CHANGED",
                  payload,
                });
              }}
            />
          ) : (
            <RemoveBehaviour />
          )}
        </li>
      </ul>
      <h4>TODO: add-behaviour controls</h4>
    </fieldset>
  );
};

export default Behaviours;
