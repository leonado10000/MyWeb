#2160. Minimum Sum of Four Digit Number After Splitting Digits
def minimumSum(self, num: int) -> int:
    num = str(num)
    k = []
    for x in num:
        k.append(int(x))
    k.sort()
    return (k[0]+k[1])*10+(k[2]+k[3])

    
print(minimumSum(5,2932))