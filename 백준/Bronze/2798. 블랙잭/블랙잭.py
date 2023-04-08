card, targetSum = map(int,input().split())
cardList = list(map(int,input().split()))

def blackJack(card, targetSum, cardList) :
    maxSum = 0
    for a in range(card-2) :
        for b in range(a+1,card-1) :
            for c in range(b+1, card) :
                curSum = cardList[a] + cardList[b] + cardList[c]
                if curSum == targetSum :
                    return targetSum
                if maxSum < curSum and curSum < targetSum :
                    maxSum = curSum
    return maxSum

print(blackJack(card, targetSum, cardList))