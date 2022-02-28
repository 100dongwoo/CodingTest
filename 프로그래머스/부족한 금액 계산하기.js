function solution(price, money, count) {
    var answer = -1;
    let total=0
    for(let i=1; i<count+1;i++){
        total+=i*price
    }
    return total-money>=0?total-money:0;
}
