function solution(cards1, cards2, goal) {
  var answer = "Yes";

  for (let i = 0; i < goal.length; i++) {
    const data = goal[i];
    if (cards1[0] === data) {
      cards1.shift();
    } else if (cards2[0] === data) {
      cards2.shift();
    } else {
      answer = "No";
      break;
    }
  }
  return answer;
}
