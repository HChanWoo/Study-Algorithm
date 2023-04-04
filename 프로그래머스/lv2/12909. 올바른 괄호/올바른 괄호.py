def solution(s):
    answer = True
    s=list(s)
    
    right=0
    
    while len(s) > 0 :
        ele = s.pop()
        if ele == ')' :
            right+=1
        else :
            if right-1 < 0 :
                return False
            right-=1  

    if right != 0 :
        return False
    return True