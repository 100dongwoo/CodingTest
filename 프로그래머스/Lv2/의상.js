function solution(clothes) {
  const categoryCount = clothes.reduce((acc, [_, type]) => {
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  return (
    Object.values(categoryCount).reduce((acc, count) => acc * (count + 1), 1) -
    1
  );
}
