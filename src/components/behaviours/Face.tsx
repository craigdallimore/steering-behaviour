import React from "react";
import PickTarget from "@components/PickTarget";
import Face from "@steering/face";

type Props = {
  behaviour: Face;
  onBehaviourChange: (behaviour: Face) => void;
};

const FaceControls = (props: Props) => {
  const { behaviour } = props;

  return <PickTarget targetId={behaviour.targetId} />;
};

export default FaceControls;
