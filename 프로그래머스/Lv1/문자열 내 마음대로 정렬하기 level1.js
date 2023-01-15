function solution(strings, n) {
    var answer = [];

    for (let i = 0; i < strings.length; i++) {
        for (let j = i + 1; j < strings.length; j++) {
            if (strings[i][n] > strings[j][n]) {
                let change = strings[i]
                strings[i] = strings[j]
                strings[j] = change
            } else if (strings[i][n] === strings[j][n]) {
                if (strings[i] > strings[j]) {
                    let change = strings[i]
                    strings[i] = strings[j]
                    strings[j] = change
                }
            }
        }
    }

    return strings;
}

//best 답안
// 1
// function solution(strings, n) {
//     // strings 배열
//     // n 번째 문자열 비교
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
// }

//2
// function solution(strings, n) {
//     return strings.sort((a, b) => {
//         const chr1 = a.charAt(n);
//         const chr2 = b.charAt(n);
//
//         if (chr1 == chr2) {
//             return (a > b) - (a < b);
//         } else {
//             return (chr1 > chr2) - (chr1 < chr2);
//         }
//     })
// }
