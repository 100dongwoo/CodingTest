function solution(n) {
    var answer = '';

    for(let i=1;i<=n;i++)
    {
        if(i%2===1)
            answer+='수'
        else
            answer+='박'
    }
    return answer;
}
// best답안
// const waterMelon = n => {
//     return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
// }