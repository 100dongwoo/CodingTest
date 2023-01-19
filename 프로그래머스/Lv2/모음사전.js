function solution(word) {
  var answer = 0;
  let obj = { A: 0, E: 1, I: 2, O: 3, U: 4 };
  word.split("").map((data, i) => {
    answer += obj[data] * ((5 ** (5 - i) - 1) / 4);
  });
  return answer + word.length;
}
