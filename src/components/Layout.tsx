import { useImmerReducer } from "use-immer";
import { enableMapSet } from "immer";
import useRAF from "../hooks/useRAF";
import React from "react";
import ScenarioSidebar from "./ScenarioSidebar";
import Canvas from "./Canvas";
import { reducer } from "@domain/reducer";
import { getState } from "@domain/initialState";
import DispatchContext from "./DispatchContext";
import StateContext from "./StateContext";
import "../css/main.css";
import CharacterSidebar from "./CharacterSidebar";

enableMapSet(); // immer can understand Map and Set

const Main = () => {
  const [state, dispatch] = useImmerReducer(reducer, getState());

  useRAF((tick: number) => {
    dispatch({ type: "TICK", payload: tick });
  });

  const [animation, setAnimation] = React.useState(false);

  function onAnimationEnd() {
    setAnimation(false);
  }

  React.useEffect(() => {
    setAnimation(true);
  }, [state.ui.isPaused]);

  return (
    <React.StrictMode>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <ScenarioSidebar />
        </StateContext.Provider>
      </DispatchContext.Provider>
      <main>
        <Canvas state={state} dispatch={dispatch} />
        <div
          className={animation ? "x" : ""}
          id="play-status"
          aria-label={state.ui.isPaused ? "pause" : "play"}
          role="status"
          onAnimationEnd={onAnimationEnd}
        >
          <svg viewBox="0 0 70 70">
            <path
              d={
                state.ui.isPaused
                  ? "M 20,20 30,20 30,50 20,50 z M 40,20 50,20 50,50 40,50"
                  : "M 30,25 45,35 30, 45"
              }
            ></path>
          </svg>
        </div>
      </main>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <CharacterSidebar />
        </StateContext.Provider>
      </DispatchContext.Provider>
    </React.StrictMode>
  );
};

export default Main;
