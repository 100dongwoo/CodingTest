function solution(new_id) {
  var answer = "";
  new_id = new_id.toLowerCase();
  answer = new_id.toLowerCase(); //1

  answer = answer.replace(/[^0-9a-z-_.]/gi, ""); //2

  answer = answer.replace(/[.]{2,}/g, "."); //3
  let testAnswer = answer;
  //  for(let i=0;i<new_id.length;i++)
  //      {
  //          if(new_id[i]>='a'&&new_id[i]<='z')
  //              {
  //                   answer.push(new_id[i])
  //              }
  //          else if(new_id[i]==='-'||new_id[i]==='.'||new_id[i]==='_')
  //              {
  //                   answer.push(new_id[i])
  //              }
  //          else if(new_id[i]>='0' &&new_id[i]<='9')
  //              {
  //                   answer.push(new_id[i])
  //              }
  //          else {
  //          }
  //      }
  // var testAnswer = answer.join('');
  testAnswer = testAnswer.replace("...", ".");
  testAnswer = testAnswer.replace("..", ".");

  if (testAnswer[0] === ".") {
    testAnswer = testAnswer.slice(1, testAnswer.length);
  }
  if (testAnswer[testAnswer.length] === ".") {
    testAnswer.pop();
  }
  if (testAnswer === "") {
    testAnswer += "a";
  }
  testAnswer = testAnswer.slice(0, 15);
  if (testAnswer[testAnswer.length - 1] === ".") {
    testAnswer = testAnswer.slice(0, testAnswer.length - 1);
  }
  console.log("길이", testAnswer.length);
  if (testAnswer.length <= 2) {
    let final = testAnswer[testAnswer.length - 1];
    while (1) {
      if (testAnswer.length === 3) {
        break;
      } else {
        testAnswer += final;
      }
    }
  }

  return testAnswer;
}
// 조건을 사용하기위해 정규 표현식을 찾아서 사용하였음(이에 시간이 소비)
