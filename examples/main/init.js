// @flow

import { type Store } from "../../src/events.js";
import { type Action } from "./update.js";
import { type State, type SteeringBehaviour, initialState } from "./state.js";
import { type Vector } from "../../lib/vector.js";

const $canvas = document.getElementById("canvas-main");
const $legend = document.querySelector("legend");

const $orient = document.querySelector("#orientation");
const $rotate = document.querySelector("#rotation");
const $posX = document.querySelector("#position-x");
const $posZ = document.querySelector("#position-z");
const $velX = document.querySelector("#velocity-x");
const $velZ = document.querySelector("#velocity-z");
const $behaviour = document.querySelector("#behaviour");

const $btnPlay = document.querySelector("#play-pause");
const $btnRefresh = document.querySelector("#refresh");
const $btnReset = document.querySelector("#reset");

export default function init(
  store: Store<State, Action>
): {
  main: CanvasRenderingContext2D,
} | null {
  if (
    $canvas instanceof HTMLCanvasElement &&
    $legend instanceof HTMLElement &&
    $orient instanceof HTMLInputElement &&
    $rotate instanceof HTMLInputElement &&
    $posX instanceof HTMLInputElement &&
    $posZ instanceof HTMLInputElement &&
    $velX instanceof HTMLInputElement &&
    $velZ instanceof HTMLInputElement &&
    $behaviour instanceof HTMLSelectElement &&
    $btnPlay instanceof HTMLButtonElement &&
    $btnRefresh instanceof HTMLButtonElement &&
    $btnReset instanceof HTMLButtonElement
  ) {
    const main = $canvas.getContext("2d");

    const setDomValuesFromState = (state: State): void => {
      const focussedCharacter = state.focussedCharacterId
        ? state.characters.get(state.focussedCharacterId)
        : null;

      if (focussedCharacter) {
        const { kinematic } = focussedCharacter;
        $legend.textContent = `Character ${
          state.focussedCharacterId || "(not selected)"
        }`;
        $orient.value = Math.round(kinematic.orientation).toString();
        $rotate.value = Math.round(kinematic.rotation).toString();
        $posX.value = Math.round(kinematic.position[0]).toString();
        $posZ.value = Math.round(kinematic.position[1]).toString();
        $velX.value = Math.round(kinematic.velocity[0]).toString();
        $velZ.value = Math.round(kinematic.velocity[1]).toString();
        $behaviour.value = focussedCharacter.behaviour;
      }
    };

    setDomValuesFromState(initialState);

    main.translate(0.5, 0.5);

    // ------------------------------------------------------------------------
    $canvas.addEventListener("click", (e: MouseEvent) => {
      const target: HTMLElement = (e.target: any);

      const { top, left }: ClientRect = target.getBoundingClientRect();

      store.dispatch({
        type: "CANVAS_CLICKED",
        payload: ([e.clientX - left, e.clientY - top]: Vector),
      });
      const state = store.getState();
      setDomValuesFromState(state);
    });

    // ------------------------------------------------------------------------
    $behaviour.addEventListener("change", (e: Event) => {
      const target: HTMLSelectElement = (e.target: any);
      const value = target.value;
      switch (value) {
        case "ALIGN":
        case "ARRIVE":
        case "FOLLOW_PATH_CHASE_RABBIT":
        case "FOLLOW_PATH_PREDICT":
        case "FACE":
        case "LOOK_WHERE_YOU_ARE_GOING":
        case "MATCH_VELOCITY":
        case "NONE":
        case "PURSUE":
        case "SEEK":
        case "SEPARATION":
        case "WANDER":
          store.dispatch({
            type: "BEHAVIOUR_CHANGED",
            payload: (value: SteeringBehaviour),
          });
          return;
      }
    });

    // ------------------------------------------------------------------------
    $orient.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "ORIENTATION_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $posX.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "POSX_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $posZ.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "POSZ_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $velX.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "VELX_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $velZ.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "VELZ_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });

    // ------------------------------------------------------------------------
    $btnPlay.addEventListener("click", () => {
      store.dispatch({ type: "PLAY_BUTTON_CLICKED" });
      const state = store.getState();
      setDomValuesFromState(state);
      $btnPlay.textContent = $btnPlay.textContent === "Play" ? "Pause" : "Play";
    });

    $btnRefresh.addEventListener("click", () => {
      const state = store.getState();
      setDomValuesFromState(state);
    });

    $btnReset.addEventListener("click", () => {
      store.dispatch({ type: "RESET_BUTTON_CLICKED" });
      setDomValuesFromState(initialState);
      $btnPlay.textContent = "Play";
    });

    return { main };
  }
  return null;
}
