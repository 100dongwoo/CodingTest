function solution(a, b) {
    var answer = '';

    //금 토 일 월 화 수 목

    let array = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let array1 = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    let total = 0;
    for (let i = 0; i < a - 1; i++) {
        total = total + array[i]
    }
    total = total + b
    answer = array1[total % 7]
    console.log(total)

    return answer;
}

//var solution=(_,$)=>(new Date(2016,--_,$)+'').toUpperCase().slice(0, 3)
//기준이없다면 가능하다,

