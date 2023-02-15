function solution(numbers) {
  let answer = [];
  answer = numbers.map((data) => data.toString());

  answer.sort(function (a, b) {
    return b + a - (a + b);
  });

  const set = [...new Set(answer)];
  return set.length === 1 && set[0] === "0" ? "0" : answer.join("");
}
