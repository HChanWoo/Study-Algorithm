user_cnt = int(input())
fact_list=[1 for _ in range(30)]
    
for i in range(1,len(fact_list)) :
    fact_list[i] = i*fact_list[i-1]

for i in range(user_cnt) :
    userN,userM = map(int,input().split())
    
    print(fact_list[userM]//(fact_list[userN]*fact_list[userM-userN]))