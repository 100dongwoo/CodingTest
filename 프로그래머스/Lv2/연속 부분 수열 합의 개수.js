function solution(elements) {
  let result = [];
  const sumWith = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };
  for (let i = 1; i <= elements.length; i++) {
    const els = elements.concat(elements.slice(0, i));
    for (let j = 0; j < elements.length; j++) {
      result.push(sumWith(els.slice(j, j + i)));
    }
  }
  const set = new Set(result);

  return [...set].length;
}
