import React from "react";
import NumericField from "components/NumericField";
import CollisionAvoidance from "@steering/collisionAvoidance";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: CollisionAvoidance;
  onBehaviourChange: (behaviour: CollisionAvoidance) => void;
};

const CollisionAvoidanceControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
      <NumericField
        id="max-acceleration"
        label="Max. acceleration"
        value={behaviour.maxAcceleration}
        onChange={(maxAcceleration) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "maxAcceleration", maxAcceleration)
          );
        }}
      />
      <NumericField
        id="radius"
        label="Radius"
        value={behaviour.radius}
        onChange={(radius) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "radius", radius)
          );
        }}
      />
    </>
  );
};

export default CollisionAvoidanceControls;
