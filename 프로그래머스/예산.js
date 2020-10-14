function solution(d, budget) {
    var answer = 0;
    var sum = 0;
    d.sort(function (a, b) {
        return a - b
    })

    d.map((d) => {
        if (sum + d <= budget) {
            answer++
            sum += d
        }
    })

    return answer;
}