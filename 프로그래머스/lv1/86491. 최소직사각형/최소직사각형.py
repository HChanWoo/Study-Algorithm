def solution(sizes):
    answer = 0

    list2 = list(map(lambda x: [x[1],x[0]] if x[1]>x[0] else [x[0],x[1]],sizes))
    max_val = [0,0]
    for a,b in list2 :
        if max_val[0] < a :
            max_val[0] = a
        if max_val[1] < b :
            max_val[1] = b
    answer = max_val[0] * max_val[1]
    return answer