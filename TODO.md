# TODO

## Priority

## Backlog

- [ ] Bug: Buttons feel really gummy
- [ ] Bug: OBSTACLE_AVOIDANCE still clips when entering from right.

The target position comes from adding the collision position to
`multiply(collision.normal, 0 - this.avoidDistance)`;

suppose the collision position is [100, 200]
the `avoidDistance` is 50

### A

the normal is [-1, 0]
then the target will be -50 \* [-1, 0] ~> [150, 200]

### B

the normal is [1, 0]
then the target will be 50 \* [-1, 0] ~> [50, 200]

With the problem direction, the selected normal is [1, -0] (normal 1);

With the working direction, the selected normal is [1, 0] (normal 0)

---

- [ ] Feature: Add behaviour: should not permit already selected behaviours to be added
- [ ] Feature: Add behaviour: should not permit incompatible behaviours to be added (which?)
- [ ] Feature: Filter available behaviours based on the assigned behaviours
- [ ] Feature: Modal for Adding behaviour
- [ ] Feature: Modal for Adjusting blending
- [ ] Feature: Debug
  - [ ] Improve colouring
  - [ ] Add to all behaviours
    - [ ] align
    - [ ] arrive
    - [ ] evade
    - [ ] face
    - [ ] flee
    - [ ] lookWhereYouAreGoing
    - [ ] matchVelocity
    - [ ] pursue
    - [ ] seek
    - [ ] separation
- [ ] Feature: Paths
  - [ ] Are path offsets respected?
  - [ ] Make it possible to draw paths
- [ ] Feature: Should be possible to make the mouse a target
- [ ] Feature: The orientation picker should be more like a dial
- [ ] Feature: Help new users understand what they are looking at!
- [ ] Feature: Hovering an id should highlight the character
- [ ] Feature: The kinematic controls could be hidden until revealed
- [ ] Feature: Gather descriptions of each behaviour
- [ ] Feature: Store selected scenario in page url
- [ ] Feature: Cat and mouse characters
- [ ] Feature: Characters should not be able to leave the canvas. Bounce off the sides maybe?
- [ ] Feature: Make it possible to dynamically add characters to a scenario
- [ ] Feature: Add a button to stop a kinematic from moving
- [ ] Feature: Add a button to match the velocity to the orientation
- [ ] Feature: Reset button on scenario picker should not be present until the scenario has been started
