import React from "react";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import Behaviours from "./Behaviours";
import getFocussedCharacter from "@lib/getFocussedCharacter";
import KinematicControls from "./KinematicControls";

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
          <legend data-id="kinematic-id">
            Kinematic <code>{idText}</code>
          </legend>
          <KinematicControls character={focussedCharacter} />
          <legend>Behaviours</legend>
          <Behaviours dispatch={dispatch} character={focussedCharacter} />
        </form>
      )}
    </aside>
  );
};

export default CharacterSidebar;
