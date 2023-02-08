function solution(begin, end) {
  let answer = [];
  const getChild = (num) => {
    if (num === 1) {
      return 0;
    }
    let value = 2;
    while (value <= Math.sqrt(num)) {
      //         1e7 조건 추가하니 문제해결됨
      if (num % value === 0 && num / value <= 1e7) {
        return num / value;
      }
      value++;
    }
    return 1;
  };
  for (let i = begin; i <= end; i++) {
    answer.push(getChild(i));
  }
  return answer;
}
