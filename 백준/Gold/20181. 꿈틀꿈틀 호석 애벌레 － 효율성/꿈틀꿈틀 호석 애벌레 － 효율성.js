const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const energies = input[1].split(" ").map(Number);

const dp = Array(N + 1).fill(0);

let left = 0;
let curEnergy = 0;

for (let right = 1; right <= N; right++) {
    curEnergy += energies[right - 1];

    // 구간 합이 K 이상일 때, 조건을 만족하는 모든 left를 검사 (여러 경우 누적 가능)
    while (curEnergy >= K) {
        dp[right] = Math.max(dp[right], dp[left] + curEnergy - K);
        curEnergy -= energies[left];
        left++;
    }
    // 구간을 잡지 않을 때 기존 최댓값 계승
    dp[right] = Math.max(dp[right], dp[right - 1]);
}

console.log(dp[N]);