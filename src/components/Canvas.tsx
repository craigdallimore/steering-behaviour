import React from "react";
import type { State } from "@domain/types.js";
import { type Action } from "@domain/reducer";
import drawScene from "@draw/drawScene.js";

const Canvas = (props: {
  state: State;
  dispatch: (action: Action) => void;
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  if (ctxRef.current) {
    drawScene(ctxRef.current, props.state);
  }

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
    <canvas
      ref={canvasRef}
      width="800"
      height="800"
      id="canvas-main"
      onClick={(e) => {
        const target = e.target as HTMLCanvasElement;
        const { top, left }: DOMRect = target.getBoundingClientRect();

        props.dispatch({
          type: "CANVAS_CLICKED",
          payload: [e.clientX - left, e.clientY - top],
        });
      }}
    ></canvas>
  );
};

export default Canvas;
