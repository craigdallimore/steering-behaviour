# TODO

## Priority

- [ ] Optimise obstacle avoidance
  - [ ] findAllIntersections taking 11.62ms
  - [ ] down to 2.5ms (still 15fps@100 mice, 25fps@50)
  - What is the anon function below it?
  - Lots of "Compile code" and "minor GC"
  - Massive memory sawtoothing

## Backlog

- [ ] Feature: The kinematic controls could be hidden until revealed
- [ ] Feature: Add behaviour: should not permit already selected behaviours to be added
- [ ] Feature: Add behaviour: should not permit incompatible behaviours to be added (which?)
- [ ] Feature: Filter available behaviours based on the assigned behaviours
- [ ] Feature: Modal for Adding behaviour
- [ ] Feature: Modal for Adjusting blending
- [ ] Feature: Debug
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
- [ ] Feature: Gather descriptions of each behaviour
- [ ] Feature: Store selected scenario in page url
- [ ] Feature: Characters should not be able to leave the canvas. Bounce off the sides maybe?
- [ ] Feature: Make it possible to dynamically add characters to a scenario
- [ ] Feature: Add a button to stop a kinematic from moving
- [ ] Feature: Add a button to match the velocity to the orientation
- [ ] Feature: Reset button on scenario picker should not be present until the scenario has been started
