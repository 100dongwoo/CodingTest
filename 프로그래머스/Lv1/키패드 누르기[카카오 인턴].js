function solution(numbers, hand) {
    var answer = '';
    let qwe;
    let qwer = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']]
    if (hand === "right")
        qwe = 'R'
    else
        qwe = 'L'

    let now1 = '';//왼쪽위치
    let now2 = '';//오른쪽위치
    let a = -1; //numbers거리
    let a1 = -1; //numbers거리
    let b = 3;//왼쪽
    let b1 = 0;//왼쪽
    let c = 3 //오른쪽
    let c1 = 2 //오른쪽
    numbers.map((numbers) => {

        if (numbers === 1 || numbers === 4 || numbers === 7) {
            now1 = numbers
            answer += 'L'
        } else if (numbers === 3 || numbers === 6 || numbers === 9) {
            now2 = numbers
            answer += 'R'
        } else {
            for (let i = 0; i < 4; i++) {
                for (let j = 0; j < 3; j++) {
                    if (qwer[i][j] === numbers) {
                        a = i;
                        a1 = j;
                    }
                    if (qwer[i][j] === now1) {
                        b = i;
                        b1 = j;
                    }
                    if (qwer[i][j] === now2) {
                        c = i;
                        c1 = j;
                    }
                }
            }
            console.log(a, a1, b, b1, c, c1)
            if (Math.abs(a - c) + Math.abs(a1 - c1) === Math.abs(a - b) + Math.abs(a1 - b1)) {
                if (qwe === 'L') {
                    now1 = numbers
                    answer += 'L'
                } else {
                    now2 = numbers
                    answer += 'R'
                }
            } else if (Math.abs(a - c) + Math.abs(a1 - c1) > Math.abs(a - b) + Math.abs(a1 - b1)) {
                now1 = numbers
                answer += 'L'
            } else {
                now2 = numbers
                answer += 'R'

            }
        }
    })
    return answer;
}