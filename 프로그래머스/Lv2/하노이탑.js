function solution(n) {
  let arr = [];
  var answer = [[]];
  dp(n, 1, 3, 2);
  return arr;

  function dp(n, from, other, to) {
    if (n == 1) {
      arr.push([from, other]);
    } else {
      dp(n - 1, from, to, other);
      arr.push([from, other]);
      dp(n - 1, to, other, from);
    }
  }
}
