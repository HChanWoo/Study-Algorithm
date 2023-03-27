def solution(n, lost, reserve):
    answer = n-len(lost)

    for i in range(1,n+1) :
        if i in lost and i in reserve :
            reserve.remove(i)
            lost.remove(i)
            answer+=1

    for i in range(1,n+1) :
        if i in lost :
            if i-1 in reserve :
                answer+=1
                reserve.remove(i-1)
            elif i+1 in reserve :
                answer+=1
                reserve.remove(i+1)
    return answer