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

  return (
    <React.StrictMode>
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
    </React.StrictMode>
  );
};

export default Main;
