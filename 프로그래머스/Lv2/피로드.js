function solution(k, dungeons) {
  let answer = 0;
  const totalLength = dungeons.length;
  const checkArray = Array(dungeons.length).fill(false);

  const dfsFn = (currentHp, deps) => {
    answer = Math.max(deps, answer);
    for (let i = 0; i < totalLength; i++) {
      const [minHp, useHp] = dungeons[i];
      if (!checkArray[i] && currentHp >= minHp) {
        checkArray[i] = true;
        dfsFn(currentHp - useHp, deps + 1);
        checkArray[i] = false;
      }
    }
  };
  dfsFn(k, 0);
  return answer;
}
