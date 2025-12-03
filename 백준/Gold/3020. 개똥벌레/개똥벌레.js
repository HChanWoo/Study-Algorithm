const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N,H] = input[0].split(" ").map(Number);

let answer_len = Infinity;
let answer_num = 0;

const [top, bottom] = [[],[]]; // 석순, 종유석

for(let i = 1; i <= N; i++){
    if(i%2 === 0) top.push(Number(input[i]));
    else bottom.push(Number(input[i]));
}

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while(left < right){
        const mid = Math.floor((left + right) / 2);
        if(arr[mid] <= target) left = mid + 1;
        else right = mid;
    }
    return arr.length - left;
}

top.sort((a,b) => a-b);
bottom.sort((a,b) => a-b);

for(let i = 1; i <= H; i++){
    const topCount = binarySearch(top, i-0.5);
    const bottomCount = binarySearch(bottom, H-i+0.5);
    const cur_len = topCount + bottomCount;

    if(cur_len < answer_len) {
        answer_len = cur_len;
        answer_num = 1;
    } else if(cur_len === answer_len) {
        answer_num++;
    }
}

console.log(answer_len, answer_num);
