import React from "react";
import { SteeringBehaviourName, Behaviour } from "@domain/types.js";
import SelectBehaviour from "@components/SelectBehaviour.js";
import BehaviourSwitch from "./behaviours/BehaviourSwitch";
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
  None,
  ObstacleAvoidance,
  Pursue,
  Seek,
  Separation,
  Wander,
} from "@steering/index.js";

const getDefaultBehaviour = (name: SteeringBehaviourName): Behaviour => {
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
    case "FOLLOW_PATH_CHASE_RABBIT":
      return new FollowPathChaseRabbit("");
    case "FOLLOW_PATH_PREDICT":
      return new FollowPathPredict("");
    case "LOOK_WHERE_YOU_ARE_GOING":
      return new LookWhereYouAreGoing();
    case "MATCH_VELOCITY":
      return new MatchVelocity("");
    case "OBSTACLE_AVOIDANCE":
      return new ObstacleAvoidance("");
    case "PURSUE":
      return new Pursue("");
    case "SEEK":
      return new Seek("");
    case "SEPARATION":
      return new Separation();
    case "WANDER":
      return new Wander();
    default:
      return new None();
  }
};

type Props = {
  onBehaviourChange: (behaviour: Behaviour) => void;
};

const AddBehaviour = (props: Props) => {
  const [isAddingBehaviour, setIsAddingBehaviour] = React.useState(false);
  const [behaviourCandidate, setBehaviourCandidate] = React.useState<Behaviour>(
    new None()
  );

  const isTargetNeeded =
    "targetId" in behaviourCandidate && behaviourCandidate.targetId === "";

  if (isAddingBehaviour) {
    return (
      <>
        <button
          type="button"
          onClick={() => {
            setIsAddingBehaviour(false);
          }}
        >
          Cancel
        </button>
        <SelectBehaviour
          behaviourName={behaviourCandidate.name}
          onSelectBehaviour={(nextBehaviourName: SteeringBehaviourName) => {
            setBehaviourCandidate(getDefaultBehaviour(nextBehaviourName));
          }}
        />
        <BehaviourSwitch
          behaviour={behaviourCandidate}
          onBehaviourChange={(behaviour: Behaviour) => {
            setBehaviourCandidate(behaviour);
          }}
        />
        <button
          onClick={() => {
            setIsAddingBehaviour(false);
            props.onBehaviourChange(behaviourCandidate);
          }}
        >
          Set new behaviour
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
