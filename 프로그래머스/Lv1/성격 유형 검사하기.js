function solution(survey, choices) {
  let value = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };
  let firstValue = {
    1: 3,
    2: 2,
    3: 1,
  };
  survey.map((data, index) => {
    let isOver = choices[index] > 4;
    if (choices[index] === 4) {
      return;
    }
    value[data[isOver ? 1 : 0]] += isOver
      ? Math.abs(4 - choices[index])
      : firstValue[choices[index]];
  });
  const { R, T, C, F, J, M, A, N } = value;
  return `${R >= T ? "R" : "T"}${C >= F ? "C" : "F"}${J >= M ? "J" : "M"}${
    A >= N ? "A" : "N"
  }`;
}
