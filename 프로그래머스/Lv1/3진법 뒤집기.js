function solution(n) {
    var answer = 0;
    let three = 0;
    let qwe = '';
    while (true) {
        if (n >= Math.pow(3, three))
            three++
        else
            break;
    }

    for (let i = three; i > 0; i--) {

        {
            if (n / Math.pow(3, i - 1) > 0) {
                qwe += String(parseInt(n / Math.pow(3, i - 1)))
                n -= Math.pow(3, i - 1) * parseInt(n / Math.pow(3, i - 1))
            } else
                qwe += String(parseInt(n % Math.pow(3, i - 1)))
        }
    }
    //qwe = qwe.split("").reverse().join("");
    for (let i = 0; i < qwe.length; i++) {
        answer += Math.pow(3, i) * qwe[i]

    }
    return answer;
}

//best답안
// function solution(n) {
//     n = n.toString(3).split('').reverse().join('')
//     return parseInt(n, 3)
// }