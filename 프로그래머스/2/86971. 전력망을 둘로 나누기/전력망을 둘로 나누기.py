from collections import deque

def solution(n, wires):

    answer = n

    # {1 : [1,2], 2: [3,4]} 등으로 각 송전탑과 이어진 송전탑의 관계 그래프를 만드는 코드
    graph_arr = [[] for _ in range(n)]
    for x,y in wires :
        graph_arr[x-1].append(y)
        graph_arr[y-1].append(x)
    graph_dict = {i+1 : graph_arr[i] for i in range(n)}



    # 각각의 wire를 끊었을 때 나뉘는 두 전력망 수의 차이를 bfs로 구현
    for x,y in wires :
        # 방문여부와 해당 wire를 끊었을때 한쪽의 전력망 수를 저장할 변수
        visited = [0]*(n+1)
        visited[x] = 1
        cnt=1
        graph_dict[x].remove(y)
        graph_dict[y].remove(x)
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

        # 끊었던 wire 복구
        graph_dict[x].append(y)
        graph_dict[y].append(x)

    return answer