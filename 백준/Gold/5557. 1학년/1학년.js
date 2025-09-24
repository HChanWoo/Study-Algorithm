const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString().trim().split('\n');

const N = Number(input[0]);
const numList = input[1].split(' ').map(Number);

const dp = Array.from({ length: N - 1 }, () => Array(21).fill(0n));
// dp[i][sum] = i번째 숫자까지 사용했을 때 sum을 만드는 경우의 수

dp[0][numList[0]] = 1n; // 첫 번째 숫자로 초기화

for (let i = 1; i < N - 1; i++) {
    for (let sum = 0; sum <= 20; sum++) {
        if (dp[i - 1][sum] > 0n) {
            const plus = sum + numList[i];
            const minus = sum - numList[i];
            if (plus >= 0 && plus <= 20) dp[i][plus] += dp[i - 1][sum];
            if (minus >= 0 && minus <= 20) dp[i][minus] += dp[i - 1][sum];
        }
    }
}

console.log(dp[N - 2][numList[N - 1]].toString());