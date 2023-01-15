// function solution(n) {
//     var answer = 0;
//
//     for (let i = 2; i <= n; i++) {
//         var test = 0;
//         for (let b = 2; b < i; b++) {
//             if (i % b === 0) {
//                 test++
//             }
//
//         }
//         if (test === 0) {
//             answer++
//         }
//     }
//     return answer;
// }
///효육성에서 막힘

//답안
function solution(n) {
    let answer = 0;
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    for (let i = 2; i <= n; i++) {
        if (arr[i] === 0) continue;
        for (let j = i + i; j <= n; j += i) {
            arr[j] = 0;
        }
    }
    for (let i = 2; i <= n; i++) {
        if (arr[i] !== 0) answer++;
    }
    return answer
}

/////////////////////////
function numberOfPrime(n) {
    var result = 0;
    // 함수를 완성하세요.
    var cnt=0;
    for(var a=2;a<=n;a++){
        cnt=0;
        for(var b=1;b<=a;b++){
            if(a%b==0)
                cnt++;
        }
        if(cnt==2)
            result++;
    }
    return result;
}


//이 문제는 효율성으로 인해 답안을가져옴(한번더 확인해볼것)