N = int(input())
N_list = []
for _ in range(N - 1):
    N_list.append(list(map(int, input().split())))
k = int(input())

if N == 1 :
    print(0)
else : 
    answer_list = [0] * N
    answer_list[1] = N_list[0][0]
    for i in range(2, N):
        answer_list[i] = min(answer_list[i - 2] + N_list[i - 2][1], answer_list[i - 1] + N_list[i - 1][0])

    answer_min = answer_list[N - 1]

    for i in range(N - 3):
        answer_list = [0] * N
        answer_list[1] = N_list[0][0]

        for j in range(2, N):
            if i < j < i + 3:
                continue
            elif j == i + 3:
                answer_list[j] = answer_list[i] + k
            elif j == i + 4:
                answer_list[j] = answer_list[j - 1] + N_list[j - 1][0]
            else:
                answer_list[j] = min(answer_list[j - 2] + N_list[j - 2][1], answer_list[j - 1] + N_list[j - 1][0])
        if answer_min > answer_list[N - 1]:
            answer_min = answer_list[N - 1]

    print(answer_min)