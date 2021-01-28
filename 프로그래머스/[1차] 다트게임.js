function solution(dartResult) {
  var answer = 0;
  let answerCount = [];
  let count = [];
  let score = "";

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "*" || dartResult[i] === "#") {
    } else if (
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      if (isNaN(dartResult[i + 1]) && dartResult[i + 1] !== undefined) {
        score = score + dartResult[i];
        score += dartResult[i + 1];
        count.push(score);
        score = "";
      } else {
        score = score + dartResult[i];
        count.push(score);
        score = "";
      }
    } else {
      score += dartResult[i];
    }
  }
  console.log(count);

  //여기서 계산
  for (let i = 0; i < 3; i++) {
    let check = "";
    for (let j = 0; j < count[i].length + 1; j++) {
      if (!isNaN(count[i][j])) {
        check += count[i][j];
      } else if (count[i][j] === "S") {
        check = parseInt(check);
      } else if (count[i][j] === "D") {
        check = Math.pow([parseInt(check)], [2]);
      } else if (count[i][j] === "T") {
        check = Math.pow([parseInt(check)], [3]);
      } else if (count[i][j] === "*") {
        if (i === 0) {
          check = parseInt(check) * 2;
        } else {
          answerCount[i - 1] = answerCount[i - 1] * 2;
          check = parseInt(check) * 2;
        }
      } else if (count[i][j] === "#") {
        check = parseInt(check) * -1;
      } else if (count[i][j] === undefined) {
        // answer=answer+parseInt(check)
        answerCount[i] = parseInt(check);
      }
    }
  }
  console.log(answerCount);
  for (let i = 0; i < 3; i++) {
    answer += answerCount[i];
  }
  return answer;
}
