def solution(sequence, k):
    answer = [0,1000000]
    
    len_seq= len(sequence)
    start=0
    end=-1
    sum_cur=0

    while True :
        if sum_cur < k :
            end+=1
            if end == len_seq : break
            sum_cur+=sequence[end]
        else :
            if start == len_seq : break
            sum_cur-=sequence[start]
            start+=1
        if sum_cur == k :
            if answer[1]-answer[0] > end-start :
                answer = [start,end]

    return answer