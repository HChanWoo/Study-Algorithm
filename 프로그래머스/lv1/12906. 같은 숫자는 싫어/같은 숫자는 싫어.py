def solution(arr):
    answer = []
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    ele = arr.pop()
    answer.append(ele)
    while len(arr) > 0 :
        cur_ele = arr.pop()
        if cur_ele != ele :
            ele = cur_ele
            answer.append(cur_ele)
        
    return answer[::-1]