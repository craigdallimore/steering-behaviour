import { getState } from "@domain/initialState";
import { StateConfig } from "@domain/types";
import React from "react";
import qs from "query-string";

const config: StateConfig = qs.parse(window.location.hash);

export default React.createContext(getState(config));
