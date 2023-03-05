const solution = (brown, yellow) => {
  for (let yellowHeight = 1; yellowHeight <= yellow; yellowHeight++) {
    if (yellow % yellowHeight === 0) {
      const yellowWidth = yellow / yellowHeight;
      const width = yellowWidth + 2;
      const height = yellowHeight + 2;

      if (
        yellowHeight * yellowWidth === yellow &&
        width * height === brown + yellow
      ) {
        return [width, height];
      }
    }
  }
};
