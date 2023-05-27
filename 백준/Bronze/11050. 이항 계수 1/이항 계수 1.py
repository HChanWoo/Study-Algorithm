userN,userK = map(int,input().split())
fact_list=[1 for _ in range(userN+1)]

for i in range(1,len(fact_list)) :
    fact_list[i] = i*fact_list[i-1]

print(fact_list[userN]//(fact_list[userN-userK]*fact_list[userK]))