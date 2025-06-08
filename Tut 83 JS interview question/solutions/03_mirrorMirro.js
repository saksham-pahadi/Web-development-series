function reverseString(str) {
 
  let array = str.split('');//convert string into array
    array.reverse();//reverse the array

  return array.join('');//convert array into string.
}

let inputString = "!dlroW ,olleH";
console.log(inputString); // Original string
console.log(reverseString(inputString)); // Reversed string