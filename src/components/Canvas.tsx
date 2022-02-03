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

  const cursorColour = props.state.ui.isSettingTarget ? "red" : "green";

  const style = {
    cursor: `url("data:image/svg+xml,%3Csvg viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Cstyle%3E line %7B stroke: ${cursorColour}; stroke-width: 3; %7D %3C/style%3E%3Cline x1='0' y1='0' x2='0' y2='7'/%3E%3Cline x1='0' y1='0' x2='7' y2='0'/%3E%3Cline x1='44' y1='0' x2='44' y2='7'/%3E%3Cline x1='44' y1='0' x2='37' y2='0'/%3E%3Cline x1='0' y1='44' x2='0' y2='37'/%3E%3Cline x1='0' y1='44' x2='7' y2='44'/%3E%3Cline x1='44' y1='44' x2='44' y2='37'/%3E%3Cline x1='44' y1='44' x2='37' y2='44'/%3E%3C/svg%3E") 16 16, pointer`,
    width: `${props.state.ui.canvasDimensions[0]}px`,
    height: `${props.state.ui.canvasDimensions[1]}px`,
  };

  return (
    <canvas
      ref={canvasRef}
      width={props.state.ui.canvasDimensions[0] * devicePixelRatio}
      height={props.state.ui.canvasDimensions[1] * devicePixelRatio}
      onMouseEnter={(e) => {
        const target = e.target as HTMLCanvasElement;
        const { top, left }: DOMRect = target.getBoundingClientRect();
        props.dispatch({
          type: "CANVAS_MOUSE_ENTER",
          payload: [e.clientX - left, e.clientY - top],
        });
      }}
      onMouseMove={(e) => {
        const target = e.target as HTMLCanvasElement;
        const { top, left }: DOMRect = target.getBoundingClientRect();
        props.dispatch({
          type: "CANVAS_MOUSE_MOVE",
          payload: [e.clientX - left, e.clientY - top],
        });
      }}
      onMouseLeave={() => {
        props.dispatch({
          type: "CANVAS_MOUSE_LEAVE",
        });
      }}
      style={style}
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
