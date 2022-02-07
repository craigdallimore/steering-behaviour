import type { State } from "@domain/types";
import sc01 from "./scenario01";
import sc02 from "./scenario02";

export const initialState: State = {
  ui: {
    actionFeedbackCount: -1,
    canvasDimensions: [800, 800],
    isDebugMode: false,
    isPaused: true,
    isSettingTarget: false,
    focussedCharacterId: "_1",
    focussedScenarioId: "SC_02",
  },
  scenarioMap: new Map([
    ["SC_01", sc01],
    ["SC_02", sc02],
  ]),
};
