def increaseTime(timer) :
    if timer[1] == 59 :
        timer[0]+=1
        timer[1]=0
    else :
        timer[1]+=1
    return timer

def solution(plans):

    len_answer = len(plans)
    plans = list(map(lambda x: [x[0],x[1],int(x[2])] ,plans))
    plans = sorted(plans, key=lambda x: x[1])
    timer = [0,0]
    queue_job = []
    answer = []

    while len(answer) != len_answer :

        # 만약 새로운 작업이 들어온다면
        if plans and plans[0][1] == f"{timer[0]:02d}:{timer[1]:02d}" :
            queue_job.append(plans.pop(0))

        # 작업해야하는 일이 없을 경우
        if len(queue_job) == 0:
            timer = increaseTime(timer) 
            continue

        # 1분만큼 소요시간을 줄인다
        queue_job[-1][2] -= 1
        
        # 해당 작업의 소요시간이 0이면 answer에 추가한다
        if queue_job[-1][2] == 0 :
            answer.append(queue_job[-1][0])
            queue_job.pop()

        timer = increaseTime(timer)  

    return answer