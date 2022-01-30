import { Action } from "@domain/reducer";
import React from "react";

const defaultValue: (action: Action) => void = () => {};

export default React.createContext(defaultValue);
