const findIndexFn = (word, keymap) => {
  let indexArr = [];
  keymap.map((str) => {
    const findIndex = str.split("").findIndex((data) => word === data);
    if (findIndex !== -1) {
      indexArr.push(findIndex + 1);
    }
  });
  if (indexArr.length > 0) {
    return Math.min(...indexArr);
  }
};

function solution(keymap, targets) {
  let answer = [];

  targets.map((target) => {
    let count = 0;
    target.split("").map((word) => {
      if (findIndexFn(word, keymap)) {
        count += findIndexFn(word, keymap);
      }
    });
    answer.push(count === 0 ? -1 : count);
  });
  return answer;
}
