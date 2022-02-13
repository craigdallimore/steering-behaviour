import React, { useContext } from "react";
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";

const DebugControl = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div className="checkbox-pair">
      <label htmlFor="debug">Show debug geometry</label>
      <input
        type="checkbox"
        checked={state.ui.isDebugMode}
        id="debug"
        onChange={() => {
          dispatch({ type: "DEBUG_MODE_CHANGED" });
        }}
      />
    </div>
  );
};

export default DebugControl;
