const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

const [T, targetSum] = input[0].split(' ').map(Number);
const cardList = input[1].split(' ').map(Number);

function solution() {
    let maxSum = 0;
    function dfs(cardCnt, startIndex, sum) {
        if(cardCnt === 3) {
            if(sum <= targetSum && sum > maxSum) {
                maxSum = sum;
            }
            return;
        }
        for(let i = startIndex; i < cardList.length; i++) {
            dfs(cardCnt + 1, i + 1, sum + cardList[i]);
        }
    }
    dfs(0,0,0);
    return maxSum;
}

console.log(solution());