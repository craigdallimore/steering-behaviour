import type { Debug, SteeringBehaviourName } from "@domain/types";
import { immerable } from "immer";

export abstract class AbstractBehaviour {
  abstract readonly name: SteeringBehaviourName;
  weight = 1;
  debug: Debug = {
    circles: [],
    edges: [],
    points: [],
    vectors: [],
  };
  [immerable] = true;
}
