function solution(nums) {
  //소수 체크 함수
  const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let primeArray = [];
  let LEN = nums.length;
  let totalValue = 0;

  for (let first = 0; first < LEN - 2; first++) {
    for (let second = first + 1; second < LEN - 1; second++) {
      for (let third = second + 1; third < LEN; third++) {
        totalValue = nums[first] + nums[second] + nums[third];
        if (isPrime(totalValue)) {
          primeArray.push(totalValue);
        }
      }
    }
  }
  return primeArray.length;
}

//
