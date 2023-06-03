N = int(input())
startN = 666
curN = 0
while True :
    if '666' in str(startN) :
        curN+=1
    if curN == N :
        break
    startN+=1
print(startN)