function solution(numbers, target) {
  let answer = 0;

  const dfs = (array, deps) => {
    if (deps === numbers.length) {
      if (array.reduce((arr, cur) => (arr += cur)) === target) {
        answer++;
      }
    } else {
      numbers[deps] *= 1;
      dfs(numbers, deps + 1);

      numbers[deps] *= -1;
      dfs(numbers, deps + 1);
    }
  };

  dfs(numbers, 0);

  return answer;
}
