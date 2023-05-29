T = int(input())
for _ in range(T) :
    N = int(input())
    coins = list(map(int,input().split()))
    target = int(input())
    
    answer = [1]+[0]*target
    for coin in coins :
        for i in range(1,target+1) :
            if i-coin >= 0 :
                answer[i]+=answer[i-coin]
    print(answer[-1])
