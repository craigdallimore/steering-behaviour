import React from "react";
import NumericField from "@components/NumericField";
import AssignedTarget from "@components/AssignedTarget";
import Align from "@steering/align";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Align;
  onBehaviourChange: (behaviour: Align) => void;
};

const AlignControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
      <NumericField
        id="max-angular-acceleration"
        label="Max. angular acceleration"
        value={behaviour.maxAngularAcceleration}
        onChange={(maxAngularAcceleration) => {
          props.onBehaviourChange(
            makeUpdatedClone(
              behaviour,
              "maxAngularAcceleration",
              maxAngularAcceleration
            )
          );
        }}
      />
      <NumericField
        id="max-rotation"
        label="Max. rotation"
        value={behaviour.maxRotation}
        onChange={(maxRotation) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "maxRotation", maxRotation)
          );
        }}
      />
      <NumericField
        id="deceleration-tolerance"
        label="Deceleration tolerance"
        value={behaviour.decelerationTolerance}
        onChange={(decelerationTolerance) => {
          props.onBehaviourChange(
            makeUpdatedClone(
              behaviour,
              "decelerationTolerance",
              decelerationTolerance
            )
          );
        }}
      />
      <NumericField
        id="align-tolerance"
        label="Align tolerance"
        value={behaviour.alignTolerance}
        onChange={(alignTolerance) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "alignTolerance", alignTolerance)
          );
        }}
      />
      <NumericField
        id="time-to-target"
        label="Time to target"
        value={behaviour.timeToTarget}
        onChange={(timeToTarget) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "timeToTarget", timeToTarget)
          );
        }}
      />
    </>
  );
};

export default AlignControls;
