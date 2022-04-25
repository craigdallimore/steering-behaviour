# TODO

## Priority

- [ ] Obstacle avoidance

  - [ ] OPTION one way is to cycle one ray per tick and when done a full cycle
        the shortest ray win and gets the most (or all) the influence.
        you keep that "winning" influence through out that cycle and update it after next cycle determines the new winner(s). That means if you have 6 rays you will keep that influence for 6 ticks.

  - [ ] Maybe raycasts can flip side each iteration, e.g. 1degR, 1degL, 2degR, 2degL
  - [ ] you could potentially also do a boolean search in each space, so do
    - a max angle raycast on the right and on the left
    - if one (or both) of them hit
      - do a raycast at the halfway mark on both / either side, and
      - keep halving until you have a good approximation of where the obstacles are on one or both sides
  - [ ] OPTION You could also make it so the top n rays wins and influence (weight) it by distance to rayhit \* "PriorityWinFactor" (the shortest ray gets higher priority/weight).

Then you can make a decision about what to do - there's an obstacle 15 degrees
right and 3 degrees left, so we probably turn right a bit and move a tick
forward, re-assess from there. Generally searching by halving the search space
each iteration is quite fast and if you're not too fussed about getting the
super precise answer (like within 0.1 degree is fine) it shouldn't take many
iterations to get a decently useful answer.

- [ ] Culling
  - Maybe you can do a broad fulcrum culling style selector to only consider
    candidates that are in the view cone. But again, that process would need
    to be faster than just doing the naïve test to be worth doing.

## Backlog

- [ ] Bug: Buttons feel really gummy
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
