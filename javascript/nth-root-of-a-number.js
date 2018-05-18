//Given two numbers x and n, calculate the (positive) nth root of x.

//This means that being r = result, r^n = x; Examples

//Inputs:
//Expect inputs greater than 1 × 10^19
//Your function will recieve only positive integers

function root(x, n) {
  return Math.pow(x, 1/n);
}
