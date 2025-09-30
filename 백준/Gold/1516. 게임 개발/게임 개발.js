const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString().trim().split('\n');

const N = Number(input[0]);
const times = Array(N + 1).fill(0);
const preBuild = Array.from({ length: N + 1 }, () => []);
const dp = Array(N + 1).fill(-1);

for (let i = 1; i <= N; i++) {
    const arr = input[i].split(' ').map(Number);
    times[i] = arr[0];
    for (let j = 1; arr[j] !== -1; j++) {
        preBuild[i].push(arr[j]);
    }
}

// 메모이제이션 + 재귀
function getTime(n) {
    if (dp[n] !== -1) return dp[n]; // 계산된 값이라면 반환
    if (preBuild[n].length === 0) { // 선행 건물이 없다면 해당 건물 생성에 필요한 시간만 반환
        dp[n] = times[n];
        return dp[n];
    }
    let maxTime = 0;
    for (let pre of preBuild[n]) {
        maxTime = Math.max(maxTime, getTime(pre)); // 건물은 동시에 생성할 수 있기 때문에 최댓값만 저장
    }
    dp[n] = times[n] + maxTime;
    return dp[n];
}

let answer = [];
for (let i = 1; i <= N; i++) {
    answer.push(getTime(i));
}
console.log(answer.join('\n'));