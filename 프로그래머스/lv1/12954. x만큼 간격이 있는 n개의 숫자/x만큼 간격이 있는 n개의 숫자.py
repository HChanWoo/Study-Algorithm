def solution(x, n):
    origin = x
    answer = []
    for i in range(n):
        answer.append(x)
        x+=origin
    return answer