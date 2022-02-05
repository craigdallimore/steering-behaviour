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
    const p = canvasRef.current?.parentNode;
    if (p instanceof HTMLElement) {
      const rect = p.getBoundingClientRect();
      props.dispatch({
        type: "CANVAS_RESIZED",
        payload: [rect.width, rect.height],
      });
    }
  }

  React.useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.translate(0.5, 0.5);

        // To get crisp lines on high DPI screens, we set the dimensions of the
        // canvas proportionate to the devicePixelRatio, then use inline CSS to
        // keep it the correct fit for the layout.
        // This causes the drawn area to be too small on high DPI screens, so we
        // scale the drawn area based on the device pixel ratio.
        ctx.scale(devicePixelRatio, devicePixelRatio);
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
      width={props.state.ui.canvasDimensions[0] * devicePixelRatio}
      height={props.state.ui.canvasDimensions[1] * devicePixelRatio}
      style={{
        width: `${props.state.ui.canvasDimensions[0]}px`,
        height: `${props.state.ui.canvasDimensions[1]}px`,
      }}
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
