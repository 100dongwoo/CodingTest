const MAPPING_OBJ = {
  "(": ")",
  "{": "}",
  "[": "]",
};

function checkWord(word) {
  const stack = [];
  for (let char of word) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (MAPPING_OBJ[stack[stack.length - 1]] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

function solution(word) {
  let answer = 0;
  const wordList = word.split("");
  const wordLength = wordList.length;

  for (let i = 1; i <= wordLength; i++) {
    let newWord = [];
    newWord = [...wordList]
      .splice(i, wordLength)
      .concat([...wordList].splice(0, i))
      .join("");
    if (checkWord(newWord)) {
      answer++;
    }
  }

  return answer;
}
