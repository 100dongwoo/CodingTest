function solution(s) {
  var answer = 0;

  while (s.length > 0) {
    answer++;
    let firstCount = 1;
    let antherCount = 0;

    let first = s[0];
    for (let i = 1; i < s.length; i++) {
      if (first === s[i]) {
        firstCount++;
      } else {
        antherCount++;
      }
      if (firstCount === antherCount) {
        break;
      }
    }
    s = s.slice(firstCount + antherCount, s.length);
  }

  return answer;
}
