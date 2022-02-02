import { useImmerReducer } from "use-immer";
import { enableMapSet } from "immer";
import useRAF from "../hooks/useRAF.js";
import React from "react";
import ScenarioSidebar from "./ScenarioSidebar.js";
import Canvas from "./Canvas.js";
import { reducer } from "@domain/reducer.js";
import { initialState } from "@domain/initialState.js";
import DispatchContext from "./DispatchContext.js";
import StateContext from "./StateContext.js";
import "../css/main.css";
import CharacterSidebar from "./CharacterSidebar.js";

enableMapSet(); // immer can understand Map and Set

const Main = () => {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  useRAF((tick: number) => {
    dispatch({ type: "TICK", payload: tick });
  });

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <ScenarioSidebar />
        </StateContext.Provider>
      </DispatchContext.Provider>
      <main>
        <Canvas state={state} dispatch={dispatch} />
      </main>
      <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
          <CharacterSidebar />
        </StateContext.Provider>
      </DispatchContext.Provider>
    </>
  );
};

export default Main;
