function solution(s) {
    let answer = '';
    if (s.length % 2 === 1) { // 홀수
        answer = s[parseInt(s.length / 2)]
    } else { // 짝수
        answer = s[parseInt(s.length / 2 - 1)] + s[parseInt(s.length / 2)]
    }
    return answer;
}

//best 답안 짧은 경우는 삼항 연산자를 이용하는것이 더욱 간단
// function solution(s) {
//     return s.length % 2 == 0 ? s.substr(s.length / 2 - 1, 2) : s.substr(Math.floor(s.length / 2), 1);
// }