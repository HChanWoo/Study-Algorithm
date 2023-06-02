N = int(input())

def bunhae(N) :
    for a in range(1,N-1) :
        if a+sum(map(int,list(str(a)))) == N :
            return a
    return 0

print(bunhae(N))