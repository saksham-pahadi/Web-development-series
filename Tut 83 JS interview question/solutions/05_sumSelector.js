function sumArray(arr){
    let result=0;
    for (const element of arr) {
        result+=parseInt(element);
        
    }
    return result;
}

const array=[12,24,31,42,51];
console.log(sumArray(array));