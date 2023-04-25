def solution(answers):
    answer = []

    students = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    students_answer = [0,0,0]

    for i in range(3):
        for j in range(len(answers)) :
            if answers[j] == students[i][j%len(students[i])] :
                students_answer[i]+=1

    max_value = max(students_answer)
    for i in range(3) : 
        if students_answer[i] == max_value :
            answer.append(i+1)
            
    return answer