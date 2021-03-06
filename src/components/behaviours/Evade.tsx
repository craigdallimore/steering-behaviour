import React from "react";
import NumericField from "@components/NumericField";
import Evade from "@steering/evade";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Evade;
  onBehaviourChange: (behaviour: Evade) => void;
};

const EvadeControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <NumericField
      id="max-prediction"
      label="Max. prediction"
      value={behaviour.maxPrediction}
      onChange={(maxPrediction) => {
        props.onBehaviourChange(
          makeUpdatedClone(behaviour, "maxPrediction", maxPrediction)
        );
      }}
    />
  );
};

export default EvadeControls;
