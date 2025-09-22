from itertools import product
def solution(N, number):
    # N과 number가 동일한 경우 1 리턴
    if N == number :
        return 1

    # 중복제거를 위해 set 사용
    answer_list = [set() for _ in range(9)] # [set,set,set,set,set,set,set,set]
    answer_list[1].add(N)
    
    for idx in range(2,9) :
        # N으로 이루어진 수, idx가 3인 경우 : NNN
        answer_list[idx].add(int(str(N)*idx))
        for a in range(1,idx) :
            b = idx-a
            # DP 메모이제이션 기법을 사용, 4번째는 [1,3], [2,2], [3,1] 조합으로 채우기
            for x,y in product(answer_list[a],answer_list[b]) :
                answer_list[idx].add(x+y)
                answer_list[idx].add(x-y)
                answer_list[idx].add(x*y)
                if y!=0 :
                    answer_list[idx].add(x//y)
        #if number in answer_list[idx] :
         #   return idx
    print(answer_list)
    return -1