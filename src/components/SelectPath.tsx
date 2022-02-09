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
    <select
      id="behaviour"
      value={props.pathId}
      onChange={(e) => {
        props.onSelectPath(e.target.value as PathId);
      }}
    >
      {entries.map(([pathId, path]) => (
        <option key={pathId} value={pathId}>
          {path.label}
        </option>
      ))}
    </select>
  );
};

export default SelectPath;
