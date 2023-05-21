import sys
input = sys.stdin.readline

N = int(input())
N_list = list(map(int,input().split()))

for idx in range(1,N) :
    N_list[idx] = max(N_list[idx], N_list[idx]+N_list[idx-1])

print(max(N_list))