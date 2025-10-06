const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const visitors = input[1].split(" ").map(Number);

let cur = 0;
for (let i = 0; i < X; i++) cur += visitors[i];

let max = cur;
let count = 1;
let left = 0;
let right = X;

while (right < N) {
    cur = cur - visitors[left] + visitors[right];

    if (cur > max) {
        max = cur;
        count = 1; // 새 최댓값 등장
    } else if (cur === max) {
        count++; // 같은 최댓값 등장
    }

    left++;
    right++;
}

if (max === 0) console.log("SAD");
else console.log(`${max}\n${count}`);
