function solution(k, score) {
  var answer = [];
  score.map((data, index) => {
    let arr = score.slice(0, index + 1);
    answer.push(
      arr
        .sort((a, b) => b - a)
        .slice(0, k)
        .at(-1)
    );
  });
  return answer;
}
