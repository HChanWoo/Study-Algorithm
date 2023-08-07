from collections import deque
def solution(bridge_length, weight, truck_weights):
    answer = 0
    waiting = deque(truck_weights)
    cur_bridge = deque([0 for _ in range(bridge_length)])
    sum_weight = 0

    while len(waiting) or sum_weight > 0 :
        passed_truck = cur_bridge.popleft()
        sum_weight -= passed_truck

        if len(waiting) and sum_weight + waiting[0] <= weight :
            append_truck = waiting.popleft()

            sum_weight+=append_truck
            cur_bridge.append(append_truck)

        else :
            cur_bridge.append(0)

        answer+=1
    return answer