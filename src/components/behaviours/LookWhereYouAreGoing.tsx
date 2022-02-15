import React from "react";
import LookWhereYouAreGoing from "@steering/lookWhereYouAreGoing";
import makeUpdatedClone from "@lib/makeUpdatedClone";
import AlignControls from "./Align";

type Props = {
  behaviour: LookWhereYouAreGoing;
  onBehaviourChange: (behaviour: LookWhereYouAreGoing) => void;
};

const LookWhereYouAreGoingControls = (props: Props) => {
  const { behaviour } = props;

  return (
    <AlignControls
      behaviour={props.behaviour.align}
      onBehaviourChange={(align) => {
        props.onBehaviourChange(makeUpdatedClone(behaviour, "align", align));
      }}
    />
  );
};

export default LookWhereYouAreGoingControls;
