function solution(prices) {
  var answer = [];
  const totalLength = prices.length;
  for (let i = 0; i < totalLength; i++) {
    let a = false;
    for (let j = i + 1; j < totalLength; j++) {
      if (prices[i] > prices[j]) {
        a = true;
        answer.push(j - i);
        break;
      }
    }
    if (a === false) {
      answer.push(prices.length - i - 1);
    }
  }
  return answer;
}

// ** 수정적용 (한개의 변수로 사용하여 가독성 )
function solution(prices) {
  var answer = [];
  const totalLength = prices.length;
  for (let i = 0; i < totalLength; i++) {
    let times = 0;
    for (let j = i + 1; j < totalLength; j++) {
      times++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(times);
  }
  return answer;
}
