function solution(record) {
  var answer = [];
  let newData = {};
  let recodeSplit = record.map((data) => data.split(" "));

  recodeSplit.map((data) => {
    if (data[0] !== "Leave") {
      newData[data[1]] = data[2];
    }
  });
  recodeSplit.map((data) => {
    if (data[0][0] === "E") {
      answer.push(newData[data[1]] + "님이 들어왔습니다.");
    } else if (data[0][0] === "L") {
      answer.push(newData[data[1]] + "님이 나갔습니다.");
    }
  });
  return answer;
}
