input = STDIN.read

def sumBranch(arr, len)
  sum = 0
  for ele in arr do
      if (ele > len) 
          sum += (ele - len)
      end
  end
  
  return sum
end

lines = input.split("\n").map(&:strip)
N, H = lines[0].split.map(&:to_i)
arr = lines[1].split.map(&:to_i)

left = 0
right = arr.max
while left <= right
    mid = (left + right) / 2
    mid_len = sumBranch(arr, mid)
    
    if mid_len >= H
      left = mid + 1
    else
      right = mid - 1
    end
end

p right