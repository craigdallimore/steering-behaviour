import React from "react";
import NumericField from "@components/NumericField";
import ObstacleAvoidance from "@steering/obstacleAvoidance";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: ObstacleAvoidance;
  onBehaviourChange: (behaviour: ObstacleAvoidance) => void;
};

const ObstacleAvoidanceControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <NumericField
      id="avoid-distance"
      label="Avoid Distance"
      value={behaviour.avoidDistance}
      onChange={(avoidDistance) => {
        props.onBehaviourChange(
          makeUpdatedClone(behaviour, "avoidDistance", avoidDistance)
        );
      }}
    />
  );
};

export default ObstacleAvoidanceControls;
