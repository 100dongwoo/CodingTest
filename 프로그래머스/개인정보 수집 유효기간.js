function solution(today, terms, privacies) {
  var answer = [];
  let term = {};
  let newPrivacies = [];

  terms.map((data, index) => {
    let test = data.split(" ");
    term[test[0]] = test[1];
  });

  let todaySplit = today.split(".");
  let todayNum =
    parseInt(todaySplit[0]) * 12 * 28 +
    parseInt(todaySplit[1]) * 28 +
    parseInt(todaySplit[2]);

  privacies.map((date, index) => {
    let dateData = date.split(" ");
    let divisionDate = dateData[0].split("."); //년 월일
    let divisionDateNum =
      parseInt(divisionDate[0] * 12 * 28) +
      parseInt(divisionDate[1] * 28) +
      parseInt(divisionDate[2]);
    let selectTerm = term[dateData[1]] * 28; //선택한 term 값

    let total = parseInt(divisionDateNum) + parseInt(selectTerm);
    console.log(todayNum, total);
    if (todayNum >= total) {
      answer.push(index + 1);
    }
  });

  //     const zeroCheck=(num)=>{
  //         return num===0?1:num;
  //     }

  //     privacies.map((date)=>{
  //         let dateData=date.split(' ');
  //         let divisionDate=dateData[0].split(".")         //년 월일
  //         let selectTerm=term[dateData[1]]  //선택한 term 값
  //             let year=zeroCheck(parseInt(divisionDate[0])+parseInt((parseInt(divisionDate[1])+parseInt(selectTerm))/12));
  //             let month=((parseInt(divisionDate[1])+parseInt(selectTerm)))%12
  //             newPrivacies.push(year+"."+month+'.'+divisionDate[2])
  //             console.log(parseInt(divisionDate[1]),parseInt(selectTerm))

  //     })

  //     newPrivacies.map((data,index)=>{
  //         let todayDate=today.split(".")
  //         let newPrivacieDate=data.split(".")
  //         // console.log(todayDate,newPrivacieDate)

  //         if(parseInt(todayDate[0])>parseInt(newPrivacieDate[0])){
  //             //년도가 크면
  //             answer.push(index+1)
  //         }

  //         else if(parseInt(todayDate[0])===parseInt(newPrivacieDate[0])){
  //             // 년도가 같으면
  //             if(parseInt(todayDate[1])>parseInt(newPrivacieDate[1])){
  //                 //월이 더 크면
  //                 answer.push(index+1)
  //             }
  //             else if(parseInt(todayDate[1])===parseInt(newPrivacieDate[1])){
  //                 if(parseInt(todayDate[2])>=parseInt(newPrivacieDate[2])){
  //                 //날이 더크면
  //                    answer.push(index+1)
  //                 }
  //             }

  //         }

  //     })
  //     console.log(answer)
  return answer;
}

///////////////////////////
//주석부분에서 1번 17번 오류로 패스 실패하여 일이 28일 고정인 부분을 사용하여 문재해결



//
// 참고 new Date사용

1
2
3
4
5
6
7
8
9
10
11
12
13
function solution(today, terms, privacies) {
  const termsObj = {};
  const destroy = [];
  terms.forEach(term => termsObj[term.split(" ")[0]] = term.split(" ")[1]);
  privacies.forEach((priv, i) => {
    const [date, term] = priv.split(" ");
    const finalDate = new Date(date);
    finalDate.setMonth(finalDate.getMonth() + +termsObj[term]);
    if (finalDate <= new Date(today)) destroy.push(i + 1);
  });
  return destroy;
}


