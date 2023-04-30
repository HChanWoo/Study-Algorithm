from collections import deque

def solution(n, wires):
    answer = n
    graph_arr = [[] for _ in range(n)]

    for x,y in wires :
        graph_arr[x-1].append(y)
        graph_arr[y-1].append(x)

    graph_dict = {i+1 : graph_arr[i] for i in range(n)}

    for x,y in wires :
        visited = [0]*(n+1)
        visited[x] = 1
        graph_dict[x].remove(y)
        graph_dict[y].remove(x)
        cnt=1
        queue = deque([x])

        while queue :
            cur = queue.popleft()
            for nx in graph_dict[cur] :
                if not visited[nx] :
                    queue.append(nx)
                    cnt+=1
                    visited[nx]=1
                    
        if abs(cnt - (n-cnt)) < answer :
            answer = abs(cnt - (n-cnt))

        graph_dict[x].append(y)
        graph_dict[y].append(x)

    return answer