function solution(s) {
  var answer = "";
  s = s.split(" ").sort((a, b) => parseInt(a) - parseInt(b));
  answer = s[0] + " " + s[s.length - 1];
  return answer;
}
