import React from "react";
import DispatchContext from "@components/DispatchContext.js";
import None from "@steering/none";

const RemoveBehaviour = () => {
  const dispatch = React.useContext(DispatchContext);
  return (
    <button
      role="button"
      onClick={() => {
        dispatch({ type: "BEHAVIOUR_CHANGED", payload: new None() });
      }}
    >
      Remove behaviour
    </button>
  );
};

export default RemoveBehaviour;
