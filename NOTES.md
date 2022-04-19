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
>
>

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

## Dependent behaviours

Evade uses Flee
Face uses Align
FPCR uses Seek
FPP uses Seek
LWYAG uses Align
ObstacleAvoidance uses Seek
Pursue uses Seek
Wander uses Face uses Seek

## Behaviours with targets

Align
Arrive
Evade
Face
Flee
Match Velocity
Pursue
Seek
