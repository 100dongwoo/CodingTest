function solution(s) {
    var answer = true;
    let countP = 0;
    let countY = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'P' || s[i] === 'p')
            countP++;
        else if (s[i] === 'Y' || s[i] === 'y')
            countY++
    }
    if (countP === 0 && countY === 0)
        answer = true
    else if (countP !== countY)
        answer = false
    return answer;
}

//best 답안
// function numPY(s){
//     //함수를 완성하세요
//     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }