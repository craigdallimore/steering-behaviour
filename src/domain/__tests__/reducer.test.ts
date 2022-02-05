import { initialState } from "@domain/initialState";
import { reducer } from "@domain/reducer";
import { Vector } from "@domain/types";

Object.freeze(initialState);

/*
test('TICK', () => {});
test('PLAY_BUTTON_CLICKED', () => {});
*/
describe("RESET_BUTTON_CLICKED", () => {
  it("restores initial values of the state", () => {
    const changedState = {
      ...initialState,
      ui: {
        ...initialState.ui,
        focussedCharacterId: "ABC",
      },
    };
    const nextState = reducer(changedState, {
      type: "RESET_BUTTON_CLICKED",
    });

    expect(nextState.ui.focussedCharacterId).toBe(
      initialState.ui.focussedCharacterId
    );
  });
  it("preserves the current canvas size - so it doesn't need to be recalculated", () => {
    const changedState = {
      ...initialState,
      ui: {
        ...initialState.ui,
        focussedCharacterId: "ABC",
        canvasDimensions: [123, 123] as Vector,
      },
    };
    const nextState = reducer(changedState, {
      type: "RESET_BUTTON_CLICKED",
    });

    expect(nextState.ui.canvasDimensions).toEqual([123, 123]);
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
