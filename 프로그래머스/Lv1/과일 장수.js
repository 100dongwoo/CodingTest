function solution(k, m, score) {
  var answer = 0;
  let answerList = [];
  score = score.sort((a, b) => b - a);
  for (let i = 0; i < score.length / m; i++) {
    answerList.push(score.slice(i * m, i * m + m));
  }
  answerList.map((data) => {
    if (data.length === m) {
      answer += data[m - 1] * m;
    }
  });
  return answer;
}
