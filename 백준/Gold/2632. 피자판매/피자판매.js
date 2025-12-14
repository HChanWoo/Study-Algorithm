const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const target = Number(input[0]);
const [m,n] = input[1].split(" ").map(Number);
const pizzaA  = input.slice(2,2+m).map(Number);
const pizzaB = input.slice(2+m,2+m+n).map(Number);

let answer = 0;

const getAllCombination = (arr) => {
    const roundArr = [...arr,...arr];
    const returnArr = new Map();
    returnArr.set(0, 1);

    const totalSum = arr.reduce((sum, val) => sum + val, 0);
    if(totalSum <= target) returnArr.set(totalSum, 1);

    for(let i=0; i<arr.length; i++) {
        if(roundArr[i] <= target) {
            returnArr.set(roundArr[i], (returnArr.get(roundArr[i]) || 0) + 1);
        }

        let tmpSum = roundArr[i];
        for(let j= i+1; j<i+arr.length - 1; j++) {
            tmpSum += roundArr[j];
            if(tmpSum > target) break;
            else returnArr.set(tmpSum, returnArr.get(tmpSum) + 1 || 1);
        }
    }

    return returnArr
}

const combinationA = getAllCombination(pizzaA);
const combinationB = getAllCombination(pizzaB);

for(const [sumA, countA] of combinationA) {
    const target2 = target - sumA;
    if(combinationB.has(target2)) {
        answer += countA * combinationB.get(target2);
    }
}

console.log(answer);