// Exercise for calculate the factorial using reduse and loops
// solution 1
let num=6;

let result=1;
for(i=1;i<=num;i++){
    result= result*i;
}




console.log(result)





// solution 2
let a=6;
function factorial(number){
    let arr=Array.from(Array(number+1).keys())
    let c=arr.slice(1,).reduce((a,b)=>{
        return a*b;})
        // this can be written as
    // let c=arr.slice(1,).reduce((a,b)=> a*b)

    return c
}
console.log(factorial(a))

