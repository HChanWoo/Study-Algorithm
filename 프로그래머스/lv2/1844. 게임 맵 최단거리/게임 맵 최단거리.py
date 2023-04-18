def solution(maps):
    W,H = len(maps[0]),len(maps)
    moves = [[0,1],[0,-1],[1,0],[-1,0]]
    # 처음엔 visited.도 사용했으나 시간초과로 인해 vistied 대신 해당 요소가 1인지 확인
    # visited=[[0]*len(maps[0]) for _ in range(len(maps))]

    que = [];
    que.append((0,0))

    while que :
        # 첫번째 요소 pop
        x,y = que.pop(0)
        for move in moves :
            nx,ny = x+move[0],y+move[1]
            if 0<=nx<H and 0<=ny<W and maps[nx][ny]==1:
                maps[nx][ny]= maps[x][y]+1
                que.append((nx,ny))

    return -1 if maps[H-1][W-1] == 1 else maps[H-1][W-1]