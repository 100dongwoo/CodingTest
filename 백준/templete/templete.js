const fs = require("fs");
const filePath =
  process.platform === "linux" ? "dev/stdin" : "백준/templete/input.txt";
let input = fs.readFileSync(filePath);

// (1) 입력값이 하나일 때

// input = input.toString().trim();

// ex) 3

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// (2)입력값 사이에 공백에 끼여있을 때
//  split(' ') 로 공백을 잘라주면, 입력값들은  배열 로 input에 할당된다
// 입력값들을  정수 로 바꾸려면 맨 끝에  .map(Number) 을 추가

// input = input.toString().trim().split(" ");

// ex) 1 3 5

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// (3) 여러 줄로 입력값이 나열되어 있을 때
//  split('\n') 로 줄바꿈(enter)을 잘라주면, 입력값들은  배열 로 input에 할당된다
// 입력값들을  정수 로 바꾸려면 맨 끝에  .map(Number) 을 추가

// input = input.toString().trim().split("\n");

// ex)
// 1
// 3

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// (4) 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
//  split(/\s/) 로 space를 잘라주면 input에는  배열 로 할당되고, 이를  구조분해할당 으로 n과 arr로 나눌 수 있다

// 입력값들을  정수 로 바꾸려면 맨 끝에  .map(Number) 을 추가
// input = input.toString().trim().split(/\s/);
// const [n,...arr] = input;

// ex)
// 3
// 1 2 3

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// (5) 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄부터 n개의 줄에 걸쳐 한 줄에 하나의 값을 입력받을 때
//  split('\n') 로 줄바꿈(enter)을 잘라주면 input에는  배열 로 할당되고, 이를  구조분해할당 으로 n과 arr로 나눌 수 있다
// 입력값들을  정수 로 바꾸려면 맨 끝에  .map(Number) 을 추가
// input = input.toString().trim().split("\n");
// const [n,...arr] = input;
// ex)
// 2
// 4
// 1
