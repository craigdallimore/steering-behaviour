import type { SteeringBehaviourName } from "@domain/types";

export abstract class AbstractBehaviour {
  abstract readonly name: SteeringBehaviourName;
}
