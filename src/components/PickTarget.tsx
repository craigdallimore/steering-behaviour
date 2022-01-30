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
      <span id="target-label">{props.targetId}</span>
      <button
        type="button"
        id="btn-set-target"
        onClick={() => {
          dispatch({ type: "SET_TARGET_BUTTON_CLICKED" });
        }}
      >
        {state.isSettingTarget ? "Click on a target" : "Pick target"}
      </button>
    </>
  );
};

export default PickTarget;
