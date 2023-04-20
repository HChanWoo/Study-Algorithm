def solution(arr, query):
    start = 0
    end = len(query) - 1
    for i in range(len(query)):
        if i % 2 == 0:
            end = start + query[i]
        else:
            start += query[i]
    answer = arr[start:end]
    if not answer:
        return [-1]
    return answer