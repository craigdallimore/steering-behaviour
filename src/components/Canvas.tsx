import React from "react";
import { type State } from "../main/state.js";
import * as app from "../main/index.js";

const Canvas = (props: { state: State }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  console.log(props.state.lastUpdated);
  React.useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        //app.runEffects(ctx, props.state);
      }
    }
  }, [props.state.lastUpdated]);

  return (
    <canvas ref={canvasRef} width="800" height="800" id="canvas-main"></canvas>
  );
};

export default Canvas;
