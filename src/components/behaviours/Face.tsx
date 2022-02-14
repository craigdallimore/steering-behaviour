import React from "react";
import AssignedTarget from "@components/AssignedTarget";
import Face from "@steering/face";
import AlignControls from "./Align";
import makeUpdatedClone from "@lib/makeUpdatedClone";

type Props = {
  behaviour: Face;
  onBehaviourChange: (behaviour: Face) => void;
};

const FaceControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <>
      <AssignedTarget targetId={behaviour.targetId} />
      <AlignControls
        behaviour={behaviour.align}
        onBehaviourChange={(align) => {
          props.onBehaviourChange(makeUpdatedClone(behaviour, "align", align));
        }}
      />
    </>
  );
};

export default FaceControls;
