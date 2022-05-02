import Character from "@domain/character";
import DispatchContext from "@components/DispatchContext";
import React from "react";

import NumericField from "./NumericField";

type Props = {
  character: Character;
};

const KinematicControls = (props: Props) => {
  const dispatch = React.useContext(DispatchContext);
  return (
    <fieldset>
      <label htmlFor="orientation">Orientation</label>
      <input
        id="orientation"
        type="range"
        min="-2"
        max="2"
        step="0.1"
        value={props.character.kinematic.orientation.toString()}
        onChange={(e) => {
          if (e.target instanceof HTMLInputElement) {
            dispatch({
              type: "ORIENTATION_CHANGED",
              payload: parseFloat(e.target.value),
            });
          }
        }}
      />
      <NumericField
        id="max-acceleration"
        label="Max. Acceleration"
        value={props.character.kinematic.maxAcceleration}
        onChange={(payload) => {
          dispatch({
            type: "MAX_ACCELERATION_CHANGED",
            payload,
          });
        }}
      />
      <NumericField
        id="max-angular-acceleration"
        label="Max. Angular Acceleration"
        value={props.character.kinematic.maxAngularAcceleration}
        onChange={(payload) => {
          dispatch({
            type: "MAX_ANGULAR_ACCELERATION_CHANGED",
            payload,
          });
        }}
      />

      <NumericField
        label="Rotation"
        id="rotation"
        value={props.character.kinematic.rotation}
        onChange={(payload) => {
          dispatch({
            type: "ROTATION_CHANGED",
            payload,
          });
        }}
      />

      <NumericField
        label="Horizontal position"
        id="position-x"
        min={0}
        max={800}
        value={props.character.kinematic.position[0]}
        onChange={(payload) => {
          dispatch({
            type: "POSX_CHANGED",
            payload,
          });
        }}
      />

      <NumericField
        label="Vertical position"
        id="position-z"
        min={0}
        max={800}
        value={props.character.kinematic.position[1]}
        onChange={(payload) => {
          dispatch({
            type: "POSZ_CHANGED",
            payload,
          });
        }}
      />

      <NumericField
        label="Horizontal velocity"
        id="vel-x"
        value={props.character.kinematic.velocity[0]}
        onChange={(payload) => {
          dispatch({
            type: "VELX_CHANGED",
            payload,
          });
        }}
      />

      <NumericField
        label="Vertical velocity"
        id="vel-z"
        value={props.character.kinematic.velocity[1]}
        onChange={(payload) => {
          dispatch({
            type: "VELZ_CHANGED",
            payload,
          });
        }}
      />
    </fieldset>
  );
};

export default KinematicControls;
