import React from "react";
import { type State } from "../main/state.js";
import * as app from "../main/index.js";

const Canvas = (props: { state: State }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  React.useEffect(() => {
    if (ctxRef.current) {
      app.runEffects(ctxRef.current, props.state);
    }
  }, [props.state.lastUpdated]);

  React.useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.translate(0.5, 0.5);
        ctxRef.current = ctx;
      }
    }
  }, [canvasRef.current]);

  return (
    <canvas ref={canvasRef} width="800" height="800" id="canvas-main"></canvas>
  );
};

export default Canvas;
