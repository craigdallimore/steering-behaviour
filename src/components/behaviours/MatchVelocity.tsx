import React from "react";
import NumericField from "components/NumericField";
import MatchVelocity from "@steering/matchVelocity";
import makeUpdatedClone from "@lib/makeUpdatedClone";
import PickTarget from "@components/PickTarget";

type Props = {
  behaviour: MatchVelocity;
  onBehaviourChange: (behaviour: MatchVelocity) => void;
};

const MatchVelocityControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
      <NumericField
        id="max-angular-acceleration"
        label="Max. angular acceleration"
        value={behaviour.maxAcceleration}
        onChange={(maxAcceleration) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "maxAcceleration", maxAcceleration)
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

export default MatchVelocityControls;
