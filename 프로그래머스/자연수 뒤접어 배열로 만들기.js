function solution(n) {
    var answer = [];
    n=String(n)
    n= n.split('')
    for(let i=n.length-1; i>=0 ;i--)
        answer.push(parseInt(n[i]))
    return answer;
}


//best답안

// return n.toString().split('').reverse().map(o => o = parseInt(o));