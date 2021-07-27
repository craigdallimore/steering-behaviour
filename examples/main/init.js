// @flow

import { type Store } from "../../src/events.js";
import { type Action } from "./update.js";
import { type State, type SteeringBehaviour, initialState } from "./state.js";
import { type Vector } from "../../lib/vector.js";

const $canvas = document.getElementById("canvas-main");
const $cOrient = document.querySelector("#character-orientation");
const $cRotate = document.querySelector("#character-rotation");
const $cPosX = document.querySelector("#character-position-x");
const $cPosZ = document.querySelector("#character-position-z");
const $cPosMouseClick = document.querySelector(
  "#character-position-mouse-click"
);
const $cBehaviour = document.querySelector("#character-behaviour");
const $tOrient = document.querySelector("#target-orientation");
const $tRotate = document.querySelector("#target-rotation");
const $tPosX = document.querySelector("#target-position-x");
const $tPosZ = document.querySelector("#target-position-z");
const $tPosMouseClick = document.querySelector("#target-position-mouse-click");
const $tPosMouseMove = document.querySelector("#target-position-mouse-move");
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
    $cPosMouseClick instanceof HTMLInputElement &&
    $cBehaviour instanceof HTMLSelectElement &&
    $tOrient instanceof HTMLInputElement &&
    $tRotate instanceof HTMLInputElement &&
    $tPosX instanceof HTMLInputElement &&
    $tPosZ instanceof HTMLInputElement &&
    $tPosMouseClick instanceof HTMLInputElement &&
    $tPosMouseMove instanceof HTMLInputElement &&
    $btnPlay instanceof HTMLButtonElement &&
    $btnReset instanceof HTMLButtonElement
  ) {
    const main = $canvas.getContext("2d");

    const setDomValuesFromState = (state: State): void => {
      $cOrient.value = state.character.orientation.toString();
      $cRotate.value = state.character.rotation.toString();
      $cPosX.value = state.character.position[0].toString();
      $cPosZ.value = state.character.position[1].toString();
      $cPosMouseClick.checked = state.mouseEffect === "CHARACTER-CLICK";
      $cBehaviour.value = state.selectedBehaviour;
      $tOrient.value = state.target.orientation.toString();
      $tRotate.value = state.target.rotation.toString();
      $tPosX.value = state.target.position[0].toString();
      $tPosZ.value = state.target.position[1].toString();
      $tPosMouseClick.checked = state.mouseEffect === "TARGET-CLICK";
      $tPosMouseMove.checked = state.mouseEffect === "TARGET-MOVE";
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
    });
    $canvas.addEventListener("mousemove", (e: MouseEvent) => {
      const target: HTMLElement = (e.target: any);

      const { top, left }: ClientRect = target.getBoundingClientRect();

      store.dispatch({
        type: "CANVAS_MOUSE_MOVE",
        payload: ([e.clientX - left, e.clientY - top]: Vector),
      });
    });

    // ------------------------------------------------------------------------
    $cBehaviour.addEventListener("change", (e: Event) => {
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
        case "PURSUE":
        case "SEEK":
        case "WANDER":
          store.dispatch({
            type: "CHARACTER_BEHAVIOUR_CHANGED",
            payload: (value: SteeringBehaviour),
          });
          return;
      }
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
    $cPosMouseClick.addEventListener("change", () => {
      store.dispatch({
        type: "POS_MOUSE_CHANGED",
        payload: "CHARACTER-CLICK",
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
    $tPosMouseClick.addEventListener("change", () => {
      store.dispatch({
        type: "MOUSE_CONTROL_CHANGED",
        payload: "TARGET-CLICK",
      });
    });
    $tPosMouseMove.addEventListener("change", () => {
      store.dispatch({
        type: "MOUSE_CONTROL_CHANGED",
        payload: "TARGET-MOVE",
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
