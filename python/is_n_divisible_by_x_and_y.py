#Create a function isDivisible(n, x, y) that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

def is_divisible(n, x, y):
    results_x = n % x
    results_y = n % y
    if results_x > 0 or results_y > 0:
        return False
    else:
        return True
