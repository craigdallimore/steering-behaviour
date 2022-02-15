import { Behaviour, CharacterId } from "@domain/types";

export default function getFirstTargetId(
  behaviours: Array<Behaviour>
): null | CharacterId {
  return behaviours.reduce(
    (acc: null | CharacterId, behaviour: Behaviour): null | CharacterId => {
      if (acc) {
        return acc;
      }
      if ("targetId" in behaviour) {
        return behaviour.targetId;
      }
      return acc;
    },

    null
  );
}
