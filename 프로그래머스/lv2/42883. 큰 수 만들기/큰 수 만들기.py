def solution(number, k):
    answer = [] # stack(Last in First  out)

    for num in number :
        # 스택이 비였거나 k(빼야하는 숫자)가 0인 경우 append 작업만 가능
        if not answer or k==0 :
            answer.append(num)
            continue

        # 새로운 수가 스택의 마지막 요소보다 크면 스택의 마지막 요소를 pop하고,
        # 마지막에 요소를 넣는 과정을 스택이 비거나 k가 0일 때까지 반복한다.
        while answer[-1] < num :
            answer.pop()
            k-=1
            if not answer or k<=0:
                break

        answer.append(num)

    # 배열을 문자열로 변환
    answer = ''.join(answer)
    # 만약 내림차순으로 잘 정리됐는데, 빼야할 수가 남은 경우를 처리
    answer = answer[:-k] if k > 0 else answer
    
    return answer