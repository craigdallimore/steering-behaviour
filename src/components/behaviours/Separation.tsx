import React from "react";
import NumericField from "components/NumericField";
import Separation from "@steering/separation";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Separation;
  onBehaviourChange: (behaviour: Separation) => void;
};

const SeparationControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
      <NumericField
        id="threshold"
        label="Threshold"
        value={behaviour.threshold}
        onChange={(threshold) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "threshold", threshold)
          );
        }}
      />
      <NumericField
        id="decay-coefficient"
        label="Decay Coefficient"
        value={behaviour.decayCoefficient}
        onChange={(decayCoefficient) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "decayCoefficient", decayCoefficient)
          );
        }}
      />
    </>
  );
};

export default SeparationControls;
