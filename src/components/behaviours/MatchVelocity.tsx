import React from "react";
import NumericField from "@components/NumericField";
import MatchVelocity from "@steering/matchVelocity";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: MatchVelocity;
  onBehaviourChange: (behaviour: MatchVelocity) => void;
};

const MatchVelocityControls = (props: Props) => {
  const { behaviour } = props;

  return (
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
  );
};

export default MatchVelocityControls;
