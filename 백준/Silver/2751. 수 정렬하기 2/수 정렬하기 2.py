import sys
input = sys.stdin.readline
list_total = [0] * 2000001

N = int(input())
for _ in range(N) :
    list_total[int(input())] = 1
 
print("\n".join([str(i) for i in range(-1000000, 1000001, 1) if list_total[i]]))