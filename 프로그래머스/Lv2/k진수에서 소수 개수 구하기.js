function solution(n, k) {
  let answer = 0;
  const value = n.toString(k).split(0);
  const isPrime = (num) => {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
  for (let i = 0; i < value.length; i++) {
    if (isPrime(value[i])) {
      answer++;
    }
  }
  return value.reduce((acc, cur) => acc + isPrime(cur), 0);
}
