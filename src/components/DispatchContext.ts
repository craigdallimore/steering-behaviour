import { Action } from "@domain/reducer";
import React from "react";

const defaultValue: (action: Action) => void = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

export default React.createContext(defaultValue);
