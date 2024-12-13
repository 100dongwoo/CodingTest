function solution(sequence, k) {
  let start = 0;
  let sum = 0;
  let answer = [];
  const totalLength = sequence.length;

  for (let end = 0; end < totalLength; end++) {
    sum += sequence[end];

    while (sum > k && start <= end) {
      sum -= sequence[start];
      start++;
    }

    if (sum === k) {
      answer.push([start, end]);
    }
  }

  return answer.sort((a, b) => a[1] - a[0] - (b[1] - b[0]))[0];
}
