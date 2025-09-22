function solution(N, number) {
    var answer = 0;
    
    const dp = Array.from({ length: 9 }, () => new Set());
    
    for(let i=1; i<9; i++) {
        dp[i].add(Number(String(N).repeat(i))); // i 번 이어붙이기 : 55, 555, ...
        
        for(let j=1; j<i; j++) {
            for(const a of dp[j]) {
                for(const b of dp[i - j]) {
                    dp[i].add(a + b);
                    dp[i].add(a - b);
                    dp[i].add(b - a);
                    dp[i].add(a * b);
                    if (b !== 0) dp[i].add(Math.floor(a / b));
                    if (a !== 0) dp[i].add(Math.floor(b / a));
                }
            }
        }
        if (dp[i].has(number)) return i;
    }
    
    return -1;
}