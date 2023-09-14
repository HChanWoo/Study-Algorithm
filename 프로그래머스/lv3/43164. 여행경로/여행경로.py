answer = []

def dfs(start, tickets, route, visited):
    global answer
    
    if len(route) == len(tickets) + 1:
        answer.append(route[:])  # 새로운 경로를 추가해야 중첩 문제가 해결됩니다.
        return

    for idx in range(len(tickets)):
        ele = tickets[idx]
        if not visited[idx] and ele[0] == start:
            visited[idx] = 1
            dfs(ele[1], tickets, route + [ele[1]], visited)  # 새로운 경로를 생성하여 사용합니다.
            visited[idx] = 0

def solution(tickets):
    global answer

    visited = [0] * len(tickets)

    for idx in range(len(tickets)):
        ele = tickets[idx]
        if ele[0] == "ICN":
            visited[idx] = 1
            dfs(ele[1], tickets, [ele[0], ele[1]], visited)
            visited[idx] = 0

    return sorted(answer)[0]