def solution(genres, plays):
    answer = []

    dict_genre = {} # 장르별 총 재생수, {장르 : 총 재생 수}
    dict_plays = {} # 장르별 고유번호별 재생수, {장르 : [[고유번호:재생 수]]}

    for i in range(len(genres)) :
        if genres[i] in dict_genre :
            dict_genre[genres[i]] += plays[i]
            dict_plays[genres[i]].append([i,plays[i]])
        else :
            dict_genre[genres[i]] = plays[i]
            dict_plays[genres[i]] = [[i,plays[i]]]

    # 총 재생수 내림차순 정령
    sorted_dict = dict(sorted(dict_genre.items(), key=lambda item: -item[1]))

    # 개별 재생 수 내림차순 정렬 후 최대 2개 answer에 추가
    for key in sorted_dict :
        tmp = sorted(dict_plays[key],key=lambda a:-a[1])
        answer+=tmp[:2]

    return list(map(lambda a: a[0] ,answer))
