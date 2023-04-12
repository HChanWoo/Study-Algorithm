function solution(nums) {
    var answer = [... new Set(nums)].length > nums.length/2 ? nums.length/2 : [... new Set(nums)].length
    return answer;
}