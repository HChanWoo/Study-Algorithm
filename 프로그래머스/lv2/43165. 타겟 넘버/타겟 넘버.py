def solution(numbers, target):
    answer = dfs(numbers, target, 0)
    return answer

def dfs(numbers, target, idx) :
    if len(numbers) == idx :
        # print(numbers)
        if sum(numbers) == target :
            return 1
        return 0
    answer=0
    answer+=dfs(numbers, target, idx+1)
    numbers[idx] *= -1
    answer+=dfs(numbers, target, idx+1)
    return answer