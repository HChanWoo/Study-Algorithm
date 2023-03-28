N,K = map(int,input().split())
listN = list()
minN = 0

for i in range(N):
    listN.append(int(input()))
    
for coin in listN[::-1] :
    if K == 0 :
        break
    minN += K//coin
    K%=coin

print(minN)