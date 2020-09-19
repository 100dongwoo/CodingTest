function solution(n, lost, reserve) {
    var answer = 0;
    for(let i=0;i<lost.length;i++){
        let index =reserve.indexOf(lost[i]);
        if(index!==-1){ //경우가 있을떄..
            delete reserve[index];
            delete lost[i];
        }
    }
    lost = lost.filter(function(element){
        return lost!==false;
    });
    answer=n-lost.length

    for ( let i=0;i<=lost.length;i++)
    {
        for ( let k=0;k<=reserve.length;k++)
        {

            if(lost[i]===reserve[k]-1 ||lost[i]===reserve[k]+1)
            {
                lost[i]= -123
                reserve[k]= -321
                answer++
            }

        }
    }


    return answer;
}


// 아직까지 겹치는 부분을 왜 먼저 제거 해야하는지 이해못했음 필터 사용법 숙지 하기