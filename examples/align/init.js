// @flow

const $main = document.getElementById("align-main");

export default function init(): {
  main: CanvasRenderingContext2D,
} | null {
  if ($main instanceof HTMLCanvasElement) {
    const main = $main.getContext("2d");

    main.translate(0.5, 0.5);

    return { main };
  }
  return null;
}
