import { useImmerReducer } from "use-immer";
import { enableMapSet } from "immer";
import React from "react";
import Canvas from "./Canvas.js";
import useRAF from "../hooks/useRAF.js";
import * as app from "../main/index.js";
import {
  Character,
  type State,
  type SteeringBehaviour,
} from "../main/state.js";

enableMapSet();

function getFocussedCharacter(state: State): Character | null {
  if (!state.focussedCharacterId) {
    return null;
  }
  const char = state.characters.get(state.focussedCharacterId);
  return char || null;
}

const getClassname = (behaviour: SteeringBehaviour): string => {
  switch (behaviour) {
    case "ALIGN":
    case "ARRIVE":
    case "EVADE":
    case "FLEE":
    case "FACE":
    case "MATCH_VELOCITY":
    case "PURSUE":
    case "SEEK":
      return "has-target";
    default: {
      return "";
    }
  }
};

const Main = () => {
  const [state, dispatch] = useImmerReducer(app.update, app.initialState);

  const focussedCharacter = getFocussedCharacter(state);
  const className = focussedCharacter
    ? getClassname(focussedCharacter.behaviour)
    : "";

  const legendText = state.focussedCharacterId
    ? `Character ${state.focussedCharacterId}`
    : "Character not selected";

  useRAF((tick: number) => {
    dispatch({ type: "TICK", payload: tick });
  });

  return (
    <main>
      <Canvas state={state} />
      <form className={className}>
        <fieldset>
          <legend>{legendText}</legend>

          <label htmlFor="orientation">Orientation</label>
          <input
            id="orientation"
            type="range"
            min="-2"
            max="2"
            step="0.1"
            value={focussedCharacter?.kinematic.orientation.toString()}
          />

          <label htmlFor="rotation">Rotation</label>
          <input
            id="rotation"
            type="number"
            value={focussedCharacter?.kinematic.rotation.toString()}
          />

          <label htmlFor="position-x">Horizontal position</label>
          <input
            id="position-x"
            type="number"
            min="0"
            max="800"
            value={focussedCharacter?.kinematic.position[0].toString()}
          />

          <label htmlFor="position-z">Vertical position</label>
          <input
            id="position-z"
            type="number"
            min="0"
            max="800"
            value={focussedCharacter?.kinematic.position[1].toString()}
          />

          <label htmlFor="velocity-x">Horizontal velocity</label>
          <input
            id="velocity-x"
            type="number"
            value={focussedCharacter?.kinematic.velocity[0].toString()}
          />

          <label htmlFor="velocity-z">Vertical velocity</label>
          <input
            id="velocity-z"
            type="number"
            value={focussedCharacter?.kinematic.velocity[1].toString()}
          />

          <label htmlFor="behaviour">Behaviour</label>
          <select id="behaviour" value={focussedCharacter?.behaviour}>
            <option value="NONE">None</option>
            <option value="ALIGN">Align</option>
            <option value="ARRIVE">Arrive</option>
            <option value="COLLISION_AVOIDANCE">Collision Avoidance</option>
            <option value="EVADE">Evade</option>
            <option value="FACE">Face</option>
            <option value="FLEE">Flee</option>
            <option value="FOLLOW_PATH_CHASE_RABBIT">
              Follow path (chase rabbit)
            </option>
            <option value="FOLLOW_PATH_PREDICT">
              Follow path (predictive)
            </option>
            <option value="LOOK_WHERE_YOU_ARE_GOING">
              Look where you are going
            </option>
            <option value="MATCH_VELOCITY">Match velocity</option>
            <option value="OBSTACLE_AVOIDANCE">Obstacle avoidance</option>
            <option value="PURSUE">Pursue</option>
            <option value="SEEK">Seek</option>
            <option value="SEPARATION">Separation</option>
            <option value="WANDER">Wander</option>
          </select>
        </fieldset>

        <fieldset id="target">
          <legend>Target</legend>
          <span id="target-label">
            {focussedCharacter?.target ?? "Not set"}
          </span>
          <button type="button" id="btn-set-target">
            {state.isSettingTarget ? "Click a target" : "Pick target"}
          </button>
        </fieldset>

        <button type="button" id="play-pause">
          Play
        </button>
        <button type="button" id="refresh">
          Refresh
        </button>
        <button type="button" id="reset">
          Reset
        </button>
      </form>
    </main>
  );
};

export default Main;
