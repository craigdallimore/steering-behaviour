import React from "react";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import Behaviours from "./Behaviours";
import getFocussedCharacter from "@lib/getFocussedCharacter";
import KinematicControls from "./KinematicControls";

const CharacterSidebar = () => {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);
  const [isKinematicOpen, setIsKinematicOpen] = React.useState(false);

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
          <button
            data-id="reveal-kinematic-controls"
            className="button-secondary reveal-conceal"
            type="button"
            onClick={() => setIsKinematicOpen(!isKinematicOpen)}
          >
            {isKinematicOpen ? "Hide controls" : "Show controls"}
          </button>
          {isKinematicOpen && (
            <KinematicControls character={focussedCharacter} />
          )}
          <legend>Behaviours</legend>
          <Behaviours
            dispatch={dispatch}
            behaviours={focussedCharacter.behaviours}
          />
        </form>
      )}
    </aside>
  );
};

export default CharacterSidebar;
