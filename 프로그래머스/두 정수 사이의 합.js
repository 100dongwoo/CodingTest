function solution(a, b) {
    var answer = 0;
    let c;
    if(a>b)
    {
        c=a
        a=b
        b=c
    }

    for (a;a<=b;a++)
    {
        answer=answer+a
    }
    return answer;
}