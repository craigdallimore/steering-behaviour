import LookWhereYouAreGoing from "../lookWhereYouAreGoing";
import { fc, arbitraryKinematic } from "@test-utils";

describe("LookWhereYouAreGoing", () => {
  it("does not provide linear steering at all", () => {
    fc.assert(
      fc.property(arbitraryKinematic(), (kinematic) => {
        const lookWhereYouAreGoing = new LookWhereYouAreGoing();
        const steering = lookWhereYouAreGoing.calculate(kinematic);
        return steering.linear[0] === 0 && steering.linear[1] === 0;
      })
    );
  });
  it("does not provide angular steering given 0 velocity", () => {
    fc.assert(
      fc.property(arbitraryKinematic(), (kinematic) => {
        const lookWhereYouAreGoing = new LookWhereYouAreGoing();
        kinematic.velocity = [0, 0];
        const steering = lookWhereYouAreGoing.calculate(kinematic);
        return steering.angular === 0;
      })
    );
  });
});
