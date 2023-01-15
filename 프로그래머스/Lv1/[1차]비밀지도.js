function solution(n, arr1, arr2) {

    let ch = []
    let ch1 = []
    var answer = new Array(5);
    for (var i = 0; i < n; i++) {
        answer[i] = new Array(n);
        answer[i] = ' '
    }
    let cot = 0;
    arr1.map((arr1) => {
        let b = ''
        b = (arr1.toString(2));
        while (true) {
            if (b.length === n)
                break
            else
                b = '0' + b
        }
        ch.push(b)
        cot++;
    })


    cot = 0;
    arr2.map((arr2) => {
        let b = ''
        b = (arr2.toString(2));
        while (true) {
            if (b.length === n)
                break
            else
                b = '0' + b
        }
        ch1.push(b)
        cot++;
    })
    cot = 0;

    for (let i = 0; i < n; i++) {
        let qwer = ''
        for (let j = 0; j < n; j++) {

            if (ch[i][j] === '1' || ch1[i][j] === '1') {
                qwer += '#'
            } else if (ch[i][j] === '0' && ch1[i][j] === '0') {
                qwer += ' '
            }
        }

        answer[cot] = qwer

        cot++;
    }
    answer = answer.filter(function () {
        return answer !== null;
    });
    return answer;
}