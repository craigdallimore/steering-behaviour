import { getState } from "@domain/initialState";
import React from "react";

export default React.createContext(getState());
