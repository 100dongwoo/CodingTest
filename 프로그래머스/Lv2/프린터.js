function solution(priorities, location) {
  let answer = 0;
  let maxValue = Math.max(...priorities);
  const indexList = priorities.map((_, index) => index);

  while (priorities.length !== 0) {
    if (priorities[0] < maxValue) {
      priorities.push(priorities.shift());
      indexList.push(indexList.shift());
    } else {
      answer += 1;
      priorities.shift();
      if (indexList.shift() === location) {
        break;
      }
      maxValue = Math.max(...priorities);
    }
  }
  return answer;
}
//인덱스배열을 사용해 해당 위치를 가져옴(풀이참고)
