import { useImmerReducer } from "use-immer";
import { enableMapSet } from "immer";
import React from "react";
import Canvas from "./Canvas.js";
import useRAF from "../hooks/useRAF.js";
import { update } from "../main/update.js";
import { initialState } from "../main/state.js";
import type { Character, State, SteeringBehaviour } from "@domain/types.js";

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
  const [state, dispatch] = useImmerReducer(update, initialState);

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
      <Canvas state={state} dispatch={dispatch} />
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
            onChange={(e) => {
              if (e.target instanceof HTMLInputElement) {
                dispatch({
                  type: "ORIENTATION_CHANGED",
                  payload: parseFloat(e.target.value),
                });
              }
            }}
          />

          <label htmlFor="rotation">Rotation</label>
          <input
            id="rotation"
            type="number"
            value={focussedCharacter?.kinematic.rotation.toString()}
            onChange={(e) => {
              if (e.target instanceof HTMLInputElement) {
                dispatch({
                  type: "POSX_CHANGED",
                  payload: parseFloat(e.target.value),
                });
              }
            }}
          />

          <label htmlFor="position-x">Horizontal position</label>
          <input
            id="position-x"
            type="number"
            min="0"
            max="800"
            value={focussedCharacter?.kinematic.position[0].toString()}
            onChange={(e) => {
              if (e.target instanceof HTMLInputElement) {
                dispatch({
                  type: "POSX_CHANGED",
                  payload: parseFloat(e.target.value),
                });
              }
            }}
          />

          <label htmlFor="position-z">Vertical position</label>
          <input
            id="position-z"
            type="number"
            min="0"
            max="800"
            value={focussedCharacter?.kinematic.position[1].toString()}
            onChange={(e) => {
              if (e.target instanceof HTMLInputElement) {
                dispatch({
                  type: "POSZ_CHANGED",
                  payload: parseFloat(e.target.value),
                });
              }
            }}
          />

          <label htmlFor="velocity-x">Horizontal velocity</label>
          <input
            id="velocity-x"
            type="number"
            value={focussedCharacter?.kinematic.velocity[0].toString()}
            onChange={(e) => {
              if (e.target instanceof HTMLInputElement) {
                dispatch({
                  type: "VELX_CHANGED",
                  payload: parseFloat(e.target.value),
                });
              }
            }}
          />

          <label htmlFor="velocity-z">Vertical velocity</label>
          <input
            id="velocity-z"
            type="number"
            value={focussedCharacter?.kinematic.velocity[1].toString()}
            onChange={(e) => {
              if (e.target instanceof HTMLInputElement) {
                dispatch({
                  type: "VELZ_CHANGED",
                  payload: parseFloat(e.target.value),
                });
              }
            }}
          />

          <label htmlFor="behaviour">Behaviour</label>
          <select
            id="behaviour"
            value={focussedCharacter?.behaviour}
            onChange={(e) => {
              if (e.target instanceof HTMLSelectElement) {
                switch (e.target.value) {
                  case "ALIGN":
                  case "ARRIVE":
                  case "COLLISION_AVOIDANCE":
                  case "EVADE":
                  case "FACE":
                  case "FLEE":
                  case "FOLLOW_PATH_CHASE_RABBIT":
                  case "FOLLOW_PATH_PREDICT":
                  case "LOOK_WHERE_YOU_ARE_GOING":
                  case "MATCH_VELOCITY":
                  case "OBSTACLE_AVOIDANCE":
                  case "NONE":
                  case "PURSUE":
                  case "SEEK":
                  case "SEPARATION":
                  case "WANDER":
                    dispatch({
                      type: "BEHAVIOUR_CHANGED",
                      payload: e.target.value,
                    });
                    return;
                }
              }
            }}
          >
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
          <button
            type="button"
            id="btn-set-target"
            onClick={() => {
              dispatch({ type: "SET_TARGET_BUTTON_CLICKED" });
            }}
          >
            {state.isSettingTarget ? "Click a target" : "Pick target"}
          </button>
        </fieldset>

        <button
          type="button"
          id="play-pause"
          onClick={() => {
            dispatch({ type: "PLAY_BUTTON_CLICKED" });
          }}
        >
          {state.isPaused ? "Play" : "Pause"}
        </button>
        <button
          type="button"
          id="refresh"
          onClick={() => {
            console.log("refresh?");
          }}
        >
          Refresh
        </button>
        <button
          type="button"
          id="reset"
          onClick={() => {
            dispatch({ type: "RESET_BUTTON_CLICKED" });
          }}
        >
          Reset
        </button>
      </form>
    </main>
  );
};

export default Main;
