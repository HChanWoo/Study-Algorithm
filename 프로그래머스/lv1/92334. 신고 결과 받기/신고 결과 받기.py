def solution(id_list, report, k):
    answer = [0]*len(id_list)
    report_set = list(set(report))
    dic_report = {id: [] for id in id_list}
    
    for tmp in report_set :
        user,target = tmp.split()
        dic_report[target].append(user)

    for key, value in dic_report.items():
        if len(value) >= k :
            for name in value :
                answer[id_list.index(name)]+=1
    return answer