/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement } from "react";
import {
  queryHelpers,
  buildQueries,
  render,
  queries,
  RenderOptions,
  Matcher,
  MatcherOptions,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as fc from "fast-check";
import DispatchContext from "@components/DispatchContext";
import StateContext from "@components/StateContext";
import { getState } from "@domain/initialState";
import { State } from "@domain/types";

const queryAllByDataId = (
  container: HTMLElement,
  id: Matcher,
  options?: MatcherOptions | undefined
) => queryHelpers.queryAllByAttribute("data-id", container, id, options);
const getMultipleError = (_c: any, dataIdValue: any) =>
  `Found multiple elements with the data-id attribute of: ${dataIdValue}`;
const getMissingError = (_c: any, dataIdValue: any) =>
  `Unable to find an element with the data-id attribute of: ${dataIdValue}`;

const [
  queryByDataId,
  getAllByDataId,
  getByDataId,
  findAllByDataId,
  findByDataId,
] = buildQueries(queryAllByDataId, getMultipleError, getMissingError);

const customQueries = {
  queryByDataId,
  queryAllByDataId,
  getByDataId,
  getAllByDataId,
  findAllByDataId,
  findByDataId,
};

const AllTheProviders =
  (defaults: { dispatch: () => void; state: State }): FC =>
  ({ children }) => {
    return (
      <DispatchContext.Provider value={defaults.dispatch}>
        <StateContext.Provider value={defaults.state}>
          {children}
        </StateContext.Provider>
      </DispatchContext.Provider>
    );
  };

type Options = {
  state?: State;
  dispatch?: () => void;
} & Omit<RenderOptions, "queries">;

const customRender = (ui: ReactElement, options?: Options) => {
  return render(ui, {
    wrapper: AllTheProviders({
      dispatch: options?.dispatch ?? jest.fn(),
      state: options?.state ?? getState("SC_BLANK"),
    }),
    queries: { ...queries, ...customQueries },
    ...options,
  });
};

export * from "@testing-library/react";
export { customRender as render, userEvent, fc };

export const arbitraryVector = () => fc.tuple(fc.float(), fc.float());

export const arbitraryKinematic = () =>
  fc.record({
    maxAcceleration: fc.float(),
    maxAngularAcceleration: fc.float(),
    maxSpeed: fc.float(),
    position: arbitraryVector(),
    rotation: fc.float(),
    orientation: fc.float(),
    velocity: arbitraryVector(),
  });

export const arbitrarySteering = () =>
  fc.record({
    linear: fc.tuple(fc.float(), fc.float()),
    angular: fc.float(),
  });

export const arbitraryPath = () =>
  fc.record({
    label: fc.string(),
    position: arbitraryVector(),
    isClosed: fc.boolean(),
    points: fc.array(fc.tuple(fc.float(), fc.float()), { minLength: 2 }),
  });

export const arbitraryShape = () =>
  fc.record({
    path: arbitraryPath(),
  });
