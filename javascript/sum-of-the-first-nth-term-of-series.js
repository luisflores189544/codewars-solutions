//Task:
//Your task is to write a function which returns the sum of following series upto nth term(parameter).

//Rules:
//You need to round the answer to 2 decimal places and return it as String.

//If the given value is 0 then it should return 0.00

//You will only be given Natural Numbers as arguments.

function SeriesSum(n) {
  var series = 0;
  var i;
  var num = 0;
  for (i=0; i < n; i++) {
    if (i == 0) {
      num += 1;
    } else {
      num += 3;  
    }
    series += 1/num;   
  };
  return series.toFixed(2);
}
