function solution(n, wires) {
    var answer = n;

    const net = Array.from(Array(n+1),()=>[])
    
    wires.forEach((ele) => {
        const [a,b] = ele;
        
        net[a].push(b)
        net[b].push(a)
    })
    
    const searchTree = (root,except) => {
        const visited = Array(n+1).fill(false);
        visited[root]=true;
        const que = [root];
        let len = 1;
        
        while(que.length) {
            const ele = que.pop();
            net[ele].forEach((ele) => {
                if(!visited[ele] && ele!==except) {
                    que.push(ele);
                    visited[ele]=true;
                    len+=1;
                }
            });
        }
        return len
    }
    
    wires.forEach((ele) => {
        const [a,b] = ele;
        
        let tmp = searchTree(a,b);
        tmp = Math.abs(tmp-(n-tmp));
        
        answer = Math.min(tmp,answer)
    })
    
    return answer;
}