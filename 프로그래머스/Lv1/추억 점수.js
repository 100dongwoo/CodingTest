function solution(name, yearning, photo) {
  return photo.map((data) => {
    return data.reduce((accumulator, currentValue) => {
      const findIndex = name.findIndex((data) => data === currentValue);
      const findValue = findIndex === -1 ? 0 : yearning[findIndex];
      return accumulator + findValue;
    }, 0);
  });
}
