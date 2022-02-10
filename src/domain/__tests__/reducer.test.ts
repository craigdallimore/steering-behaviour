import { initialState } from "@domain/initialState";
import { reducer } from "@domain/reducer";
import { Vector } from "@domain/types";

Object.freeze(initialState);

/*
test('TICK', () => {});
test('PLAY_BUTTON_CLICKED', () => {});
*/
describe("RESET_BUTTON_CLICKED", () => {
  it("restores initial value of the scenario", () => {
    const changedState = {
      ...initialState,
      scenario: null,
    };
    const nextState = reducer(changedState, {
      type: "RESET_BUTTON_CLICKED",
    });

    expect(nextState.scenario).toEqual(initialState.scenario);
    expect(nextState.scenario).not.toBe(null);
  });
  it("pauses the scenario", () => {
    const changedState = {
      ...initialState,
      ui: {
        ...initialState.ui,
        isPaused: false,
      },
    };
    const nextState = reducer(changedState, {
      type: "RESET_BUTTON_CLICKED",
    });

    expect(nextState.ui.isPaused).toBe(true);
  });
});
/*
test('CANVAS_CLICKED', () => {});
test('CANVAS_RESIZED', () => {});
test('BEHAVIOUR_CHANGED', () => {});
test('SCENARIO_CHANGED', () => {});
test('ORIENTATION_CHANGED', () => {});
test('ROTATION_CHANGED', () => {});
test('POSX_CHANGED', () => {});
test('POSZ_CHANGED', () => {});
test('VELX_CHANGED', () => {});
test('VELZ_CHANGED', () => {});
*/
