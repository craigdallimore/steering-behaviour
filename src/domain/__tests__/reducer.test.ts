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
describe('CANVAS_CLICKED', () => {});
describe('CANVAS_RESIZED', () => {});
describe("BEHAVIOUR_REMOVED", () => {
  it("given the last behaviour is removed, the character will stop moving", () => {
    const scenario = initBlankScenario();
    scenario.characters = new Map([
      [
        "_1",
        new Character(
          {
            maxSpeed: 45,
            position: [0, 0],
            velocity: [10, 10],
            orientation: 0,
            rotation: 0,
          },
          [new steering.Wander()]
        ),
      ],
    ]);
    const changedState = {
      ...initialState,
      scenario,
    };
    changedState.ui.focussedCharacterId = "_1";
    const nextState = reducer(changedState, {
      type: "BEHAVIOUR_CHANGED",
      payload: new steering.None(),
    });
    const char = nextState.scenario?.characters.get("_1");

    expect(char?.kinematic.velocity).toEqual([0, 0]);
  });
});
describe('SCENARIO_CHANGED', () => {});
describe('ORIENTATION_CHANGED', () => {});
describe('ROTATION_CHANGED', () => {});
describe('POSX_CHANGED', () => {});
describe('POSZ_CHANGED', () => {});
describe('VELX_CHANGED', () => {});
describe('VELZ_CHANGED', () => {});
*/
