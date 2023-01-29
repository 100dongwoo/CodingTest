function solution(s) {
  var answer = "";
  s.split(" ").map((data, index) => {
    if (data === "") {
      answer += " ";
    } else {
      data.split("").map((value, valueIndex) => {
        answer += valueIndex === 0 ? value.toUpperCase() : value.toLowerCase();
      });
      answer += " ";
    }
  });
  return answer.slice(0, answer.length - 1);
}
