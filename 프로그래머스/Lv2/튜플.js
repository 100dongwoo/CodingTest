function solution(s) {
  var answer = [];
  let list = [];
  let strList = s.replace("{{", "").replace("}}", "").split("},{");

  for (let i = 0; i < strList.length; i++) {
    list.push(strList[i].split(","));
  }
  list.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else {
      return -1;
    }
  });

  answer.push(list[0][0]);
  list.slice(1, list.length).map((data) => {
    let value = data;
    answer.map((test) => {
      value = value.filter((valueData) => valueData !== test);
    });
    answer.push(value[0]);
  });
  return answer.map((data) => {
    return parseInt(data);
  });
}
