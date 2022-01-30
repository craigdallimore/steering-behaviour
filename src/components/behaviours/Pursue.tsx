import React from "react";
import NumericField from "components/NumericField";
import Pursue from "@steering/pursue";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Pursue;
  onBehaviourChange: (behaviour: Pursue) => void;
};

const PursueControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
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
    </>
  );
};

export default PursueControls;
