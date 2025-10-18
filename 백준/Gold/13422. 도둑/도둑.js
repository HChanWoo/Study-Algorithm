const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
for(let i = 1; i <= T; i++) {
    const [N,M,K] = input[2*i-1].split(" ").map(Number);
    const house = input[2*i].split(" ").map(Number);
    const house2 = [...house, ...house];
    let money = 0, answer = 0;
    
    if (N === M) {
        const sum = house.reduce((a, b) => a + b, 0);
        if (sum < K) answer = 1;
        else answer = 0;
        console.log(answer);
        continue;
    }

    for(let j=1; j<house2.length; j++) {
        house2[j] += house2[j-1];
    }

    for(let j=N; j<2*N; j++) {
        money = house2[j] - house2[j-M];
        if(money < K) answer++;
    }
    console.log(answer);
}
