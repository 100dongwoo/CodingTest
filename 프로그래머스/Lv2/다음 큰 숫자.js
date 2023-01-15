function solution(n) {
  var answer = 0;

  const countText = (str, text) => {
    return str.split(text).length - 1;
  };
  let count = countText(n.toString(2), "1");
  while (true) {
    if (count === countText((++n).toString(2), "1")) {
      break;
    }
  }
  return n;
}
