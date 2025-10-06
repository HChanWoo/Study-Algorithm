const fs = require('fs');
const input = fs.readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
    .toString().trim().split('\n');

const [N, d, k, c] = input[0].split(' ').map(Number);
const dishes = input.slice(1).map(Number);

const count = new Array(d + 1).fill(0);
let unique = 0;
let max = 0;

// 초기 윈도우 (0 ~ k-1)
for (let i = 0; i < k; i++) {
  if (count[dishes[i]] === 0) unique++;
  count[dishes[i]]++;
}

// 슬라이딩 윈도우 이동
for (let i = 0; i < N; i++) {
  // 쿠폰 고려
  max = Math.max(max, unique + (count[c] === 0 ? 1 : 0));

  // 윈도우에서 앞쪽 초밥 제거
  count[dishes[i]]--;
  if (count[dishes[i]] === 0) unique--;

  // 새 초밥 추가 (원형 처리)
  const next = dishes[(i + k) % N];
  if (count[next] === 0) unique++;
  count[next]++;
}

console.log(max);
