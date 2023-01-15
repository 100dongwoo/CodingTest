function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    let splitWordIndex = s.slice(0, i).lastIndexOf(s[i]);

    answer.push(splitWordIndex !== -1 ? i - splitWordIndex : splitWordIndex);
  }
  return answer;
}
