// test
function solution(n) {
  let list = [1, 2];
  for (let i = 2; i <= n; i++) {
    if (!list[i]) {
      list.push((list[i - 2] + list[i - 1]) % 1000000007);
    }
  }
  return list[n - 1];
}
