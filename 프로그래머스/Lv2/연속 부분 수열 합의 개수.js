function solution(elements) {
  let result = [];
  const sumWith = (arr) => {
    return arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  };
  let elementsCopy = elements.concat(elements);

  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      result.push(sumWith(elementsCopy.slice(i - 1, i + j)));
    }
  }
  const set = new Set(result);
  return [...set].length;
}
