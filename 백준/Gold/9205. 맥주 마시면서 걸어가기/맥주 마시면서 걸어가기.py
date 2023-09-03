from collections import deque

def bfs() :

    que=deque()
    que.append((home[0],home[1]))

    while que :
        x,y = que.popleft()
        if abs(target[0]-x)+abs(target[1]-y) <= 1000 :
            print('happy')
            return

        for i in range(n) :
            if not visited[i] :
                nx,ny = n_list[i]
                if abs(nx-x)+abs(ny-y) <= 1000 :
                    que.append((nx,ny))
                    visited[i] = 1 

    print('sad')
    return

t = int(input())

for i in range(t) :
    n = int(input())
    home = list(map(int,input().split()))
    n_list = []
    for _ in range(n) :
        n_list.append(list(map(int,input().split())))
    target = list(map(int,input().split()))
    visited = [0]*(n+1)
    bfs()
