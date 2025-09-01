const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');
const N = Number(input[0]);
let answer = 0;

const danger = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => false)
);

const isSafe = (row, col) => {
    for (let i = 0; i < row; i++) {
        const row_length = row - i;
        if (danger[i][col]) return false;
        if (col - row_length >= 0 && danger[i][col - row_length]) return false; // 좌측 아래 대각선
        if (col + row_length < N && danger[i][col + row_length]) return false; // 좌측 위 대각선
    }
    return true;
};

const dfs = (row) => {
    if (row === N) {
        answer++;
        return;
    }
    
    for (let col = 0; col < N; col++) {
        if (isSafe(row, col)) {
            danger[row][col] = true;
            dfs(row + 1);
            danger[row][col] = false;
        }
    }
};

dfs(0);
console.log(answer);
