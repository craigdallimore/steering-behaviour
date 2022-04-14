import { getState } from "@domain/initialState";
import React from "react";

const focussedScenarioId = window.location.hash.slice(1) || "SC_BLANK";

export default React.createContext(getState(focussedScenarioId));
