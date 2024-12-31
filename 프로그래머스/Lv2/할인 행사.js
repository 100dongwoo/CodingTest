function solution(want, number, discount) {
    var answer = 0;
    const totalLength = discount.length;
    for (let i = 0; i <= totalLength - 10; i++) {
        const currentArray = [...discount].slice(i, i + 10);
        const isHas = want.every((wantValue, index) => {
            const needCount = number[index];
            const hasCount = currentArray.reduce((cnt, element) => cnt + (wantValue === element), 0);
            return hasCount === needCount
        })
        if (isHas) {
            answer += 1
        }
    }
    return answer;
}