function solution(s) {
    let arrays = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let change = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    arrays.map((word) => {
        let regexAll = new RegExp(word, "g")
        s = s.replace(regexAll, change[word])
    })

    return Number(s);

}
