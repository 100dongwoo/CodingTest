function solution(arr)
{
    var answer = [];
    for(let i=0;i<arr.length;i++){
        if(i===0)
        {
            answer.push(arr[i])
        }
        else if(answer[answer.length-1] !==arr[i])
            answer.push(arr[i])
    }
    return answer;
}
//best 답안

// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }
