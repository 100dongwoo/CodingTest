function solution(s) {
    var answer = '';
    s= s.split('')
    s.sort().reverse()
    s=s.join('')

    return s;
}

//구글링을 통해 split을 하게되면 문자열이 배열식으로 끈김
// reverse통해 뒤집고 
// join으로 합쳤습니다
//

//
// best답안
// function solution(s) {
//     return s
//         .split("")
//         .sort()
//         .reverse()
//         .join("");
// }
