import React from "react";
import NumericField from "components/NumericField";
import Pursue from "@steering/pursue";
import makeUpdatedClone from "@lib/makeUpdatedClone";
import PickTarget from "@components/PickTarget";

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
      <PickTarget targetId={behaviour.targetId} />
    </>
  );
};

export default PursueControls;
