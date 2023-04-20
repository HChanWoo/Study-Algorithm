def solution(arr, query):
    answer = []
    
    for idx in range(len(query)) :
        if idx%2 == 0 :
            arr = arr[:query[idx]]
        else :
            arr = arr[query[idx]:]
            
    return [-1] if len(arr)==0 else arr