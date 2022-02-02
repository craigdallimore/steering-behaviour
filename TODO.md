# TODO

- [ ] Make sure targets/paths/shapes can be picked for all behaviours
- [ ] Behaviour config should include configuring dependent behaviour
- [ ] A character should be able to have multiple blendable behaviours
- [ ] Move helpers out from class files
- [ ] Reducer can be more imperative
- [ ] Find a way to have a debug variant for each view
- [ ] Testing
  - [ ] How to show coverage
  - [ ] How to test component
  - [ ] How to test library file
- [ ] Scenario picker. It would be neat to select a scenario to play, and have the app restart with fresh state.
- [ ] Reset button on scenario picker is not present until the scenario has been started
- [ ] Make it possible to dynamically add characters to a scenario
- [ ] Make it possible to draw paths
- [ ] Path should be closable?
- [ ] Should be possible to make the mouse a target
- [ ] The orientation picker should be more like a dial
- [ ] Help new users understand what they are loking at!
- [ ] Hovering an id should highlight the character
- [ ] RTS controls:
  - [x] Thicker white selection box
  - [x] Don't show the "pick a target" button when selecting a target!
  - [x] Deselecting a character should show nothing in the sidebar
  - [ ] Round targeting reticule
  - [ ] When clicking on a target, there should be a clear visual indication
        the click worked
  - [x] Clicking off a character should unselect it
  - [ ] When performing an action, the cursor should look different
  - [ ] When hovering a character, the cursor should look different
- [ ] Gather descriptions of each behaviour
- [ ] Add Art Deco styling
- [ ] Does dispatch cause unexpected re-renders?
- [ ] Do state changes cause unexpected re-renders?

## Steering behaviours

suspect

- [ ] COLLISION_AVOIDANCE Not really working well?
- [ ] WANDER

needs to be able to select a path/shape

- [ ] FOLLOW_PATH_CHASE_RABBIT
- [ ] FOLLOW_PATH_PREDICT
- [ ] OBSTACLE_AVOIDANCE

## Steering pipeline

- Targeters
  - Work out what the movement goal is
  - targets could be positional, orientation, velocity, rotation (known as channels)
  - generate the top level goal
  - think in terms of the characters goal
- Decomposers
  - provide subgoals that lead to the main goal
  - might use a pathfinding algorithm to produce a route to a goal
  - most commonly used to integrate path planning into steering
  - can be any number
  - order matters
  - can do nothing (given the goal cannot be decomposed)
  - returns a subgoal, which is passed to the next decomposer, and so on until all decomposers are used
- constraints
  - limit that way a character can achieve a goal or sub-goal
  - detects if moving towards the current sub-goal violates the constraint and suggests avoidance
  - tends to represent obstacles (characters or walls)
  - used with the actuator; reviews paths and check if they are sensible
- actuator
  - only one per character
  - works out the path to the current subgoal
  - limits the physical movement capabilities of a character

---

```

class SteeringPipeline:
# Lists of components at each stage of the pipe
targeters
decomposers
constraints
actuator

# Holds the number of attempts the algorithm will make
# to fund an unconstrained route.
constraintSteps

# Holds the deadlock steering behavior
deadlock

# Holds the current kinematic data for the character
kinematic

# Performs the pipeline algorithm and returns the
# required forces used to move the character
def getSteering():

  # Firstly we get the top level goal
  goal
  for targeter in targeters:
    goal.updateChannels(targeter.getGoal(kinematic))

  # Now we decompose it
  for decomposer in decomposers:
    goal = decomposer.decompose(kinematic, goal)

  # Now we loop through the actuation and constraint
  # process
  validPath = false
  for i in 0..constraintSteps:

    # Get the path from the actuator
    path = actuator.getPath(kinematic, goal)

    # Check for constraint violation
    for constraint in constraints:
      # If we find a violation, get a suggestion
      if constraint.isViolated(path):
        goal = constraint.suggest(path, kinematic, goal)

      # Go back to the top level loop to get the
      # path for the new goal
      break continue

    # If we’re here it is because we found a valid path
    return actuator.output(path, kinematic, goal)

  # We arrive here if we ran out of constraint steps.
  # We delegate to the deadlock behavior
  return deadlock.getSteering()
```

1 targeter to many decomposers (used in series)
