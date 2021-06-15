// @flow

const $main = document.getElementById("can");
const $chart = document.getElementById("chart");

export default function init(): {
  main: CanvasRenderingContext2D,
  chart: CanvasRenderingContext2D,
} | null {
  if (
    $main instanceof HTMLCanvasElement &&
    $chart instanceof HTMLCanvasElement
  ) {
    const main = $main.getContext("2d");
    const chart = $chart.getContext("2d");
    main.translate(0.5, 0.5);
    chart.translate(0.5, 0.5);
    return { main, chart };
  }
  return null;
}
