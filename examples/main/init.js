// @flow

import { type Store } from "../../src/events.js";
import { type Action } from "./update.js";
import { type State, type SteeringBehaviour, initialState } from "./state.js";
import { type Vector } from "../../lib/vector.js";

const $canvas = document.getElementById("canvas-main");

const $orient = document.querySelector("#orientation");
const $rotate = document.querySelector("#rotation");
const $posX = document.querySelector("#position-x");
const $posZ = document.querySelector("#position-z");
//const $posMouseClick = document.querySelector("#position-mouse-click");
const $behaviour = document.querySelector("#behaviour");

const $btnPlay = document.querySelector("#play-pause");
const $btnReset = document.querySelector("#reset");

export default function init(
  store: Store<State, Action>
): {
  main: CanvasRenderingContext2D,
} | null {
  if (
    $canvas instanceof HTMLCanvasElement &&
    $orient instanceof HTMLInputElement &&
    $rotate instanceof HTMLInputElement &&
    $posX instanceof HTMLInputElement &&
    $posZ instanceof HTMLInputElement &&
    //$posMouseClick instanceof HTMLInputElement &&
    $behaviour instanceof HTMLSelectElement &&
    $btnPlay instanceof HTMLButtonElement &&
    $btnReset instanceof HTMLButtonElement
  ) {
    const main = $canvas.getContext("2d");

    const setDomValuesFromState = (state: State): void => {
      const focussedCharacter = state.focussedCharacterId
        ? state.characters.get(state.focussedCharacterId)
        : null;

      if (focussedCharacter) {
        $orient.value = focussedCharacter.orientation.toString();
        $rotate.value = focussedCharacter.rotation.toString();
        $posX.value = focussedCharacter.position[0].toString();
        $posZ.value = focussedCharacter.position[1].toString();
      }
      //$posMouseClick.checked = state.mouseEffect === "CHARACTER-CLICK";
      $behaviour.value = state.selectedBehaviour;
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
    /*
     *$posMouseClick.addEventListener("change", () => {
     *  store.dispatch({
     *    type: "POS_MOUSE_CHANGED",
     *    payload: "CHARACTER-CLICK",
     *  });
     *});
     */

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
