len_input = int(input())
list_input = list(map(int,input().split()))
max_sum = [0]*len_input
max_sum[0] = list_input[0]

for i in range(1,len_input) :
    max_sum[i] = max(list_input[i],max_sum[i-1]+list_input[i])
print(max(max_sum))