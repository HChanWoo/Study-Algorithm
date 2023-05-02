from itertools import permutations
def solution(numbers):
    answer = []
    list_numbers = list(numbers)
    list_combination = []

    for i in range(1,len(list_numbers)+1) :
        for ele in permutations(list_numbers,i) :
            ele = int(''.join(ele))
            if ele not in list_combination and ele>1:
                list_combination.append(ele)

    for ele in list_combination :
        check = 0
        for i in range(2,ele) :
            if ele%i == 0 :
                check=1
                break
        if check == 0 :
            answer.append(ele)

    return len(answer)