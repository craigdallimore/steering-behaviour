let
pkgs = import (fetchTarball "https://github.com/NixOS/nixpkgs/archive/nixos-21.11.tar.gz") {};
in pkgs.mkShell {
    buildInputs = [
      pkgs.yarn        #coc.vim
      pkgs.nodejs-14_x #coc.vim
    ];
    shellHook = ''
      alias gst='git status'
      alias gd='git diff'
      alias gc='git commit'
      alias gb='git branch'
      alias gco='git checkoout'
      :q() {
        exit
      }
    '';
  }
