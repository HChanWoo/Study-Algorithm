def solution(price, money, count):
    answer = 0

    for a in [price*(i+1) for i in range(count)] :
        answer+=a
    
    answer -= money
    if answer <= 0 :
        return 0
    return answer