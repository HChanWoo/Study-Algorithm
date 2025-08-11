const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

const T = Number(input[0]);
const info = new Map();

for (let i = 1; i < input.length; i++) {
    if(i <= T) {
        const [name, week, day, cost] = input[i].trim().split(' ');
        info.set(name, {
            'day' : Number(week)*7 + Number(day),
            'cost' : Number(cost),
        });
    } else {
        const [name, money] = input[i].trim().split(' ');
        info.get(name).money = Number(money);
    }
}
const sortedPromises = Array.from(info.values()).sort((a, b) => a.day - b.day);

const successDay = new Map();
for (const ele of sortedPromises) {
    if (!successDay.has(ele.day)) successDay.set(ele.day, false);
    if (ele.money >= ele.cost) successDay.set(ele.day, true);
}

let prev = -1;
let cnt = 0;
let maxCount = 0;
for (const [day, hasPayer] of successDay) {
    if (hasPayer) {
        if (prev === -1 || day === prev + 1) {
            cnt++;
        } else {
            cnt = 1;
        }
        if (cnt > maxCount) maxCount = cnt;
    } else {
        cnt = 0;
    }
    prev = day;
}

console.log(maxCount);
