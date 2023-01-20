function solution(nums) {
  let setNums = new Set(nums);
  let half = nums.length / 2;
  return setNums.size > half ? half : setNums.size;
}
