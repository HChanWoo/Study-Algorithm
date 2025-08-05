function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(var i = 0 ; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            break;
        }
    }
    return answer;
    
//     var answer = '';
//     const map = new Map();
//     participant.forEach((name) => {
//         map.set(name,(map.get(name) || 0) +1);
//     });
//     completion.forEach((name) => {
//         map.set(name,map.get(name)-1);
//     });
    
//     for (const [key, value] of map) {
//       if(value > 0) return key;
//     }
//     return answer;
}