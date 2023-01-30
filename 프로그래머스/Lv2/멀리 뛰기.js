function solution(n) {
  let arr = [1, 1, 2, 3, 5];
  for (let i = 5; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1234567;
  }
  return arr[n];
}
