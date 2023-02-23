const convertArr = (str) => {
  const result = [];
  const convStr = str.replace(/[^a-zA-Z]/g, " ");
  for (let i = 0; i < str.length - 1; i++) {
    if (convStr[i] !== " " && convStr[i + 1] !== " ") {
      const strItem = convStr.slice(i, i + 2);
      result.push(strItem.toLowerCase());
    }
  }
  return result;
};

const getUnion = (arr1, arr2) => {
  let result = [];
  arr1.map((data, index) => {
    if (arr2.includes(data)) {
      let findIndex = arr2.findIndex((value) => data === value);
      arr1[index] = null;
      arr2[findIndex] = null;
      result.push(data);
    }
  });

  return {
    union: result,
    intersection: result.concat(
      arr1.concat(arr2).filter((data) => data !== null)
    ),
  };
};
function solution(str1, str2) {
  const strToArr1 = convertArr(str1).sort();
  const strToArr2 = convertArr(str2).sort();

  const { union, intersection } = getUnion(strToArr1, strToArr2);

  return union.length === 0 && intersection.length === 0
    ? 65536
    : parseInt((union.length / intersection.length) * 65536);
}
