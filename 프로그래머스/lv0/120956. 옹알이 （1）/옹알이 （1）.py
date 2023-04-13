def solution(babbling):
    answer = 0
    for word in babbling :
        tmp = word.replace('aya','[]').replace('ye','[]').replace('woo','[]').replace('ma','[]')
        if tmp.replace('[]','') == '' :
            print(word)
            answer+=1
    return answer