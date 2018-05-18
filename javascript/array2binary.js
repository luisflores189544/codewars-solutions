//Given an array containing only integers, add all the elements and return the binary equivalent of that sum.

//If the array contains any non-integer element (e.g. an object, a float, a string and so on), return false.

//Note: The sum of an empty array is zero.

function arr2bin(arr){
  function sumValues(total, value) {
    if (typeof(value) === "boolean") {
      return total + "boolean"
    }
    else
    {
      return total + value
    }
  }
  try {
    var total = arr.reduce(sumValues)    
    if (typeof(total) === "number") {
    return parseInt(total, 10).toString(2)
  }
  else
  {
    return false
  }
  }
  catch (err) {
    var zero = 0;
    return zero.toString(2)
  }
  
  
}
