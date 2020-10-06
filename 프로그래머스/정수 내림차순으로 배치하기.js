function solution(n) {
    var answer = 0;
    n=String(n)
    n=n.split('')
    n.sort().reverse()
    n = n.toString();
    n=n.replace(/,/g,'');
    return parseInt(n);

}
///    n=n.replace(/,/g,''); 전체 전부 다 바뀐다

// function solution(n) {
//     var answer = 0;
//     let a;
//     n=String(n)
//     n=n.split('')
//     n.sort().reverse()
//     a=n.join('')
//
//     return parseInt(a);
//
// }
// ///    n=n.replace(/,/g,''); 전체 전부 다 바뀐다