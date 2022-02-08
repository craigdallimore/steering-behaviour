import type { State } from "@domain/types";
import sc01 from "./scenario01";
import sc02 from "./scenario02";
import sc03 from "./scenario03";

export const initialState: State = {
  ui: {
    actionFeedbackCount: -1,
    canvasDimensions: [800, 800],
    isDebugMode: true,
    isPaused: true,
    isSettingTarget: false,
    focussedCharacterId: "_1",
    focussedScenarioId: "SC_03",
  },
  scenarioMap: new Map([
    ["SC_01", sc01],
    ["SC_02", sc02],
    ["SC_03", sc03],
  ]),
};
