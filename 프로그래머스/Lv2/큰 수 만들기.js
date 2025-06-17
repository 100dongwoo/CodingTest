function solution(number, k) {
  const stack = [];
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    const current = number[i];

    while (stack.length && stack[stack.length - 1] < current && count < k) {
      stack.pop();
      count++;
    }
    stack.push(current);
  }

  return stack.slice(0, stack.length - (k - count)).join("");
}
