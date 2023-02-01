function solution(info, query) {
  var answer = [];

  info = info.map((data) => data.split(" "));
  query = query.map((data) => data.split(" and "));

  query.map((queryData) => {
    let count = 0;
    for (let i = 0; i < info.length; i++) {
      if (info[i][0] === queryData[0] || queryData[0] === "-") {
        if (info[i][1] === queryData[1] || queryData[1] === "-") {
          if (info[i][2] === queryData[2] || queryData[2] === "-") {
            let value = queryData[3].split(" ");
            if (info[i][3] === value[0] || value[0] === "-") {
              if (info[i][4] >= parseInt(value[1]) || value[1] === "-") {
                count++;
              }
              break;
            }
            break;
          }
          break;
        }
        break;
      }
      break;
    }

    answer.push(count);
  });
  return answer;
}
