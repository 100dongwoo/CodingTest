function solution(numbers) {
    var answer = [];
    var test = [];
    for(let i=0;i<numbers.length;i++)
    {
        for(let j=0;j<numbers.length;j++)
        {
            if(numbers[i]!==numbers[j] || i !== j)
            {
                answer.push(numbers[i]+numbers[j])
            }
        }
    }
    answer.sort()
    for(let i=0;i<answer.length;i++)
    {
        if(answer[i]!==answer[i+1])
        {
            test.push(answer[i])
        }
    }


    ///시작
    for(let i=0;i<test.length;i++)
    {
        for(let j=0;j<test.length;j++)
        {
            if(test[i]<test[j])
            {
                let a=test[i];//큰거
                test[i]=test[j];
                test[j]=a;
            }
        }
    }

    ///끝
    return test;
}
///////////////////////////////////////////////////////////
//  답안을 확인해보니 sort를 쓰는 방법에 대한 이해부족 했음
// return test.sort((a,b)=>{return a-b;}); 이런식이면 버블정렬을 사용할 필요가없었다.


