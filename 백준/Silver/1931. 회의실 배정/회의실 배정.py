import sys

N = int(input())
N_list = list()
[N_list.append(list(map(int,sys.stdin.readline().split()))) for _ in range(N)]

N_list2 = sorted(N_list,key=lambda x:(x[1],x[0]))

cnt = 1
end_time = N_list2[0][1]

for i in range(1,len(N_list2)) :
    if end_time <= N_list2[i][0] :
        end_time = N_list2[i][1]
        cnt+=1
print(cnt)