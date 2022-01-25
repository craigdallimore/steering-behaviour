import React from "react";
import Canvas from "./Canvas.js";
import useRAF from "../hooks/useRAF.js";
import * as app from "../main/index.js";

const Main = () => {
  const [state, dispatch] = React.useReducer(app.update, app.initialState);

  useRAF((tick: number) => {
    dispatch({ type: "TICK", payload: tick });
  });

  return (
    <main>
      <Canvas state={state} />
      <form>
        <fieldset>
          <legend>Character</legend>

          <label htmlFor="orientation">Orientation</label>
          <input id="orientation" type="range" min="-2" max="2" step="0.1" />

          <label htmlFor="rotation">Rotation</label>
          <input id="rotation" type="number" />

          <label htmlFor="position-x">Horizontal position</label>
          <input id="position-x" type="number" min="0" max="800" />

          <label htmlFor="position-z">Vertical position</label>
          <input id="position-z" type="number" min="0" max="800" />

          <label htmlFor="velocity-x">Horizontal velocity</label>
          <input id="velocity-x" type="number" />

          <label htmlFor="velocity-z">Vertical velocity</label>
          <input id="velocity-z" type="number" />

          <label htmlFor="behaviour">Behaviour</label>
          <select id="behaviour">
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
          <span id="target-label">Target not set</span>
          <button type="button" id="btn-set-target">
            Set target
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
