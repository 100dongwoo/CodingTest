const getGCD = (a, b) => {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

function solution(arrayA, arrayB) {
  var answer = 0;
  //  최대 공약수
  let gcdA = arrayA[0];
  let gcdB = arrayB[0];

  const checkFn = (arrayA, arrayB, GCD) => {
    let countFn = 0;
    while (true) {
      if (countFn > GCD) {
        break;
      }
      const arrayAcheck = arrayA.every((data) => data % countFn === 0);
      const arrayBcheck = arrayB.every((data) => data % countFn !== 0);
      if (arrayAcheck && arrayBcheck) {
        answer = answer < countFn ? countFn : answer;
      }
      countFn += GCD;
    }
  };

  for (let i = 1; i < arrayA.length; i++) {
    gcdA = getGCD(gcdA, arrayA[i]);
  }
  for (let i = 1; i < arrayB.length; i++) {
    gcdB = getGCD(gcdB, arrayB[i]);
  }
  checkFn(arrayA, arrayB, gcdA);
  checkFn(arrayB, arrayA, gcdB);

  return answer;
}
