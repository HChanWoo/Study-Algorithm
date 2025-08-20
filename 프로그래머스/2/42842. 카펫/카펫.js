function solution(brown, yellow) {
    var answer = [];
    const max_length = Math.max(brown,yellow);
    for(let i=1;i<max_length;i++) {
        for(let j=1;j<max_length;j++) {
            if( (i-2)*(j-2) === yellow && ( (i*j)-(i-2)*(j-2)) === brown) 
                return i>j ? [i,j] : [j,i];
        }
    }
    
    return answer;
}