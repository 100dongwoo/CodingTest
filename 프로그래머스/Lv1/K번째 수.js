function solution(array, commands) {
    var answer = [];
    for (let i = 0; i < commands.length; i++) // [] [] [] 이거 수만큼 돌린다
    {
        let total = []
        for (let k = commands[i][0] - 1; k < commands[i][1]; k++) // ["", "" ,""]
        {
            total.push(array[k])
        }
        console.log(total)

        total.sort((a, b) => {
            return a - b;
        })
        answer.push(total[commands[i][2] - 1])
    }

    return answer;
}