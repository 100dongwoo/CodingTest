function solution(babbling) {
  var answer = 0;
  let c;
  babbling.map((data) => {
    let includeData = "";
    canSpeak.map((can) => {
      if (data.includes(can) && !data.includes(can + can)) {
        includeData += can.repeat(data.split(can).length - 1);
      }
    });
    if (includeData.length === data.length) {
      answer += 1;
    }
  });
  return answer;
}
