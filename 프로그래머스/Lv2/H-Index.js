function solution(citations) {
  var answer = 0;
  citations
    .sort((a, b) => b - a)
    .map((data, index) => {
      if (data >= index + 1) {
        answer += 1;
      }
    });
  return answer;
}
