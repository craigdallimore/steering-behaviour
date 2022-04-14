import { getState } from "@domain/initialState";
import initBlankScenario from "@domain/scenario_blank";
import { reducer } from "@domain/reducer";
import { Vector } from "@domain/types";
import getFocussedCharacter from "@lib/getFocussedCharacter";
import * as steering from "@steering/index";
import Character from "@domain/character";

describe("TICK", () => {
  it("does nothing, given the UI is paused", () => {
    const initialState = getState();

    const character = new Character();
    character.kinematic.velocity = [10, 10];
    character.kinematic.position = [0, 0];

    initialState.scenario?.characters.set("x", character);
    initialState.ui.isPaused = true;

    const nextState = reducer(initialState, {
      type: "TICK",
      payload: 1,
    });

    const nextCharacter = nextState.scenario?.characters.get("x");

    expect(nextCharacter?.kinematic.position).toStrictEqual([0, 0]);
  });
  it("does nothing, given no scenario is present", () => {
    const initialState = getState();

    initialState.scenario = null;
    initialState.ui.isPaused = false;

    const initialUI = { ...initialState.ui };

    const nextState = reducer(initialState, {
      type: "TICK",
      payload: 1,
    });

    expect(nextState.ui).toEqual(initialUI);
  });
  it("updates the characters by applying behaviour", () => {
    const initialState = getState();

    const character = new Character();
    character.kinematic.velocity = [10, 10];
    character.kinematic.position = [0, 0];

    initialState.scenario?.characters.set("x", character);
    initialState.ui.isPaused = false;

    const nextState = reducer(initialState, {
      type: "TICK",
      payload: 1,
    });

    const nextCharacter = nextState.scenario?.characters.get("x");

    expect(nextCharacter?.kinematic.position).toStrictEqual([10, 10]);
  });
  it("adances the animation of action feeback", () => {
    const initialState = getState();
    initialState.ui.actionFeedbackCount = 5;
    initialState.ui.isPaused = false;

    const nextState = reducer(initialState, {
      type: "TICK",
      payload: 1,
    });

    expect(nextState.ui.actionFeedbackCount).toBe(4);
  });
});

describe("PLAY_BUTTON_CLICKED", () => {
  it("changes the play state from false to true", () => {
    const initialState = getState();
    const changedState = {
      ...initialState,
      ui: {
        ...initialState.ui,
        isPaused: false,
      },
    };
    const nextState = reducer(changedState, {
      type: "PLAY_BUTTON_CLICKED",
    });

    expect(nextState.ui.isPaused).toEqual(true);
  });
  it("changes the play state from true to false", () => {
    const initialState = getState();
    const changedState = {
      ...initialState,
      ui: {
        ...initialState.ui,
        isPaused: true,
      },
    };
    const nextState = reducer(changedState, {
      type: "PLAY_BUTTON_CLICKED",
    });

    expect(nextState.ui.isPaused).toEqual(false);
  });
});
describe("RESET_BUTTON_CLICKED", () => {
  it("restores initial value of the scenario", () => {
    const initialState = getState();
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
    const initialState = getState();
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
    const initialState = getState();
    expect(initialState.ui.isDebugMode).toBe(false);
    const nextState = reducer(initialState, {
      type: "DEBUG_MODE_CHANGED",
    });
    expect(nextState.ui.isDebugMode).toBe(true);
  });
});
describe("SCENARIO_CHANGED", () => {
  it("replaces the current scenario and focussed scenario id", () => {
    const initialState = getState();
    const initialFocussedScenarioId = initialState.ui.focussedScenarioId;
    const initialScenarioName = initialState.scenario?.name;
    const nextState = reducer(initialState, {
      type: "SCENARIO_CHANGED",
      payload: "SC_WANDER",
    });
    expect(nextState.ui.focussedScenarioId).toBe("SC_WANDER");
    expect(nextState.ui.focussedScenarioId).not.toBe(initialFocussedScenarioId);
    expect(nextState.scenario?.name).not.toBe(initialScenarioName);
  });
});

describe("CANVAS_CLICKED", () => {
  test("given no scenario, it returns the unchanged state", () => {
    const initialState = getState();
    const initialUI = { ...initialState.ui };

    initialState.scenario = null;

    const nextState = reducer(initialState, {
      type: "CANVAS_CLICKED",
      payload: [0, 0],
    });

    expect(nextState.ui).toEqual(initialUI);
  });
  test("given no characters, it returns the unchanged state", () => {
    const initialState = getState();
    const initialUI = { ...initialState.ui };

    if (initialState.scenario) {
      initialState.scenario.characters = new Map();
    }

    const nextState = reducer(initialState, {
      type: "CANVAS_CLICKED",
      payload: [0, 0],
    });

    expect(nextState.ui).toEqual(initialUI);
  });

  it("unfocusses the focussed character, given the click is not close to any character", () => {
    const initialState = getState();

    expect(initialState.ui.focussedCharacterId).not.toBe(null);

    const nextState = reducer(initialState, {
      type: "CANVAS_CLICKED",
      payload: [0, 0],
    });

    expect(nextState.ui.focussedCharacterId).toBe(null);
  });

  it("focusses a character, given it is not selecting a target and a character is close to the click", () => {
    const initialState = getState();

    if (initialState.scenario) {
      const character = new Character();
      character.kinematic.position = [1, 1];
      initialState.scenario.characters.set("_x", character);
    }

    const nextState = reducer(initialState, {
      type: "CANVAS_CLICKED",
      payload: [0, 0],
    });

    expect(nextState.ui.focussedCharacterId).toBe("_x");
  });
  it("does nothing, given the click targets an already focussed character", () => {
    const initialState = getState();
    initialState.ui.isSettingTarget = true;

    if (initialState.scenario) {
      const character = new Character();
      character.kinematic.position = [1, 1];
      character.behaviours.push(new steering.Align("_y"));
      initialState.scenario.characters.set("_x", character);
    }

    initialState.ui.focussedCharacterId = "_x";

    const nextState = reducer(initialState, {
      type: "CANVAS_CLICKED",
      payload: [0, 0],
    });

    expect(nextState.ui.isSettingTarget).toBe(true);
    expect(nextState.ui.focussedCharacterId).toBe("_x"); // no change
  });
  it("makes a character a target of the focussed characters behaviour, given the UI is in targeting mode", () => {
    const initialState = getState();
    initialState.ui.isSettingTarget = true;

    const behaviour = new steering.Seek("");

    const focussedCharacter = getFocussedCharacter(initialState);
    if (focussedCharacter) {
      focussedCharacter.behaviours = [behaviour];
    }

    if (initialState.scenario) {
      const character = new Character();
      character.kinematic.position = [1, 1];
      initialState.scenario.characters.set("_x", character);
    }

    expect(initialState.ui.focussedCharacterId).not.toBe("_x");

    const nextState = reducer(initialState, {
      type: "CANVAS_CLICKED",
      payload: [0, 0],
    });

    expect(behaviour.targetId).toBe("_x");

    expect(nextState.ui.focussedCharacterId).toBe("_1"); // no change
  });
});
describe("CANVAS_RESIZED", () => {
  it("updates the stored dimensions of the canvas", () => {
    const initialState = getState();
    const newDimensions: Vector = [120, 320];
    const nextState = reducer(initialState, {
      type: "CANVAS_RESIZED",
      payload: newDimensions,
    });
    expect(nextState.ui.canvasDimensions).toBe(newDimensions);
  });
});
describe("BEHAVIOUR_ADDED", () => {
  it("adds the new behaviour to the focussed character", () => {
    const initialState = getState();
    const behaviour = new steering.Wander();
    const char = getFocussedCharacter(initialState);
    expect(char?.behaviours).not.toContain(behaviour);

    const nextState = reducer(initialState, {
      type: "BEHAVIOUR_ADDED",
      payload: behaviour,
    });
    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.behaviours).toContain(behaviour);
  });
  it("does not put the ui into isSettingTarget mode, for a non-targetting behaviour", () => {
    const initialState = getState();
    const behaviour = new steering.Wander();
    expect(behaviour).not.toHaveProperty("targetId");

    expect(initialState.ui.isSettingTarget).toBe(false);
    const nextState = reducer(initialState, {
      type: "BEHAVIOUR_ADDED",
      payload: behaviour,
    });
    expect(nextState.ui.isSettingTarget).toBe(false);
  });
  it("puts the ui into isSettingTarget mode, for a targetting behaviour", () => {
    const initialState = getState();
    const behaviour = new steering.Seek("");
    expect(behaviour).toHaveProperty("targetId");

    expect(initialState.ui.isSettingTarget).toBe(false);
    const nextState = reducer(initialState, {
      type: "BEHAVIOUR_ADDED",
      payload: behaviour,
    });
    expect(nextState.ui.isSettingTarget).toBe(true);
  });
});
describe("BEHAVIOUR_CHANGED", () => {
  it("replaces an existing instance of a characters behaviour with a new instance", () => {
    const initialState = getState();
    const seek1 = new steering.Seek("a");
    const seek2 = new steering.Seek("b");
    const char = getFocussedCharacter(initialState);
    if (char) {
      char.behaviours[0] = seek1;
    }

    const nextState = reducer(initialState, {
      type: "BEHAVIOUR_CHANGED",
      payload: seek2,
    });

    const nextChar = getFocussedCharacter(nextState);

    expect(nextChar?.behaviours[0]).toBe(seek2);
  });
  it("does not put the ui into isSettingTarget mode, for a non-targetting behaviour", () => {
    const initialState = getState();
    const behaviour = new steering.Wander();
    expect(behaviour).not.toHaveProperty("targetId");

    expect(initialState.ui.isSettingTarget).toBe(false);
    const nextState = reducer(initialState, {
      type: "BEHAVIOUR_CHANGED",
      payload: behaviour,
    });
    expect(nextState.ui.isSettingTarget).toBe(false);
  });
  it("puts the UI into isSettingTarget mode, for targetting behaviours", () => {
    const initialState = getState();
    const behaviour = new steering.Seek("");
    expect(behaviour).toHaveProperty("targetId");

    expect(initialState.ui.isSettingTarget).toBe(false);
    const nextState = reducer(initialState, {
      type: "BEHAVIOUR_CHANGED",
      payload: behaviour,
    });
    expect(nextState.ui.isSettingTarget).toBe(true);
  });
});
describe("BEHAVIOUR_REMOVED", () => {
  it("given the last behaviour is removed, the character will stop moving", () => {
    const initialState = getState();
    const scenario = initBlankScenario();

    const character = new Character();
    character.kinematic.velocity = [10, 10];
    character.behaviours = [new steering.Wander()];

    scenario.characters = new Map([["_1", character]]);
    const changedState = {
      ...initialState,
      scenario,
    };
    changedState.ui.focussedCharacterId = "_1";
    const nextState = reducer(changedState, {
      type: "BEHAVIOUR_REMOVED",
      payload: "WANDER",
    });
    const char = nextState.scenario?.characters.get("_1");
    expect(char?.behaviours.length).toBe(0);

    expect(char?.kinematic.velocity).toEqual([0, 0]);
  });
});
describe("ORIENTATION_CHANGED", () => {
  it("updates the orientation of the focussed character", () => {
    const initialState = getState();
    const nextOrientation = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.orientation).not.toEqual(nextOrientation);

    const nextState = reducer(initialState, {
      type: "ORIENTATION_CHANGED",
      payload: nextOrientation,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.orientation).toBe(nextOrientation);
  });
});
describe("ROTATION_CHANGED", () => {
  it("updates the rotation of the focussed character", () => {
    const initialState = getState();
    const nextRotation = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.rotation).not.toEqual(nextRotation);

    const nextState = reducer(initialState, {
      type: "ROTATION_CHANGED",
      payload: nextRotation,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.rotation).toBe(nextRotation);
  });
});
describe("POSX_CHANGED", () => {
  it("updates the x position of the focussed character", () => {
    const initialState = getState();
    const nextPosition = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.position[0]).not.toEqual(nextPosition);

    const nextState = reducer(initialState, {
      type: "POSX_CHANGED",
      payload: nextPosition,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.position[0]).toBe(nextPosition);
  });
});
describe("POSZ_CHANGED", () => {
  it("updates the z position of the focussed character", () => {
    const initialState = getState();
    const nextPosition = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.position[1]).not.toEqual(nextPosition);

    const nextState = reducer(initialState, {
      type: "POSZ_CHANGED",
      payload: nextPosition,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.position[1]).toBe(nextPosition);
  });
});
describe("VELX_CHANGED", () => {
  it("updates the x velocity of the focussed character", () => {
    const initialState = getState();
    const nextVelocity = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.velocity[0]).not.toEqual(nextVelocity);

    const nextState = reducer(initialState, {
      type: "VELX_CHANGED",
      payload: nextVelocity,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.velocity[0]).toBe(nextVelocity);
  });
});
describe("VELZ_CHANGED", () => {
  it("updates the z velocity of the focussed character", () => {
    const initialState = getState();
    const nextVelocity = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.velocity[1]).not.toEqual(nextVelocity);

    const nextState = reducer(initialState, {
      type: "VELZ_CHANGED",
      payload: nextVelocity,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.velocity[1]).toBe(nextVelocity);
  });
});
describe("MAX_ACCELERATION_CHANGED", () => {
  it("updates the max acceleration of the focussed character", () => {
    const initialState = getState();
    const nextMaxAcceleration = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.maxAcceleration).not.toEqual(nextMaxAcceleration);

    const nextState = reducer(initialState, {
      type: "MAX_ACCELERATION_CHANGED",
      payload: nextMaxAcceleration,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.maxAcceleration).toBe(nextMaxAcceleration);
  });
});
describe("MAX_ANGULAR_ACCELERATION_CHANGED", () => {
  it("updates the max angular acceleration of the focussed character", () => {
    const initialState = getState();
    const nextMaxAngularAcceleration = 3;
    const char = getFocussedCharacter(initialState);
    expect(char?.kinematic.maxAngularAcceleration).not.toEqual(
      nextMaxAngularAcceleration
    );

    const nextState = reducer(initialState, {
      type: "MAX_ANGULAR_ACCELERATION_CHANGED",
      payload: nextMaxAngularAcceleration,
    });

    const nextChar = getFocussedCharacter(nextState);
    expect(nextChar?.kinematic.maxAngularAcceleration).toBe(
      nextMaxAngularAcceleration
    );
  });
});
