function solution(lottos, win_nums) {
    var answer = [];
    let zeroCount=0;
    let checkCount=0;
    lottos.map((res)=>{
        if(win_nums.includes(res)){
            checkCount+=1
        }
        else if(res===0){
            zeroCount+=1
        }
    })
    // 6개 1등
    // 5개 2등
    // 4개 3등
    // 3개 4등
    // 2개 5등
    // 1개 6등
    // 0개 6등
    let isNo=(checkCount===0 && zeroCount===0)
    let isFirst=isNo?6:7-(checkCount+zeroCount)

    return [isFirst,checkCount===0?6:7-checkCount];
}
