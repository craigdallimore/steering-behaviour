import React from "react";
import NumericField from "components/NumericField";
import FollowPathChaseRabbit from "@steering/followPathChaseRabbit";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: FollowPathChaseRabbit;
  onBehaviourChange: (behaviour: FollowPathChaseRabbit) => void;
};

const FollowPathChaseRabbitControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
      <NumericField
        id="path-offset"
        label="Path Offset"
        value={behaviour.pathOffset}
        onChange={(pathOffset) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "pathOffset", pathOffset)
          );
        }}
      />
    </>
  );
};

export default FollowPathChaseRabbitControls;
