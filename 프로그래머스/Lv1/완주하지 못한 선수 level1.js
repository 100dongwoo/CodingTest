function solution(participant, completion) {
    var answer = '';
    completion.sort()
    participant.sort()
    for(let i=0;i<participant.length;i++)
    {
        if(participant[i]!==completion[i])
            return participant[i]
    }
}
//처음에는
// participant.splice(participant.indexOf("completion 원소들"),1); 을 사용 했지만 효율성에서 막힘