def solution(k, dungeons): 
    global answer
    answer = -1
    visited = [0]*len(dungeons)
    dfs(k,dungeons,visited,0)
    return answer

def dfs(k,dungeons,visited,cnt) :
    global answer
    if answer < cnt :
        answer = cnt
    
    for idx in range(len(dungeons)) :
        if k >= dungeons[idx][0] and not visited[idx] :
            visited[idx]=1
            dfs(k-dungeons[idx][1],dungeons,visited,cnt+1)
            visited[idx]=0
