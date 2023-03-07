function solution(progresses, speeds) {
  let answer = [];
  let remainArr = [];
  let remainCount = 1;

  progresses.map((data, index) => {
    let count = 100 - data;
    let value = parseInt(count / speeds[index]);
    remainArr.push(count % speeds[index] === 0 ? value : value + 1);
  });

  let firstDay = remainArr[0];

  for (let i = 1; i < remainArr.length + 1; i++) {
    if (firstDay >= remainArr[i]) {
      remainCount += 1;
    } else {
      answer.push(remainCount);
      firstDay = remainArr[i];
      remainCount = 1;
    }
  }

  return answer;
}
