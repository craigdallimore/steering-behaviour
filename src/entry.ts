function main(): void {
  function frame(prevtime: number) {
    return function (time: number) {
      const t = (time - prevtime) / 1000;
      console.log({ t });
      window.requestAnimationFrame(frame(time));
    };
  }

  window.requestAnimationFrame(frame(0));
}

main();
