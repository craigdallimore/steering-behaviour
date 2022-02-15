import React from "react";
import NumericField from "components/NumericField";
import Flee from "@steering/flee";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Flee;
  onBehaviourChange: (behaviour: Flee) => void;
};

const FleeControls = (props: Props) => {
  const { behaviour } = props;

  return (
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
  );
};

export default FleeControls;
