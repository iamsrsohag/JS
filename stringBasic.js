/*
 * String Basic (LWHH JS-1.6) 
 * To Run type : node number.js value1 value2 
 */

let str = "Any string";
let str2 = "Any newString";
console.log(str.charAt(5));
console.log("ASCII CODE OF %s is: %d",str.charAt(5),str.charCodeAt(5));

//Checking existance of given text/string
console.log(str2.match("String"));

//Replacing String without Changing the Original
console.log(str.replace("string","Value"));

let wTrim = "   I need to be trimmed    ";

//Trim doesn't change original String.
console.log(wTrim.trim());
console.log(wTrim);
