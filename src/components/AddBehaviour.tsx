import React, { useContext } from "react";
import { SteeringBehaviourName, Behaviour, Scenario } from "@domain/types";
import SelectBehaviour from "@components/SelectBehaviour";
import {
  Align,
  Arrive,
  CollisionAvoidance,
  Evade,
  Face,
  Flee,
  FollowPathChaseRabbit,
  FollowPathPredict,
  LookWhereYouAreGoing,
  MatchVelocity,
  ObstacleAvoidance,
  Pursue,
  Seek,
  Separation,
  Wander,
} from "@steering/index";
import StateContext from "./StateContext";

const getDefaultBehaviour = (
  name: SteeringBehaviourName,
  scenario: Scenario | null
): Behaviour => {
  switch (name) {
    case "ALIGN":
      return new Align("");
    case "ARRIVE":
      return new Arrive("");
    case "COLLISION_AVOIDANCE":
      return new CollisionAvoidance();
    case "EVADE":
      return new Evade("");
    case "FACE":
      return new Face("");
    case "FLEE":
      return new Flee("");
    case "FOLLOW_PATH_CHASE_RABBIT": {
      const firstPath = scenario?.paths.keys().next().value ?? "";
      return new FollowPathChaseRabbit(firstPath);
    }
    case "FOLLOW_PATH_PREDICT": {
      const firstPath = scenario?.paths.keys().next().value ?? "";
      return new FollowPathPredict(firstPath);
    }
    case "LOOK_WHERE_YOU_ARE_GOING":
      return new LookWhereYouAreGoing();
    case "MATCH_VELOCITY":
      return new MatchVelocity("");
    case "OBSTACLE_AVOIDANCE":
      return new ObstacleAvoidance();
    case "PURSUE":
      return new Pursue("");
    case "SEEK":
      return new Seek("");
    case "SEPARATION":
      return new Separation();
    case "WANDER":
      return new Wander();
    default:
      return new Wander();
  }
};

type Props = {
  onBehaviourChange: (behaviour: Behaviour) => void;
};

const AddBehaviour = (props: Props) => {
  const [isAddingBehaviour, setIsAddingBehaviour] = React.useState(false);
  const state = useContext(StateContext);

  if (isAddingBehaviour) {
    return (
      <>
        <SelectBehaviour
          behaviourName={"NONE"}
          onSelectBehaviour={(nextBehaviourName: SteeringBehaviourName) => {
            setIsAddingBehaviour(false);
            props.onBehaviourChange(
              getDefaultBehaviour(nextBehaviourName, state.scenario)
            );
          }}
        />
        <button
          className="button-cancel"
          type="button"
          onClick={() => {
            setIsAddingBehaviour(false);
          }}
        >
          Cancel
        </button>
      </>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setIsAddingBehaviour(true);
      }}
    >
      Add behaviour
    </button>
  );
};

export default AddBehaviour;
