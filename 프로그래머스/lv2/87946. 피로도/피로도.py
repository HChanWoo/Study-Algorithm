def solution(k, dungeons): 
    global answer
    answer = -1
    # 방문여부 리스트
    visited = [0] * len(dungeons)
    dfs(k,dungeons,visited,0)
    return answer

def dfs(k, dungeons,visited, cnt) :
    global answer
    
    # 방문한 던전의 수 업데이트
    if answer < cnt : answer=cnt

    for i in range(len(dungeons)) :
        # 현재 필요도로 방문 가능하고, 방문하지 않은 경우 방문
        if k >= dungeons[i][0] and not visited[i]:
            visited[i]=1
            dfs(k-dungeons[i][1],dungeons,visited,cnt+1)
            visited[i]=0