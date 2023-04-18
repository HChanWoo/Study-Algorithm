def solution(grid):
    answer = []
    # 남서북동 이동시 좌표별 변화
    mrow = [1,0,-1,0]
    mcol = [0,-1,0,1]
    
    len_row,len_col = len(grid),len(grid[0])
    visited = [[[False] * 4 for _ in range(len_col)] for _ in range(len_row)]
    
    # 모든 좌표에 대한 탐색
    for row in range(len_row) :
        for col in range(len_col) :
            # 좌표의 모든 방향 탐색
            for way in range(4) :
                # 해당 좌표의 진행 방향이 이미 사용된 경우 continue
                if visited[row][col][way] :
                    continue
                count=0
                nrow,ncol = row,col
                
                while visited[nrow][ncol][way] == False :
                    visited[nrow][ncol][way] = True
                    count+=1
                    if grid[nrow][ncol] == 'S' :
                        pass
                    elif grid[nrow][ncol] == 'L' :
                        way = (way-1)%4
                    elif grid[nrow][ncol] == 'R' :
                        way = (way+1)%4
                        
                    nrow = (nrow+mrow[way]) % len_row
                    ncol = (ncol+mcol[way]) % len_col
                    
                answer.append(count)
    answer = sorted(answer)
    return answer
