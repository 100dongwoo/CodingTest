function solution(X, Y) {
  var answer = [];
  let selectIndex = [];

  const countNumber = (str, text) => {
    return str.split(text).length - 1;
  };

  {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((data) => {
      let xCount = countNumber(X, data);
      let yCount = countNumber(Y, data);
      if (xCount === 0 || yCount === 0) {
        return;
      }
      let maxCount = Math.min(xCount, yCount);
      Array(maxCount)
        .fill(0)
        .map((sample) => {
          answer += data;
        });
    });
  }
  let answerSplit =
    answer.length < 1 ? [] : answer?.split("").sort((a, b) => b - a);
  return answer.length === 0
    ? "-1"
    : answerSplit.every((data) => data.includes("0"))
    ? "0"
    : answerSplit.join("");
}
