function solution(n) {
    var answer = 0;

    for (let i = 0; i < n; i++) {
        if (n % i === 1) {
            console.log(n)
            answer = i
            break;
        }
    }
    return answer
}
