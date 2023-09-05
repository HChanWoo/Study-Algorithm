
def solution(n, computers):
    answer = 0

    visited = [False for _ in range(n)]

    for i in range(n) :

        if visited[i] == True :
            continue

        que = [i]
        visited[i] = True
        answer+=1

        while que :
            cur = que.pop()
            for idx in range(n) :
                if computers[cur][idx] == 1 and visited[idx] == False :
                    que.append(idx)
                    visited[idx] = True

    return answer