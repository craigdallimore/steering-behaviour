import { CharacterId } from "@domain/types";
import React from "react";
import DispatchContext from "@components/DispatchContext.js";
import StateContext from "@components/StateContext.js";

type Props = {
  targetId: CharacterId;
};

const PickTarget = (props: Props) => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  return (
    <>
      {props.targetId ? (
        <label className="label-target-id">
          Current target
          <code>ID: {props.targetId}</code>
        </label>
      ) : (
        <label className="label-target-id">
          No target has been assigned yet
        </label>
      )}
      <button
        type="button"
        id="btn-set-target"
        onClick={() => {
          dispatch({ type: "SET_TARGET_BUTTON_CLICKED" });
        }}
      >
        {state.ui.isSettingTarget ? "Click on a target" : "Assign a target"}
      </button>
    </>
  );
};

export default PickTarget;
