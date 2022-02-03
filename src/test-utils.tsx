import { ReactElement } from "react";
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

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { queries: { ...queries, ...customQueries }, ...options });

export * from "@testing-library/react";
export { customRender as render, userEvent };
