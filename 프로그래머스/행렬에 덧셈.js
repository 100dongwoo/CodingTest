function solution(arr1, arr2) {
    var answer = [[]];
    for (let i = 0; i < arr1.length; i++) {
        answer[i] = new Array();
        for (let j = 0; j < arr2[0].length; j++) {

            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}