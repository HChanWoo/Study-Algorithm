function solution(phone_book) {
    let answer = true;
    
    phone_book.sort();
    
    for(let i=0; i<phone_book.length-1; i++) {
        if(phone_book[i+1].indexOf(phone_book[i])===0) return false;
    }
    
    return answer;
}