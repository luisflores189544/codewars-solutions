#Task
#Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

def adjacent_element_product(array):
  max_product = 0
  for idx, val in enumerate(array):
    if idx == 0:
      max_product = array[idx+1] * val
    elif idx == len(array) - 1:
      max_product = array[idx-1] * val if max_product < array[idx-1] * val else max_product
    else:
      max_product = array[idx-1] * val if max_product < array[idx-1] * val else max_product
      max_product = array[idx+1] * val if max_product < array[idx+1] * val else max_product
      
  return max_product
