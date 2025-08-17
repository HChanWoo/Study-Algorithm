const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

let [N,M] = input[0].split(' ').map(Number);
const info = {};
const answer = [];
const totalWeek = M/7;

for(let i=1; i<=N; i++) {
    const [name,day,start,end] = input[i].split(' ');
    const [startHour, startMin] = start.split(":").map(Number);
    const [endHour, endMin] = end.split(":").map(Number);
    const diffTime = (endHour*60+endMin)-(startHour*60+startMin);
    const week = Math.floor((Number(day)-1)/7);
    
    if(!info[name]) {
        info[name] = Array.from({ length: totalWeek }, () => [0, 0]);
    }
    info[name][week][0] += 1;
    info[name][week][1] += diffTime;
}

Object.entries(info).forEach(([key, value]) => {
    let isReal = true;
    for(let i=0; i<totalWeek; i++) {
      if(value[i][0] < 5 || value[i][1] < 3600) {
          isReal = false;
          break;
      }
    }
    if(isReal) answer.push(key);
});

if(answer.length) {
    answer.sort();
    for(let ele of answer) console.log(ele);
} else {
    console.log(-1);
}