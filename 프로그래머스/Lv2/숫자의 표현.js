function solution(n) {
  var answer = 0;
  for (let i = 1; i < n; i++) {
    let sum = 0;
    let count = i;
    while (sum <= n) {
      sum += count;
      count++;
      if (sum === n) {
        answer++;
      }
    }
  }
  return answer + 1;
}
