# TODO

- [ ] REFACTOR

  - [x] lint
  - [x] Move draw functions to a folder
  - [x] Hook up DOM controls
  - [x] rename segment to edge
  - [ ] files:

    - [ ] applyBehaviour
      - [ ] OBSTACLE_AVOIDANCE, do not use hardcoded shape id. I think this deserves some research
    - [ ] initialState/State: separate state for controls and scene
    - [ ] behaviourDefault - might it be better to use class instances for this?
      - For each behaviour
        - have a class that takes config and returns an instance that can be used for behaving
        - behaviours like chaseRabbit can be instantiated with a PathId and a seek config
        - behaviours can be instantiated with default values, that can be overridden
        - [ ] Fix the change behaviour UI
    - [ ] A character should be able to have multiple blendable behaviours

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
  - [ ] Canvas should be dynamically sized and will work when resized
  - [ ] Hover and focus styles for mouse cursor

- [ ] Decouple look-where-you-are-going from some behaviours

## Steering behaviours

NONE

[x] ALIGN -------------------------------------

Aims to match a given orientation.
Increases rotation speed
Backs off based on timeToTarget
Stops within alignTolerance

[x] ARRIVE -------------------------------------

Takes a target.

Accelerates towards a target
Slows within slowRadius
Stops within targetRadius

[x] COLLISION_AVOIDANCE ------------------------

[x] EVADE --------------------------------------

- [x] tested, working
- uses FLEE

- [ ] FACE ---------------------------------------

- uses ALIGN
- [ ] broken?

[x] FLEE ---------------------------------------

- [x] tested, working

[x] FOLLOW_PATH_CHASE_RABBIT -------------------

- [x] tested, works ok
- uses SEEK

[x] FOLLOW_PATH_PREDICT ------------------------

- uses SEEK

[x] LOOK_WHERE_YOU_ARE_GOING -------------------

- [x] tested, working
- uses ALIGN

[x] MATCH_VELOCITY -----------------------------

[x] OBSTACLE_AVOIDANCE -------------------------

- [ ] Not exactly working
- uses SEEK

[x] PURSUE -------------------------------------

- [x] tested, working
- uses SEEK

[x] SEEK ---------------------------------------

[x] SEPARATION ---------------------------------

[x] WANDER -------------------------------------

- tested, broken
- uses FACE
  - uses ALIGN

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
