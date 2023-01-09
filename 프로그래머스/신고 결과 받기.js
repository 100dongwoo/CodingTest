function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  const countObj = {};
  const set = new Set(report);
  const uniqueArr = [...set];
  const arr = uniqueArr.map((data) => data.split(" "));
  for (const v of arr) {
    countObj[v[1]] = countObj[v[1]] ? countObj[v[1]] + 1 : 1;
  }
  id_list.map((data, index) => {
    arr.map((report) => {
      if (data === report[0] && countObj[report[1]] >= k) {
        answer[index] += 1;
      }
    });
  });
  return answer;
}
