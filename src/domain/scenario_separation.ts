import Character from "./character";
import { Scenario } from "./types";
import * as steering from "@steering/index";

export default function initScenario(): Scenario {
  return {
    name: "Separation",
    description:
      "The 'separation' behaviour encourages these characters to stay apart from each other. The 'arrive' behaviour encourages the characters to move towards the light, and reduce speed on approach.",
    characters: new Map([
      [
        "_0",
        new Character(
          {
            maxAcceleration: 45,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [100, 200],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [],
          "💡"
        ),
      ],
      [
        "_1",
        new Character(
          {
            maxAcceleration: 45,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [20, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_2",
        new Character(
          {
            maxAcceleration: 45,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [30, 40],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_3",
        new Character(
          {
            maxAcceleration: 45,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [40, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_4",
        new Character(
          {
            maxAcceleration: 45,
            maxAngularAcceleration: 140,
            maxSpeed: 25,
            position: [50, 40],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_5",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 25,
            position: [60, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_6",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 25,
            position: [70, 40],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_7",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 25,
            position: [80, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_8",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 25,
            position: [90, 40],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_9",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [100, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_10",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [110, 40],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_11",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [120, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_12",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [130, 40],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_13",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [140, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_14",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [150, 40],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
      [
        "_15",
        new Character(
          {
            maxAcceleration: 25,
            maxAngularAcceleration: 140,
            maxSpeed: 45,
            position: [100, 20],
            velocity: [0, 0],
            orientation: 1.5,
            rotation: 0,
          },
          [
            new steering.Separation(),
            new steering.Arrive("_0"),
            new steering.LookWhereYouAreGoing(),
          ]
        ),
      ],
    ]),
    shapes: new Map(),
    paths: new Map(),
  };
}
