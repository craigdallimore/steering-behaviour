# TODO

- [ ] REFACTOR

  - [x] lint
  - [x] Move draw functions to a folder
  - [x] Hook up DOM controls
  - [x] rename segment to edge
  - [x] Add granular control views for all behaviours
  - [x] Integrate controls
  - [x] Enable change target
  - [x] Fix the change behaviour UI
  - [ ] Add "Remove behaviour"
  - [ ] Add "Add behaviour"
  - [ ] Canvas should be dynamically sized and will work when resized
  - [ ] Improve overall styling
  - [ ] Fix Face behaviour
  - [ ] Test all behaviours
  - [ ] A character should be able to have multiple blendable behaviours
  - [ ] Move helpers out from class files
  - [ ] Does dispatch cause unexpected re-renders?
  - [ ] Do state changes cause unexpected re-renders?
  - [x] Update orientation notes

  - [ ] Break up components
  - [ ] Find a way to have a debug variant for each view
  - [ ] Testing
    - [ ] How to show coverage
    - [ ] How to test component
    - [ ] How to test library file

- [ ] QOL improvements

  - [ ] Scenario picker. It would be neat to select a scenario to play, and have the app restart with fresh state.
  - [ ] Make it possible to dynamically add characters to a scenario
  - [ ] The orientation picker should be more like a dial
  - [ ] Hover and focus styles for mouse cursor

## Steering behaviours

- [ ] NONE
- [ ] ALIGN
- [ ] ARRIVE
- [ ] COLLISION_AVOIDANCE
- [ ] EVADE
  - [ ] tested, working
- [ ] FACE
  - [ ] broken?
- [ ] FLEE
  - [ ] tested, working
- [ ] FOLLOW_PATH_CHASE_RABBIT
  - [ ] tested, works ok
- [ ] FOLLOW_PATH_PREDICT
- [ ] LOOK_WHERE_YOU_ARE_GOING
  - [ ] tested, working
- [ ] MATCH_VELOCITY
- [ ] OBSTACLE_AVOIDANCE
  - [ ] Not exactly working
- [ ] PURSUE
  - [ ] tested, working
- [ ] SEEK
- [ ] SEPARATION
- [ ] WANDER
- [ ] tested, broken

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
