M,N = map(int,input().split())
list_chess = list()
minList=[]

for i in range(M) :
    list_chess.append(input())

for a in range(M-7) :
    for b in range(N-7) :
        BFirst=0
        WFirst=0
        for i in range(a,a+8):
            for j in range(b,b+8) :
                if (i+j) %2 == 0 and list_chess[i][j] != 'B' :
                    BFirst+=1
                elif (i+j) %2 != 0 and list_chess[i][j] != 'W' :
                    BFirst+=1
                elif (i+j) %2 == 0 and list_chess[i][j] != 'W' :
                    WFirst+=1
                elif (i+j) %2 != 0 and list_chess[i][j] != 'B' :
                    WFirst+=1
        minList.append(min(BFirst,WFirst))
            
print(min(minList)) 