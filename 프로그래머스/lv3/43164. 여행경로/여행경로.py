answer = []
def dfs(start,tickets,route,visited) :
    global answer
    
    # 모든 항공권을 사용하면 answer에 추가
    if len(route) == len(tickets) + 1 :
        answer.append(route[:])
        return

    # start 가 출발하는 공항일 경우 탐색에 추가
    for idx in range(len(tickets)) :
        ele = tickets[idx]
        if not visited[idx] and ele[0] == start :
            visited[idx]=1
            dfs(ele[1],tickets,route+[ele[1]],visited)
            visited[idx]=0

def solution(tickets):
    global answer

    visited = [0]*len(tickets)

    tickets.sort()

    for idx in range(len(tickets)) :
        ele = tickets[idx]
        if ele[0] == 'ICN' :
            visited[idx] = 1
            dfs(ele[1],tickets,[ele[0],ele[1]],visited)
            visited[idx] = 0

    return answer[0]
