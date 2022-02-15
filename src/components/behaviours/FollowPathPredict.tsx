import React, { useContext } from "react";
import NumericField from "components/NumericField";
import FollowPathPredict from "@steering/followPathPredict";
import makeUpdatedClone from "@lib/makeUpdatedClone";
import SelectPath from "@components/SelectPath";
import StateContext from "@components/StateContext";
import SeekControls from "./Seek";

type Props = {
  behaviour: FollowPathPredict;
  onBehaviourChange: (behaviour: FollowPathPredict) => void;
};

const FollowPathPredictControls = (props: Props) => {
  const { behaviour } = props;
  const state = useContext(StateContext);

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
      <SeekControls
        behaviour={behaviour.seek}
        onBehaviourChange={(seek) => {
          props.onBehaviourChange(makeUpdatedClone(behaviour, "seek", seek));
        }}
      />
      <SelectPath
        pathId={behaviour.pathId}
        onSelectPath={(pathId) => {
          props.onBehaviourChange(
            makeUpdatedClone(behaviour, "pathId", pathId)
          );
        }}
        pathMap={state.scenario?.paths ?? new Map()}
      />
    </>
  );
};

export default FollowPathPredictControls;
