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
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  if (ctxRef.current) {
    drawScene(ctxRef.current, props.state);
  }

  function onResize() {
    const p = canvasRef.current?.parentNode;
    if (p instanceof HTMLElement) {
      const rect = p.getBoundingClientRect();
      console.log("onResize", rect.height);
      setWidth(rect.width);
      setHeight(rect.height);
    }
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

  React.useLayoutEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [canvasRef.current]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
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
