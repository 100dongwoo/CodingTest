function solution(a, b, n) {
  var answer = 0;
  while (n >= a) {
    let count = parseInt(n / a) * b; //받는 공병 갯수
    n = count + (n % a); //가지고있는 공병 갯수
    answer += count;
  }
  return answer;
}
