function solution(people, limit) {
  var answer = 0;
  let i = 0;
  people.sort((a, b) => b - a);
  while (i <= people.length - 1) {
    if (people[i] + people.at(-1) <= limit) {
      people.pop();
    }
    i++;
    answer++;
  }
  return answer;
}
