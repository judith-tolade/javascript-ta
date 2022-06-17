// complete the function
function palindrome(str) {
  // code goes here
  let reg = /[\W_]/g; //Using regular expression to remove unwanted characters from it
  let lowStr = str.toLowerCase().replace(reg, ""); //Convert the string to lowercase and a new string retured(replaced) without spaces and commas(as specified in the regExp).
  let reverseStr = lowStr.split("").reverse().join(""); //Seperate(split) the string into sub-strings, reverse the split string and join them back together
  return reverseStr === lowStr; //Checking if the reversed string is same as the other previous string converted to lowercase. If it matches then its a palindrome but if it doesn't match then its not a palindrome.
}

function solution (arg) {
  return palindrome(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };


