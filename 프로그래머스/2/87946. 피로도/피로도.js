function solution(k, dungeons) {
    var answer = -1;
    const visited = Array(dungeons.length).fill(false);
    
    const dfs = (현재,방문수,visited) => {
        if(방문수>answer) answer=방문수;
        
        for(let i=0; i<dungeons.length;i++) {
            if(!visited[i] && 현재>=dungeons[i][0]) {
                visited[i]=true;
                dfs(현재-dungeons[i][1],방문수+1,visited)
                visited[i]=false;
            }
        }
    }
    
    dfs(k,0,visited)
    
    return answer;
}