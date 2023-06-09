import heapq
import sys
input = sys.stdin.readline

len_cmd = int(input())
list_heap=list()

for i in range(len_cmd) :
    cmd = int(input())
    if cmd == 0 :
        if len(list_heap) == 0 :
            print(0)
        else :
            print(heapq.heappop(list_heap)[1])
    else :
        heapq.heappush(list_heap,(-cmd,cmd))