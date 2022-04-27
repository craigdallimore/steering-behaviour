## References

https://github.com/libgdx/gdx-ai/wiki/Steering-Behaviors
https://andrewfray.wordpress.com/2013/03/26/context-behaviours-know-how-to-share/

Closest point algorithms for various path geometries:
Schneider and Eberly [2003].

## Vector directions

`[20, 0]` To East
`[-20, 0]` To West
`[0, -20]` To North
`[0, 20]` To South

## Unit circle, degrees

>         90
>         |
>         |
> 180 ----+---- 0
>         |
>         |
>        270

## Unit circle, radians

>       0.5PI
>         |
>         |
> PI -----+---- 0, 2PI
>         |
>         |
>       1.5PI

## Orientations

Positive increments are clockwise
Negative increments are anticlockwise

| Orientation       | Points towards | Value |
| ----------------- | -------------- | ----- |
| `-2 * Math.PI`    | East           | -6.28 |
| `-1.75 * Math.PI` | South East     | -5.4  |
| `-1.5 * Math.PI`  | South          | -4.7  |
| `-1.25 * Math.PI` | South West     | -3.9  |
| `-1 * Math.PI`    | West           | -3.14 |
| `-0.75 * Math.PI` | North West     | -2    |
| `-0.5 * Math.PI`  | North          | -1.6  |
| `-0.25 * Math.PI` | North East     | -0.8  |
| `0`               | East           | 0     |
| `0.25 * Math.PI`  | South East     | 0.7   |
| `0.5 * Math.PI`   | South          | 1.5   |
| `0.75 * Math.PI`  | South West     | 2.3   |
| `1 * Math.PI`     | West           | 3.14  |
| `1.25 * Math.PI`  | North West     | 3.9   |
| `1.5 * Math.PI`   | North          | 4.7   |
| `1.75 * Math.PI`  | North East     | 5.4   |
| `2 * Math.PI`     | East           | 6.2   |

## Behaviours

### Angular

Align

- Field: Max. Rotation
- Field: Deceleration tolerance
- Field: Align tolerance
- Field: Time to Target
- [Target]

Face

- Dep: Align
- Field: Max. Rotation
- Field: Deceleration tolerance
- Field: Align tolerance
- Field: Time to Target
- [Target]

LookWhereYouAreGoing

- Dep: Align
- Field: Max. Rotation
- Field: Deceleration tolerance
- Field: Align tolerance
- Field: Time to Target
- [Target]

### Linear

Arrive

- Field: Target Radius
- Field: Slow Radius
- Field: Time to Target
- [Target]

CollisionAvoidance

- Field: Radius

Evade

- Dep: Flee
- Field: Max Prediction
- [Target]

Flee

- [Target]

FollowPathChaseRabbit

- Dep: Seek
- Field: Path offset
- [Path]

FollowPathPredict

- Dep: Seek
- Field: Path offset
- Field: Predict time
- [Path]

MatchVelocity

- Field: Time to Target
- [Target]

ObstacleAvoidance

- Field: Avoid Distance
- Dep: Seek

Pursue

- Dep: Seek
- Field: Max. prediction
- [Target]

Seek

- [Target]

Separation

- Field: Threshold
- Field: Decay coefficient

Wander

- Field: Offset
- Field: Radius
- Field: Rate 
