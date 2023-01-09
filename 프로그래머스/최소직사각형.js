function solution(sizes) {
  var answer = 0;
  let sizeArr = [];
  sizes.map((data) => {
    sizeArr.push(data[0] > data[1] ? [data[0], data[1]] : [data[1], data[0]]);
  });
  return (
    Math.max(...sizeArr.map((data) => data[0])) *
    Math.max(...sizeArr.map((data) => data[1]))
  );
}
