import React from "react";
import DispatchContext from "@components/DispatchContext";
import { SteeringBehaviourName } from "@domain/types";

type Props = {
  name: SteeringBehaviourName;
};

const RemoveBehaviour = (props: Props) => {
  const dispatch = React.useContext(DispatchContext);
  return (
    <button
      className="button-cross"
      aria-label="Remove behaviour"
      role="button"
      onClick={() => {
        dispatch({ type: "BEHAVIOUR_REMOVED", payload: props.name });
      }}
    >
      ×
    </button>
  );
};

export default RemoveBehaviour;
