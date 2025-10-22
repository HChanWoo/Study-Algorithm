const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const costs = input[1].split(" ").map(Number);
let left = 0, right = K-1;
let answer = [];

if(N<=K) {
    console.log(Math.min(...costs));
} else {
    while(left + K <= N) {
        const window = costs.slice(left, right + 1);
        const min = Math.min(...window);
        const pos = left + window.lastIndexOf(min); // 현재 구간 내 위치

        answer.push(min);

        left = pos + 1;
        right = Math.min(left + K - 1, N - 1);
    }
    console.log(Math.max(...answer));
}