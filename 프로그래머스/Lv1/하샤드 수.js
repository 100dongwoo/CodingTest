function solution(x) {
    var answer = true;
    let a = String(x);
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += parseInt(a[i])
    }
    (x % sum === 0 ? answer = true : answer = false)
    return answer;
}

// best답안
// function Harshad(n){
//     return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
// }