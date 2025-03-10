function solution(topping) {
  let answer = 0;
  let leftSet = new Set();
  let rightMap = new Map();

  for (const t of topping) {
    rightMap.set(t, (rightMap.get(t) || 0) + 1);
  }

  for (const t of topping) {
    leftSet.add(t);
    rightMap.set(t, rightMap.get(t) - 1);

    if (rightMap.get(t) === 0) {
      rightMap.delete(t);
    }
    if (rightMap.size === leftSet.size) {
      answer++;
    }
  }

  return answer;
}
