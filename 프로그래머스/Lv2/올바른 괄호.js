function solution(s) {
  let cnt = 0;
  var answer = true;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  let count = 0;
  if (s[0] === ")" || s.length % 2 !== 0) {
    return false;
  } else {
    s.split("").map((data, index) => {
      if (count < 0) {
        return;
      }
      if (s[index] === "(") {
        count += 1;
      } else {
        count -= 1;
      }
    });
  }
  return count === 0;
}
