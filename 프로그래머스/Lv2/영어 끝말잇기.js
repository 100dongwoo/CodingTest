function solution(n, words) {
  let answer = [];
  let usedWordList = [];

  for (let index = 0; index < words.length; index++) {
    const word = words[index];

    const listKeyword = usedWordList.at(-1);
    const isError = listKeyword && word[0] !== listKeyword.at(-1);

    if (isError || usedWordList.includes(word)) {
      const userIndex = (index % n) + 1;
      const userCount = (index - userIndex + 1) / n + 1;

      answer = [userIndex, userCount];
      break;
    } else {
      usedWordList.push(word);
    }
  }
  return answer.length === 0 ? [0, 0] : answer;
}
