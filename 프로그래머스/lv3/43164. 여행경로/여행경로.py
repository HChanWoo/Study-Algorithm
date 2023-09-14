answer = []
def dfs(start,tickets,route,visited) :
    global answer
    
    if len(route) == len(tickets) + 1 :
        answer.append(route[:])
        return

    for idx in range(len(tickets)) :
        ele = tickets[idx]
        if not visited[idx] and ele[0] == start :
            visited[idx]=1
            dfs(ele[1],tickets,route+[ele[1]],visited)
            visited[idx]=0


def solution(tickets):
    global answer

    visited = [0]*len(tickets)

    for idx in range(len(tickets)) :
        ele = tickets[idx]
        if ele[0] == 'ICN' :
            visited[idx] = 1
            dfs(ele[1],tickets,[ele[0],ele[1]],visited)
            visited[idx] = 0

    return sorted(answer)[0]
