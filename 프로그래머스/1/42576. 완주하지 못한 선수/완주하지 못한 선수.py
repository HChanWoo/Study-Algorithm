def solution(participant, completion):
    answer = ''
    
    participant.sort()
    completion.sort()
    
    idx=0
    
    for idx in range(len(completion)) :
        if completion[idx] != participant[idx] :
            break
        idx+=1
    
    return participant[idx]