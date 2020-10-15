function solution(s, n) {
    var answer = '';
    // console.log('a'.charCodeAt(0))   97
    // console.log('z'.charCodeAt(0))   122
    //   console.log('Z'.charCodeAt(0)) 90
    //   console.log('A'.charCodeAt(0))    65
    for (let i = 0; i < s.length; i++) {

        if (s[i] === " ") {
            answer += " "
        } else {

            if (s.charCodeAt(i) + n > 122 && s.charCodeAt(i) > 96) //z 이상이면
            {

                answer += String.fromCharCode((s.charCodeAt(i) + n) % 122 + 96)

            } else if (s.charCodeAt(i) + n > 90 && s.charCodeAt(i) < 97) {

                answer += String.fromCharCode(((s.charCodeAt(i) + n) % 90) + 64)
            } else {

                answer += String.fromCharCode(s.charCodeAt(i) + n)
            }
        }
    }
    return answer;
}//best
// for (var i=0; i<s.length;i++)
// {
//     if ( s[i] == ' ' )
//         result += ' '
//     else
//         result += String.fromCharCode( (s.charCodeAt(i)>90)?
//             (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )
// }
