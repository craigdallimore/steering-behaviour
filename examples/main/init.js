// @flow

import { type Store } from "../../src/events.js";
import { type Action } from "./update.js";
import { type State, initialState } from "./state.js";
const $canvas = document.getElementById("canvas-main");

const $cOrient = document.querySelector("#character-orientation");
const $cRotate = document.querySelector("#character-rotation");
const $cPosX = document.querySelector("#character-position-x");
const $cPosZ = document.querySelector("#character-position-z");
const $cBehaviour = document.querySelector("#character-behaviour");
const $tOrient = document.querySelector("#target-orientation");
const $tRotate = document.querySelector("#target-rotation");
const $tPosX = document.querySelector("#target-position-x");
const $tPosZ = document.querySelector("#target-position-z");
const $btnPlay = document.querySelector("#play-pause");
const $btnReset = document.querySelector("#reset");

export default function init(
  store: Store<State, Action>
): {
  main: CanvasRenderingContext2D,
} | null {
  if (
    $canvas instanceof HTMLCanvasElement &&
    $cOrient instanceof HTMLInputElement &&
    $cRotate instanceof HTMLInputElement &&
    $cPosX instanceof HTMLInputElement &&
    $cPosZ instanceof HTMLInputElement &&
    $cBehaviour instanceof HTMLSelectElement &&
    $tOrient instanceof HTMLInputElement &&
    $tRotate instanceof HTMLInputElement &&
    $tPosX instanceof HTMLInputElement &&
    $tPosZ instanceof HTMLInputElement &&
    $btnPlay instanceof HTMLButtonElement &&
    $btnReset instanceof HTMLButtonElement
  ) {
    const main = $canvas.getContext("2d");

    const setDomValuesFromState = (state: State): void => {
      $cOrient.value = state.character.orientation.toString();
      $cRotate.value = state.character.rotation.toString();
      $cPosX.value = state.character.position[0].toString();
      $cPosZ.value = state.character.position[1].toString();
      $cBehaviour.value = state.selectedBehaviour;
      $tOrient.value = state.target.orientation.toString();
      $tRotate.value = state.target.rotation.toString();
      $tPosX.value = state.target.position[0].toString();
      $tPosZ.value = state.target.position[1].toString();
    };

    setDomValuesFromState(initialState);

    main.translate(0.5, 0.5);

    // ------------------------------------------------------------------------
    $cBehaviour.addEventListener("change", (e: Event) => {
      const target: HTMLSelectElement = (e.target: any);
      store.dispatch({
        type: "CHARACTER_BEHAVIOUR_CHANGED",
        payload: (target.value: string),
      });
    });

    // ------------------------------------------------------------------------
    $cOrient.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "CHARACTER_ORIENTATION_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $cPosX.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "CHARACTER_POSX_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $cPosZ.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "CHARACTER_POSZ_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });

    // ------------------------------------------------------------------------
    $tOrient.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "TARGET_ORIENTATION_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $tPosX.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "TARGET_POSX_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });
    $tPosZ.addEventListener("input", (e: Event) => {
      const target: HTMLInputElement = (e.target: any);
      store.dispatch({
        type: "TARGET_POSZ_CHANGED",
        payload: (parseFloat(target.value): number),
      });
    });

    // ------------------------------------------------------------------------
    $btnPlay.addEventListener("click", () => {
      store.dispatch({ type: "PLAY_BUTTON_CLICKED" });
      $btnPlay.textContent = $btnPlay.textContent === "Play" ? "Pause" : "Play";
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
