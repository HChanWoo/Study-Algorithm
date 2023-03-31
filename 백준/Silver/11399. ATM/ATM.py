N = int(input())
pList = list(map(int,input().split()))
pList2 = sorted(pList)
time = 0
for i in range(N) :
    time+=pList2[i]*(N-i)
    
print(time)