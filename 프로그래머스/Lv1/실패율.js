//2019 KAKAO BLIND RECRUITMENT
function solution(N, stages) {
  // N 스테이지 수
  // 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
  // var arr = Array.from({length: N}, () => 0);
  var arr = [];
  var arr1 = [];
  var answer = [];
  for (let i = 1; i < N + 1; i++) {
    let person = 0; //스테이지에 도달한 플레이어 수
    let count = 0; //스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
    let cc = 0; //클리어 한 사람 수
    for (let k = 0; k < stages.length; k++) {
      if (stages[k] >= i) {
        //도달한 사람 수
        person++;
      }
      if (stages[k] > i) {
        count++;
      }
    }
    count = person - count;
    if (person != 0) {
      arr.push(count / person);
      arr1.push(count / person);
    } else {
      arr.push(0);
      arr1.push(0);
    }
  }

  arr.sort(function (a, b) {
    // 내림차순
    return b - a;
  });

  for (let k = 0; k < arr.length; k++) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr[k] === arr1[i]) {
        answer.push(i + 1);
        console.log(i + 1);
        arr1[i] = null;
        break;
      }
    }
  }

  return answer;
}
