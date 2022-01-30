import React from "react";
import AlignControls from "./Align";
import ArriveControls from "./Arrive";
import CollisionAvoidanceControls from "./CollisionAvoidance";
import EvadeControls from "./Evade";
import FaceControls from "./Face";
import FleeControls from "./Flee";
import FollowPathChaseRabbitControls from "./FollowPathChaseRabbit";
import FollowPathPredictControls from "./FollowPathPredict";
import MatchVelocityControls from "./MatchVelocity";
import ObstacleAvoidanceControls from "./ObstacleAvoidance";
import PursueControls from "./Pursue";
import SeekControls from "./Seek";
import SeparationControls from "./Separation";
import WanderControls from "./Wander";
import { Behaviour } from "@domain/types";

type Props = {
  behaviour: Behaviour;
  onBehaviourChange: (behaviour: Behaviour) => void;
};

const BehaviourSpecificControls = (props: Props) => {
  const { behaviour } = props;

  switch (behaviour.name) {
    case "ALIGN":
      return (
        <AlignControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "ARRIVE":
      return (
        <ArriveControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "COLLISION_AVOIDANCE":
      return (
        <CollisionAvoidanceControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "EVADE":
      return (
        <EvadeControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "FACE":
      return (
        <FaceControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "FLEE":
      return (
        <FleeControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "FOLLOW_PATH_CHASE_RABBIT":
      return (
        <FollowPathChaseRabbitControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "FOLLOW_PATH_PREDICT":
      return (
        <FollowPathPredictControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "LOOK_WHERE_YOU_ARE_GOING":
      return null;
    case "MATCH_VELOCITY":
      return (
        <MatchVelocityControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "OBSTACLE_AVOIDANCE":
      return (
        <ObstacleAvoidanceControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "PURSUE":
      return (
        <PursueControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "SEEK":
      return (
        <SeekControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "SEPARATION":
      return (
        <SeparationControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    case "WANDER":
      return (
        <WanderControls
          behaviour={behaviour}
          onBehaviourChange={props.onBehaviourChange}
        />
      );
    default:
      return null;
  }
};

export default BehaviourSpecificControls;
