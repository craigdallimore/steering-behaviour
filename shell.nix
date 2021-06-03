let
pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-20.09.tar.gz") {};
in pkgs.stdenv.mkDerivation {
    name = "boilerplate";
    buildInputs = [
      pkgs.yarn        #coc.vim
      pkgs.nodejs-14_x #coc.vim
      pkgs.flow
    ];
    shellHook = ''
      alias gst='git status'
      alias gd='git diff'
      alias gc='git commit'
      :q() {
        exit
      }
    '';
  }
