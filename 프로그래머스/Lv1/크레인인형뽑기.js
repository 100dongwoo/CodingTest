// 00000
// 00103
// 02501
// 42442
// 35131
//[1, 5, 3, 5, 1, 2, 1, 4]
function solution(board, moves) {
    var answer = 0;
    let array=[];
    moves.map((num)=>{

        for(let rows=0;rows<board.length;rows++){

            if(board[rows][num-1]!==0) //일단 배열에 있는걸 잡는다 0이 아닐떄만
            {
                if(array.length!==0&&array[array.length-1]===board[rows][num-1]) // 배열에있는거랑 같다면 ?
                {
                    array.pop()   //제일마지막 을뺀다
                    answer=answer+2;
                }         //지운다\
                else{
                    array.push(board[rows][num-1])
                }
                board[rows][num-1]=0;
                break;
            }

            // rows++
            // if(rows===board.length)
            //     break;

        }

    })
    console.log(array)
    return answer;
}