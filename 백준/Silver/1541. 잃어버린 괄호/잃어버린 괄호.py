N = input()
list1 = N.split('-')
Sum = 0

for i in range(len(list1)) :
    tmpList = list1[i].split('+')
    if i==0 :
        Sum=sum(list(map(int,tmpList)))
    else :
        Sum-=sum(list(map(int,tmpList)))
print(Sum)