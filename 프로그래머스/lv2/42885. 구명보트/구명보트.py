def solution(people, limit):
    answer = 0
    people.sort()
    left,right=0,len(people)-1

    while len(people) > 0 and left < right :
        sum_weight = people[left]+people[right]
        if sum_weight > limit :
            right-=1
            answer+=1
        else :
            left+=1
            right-=1
            answer+=1
    if left==right:
        answer+=1
    
    return answer