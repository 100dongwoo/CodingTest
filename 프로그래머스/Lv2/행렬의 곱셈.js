function solution(arr1, arr2) {
  let newArr = [];
  for (let first = 0; first < arr1.length; first++) {
    let result = [];
    for (let second = 0; second < arr2[0].length; second++) {
      let value = 0;
      for (let third = 0; third < arr2.length; third++) {
        value += arr1[first][third] * arr2[third][second];
      }
      result.push(value);
    }
    newArr.push(result);
  }
  return newArr;
}
