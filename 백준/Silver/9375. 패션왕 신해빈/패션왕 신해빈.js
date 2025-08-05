const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
    const N = Number(input[line++]);
    const clothes = new Map();

    for (let i = 0; i < N; i++) {
        const [name, type] = input[line++].trim().split(' ');
        clothes.set(type, (clothes.get(type) || 0) + 1);
    }

    answer = 1;
    clothes.forEach((val,key) => {
        answer *= (val+1);
    });
    console.log(answer-1);
}