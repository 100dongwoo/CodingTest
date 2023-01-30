function solution(arr) {
  let maxValue = Math.max(...arr);
  const check = (num) => {
    for (let i = 0; i < arr.length; i++) {
      if (num % arr[i] !== 0) {
        return false;
      }
    }
    return true;
  };
  while (true) {
    if (!check(maxValue)) {
      maxValue++;
    } else {
      break;
    }
  }
  return maxValue;
}
