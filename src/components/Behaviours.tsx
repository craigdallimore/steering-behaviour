import React from "react";
import { Behaviour, Character } from "@domain/types";
import AlignControls from "./behaviours/Align";
import ArriveControls from "./behaviours/Arrive";
import CollisionAvoidanceControls from "./behaviours/CollisionAvoidance";
import EvadeControls from "./behaviours/Evade";
import FaceControls from "./behaviours/Face";
import FleeControls from "./behaviours/Flee";
import FollowPathChaseRabbitControls from "./behaviours/FollowPathChaseRabbit";
import FollowPathPredictControls from "./behaviours/FollowPathPredict";
import MatchVelocityControls from "./behaviours/MatchVelocity";
import ObstacleAvoidanceControls from "./behaviours/ObstacleAvoidance";
import PursueControls from "./behaviours/Pursue";
import SeekControls from "./behaviours/Seek";
import SeparationControls from "./behaviours/Separation";
import WanderControls from "./behaviours/Wander";

import { Action } from "@domain/reducer";
import None from "@steering/none";
import RemoveBehaviour from "./RemoveBehaviour";

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
        return (
          <CollisionAvoidanceControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "EVADE":
        return (
          <EvadeControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "FACE":
        return (
          <FaceControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "FLEE":
        return (
          <FleeControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "FOLLOW_PATH_CHASE_RABBIT":
        return (
          <FollowPathChaseRabbitControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "FOLLOW_PATH_PREDICT":
        return (
          <FollowPathPredictControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "LOOK_WHERE_YOU_ARE_GOING":
        return null;
      case "MATCH_VELOCITY":
        return (
          <MatchVelocityControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "OBSTACLE_AVOIDANCE":
        return (
          <ObstacleAvoidanceControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "PURSUE":
        return (
          <PursueControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "SEEK":
        return (
          <SeekControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "SEPARATION":
        return (
          <SeparationControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      case "WANDER":
        return (
          <WanderControls
            behaviour={behaviour}
            onBehaviourChange={(b) => {
              itemProps.dispatch({
                type: "BEHAVIOUR_CHANGED",
                payload: b,
              });
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <li>
      <h3>{itemProps.behaviour.name}</h3>
      {getBehaviourSpecificControls(itemProps.behaviour)}
      {itemProps.behaviour instanceof None || <RemoveBehaviour />}
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
