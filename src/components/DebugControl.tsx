import React, { useContext } from "react";
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";
import qs from "query-string";
import { StateConfig } from "@domain/types";

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
          const config: StateConfig = qs.parse(window.location.hash);
          window.location.hash = qs.stringify({
            ...config,
            debug: !state.ui.isDebugMode,
          });
        }}
      />
    </div>
  );
};

export default DebugControl;
