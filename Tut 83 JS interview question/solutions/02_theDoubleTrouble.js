

function doubleTrouble(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    
    if (i > 0 && arr[i] === arr[i - 1]) {
       
      result.push(arr[i] );
      continue;
    }
    result.push(arr[i] * 2);
  }

  return result;
}


const input = [2, 2, 3, 4, 4, 5];

console.log(input); 
console.log(doubleTrouble(input)); 
