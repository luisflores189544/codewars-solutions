//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

//The output should be two capital letters with a dot seperating them.

//It should look like this:

//Sam Harris => S.H

//Patrick Feeney => P.F

function abbrevName(name){

  var name_list =  name.split(" ");
  return name_list[0][0].toUpperCase() + "." + name_list[1][0].toUpperCase();

}
