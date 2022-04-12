import applyBehaviours from "@lib/applyBehaviours";
import makeScenario from "@domain/scenario_blank";
import * as steering from "@steering/index";
import Character from "@domain/character";

describe("applyBehaviours", () => {
  test.each([
    new steering.CollisionAvoidance(),
    new steering.LookWhereYouAreGoing(),
    new steering.ObstacleAvoidance(),
    new steering.Separation(),
    new steering.Wander(),
  ])("it invokes the calculate method for the $name behaviour", (behaviour) => {
    const scenario = makeScenario();
    jest.spyOn(behaviour, "calculate");
    const character = scenario.characters.values().next().value;
    character.behaviours = [behaviour];

    applyBehaviours(character, 1, scenario);

    expect(behaviour.calculate).toBeCalled();
  });

  test.each([
    new steering.Align(""),
    new steering.Arrive(""),
    new steering.Evade(""),
    new steering.Face(""),
    new steering.Flee(""),
    new steering.MatchVelocity(""),
    new steering.Pursue(""),
    new steering.Seek(""),
  ])(
    "it does not invoke the calculate method for the $name behaviour, given no valid target",
    (behaviour) => {
      const scenario = makeScenario();
      jest.spyOn(behaviour, "calculate");
      const character = scenario.characters.values().next().value;
      character.behaviours = [behaviour];

      applyBehaviours(character, 1, scenario);

      expect(behaviour.calculate).not.toBeCalled();
    }
  );

  test.each([
    new steering.Align("T"),
    new steering.Arrive("T"),
    new steering.Evade("T"),
    new steering.Face("T"),
    new steering.Flee("T"),
    new steering.MatchVelocity("T"),
    new steering.Pursue("T"),
    new steering.Seek("T"),
  ])(
    "it invokes the calculate method for the $name behaviour, given a valid target",
    (behaviour) => {
      const scenario = makeScenario();

      scenario.characters.set("T", new Character());
      jest.spyOn(behaviour, "calculate");
      const character = scenario.characters.values().next().value;
      character.behaviours = [behaviour];

      applyBehaviours(character, 1, scenario);

      expect(behaviour.calculate).toBeCalled();
    }
  );
  test.each([
    new steering.FollowPathChaseRabbit(""),
    new steering.FollowPathPredict(""),
  ])(
    "it does not invoke the calculate method for the $name behaviour, given no valid path",
    (behaviour) => {
      const scenario = makeScenario();
      jest.spyOn(behaviour, "calculate");
      const character = scenario.characters.values().next().value;
      character.behaviours = [behaviour];

      applyBehaviours(character, 1, scenario);

      expect(behaviour.calculate).not.toBeCalled();
    }
  );
  test.each([
    new steering.FollowPathChaseRabbit("P"),
    new steering.FollowPathPredict("P"),
  ])(
    "it invokes the calculate method for the $name behaviour, given a valid path",
    (behaviour) => {
      const scenario = makeScenario();
      scenario.paths.set("P", {
        label: "Test path",
        isClosed: false,
        position: [20, 20],
        points: [
          [50, 50],
          [50, 240],
          [150, 480],
        ],
      });

      jest.spyOn(behaviour, "calculate");
      const character = scenario.characters.values().next().value;
      character.behaviours = [behaviour];

      applyBehaviours(character, 1, scenario);

      expect(behaviour.calculate).toBeCalled();
    }
  );
});
