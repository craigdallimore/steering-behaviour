import React from "react";
import NumericField from "components/NumericField";
import FollowPathPredict from "@steering/followPathPredict";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: FollowPathPredict;
  onBehaviourChange: (behaviour: FollowPathPredict) => void;
};

const FollowPathPredictControls = (props: Props) => {
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
      <NumericField
        id="predict-time"
        label="Predict Time"
        value={behaviour.predictTime}
        onChange={(predictTime) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "predictTime", predictTime)
          );
        }}
      />
    </>
  );
};

export default FollowPathPredictControls;
