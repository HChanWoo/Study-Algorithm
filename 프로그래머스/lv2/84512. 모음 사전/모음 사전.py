def solution(word):
    answer = 0
    list_char = ['A', 'E', 'I', 'O', 'U']

    # 문자의 인덱스별 증가하는 양
    list_up = [781,156,31,6,1]

    # 문자를 하나씩 가져와 계산한 값을 answer에 더해준다.
    for i in range(len(word)) :
        answer+=list_char.index(word[i])*list_up[i]+1

    return answer