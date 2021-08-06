## References

https://github.com/libgdx/gdx-ai/wiki/Steering-Behaviors

Closest point algorithms for various path geometries:
Schneider and Eberly [2003].

## Todo

- [ ] Add steering configs

  - [ ] Choosing a behaviour will display a behaviour-specific fieldset
  - [ ] Describe the various behaviours

- [ ] Fix Wander implementation
- [ ] Separation behaviour should work with all targets
- [ ] Add collision avoidance
- [ ] Add obstacle avoidance
- [ ] Add evade
- [ ] Add flee

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
