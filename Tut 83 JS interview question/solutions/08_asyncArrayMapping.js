async function arrayMapping(arr) {
  return await Promise.all(arr.map(async (item) => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(item * 2);
      }, 500);
    });
  }));
    
}

let arr = [1, 2, 3, 4, 5];
arrayMapping(arr).then(result => {
  console.log(result); 
}).catch(error => {
  console.error('Error:', error);
});