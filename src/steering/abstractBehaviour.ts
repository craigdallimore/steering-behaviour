import type { SteeringBehaviourName } from "@domain/types";
import { immerable } from "immer";

export abstract class AbstractBehaviour {
  abstract readonly name: SteeringBehaviourName;
  [immerable] = true;
}
