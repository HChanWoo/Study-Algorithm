def solution(clothes):
    clothes_dict = {}
    for cloth in clothes :
        if cloth[1] in clothes_dict :
            clothes_dict[cloth[1]]+=1
        else :
            clothes_dict[cloth[1]]=1
            
    clothes_sum=0
    clothes_comb=1

    for key,val in clothes_dict.items() :
        clothes_sum+=val
        clothes_comb*=(val+1)

    if len(clothes_dict) <= 1 :
        return clothes_sum

    return clothes_comb-1