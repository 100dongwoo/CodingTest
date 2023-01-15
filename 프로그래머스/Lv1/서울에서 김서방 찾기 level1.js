function solution(seoul) {
    var answer = '김서방은 0에 있다';
    for (let i = 0; i < seoul.length; i++) {
        if (seoul[i] === 'Kim') {
            answer = answer.replace(answer[5], i)
        }
    }

    return answer;
}
// best 답안
//
// function findKim(seoul){
//     var idx = seoul.indexOf('Kim');
//     return "김서방은 " + idx + "에 있다";
// }