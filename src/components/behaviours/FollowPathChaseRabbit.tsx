import React, { useContext } from "react";
import NumericField from "@components/NumericField";
import FollowPathChaseRabbit from "@steering/followPathChaseRabbit";
import makeUpdatedClone from "@lib/makeUpdatedClone";
import SelectPath from "@components/SelectPath";
import StateContext from "@components/StateContext";

type Props = {
  behaviour: FollowPathChaseRabbit;
  onBehaviourChange: (behaviour: FollowPathChaseRabbit) => void;
};

const FollowPathChaseRabbitControls = (props: Props) => {
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

export default FollowPathChaseRabbitControls;
