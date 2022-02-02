import React from "react";
import AssignedTarget from "@components/AssignedTarget";
import Face from "@steering/face";

type Props = {
  behaviour: Face;
  onBehaviourChange: (behaviour: Face) => void;
};

const FaceControls = (props: Props) => {
  const { behaviour } = props;

  return <AssignedTarget targetId={behaviour.targetId} />;
};

export default FaceControls;
