def solution(n, costs):
    answer = 0
    connected = set([costs[0][0]])
    sorted_costs = sorted(costs, key = lambda x:x[2])
    
    while len(connected) != n :
        for a1,b1,cost in sorted_costs :
            if a1 in connected and b1 in connected :
                continue
            if a1 in connected or b1 in connected :
                connected.update([a1,b1])
                answer+=cost
                break
        
    return answer
