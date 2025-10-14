const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
for(let i = 1; i <= T; i++) {
    let W = input[2*i-1].trim();
    let K = input[2*i];
    let char = {};
    for(let j = 0; j < W.length; j++) {
        if(char[W[j]]) {
            char[W[j]].push(j);
        } else {
            char[W[j]] = [j];
        }
    }

    let min = W.length;
    let max = -1;
    Object.entries(char).forEach(([key, value]) => {
        let left = 0, right = K-1, cur = 0;
        if(value.length >= K) {
            while(right < value.length) {
                cur = value[right] - value[left] + 1;
                min = Math.min(min, cur);
                max = Math.max(max, cur);
                left++;
                right++;
            }
        }
    });
    if(max === -1) console.log(-1);
    else console.log(min, max);
}
