function solution(arr) {
    var answer = [];
    let min = arr[0];
    if (arr.length === 1) {
        answer.push(parseInt(-1))
    } else {
        arr.map((map) => {
            if (map < min)
                min = map
        })
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== min) {
                answer.push(arr[i])
            }
        }

    }
    return answer;
}
//best답안
// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }


