// @flow

import { type Store } from "../../src/events.js";
import { type Action } from "./update.js";
import { type State, type SteeringBehaviour, initialState } from "./state.js";
import { type Vector } from "../../lib/vector.js";

const $form = document.querySelector("form");
const $canvas = document.getElementById("canvas-main");
const $legend = document.querySelector("legend");
const $targetLabel = document.getElementById("target-label");
const $btnSetTarget = document.getElementById("btn-set-target");

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

export default function init(
  store: Store<State, Action>
): {
  main: CanvasRenderingContext2D,
} | null {
  if (
    $form instanceof HTMLFormElement &&
    $canvas instanceof HTMLCanvasElement &&
    $legend instanceof HTMLElement &&
    $orient instanceof HTMLInputElement &&
    $rotate instanceof HTMLInputElement &&
    $posX instanceof HTMLInputElement &&
    $posZ instanceof HTMLInputElement &&
    $velX instanceof HTMLInputElement &&
    $velZ instanceof HTMLInputElement &&
    $behaviour instanceof HTMLSelectElement &&
    $targetLabel instanceof HTMLSpanElement &&
    $btnSetTarget instanceof HTMLButtonElement &&
    $btnPlay instanceof HTMLButtonElement &&
    $btnRefresh instanceof HTMLButtonElement &&
    $btnReset instanceof HTMLButtonElement
  ) {
    const main = $canvas.getContext("2d");

    $behaviour.size = $behaviour.children.length;

    const setDomValuesFromState = (state: State): void => {
      const focussedCharacter = state.focussedCharacterId
        ? state.characters.get(state.focussedCharacterId)
        : null;

      $btnSetTarget.textContent = state.isSettingTarget
        ? "Click a target"
        : "Pick target";

      if (focussedCharacter) {
        const { kinematic } = focussedCharacter;
        $form.className = getClassname(focussedCharacter.behaviour);
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
        $targetLabel.textContent = focussedCharacter.target || "Not set";
      } else {
        $form.className = "";
        $legend.textContent = "Select character";
        $orient.value = "";
        $rotate.value = "";
        $posX.value = "";
        $posZ.value = "";
        $velX.value = "";
        $velZ.value = "";
        $behaviour.value = "";
        $targetLabel.textContent = "Not set";
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
          $form.className = getClassname(value);
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

    $btnSetTarget.addEventListener("click", () => {
      store.dispatch({ type: "SET_TARGET_BUTTON_CLICKED" });
      $btnSetTarget.textContent = "Click a target";
    });

    return { main };
  }
  return null;
}
