function solution(arr, divisor) {
    var answer = [];
    arr.map((arr) => {
        if (arr % divisor === 0)
            answer.push(arr)
    })
    if (answer.length === 0)
        answer.push(-1)
    answer.sort((a, b) => {
        return a - b;
    })
    return answer;
}

// best답안

// function solution(arr, divisor) {
//     var answer = arr.filter(v => v%divisor == 0);
//     return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
// }