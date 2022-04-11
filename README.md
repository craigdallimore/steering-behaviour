# Steering behaviours

[![Build][build-badge]][build]

Based on _Artificial Intelligence for Games_ by Ian Millington and John Funge.

## Development

This project uses [nix](https://nixos.org/) to install dependencies for the development shell.

### Commands

`nix-shell` - starts a development shell with system dependencies

#### Within the shell

`yarn` - install project dependencies

`yarn test` - run the tests

`yarn dev` - start a dev server, and start watching files for changes

`yarn build` - deploy a bundle to `/dist`

<!-- Definitions -->

[build-badge]: https://github.com/craigdallimore/steering-behaviour/workflows/main/badge.svg
[build]: https://github.com/craigdallimore/steering-behaviour/actions
