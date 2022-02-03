import React from "react";
import type { SteeringBehaviourName } from "@domain/types.js";

type Props = {
  onSelectBehaviour: (name: SteeringBehaviourName) => void;
  behaviourName?: SteeringBehaviourName;
};

const SelectBehaviour = (props: Props) => {
  return (
    <select
      id="behaviour"
      value={props.behaviourName}
      onChange={(e) => {
        props.onSelectBehaviour(e.target.value as SteeringBehaviourName);
      }}
    >
      <option value="ALIGN">Align</option>
      <option value="ARRIVE">Arrive</option>
      <option value="COLLISION_AVOIDANCE">Collision Avoidance</option>
      <option value="EVADE">Evade</option>
      <option value="FACE">Face</option>
      <option value="FLEE">Flee</option>
      <option value="FOLLOW_PATH_CHASE_RABBIT">
        Follow path (chase rabbit)
      </option>
      <option value="FOLLOW_PATH_PREDICT">Follow path (predictive)</option>
      <option value="LOOK_WHERE_YOU_ARE_GOING">Look where you are going</option>
      <option value="MATCH_VELOCITY">Match velocity</option>
      <option value="NONE">None</option>
      <option value="OBSTACLE_AVOIDANCE">Obstacle avoidance</option>
      <option value="PURSUE">Pursue</option>
      <option value="SEEK">Seek</option>
      <option value="SEPARATION">Separation</option>
      <option value="WANDER">Wander</option>
    </select>
  );
};

export default SelectBehaviour;
