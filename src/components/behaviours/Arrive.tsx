import React from "react";
import NumericField from "components/NumericField";
import Arrive from "@steering/arrive";
import PickTarget from "@components/PickTarget";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Arrive;
  onBehaviourChange: (behaviour: Arrive) => void;
};

const ArriveControls = (props: Props) => {
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
        id="max-speed"
        label="Max. speed"
        value={behaviour.maxSpeed}
        onChange={(maxSpeed) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "maxSpeed", maxSpeed)
          );
        }}
      />
      <NumericField
        id="target-radius"
        label="Target Radius"
        value={behaviour.targetRadius}
        onChange={(targetRadius) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "targetRadius", targetRadius)
          );
        }}
      />
      <NumericField
        id="slow-radius"
        label="Slow radius"
        value={behaviour.slowRadius}
        onChange={(slowRadius) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "slowRadius", slowRadius)
          );
        }}
      />
      <NumericField
        id="time-to-target"
        label="time to target"
        value={behaviour.timeToTarget}
        onChange={(timeToTarget) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "timeToTarget", timeToTarget)
          );
        }}
      />
      <PickTarget targetId={behaviour.targetId} />
    </>
  );
};

export default ArriveControls;
