import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

const scenario: Scenario = {
  name: "Wander",
  description: "This character exhibits the wander behaviour",
  characters: new Map([
    [
      "_1",
      new Character(
        {
          maxSpeed: 45,
          position: [120, 120],
          velocity: [0, 0],
          orientation: 2 * Math.PI,
          rotation: 0,
        },
        new steering.Wander()
      ),
    ],
  ]),
  shapes: new Map(),
  paths: new Map(),
};

export default scenario;
