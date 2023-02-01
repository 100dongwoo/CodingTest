function solution(s) {
  let answer = [0, 0];
  while (s !== "1") {
    let value = s.split("0").length - 1;
    s = (s.length - value).toString(2);
    answer[1] += value;
    answer[0] += 1;
  }
  return answer;
}
