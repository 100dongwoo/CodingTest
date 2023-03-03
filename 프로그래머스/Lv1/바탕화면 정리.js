function solution(wallpaper) {
  let answer = [];

  for (let row = 0; row < wallpaper.length; row++) {
    for (let column = 0; column < wallpaper[0].length; column++) {
      if (wallpaper[row][column] === "#") {
        answer.push([row, column]);
      }
    }
  }

  const minRow = Math.min(...answer.map((data) => data[0]));
  const maxRow = Math.max(...answer.map((data) => data[0]));
  const minColumn = Math.min(...answer.map((data) => data[1]));
  const maxColumn = Math.max(...answer.map((data) => data[1]));

  return [minRow, minColumn, maxRow + 1, maxColumn + 1];
}
