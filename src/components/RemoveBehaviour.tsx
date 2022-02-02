import React from "react";
import DispatchContext from "@components/DispatchContext.js";
import None from "@steering/none";

const RemoveBehaviour = () => {
  const dispatch = React.useContext(DispatchContext);
  return (
    <button
      className="button-cross"
      aria-label="Remove behaviour"
      role="button"
      onClick={() => {
        dispatch({ type: "BEHAVIOUR_CHANGED", payload: new None() });
      }}
    >
      ×
    </button>
  );
};

export default RemoveBehaviour;
