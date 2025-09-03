const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

const N = Number(input[0]);
const board = [];
let max = 0;

for (let i = 1; i <= N; i++) {
    board.push(input[i].split(' ').map(Number));
}

function move(board,direction) {
    const returnBoard = Array.from({ length: N }, () => Array(N).fill(0));
    switch (direction) {
        case 'U':
            for (let j = 0; j < N; j++) {
                let tmpList = [];
                // 0이 아닌 값만 추출
                for (let i = N - 1; i >= 0; i--) {
                    if (board[i][j] !== 0) {
                        tmpList.push(board[i][j]);
                    }
                }

                // 같은 숫자 합치기
                for (let i = 0; i < tmpList.length - 1; i++) {
                    if (tmpList[i] === tmpList[i + 1]) {
                        tmpList[i] *= 2;
                        tmpList[i + 1] = 0;
                        i++;
                    }
                }

                // 0 제거
                tmpList = tmpList.filter(val => val !== 0);

                // 결과를 새 보드에 채우기
                for (let i = 0; i < tmpList.length; i++) {
                    returnBoard[N - 1 - i][j] = tmpList[i];
                }
            }
            break;

        case 'D':
            for (let j = 0; j < N; j++) {
                let tmpList = [];
                for (let i = 0; i < N; i++) {
                    if (board[i][j] !== 0) {
                        tmpList.push(board[i][j]);
                    }
                }

                for (let i = 0; i < tmpList.length - 1; i++) {
                    if (tmpList[i] === tmpList[i + 1]) {
                        tmpList[i] *= 2;
                        tmpList[i + 1] = 0;
                        i++;
                    }
                }

                tmpList = tmpList.filter(val => val !== 0);

                for (let i = 0; i < tmpList.length; i++) {
                    returnBoard[i][j] = tmpList[i];
                }
            }
            break;

        case 'L':
            for (let i = 0; i < N; i++) {
                let tmpList = [];
                for (let j = 0; j < N; j++) {
                    if (board[i][j] !== 0) {
                        tmpList.push(board[i][j]);
                    }
                }

                for (let j = 0; j < tmpList.length - 1; j++) {
                    if (tmpList[j] === tmpList[j + 1]) {
                        tmpList[j] *= 2;
                        tmpList[j + 1] = 0;
                        j++;
                    }
                }
                
                tmpList = tmpList.filter(val => val !== 0);

                for (let j = 0; j < tmpList.length; j++) {
                    returnBoard[i][j] = tmpList[j];
                }
            }
            break;

        case 'R':
            for (let i = 0; i < N; i++) {
                let tmpList = [];
                for (let j = N - 1; j >= 0; j--) {
                    if (board[i][j] !== 0) {
                        tmpList.push(board[i][j]);
                    }
                }

                for (let j = 0; j < tmpList.length - 1; j++) {
                    if (tmpList[j] === tmpList[j + 1]) {
                        tmpList[j] *= 2;
                        tmpList[j + 1] = 0;
                        j++;
                    }
                }
                
                tmpList = tmpList.filter(val => val !== 0);

                for (let j = 0; j < tmpList.length; j++) {
                    returnBoard[i][N - 1 - j] = tmpList[j];
                }
            }
            break;
    }
    return returnBoard;
}

function dfs(board, count) {
    if(count === 5) {
        let maxNum = Math.max(...board.reduce((a,b) => [...a,...b]));
        if(maxNum > max) max = maxNum;
        return;
    }

    dfs(move(board, 'U'), count + 1);
    dfs(move(board, 'D'), count + 1);
    dfs(move(board, 'L'), count + 1);
    dfs(move(board, 'R'), count + 1);
}

dfs(board,0);
console.log(max);