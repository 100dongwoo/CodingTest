function solution(n) {
  var answer = "";
  let arr = [4, 1, 2];
  while (n > 0) {
    let remain = n % 3;
    n = remain === 0 ? parseInt(n / 3) - 1 : parseInt(n / 3);
    answer += arr[remain];
  }
  return answer.split("").reverse().join("");
}
