import React from "react";
import NumericField from "components/NumericField";
import Seek from "@steering/seek";
import makeUpdatedClone from "@lib/makeUpdatedClone";
import PickTarget from "@components/PickTarget";

type Props = {
  behaviour: Seek;
  onBehaviourChange: (behaviour: Seek) => void;
};

const SeekControls = (props: Props) => {
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
      <PickTarget targetId={behaviour.targetId} />
    </>
  );
};

export default SeekControls;
