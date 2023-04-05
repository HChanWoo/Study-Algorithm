function solution(balls, share) {
    let f = function (num) {
        let n = BigInt(1);
        for(let i = 1; i <= num; i++) {
            n = n * BigInt(i);
        }
            return n;
    }
    return f(balls)/(f(balls-share)*f(share));
}