function solution(s) {
    var answer = '';
    let c = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            c = 0;
        } else if (c % 2 === 0) {
            c = c + 1
            answer += s[i].toUpperCase();

        } else if (c % 2 === 1) {
            c = c + 1
            answer += s[i].toLowerCase();

        }
    }
    return answer;
}
// best 답안
// function toWeirdCase(s){
//     //함수를 완성해주세요
//     return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
//
// }