import React from "react";
import type { State } from "@domain/types";
import { type Action } from "@domain/reducer";
import drawScene from "@draw/drawScene";

const Canvas = (props: {
  state: State;
  dispatch: (action: Action) => void;
}) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const ctxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  if (ctxRef.current) {
    drawScene(ctxRef.current, props.state);
  }

  function onResize() {
    const p = canvasRef.current?.parentNode as HTMLElement;
    const { width, height } = p.getBoundingClientRect();

    const wd = width * devicePixelRatio;
    const hd = height * devicePixelRatio;

    if (ctxRef.current) {
      const ctx = ctxRef.current;
      ctx.canvas.width = wd;
      ctx.canvas.height = hd;
      // To get crisp lines on high DPI screens, we set the dimensions of the
      // canvas proportionate to the devicePixelRatio, then use inline CSS to
      // keep it the correct fit for the layout.
      // This causes the drawn area to be too small on high DPI screens, so we
      // scale the drawn area based on the device pixel ratio.
      ctx.scale(devicePixelRatio, devicePixelRatio);
      ctx.translate(0.5, 0.5);
    }

    props.dispatch({
      type: "CANVAS_RESIZED",
      payload: [wd, hd],
    });
  }

  React.useLayoutEffect(() => {
    if (canvasRef.current && !ctxRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctxRef.current = ctx;
    }
  }, [canvasRef.current]);

  React.useEffect(() => {
    window.requestAnimationFrame(onResize);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
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
