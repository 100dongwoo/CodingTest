function solution(s, skip, index) {
  let answer = "";
  const origin = "abcdefghijklmnopqrstuvwxyz".split("");
  const newArr = origin.filter((data) => skip.split("").indexOf(data) === -1);
  const newArrLength = newArr.length;

  s.split("").map((data) => {
    let newIndex = newArr.indexOf(data) + index;
    newIndex = newIndex % newArrLength;
    answer += newArr[newIndex];
  });
  return answer;
}
