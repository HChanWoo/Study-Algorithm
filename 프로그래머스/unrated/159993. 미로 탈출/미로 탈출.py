# S 시작 E 출구 L 레버
from collections import deque
def solution(maps):

    def bfs(start,end) :
        moves = [[1,0],[0,1],[-1,0],[0,-1]]
        que = deque([(start[0],start[1],0)])
        visited = [[0] * len(maps[0]) for _ in range(len(maps))]

        while que :
            x,y,cur_move = que.popleft()

            if (x,y) == end :
                return cur_move

            for move in moves :
                nx,ny = x+move[0],y+move[1]
                if 0<=nx<len(maps) and 0<=ny<len(maps[0]) and maps[nx][ny] != 'X' and not visited[nx][ny] :
                    que.append((nx,ny,cur_move+1))
                    visited[nx][ny] = 1
        return -1

    출발 = None
    출구 = None
    레버 = None
    
    for i in range(len(maps)):
        for j in range(len(maps[0])):
            if maps[i][j] == 'S':
                출발 = (i, j)
            elif maps[i][j] == 'E':
                출구 = (i, j)
            elif maps[i][j] == 'L':
                레버 = (i, j)

    출발_레버 = bfs(출발,레버)
    if 출발_레버 == -1 :
        return -1

    레버_출구 = bfs(레버,출구)
    if 레버_출구 == -1 :
        return -1

    return 출발_레버+레버_출구