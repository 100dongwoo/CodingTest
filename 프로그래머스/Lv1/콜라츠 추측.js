function solution(num) {
    var answer = 0;
    while (true) {
        if (answer >= 500) {
            answer = -1;
            break;

        }

        if (num === 1)
            break;
        else if (num % 2 === 0) {
            answer++
            num = num / 2
        } else if (num % 2 === 1) {
            num = num * 3 + 1
            answer++
        }

    }
    return answer;
}

//best답안
// function collatz(num,count = 0) {
//     return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
// }