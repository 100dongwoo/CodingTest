function solution(number) {
  var answer = 0;
  for (let first = 0; first < number.length - 2; first++) {
    for (let second = first + 1; second < number.length - 1; second++) {
      for (let third = second + 1; third < number.length; third++) {
        if (number[first] + number[second] + number[third] === 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}
