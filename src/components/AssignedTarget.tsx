import React from "react";
import { CharacterId } from "@domain/types";

type Props = {
  targetId: CharacterId;
};

const AssignedTarget = (props: Props) => {
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
    </>
  );
};

export default AssignedTarget;
