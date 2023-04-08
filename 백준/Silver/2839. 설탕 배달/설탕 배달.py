N = int(input())

five = N//5
three = N%5/3

if three != int(three) :
    
    for i in range(1,6) :
        if N-3*i < 0 :
            i=5
            break
        if (N-3*i)%5 == 0 :
            break
    if i==5 :
        print(-1)
    else :
        print((N-3*i)//5+i)
else :
    print(int(five+three))