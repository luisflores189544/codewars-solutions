#Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

# persistence(39) => 3  # Because 3*9 = 27, 2*7 = 14, 1*4=4
                       # and 4 has only one digit.

# persistence(999) => 4 # Because 9*9*9 = 729, 7*2*9 = 126,
                       # 1*2*6 = 12, and finally 1*2 = 2.

# persistence(4) => 0   # Because 4 is already a one-digit number.

def persistence(n):

    num_to_str = str(n)
    if n > 0:
        if len(num_to_str) > 1:
            times_of_multi = 0
            while len(num_to_str) > 1:
                multiplicative_persist = 1
                
                for num in num_to_str:
                    multiplicative_persist = multiplicative_persist * int(num)
                    
                times_of_multi += 1 
                num_to_str = str(multiplicative_persist)

            return times_of_multi
                
        else:
            return 0
    else:
        return 0
