function solution(cacheSize, cities) {
  let answer = 0;
  let cache = [];

  cities = cities.map((data) => data.toLowerCase());

  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      answer++;
      const findIndex = cache.findIndex((value) => value === cities[i]);
      cache.splice(findIndex, 1);
    } else {
      answer += 5;
    }
    cache.push(cities[i]);
    if (cache.length > cacheSize) cache.shift();
  }

  return answer;
}
