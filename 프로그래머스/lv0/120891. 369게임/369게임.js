function solution(order) {
    return sum_ = String(order).split('').reduce( (acc,cur)=>{ if(['3','6','9'].includes(cur)) {return acc+1} else {return acc} },0)
}