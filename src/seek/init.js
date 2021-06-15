// @flow

const $main = document.getElementById("seek-main");
const $chart = document.getElementById("seek-chart");
const $btn = document.getElementById("seek-play");

export default function init(): {
  main: CanvasRenderingContext2D,
  chart: CanvasRenderingContext2D,
} | null {
  if (
    $main instanceof HTMLCanvasElement &&
    $chart instanceof HTMLCanvasElement &&
    $btn instanceof HTMLButtonElement
  ) {
    const main = $main.getContext("2d");
    const chart = $chart.getContext("2d");

    main.translate(0.5, 0.5);
    chart.translate(0.5, 0.5);

    $btn.addEventListener("click", () => {});

    return { main, chart };
  }
  return null;
}
