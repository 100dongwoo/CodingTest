function solution(s) {
    var answer = true;
    if(s.length!==4 && s.length!==6)
    {
        return false
    }
    for(let i=0;i<s.length;i++)
    {
        if(s[i]<'0' || s[i]>'9')
            return false
    }
    return answer;

}