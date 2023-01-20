function solution(ingredient) {
  let arr = [];
  var answer = 0;

  ingredient.forEach((ing, idx) => {
    arr.push(ing);
    if (arr.length >= 4) {
      if (arr.slice(-4).join("") === "1231") {
        // arr=arr.slice(0,arr.length-4)
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        answer++;
      }
    }
  });
  return answer;
}

//slice 보단 pop이 빠르다
