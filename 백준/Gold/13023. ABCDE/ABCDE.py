N,M = map(int,input().split())
visited = [0]*N
M_list = [[] for _ in range(N)]
is_exist = 0

for i in range(M) :
    a,b = map(int,input().split())
    M_list[a].append(b)
    M_list[b].append(a)


def dfs(idx, depth) :
    global is_exist
    if depth == 4 :
        is_exist = 1
        return

    for i in M_list[idx] :
        if not visited[i] :
            visited[i] = 1
            dfs(i, depth+1)
            visited[i] = 0


for i in range(N) :
    visited[i] = 1
    dfs(i,0)
    if is_exist == 1 :
        break
    visited[i] = 0

print(is_exist)