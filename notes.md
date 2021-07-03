# Steering behaviours

## Development

### To start shell

`nix-shell`

### Development

```shell
# install deps
yarn
# start watching files for changes
yarn dev
```

## References

https://github.com/libgdx/gdx-ai/wiki/Steering-Behaviors

## todo

- [O] Simulator improvements

  - [x] Add play/pause and reset buttons
  - [x] Enable manual switching of the seek behaviour
  - [ ] Track mouse as target?
  - [x] Enable configuration of the initial target / character state

- [ ] Describe the various behaviours

- [ ] Implement Match velocity
- [ ] Implement Wander
- [ ] Implement Pursue
- [ ] Implement Face
- [ ] Implement follow path

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
