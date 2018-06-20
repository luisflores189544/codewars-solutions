// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Example
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldWay !

function pigIt(str){
  const strList = str.trim().split(' ');
  let newStr = '';
  let firstWord = '';
  const punctMarks = /[?.,!:;`"]/;
  for (let i = 0; i < strList.length; i++) {
    if (punctMarks.test(strList[i].toString().slice(0, 1)) !== true){
      firstWord = strList[i].toString().slice(0, 1);
      newStr += strList[i].toString().slice(1) + firstWord + 'ay ';
    } else {
      newStr += strList[i].toString();
    }
  }
  return newStr.trim();
}
