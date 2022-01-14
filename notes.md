## References

https://github.com/libgdx/gdx-ai/wiki/Steering-Behaviors

Closest point algorithms for various path geometries:
Schneider and Eberly [2003].

## Todo

- [ ] Typescript migration

  - [ ] Get canvas working
  - [ ] Get whole app working
  - [ ] yarn lint succeeds

- [ ] Decouple look-where-you-are-going from some behaviours
- [ ] Investigate and handle incorrectness issue with radiansToVector / vice versa

Steering pipeline

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

## Vector directions

`[20, 0]` To East
`[-20, 0]` To West
`[0, -20]` To North
`[0, 20]` To South

## Orientations

Positive increments are clockwise
Negative increments are anticlockwise

| Orientation       | Points towards |
| ----------------- | -------------- |
| `-2 * Math.PI`    | North          |
| `-1.75 * Math.PI` | North East     |
| `-1.5 * Math.PI`  | East           |
| `-1.25 * Math.PI` | South East     |
| `-1 * Math.PI`    | South          |
| `-0.75 * Math.PI` | South West     |
| `-0.5 * Math.PI`  | West           |
| `-0.25 * Math.PI` | North West     |
| `0`               | North          |
| `0.25 * Math.PI`  | North East     |
| `0.5 * Math.PI`   | East           |
| `0.75 * Math.PI`  | South East     |
| `1 * Math.PI`     | South          |
| `1.25 * Math.PI`  | South West     |
| `1.5 * Math.PI`   | West           |
| `1.75 * Math.PI`  | North West     |
| `2 * Math.PI`     | North          |
