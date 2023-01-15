function solution(number, limit, power) {
  var answer = 0;

  const getChild = (num) => {
    let result = 0;
    let value = 0;
    while (value <= Math.sqrt(num)) {
      if (num % value === 0) {
        if (num / value === value) {
          result += 1;
        } else {
          result += 2;
        }
        if (result > limit) {
          break;
        }
      }
      value++;
    }
    return result;
  };

  let arr = [];
  Array(number)
    .fill(0)
    .map((data, index) => {
      arr.push(getChild(index + 1));
    });

  arr.map((data) => {
    if (data > limit) {
      answer += power;
    } else {
      answer += data;
    }
  });
  return answer;
}
