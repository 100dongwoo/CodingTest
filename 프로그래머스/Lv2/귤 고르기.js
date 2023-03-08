const getValueObj = (obj) => {
  return Object.values(obj).sort((a, b) => b - a);
};

function solution(k, tangerine) {
  let answer = 0;
  let tangerineObj = {};

  tangerine.map((data) => {
    tangerineObj[data] = tangerineObj[data] ? tangerineObj[data] + 1 : 1;
  });

  const valuesArr = getValueObj(tangerineObj);

  for (const value of valuesArr) {
    answer++;
    if (k <= value) {
      break;
    } else {
      k -= value;
    }
  }
  return answer;
}
