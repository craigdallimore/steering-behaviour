import { initialState } from "@domain/initialState";
import { reducer } from "@domain/reducer";

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
describe("DEBUG_MODE_CHANGED", () => {
  it("inverts the value of the debug mode", () => {
    expect(initialState.ui.isDebugMode).toBe(false);
    const nextState = reducer(initialState, {
      type: "DEBUG_MODE_CHANGED",
    });
    expect(nextState.ui.isDebugMode).toBe(true);
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
