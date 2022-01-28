import type { SteeringBehaviourName } from "@domain/types.js";

export abstract class AbstractBehaviour {
  abstract readonly name: SteeringBehaviourName;
}
