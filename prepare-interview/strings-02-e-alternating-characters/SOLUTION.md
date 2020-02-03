# Title
Alternating Characters

# Short Problem Definition

# Link

https://www.hackerrank.com/challenges/alternating-characters

# Complexity

## Time
O(N)

## Space
O(1)

# Execution
If two following characters are the same, you have to delete one of them. A sequence of x equal characters will require (x-1) deletions.

# Solution

```py
def alternatingCharacters(s):
  delete_cnt = 0
  for i in range(1,len(s)):
      if s[i] == s[i-1]:
          delete_cnt +=1
  return delete_cnt
```
