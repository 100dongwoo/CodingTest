function solution(numbers) {
  let stack = [];
  let answer = Array(numbers.length).fill(-1);
  for (let i = 0; i < numbers.length; i++) {
    while (numbers[stack[stack.length - 1]] < numbers[i]) {
      answer[stack.pop()] = numbers[i];
    }
    stack.push(i);
  }
  return answer;
}
