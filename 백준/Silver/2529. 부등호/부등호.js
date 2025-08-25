function dfs(numberList, signs) {
    if (numberList.length === signs.length + 1) {
        answer.push(numberList.join(''));
        return;
    }

    const curSign = signs[numberList.length - 1];
    const curNumber = numberList[numberList.length - 1];

    for (let i = 0; i <= 9; i++) {
        if (!numberList.includes(i)) {
            if (
                numberList.length === 0 ||
                (curSign === '<' && curNumber < i) ||
                (curSign === '>' && curNumber > i)
            ) {
                dfs([...numberList, i], signs);
            }
        }
    }
}

const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');
const signList = input[1].split(' ');

const answer = [];
dfs([], signList);

console.log(answer.reduce((a, b) => (a > b ? a : b))); //최대
console.log(answer.reduce((a, b) => (a < b ? a : b))); //최소