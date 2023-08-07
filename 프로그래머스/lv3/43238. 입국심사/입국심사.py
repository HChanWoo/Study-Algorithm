import math

def solution(n, times):
    answer = 0
    
    times.sort()
    minTime = times[0]
    maxTime = times[-1] * n

    answer = maxTime

    while minTime <= maxTime :
        midTime = math.floor((minTime+maxTime)/2)
        count = 0

        for time in times :
            count += math.floor(midTime/time) # 만약 소수점이면 해결하지 못한 경우임

        if count >= n : # 조건을 충족한 경우
            answer = midTime
            maxTime = midTime-1
        else : # 조건을 충족하지 못한 경우
            minTime = midTime+1

    return answer