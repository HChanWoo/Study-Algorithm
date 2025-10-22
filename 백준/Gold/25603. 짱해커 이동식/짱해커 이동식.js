const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const costs = input[1].split(" ").map(Number);
let left = 0, right = K-1;
let max = -Infinity;

if (K === 1) {
  console.log(Math.max(...costs));
} else {
    while(left + K <= N) {
        const window = costs.slice(left, right + 1);
        const min = Math.min(...window);
        const pos = left + window.lastIndexOf(min);

        max = Math.max(max, min);

        left = pos + 1;
        right = left + K - 1
    }
    console.log(max);
}