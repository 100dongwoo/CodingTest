function solution(absolutes, signs) {
    let answer = 0
    absolutes.map((absolute, index) => {
        if (signs[index]) {
            answer += absolute
        } else {
            answer -= absolute
        }
    })
    return answer;
}
