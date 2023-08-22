def solution(genres, plays):
    answer = []

    dict_genre = {}
    dict_plays = {}

    for i in range(len(genres)) :
        if genres[i] in dict_genre :
            dict_genre[genres[i]] += plays[i]
            dict_plays[genres[i]].append([i,plays[i]])
        else :
            dict_genre[genres[i]] = plays[i]
            dict_plays[genres[i]] = [[i,plays[i]]]

    print(dict_genre,dict_plays)
    sorted_dict = dict(sorted(dict_genre.items(), key=lambda item: item[1], reverse=True))

    for key in sorted_dict :
        tmp = sorted(dict_plays[key],key=lambda a:-a[1])
        answer+=tmp[:2]

    return list(map(lambda a: a[0] ,answer))