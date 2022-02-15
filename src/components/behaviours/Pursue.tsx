import React from "react";
import NumericField from "components/NumericField";
import Pursue from "@steering/pursue";
import makeUpdatedClone from "@lib/makeUpdatedClone";
import SeekControls from "./Seek";

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
      <SeekControls
        behaviour={behaviour.seek}
        onBehaviourChange={(seek) => {
          props.onBehaviourChange(makeUpdatedClone(behaviour, "seek", seek));
        }}
      />
    </>
  );
};

export default PursueControls;
