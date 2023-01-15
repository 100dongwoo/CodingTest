function solution(answers) {
    let personCount1 = 0;
    let personCount2 = 0;
    let personCount3 = 0;
    let i = 0;// 1 번수포자
    let k = 0;// 2번수포자
    let q = 0;//3번 수포자

    let person1 = [1, 2, 3, 4, 5]
    let person2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    var answer = [];

    answers.map((solution) => {
        if (person1[1] !== 1) {
            if (person1[i] === solution) {
                personCount1++
                (i >= 4 ? i = 0 : i++)
            } else
                (i >= 4 ? i = 0 : i++)

        }
        {
            if (person2[k] === solution) {
                personCount2++
                (k >= 7 ? k = 0 : k++)
            } else (k >= 7 ? k = 0 : k++)

        }


        {
            if (person3[q] === solution) {
                personCount3++
                (q >= 9 ? q = 0 : q++)
            } else (q >= 9 ? q = 0 : q++)

        }
    })
    let maxnum = Math.max(personCount1, personCount2, personCount3)
    if (maxnum === personCount1) answer.push(1)
    if (maxnum === personCount2) answer.push(2)
    if (maxnum === personCount3) answer.push(3)

    return answer;
}