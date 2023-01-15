function solution(food) {
    var answer = '';
    food.map((data,index)=>{
        let num=data%2===0?data:data-1;
        if(num>0){
            for(let i=0;i<num/2;i++){
                answer=answer+index.toString()
            }
        }
    })
    return answer+0+answer.split("").reverse().join("");
}
