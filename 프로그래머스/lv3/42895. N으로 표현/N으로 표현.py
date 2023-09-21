from itertools import product
def solution(N, number):
    if N == number :
        return 1
    
    answer_list = [set() for _ in range(9)]
    answer_list[1].add(N)
    
    for idx in range(2,9) :
        answer_list[idx].add(int(str(N)*idx))
        for a in range(1,idx) :
            b = idx-a
            for x,y in product(answer_list[a],answer_list[b]) :
                answer_list[idx].add(x+y)
                answer_list[idx].add(x-y)
                answer_list[idx].add(x*y)
                if y!=0 :
                    answer_list[idx].add(x//y)
        if number in answer_list[idx] :
            return idx
    
    return -1





