# 둘 다 성공
# 0가 성공했는데 X와 수가 같을 때
# X가 성공했는데 0이 수가 많을 때
# 두 갯수가 2이상 차이 날때
def isSuccess(board,X_O) :
    success = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]]
    for ele in success :
        if board[ele[0]] == X_O and board[ele[1]] == X_O and board[ele[2]] == X_O :
            return 1
    return 0

def solution(board):
    answer = -1
    split_board = list(map(lambda x:list(x),board))
    sum_board = sum(split_board,[])
    sum_O = sum_board.count('O')
    sum_X = sum_board.count('X')

    if sum_O - sum_X > 1 or sum_O < sum_X :
        return 0

    success_O = isSuccess(sum_board,'O')
    success_X = isSuccess(sum_board,'X')

    if success_O == 1 and success_X  == 1:
        return 0


    if success_O == 1 and sum_O <= sum_X :
        return 0
    elif success_X == 1 and sum_O > sum_X :
        return 0

    return 1