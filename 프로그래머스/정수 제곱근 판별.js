function solution(n) {
    var answer = 0;
    ((Number.isInteger(Math.sqrt(n))) ? answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1) : answer = -1)
    return answer;
}

//Math.sqrt(n) 제곱근
//몰랐던거 : Number.isInteger(x)  x가 정수인지 아닌지 true /false 반환