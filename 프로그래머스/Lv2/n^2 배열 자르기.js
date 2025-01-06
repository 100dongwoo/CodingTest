function solution(n, left, right) {
  return [...new Array(right + 1 - left)].map((_, i) => {
    const index = left + i;
    const row = Math.floor(index / n);
    const col = index % n;
    return Math.max(row, col) + 1;
  });
}
