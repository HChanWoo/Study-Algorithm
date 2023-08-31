def isComplete(x) :
    stack = []

    for i in x :
        if i == '(' :
            stack.append(i)
        else :
            if len(stack) == 0 :
                return False
            else :
                stack.pop()

    return stack == []
    
def solution(p):
    if p == '' : return p

    answer = ''

    start=0
    end=0
    idx=0

    for i in range(len(p)) :
        if p[i] == '(' : start+=1
        else : end+=1

        if start == end : 
            idx=i
            break
    
    u = p[:idx+1]
    v = p[idx+1:]

    if isComplete(u) :
        answer = u + solution(v)
    else :
        tmp = "("
        tmp += solution(v)
        tmp += ")"
        u = u[1:-1]
        for c in u:
            if c == '(':
                tmp+=')'
            else:
                tmp+='('
        answer += tmp

    return answer