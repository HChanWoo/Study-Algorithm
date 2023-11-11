function solution(numbers, target) {
    var answer = 0;
    
    const searchBinary = (idx,num,total) => {
        const ele = total+numbers[idx]*num;
        if(idx === numbers.length-1) {
            if(ele === target) {
                answer+=1
            }
        } else {
            searchBinary(idx+1,1,ele)
            searchBinary(idx+1,-1,ele)
        }
    }
    
    searchBinary(0,1,0)
    searchBinary(0,-1,0)
    
    return answer;
}