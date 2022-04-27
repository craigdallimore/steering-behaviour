import React from "react";
import NumericField from "@components/NumericField";
import Wander from "@steering/wander";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Wander;
  onBehaviourChange: (behaviour: Wander) => void;
};

const WanderControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
      <NumericField
        id="wander-offset"
        label="Offset"
        value={behaviour.wanderOffset}
        onChange={(wanderOffset) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "wanderOffset", wanderOffset)
          );
        }}
      />
      <NumericField
        id="wander-radius"
        label="Radius"
        value={behaviour.wanderRadius}
        onChange={(wanderRadius) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "wanderRadius", wanderRadius)
          );
        }}
      />
      <NumericField
        id="wander-rate"
        label="Rate"
        value={behaviour.wanderRate}
        onChange={(wanderRate) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "wanderRate", wanderRate)
          );
        }}
      />
    </>
  );
};

export default WanderControls;
