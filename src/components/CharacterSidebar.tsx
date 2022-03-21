import React from "react";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import Behaviours from "./Behaviours";
import NumericField from "./NumericField";
import getFocussedCharacter from "@lib/getFocussedCharacter";

const CharacterSidebar = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);

  const focussedCharacter = getFocussedCharacter(state);

  const idText = state.ui.focussedCharacterId
    ? `ID: ${state.ui.focussedCharacterId}`
    : "--";

  return (
    <aside className="character-sidebar" aria-label="Character sidebar">
      <h2>{focussedCharacter ? "Selected Item" : "Nothing selected"}</h2>
      {focussedCharacter && (
        <form>
          <fieldset>
            <legend data-id="kinematic-id">
              Kinematic <code>{idText}</code>
            </legend>

            <label htmlFor="orientation">Orientation</label>
            <input
              id="orientation"
              type="range"
              min="-2"
              max="2"
              step="0.1"
              value={focussedCharacter.kinematic.orientation.toString()}
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
              value={focussedCharacter.kinematic.maxAcceleration}
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
              value={focussedCharacter.kinematic.maxAngularAcceleration}
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
              value={focussedCharacter.kinematic.rotation}
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
              value={focussedCharacter.kinematic.position[0]}
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
              value={focussedCharacter.kinematic.position[1]}
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
              value={focussedCharacter.kinematic.velocity[0]}
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
              value={focussedCharacter.kinematic.velocity[1]}
              onChange={(payload) => {
                dispatch({
                  type: "VELZ_CHANGED",
                  payload,
                });
              }}
            />
          </fieldset>
          <Behaviours dispatch={dispatch} character={focussedCharacter} />
        </form>
      )}
    </aside>
  );
};

export default CharacterSidebar;
