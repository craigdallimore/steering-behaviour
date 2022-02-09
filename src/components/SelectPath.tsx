import React from "react";
import type { Path, PathId } from "@domain/types";

type Props = {
  onSelectPath: (pathId: PathId) => void;
  pathId?: PathId;
  pathMap: Map<PathId, Path>;
};

const SelectPath = (props: Props) => {
  const entries = Array.from(props.pathMap);

  return (
    <>
      <label htmlFor="select-path">Select a path</label>
      <select
        id="select-path"
        value={props.pathId}
        onChange={(e) => {
          props.onSelectPath(e.target.value as PathId);
        }}
      >
        <option>No path selected</option>
        {entries.map(([pathId, path]) => (
          <option key={pathId} value={pathId}>
            {path.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectPath;
