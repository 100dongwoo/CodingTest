function solution(n, m) {
    var answer = [];
    let min = '';//최소공배수
    let max = '';//최대공약수

    if (m > n) {
        let b = m;
        m = n;
        n = b;
    }

    for (let i = 1; i <= m; i++) //최대공약수
    {
        (n % i === 0 && m % i === 0 ? max = i : max = max)
    }

    min = (n / max) * (m / max) * max

    return [max, min];
}

//best
//function gcdlcm(a, b) {
//     var r;
//     for(var ab= a*b;r = a % b;a = b, b = r){}
//     return [b, ab/b];
// }