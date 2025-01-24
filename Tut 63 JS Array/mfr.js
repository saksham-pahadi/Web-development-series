let arrr = [1, 13, 5, 7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
    
// }
let newArr = arrr.map((e,index,array)=>{
return e**2
}
)
console.log(newArr);

const greaterThanseven= (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(arrr.filter((e)=>{
    if(e>7){
        return true
    }
    return false
}))

let arr2 = [1,2,3,4,5,6]

const red = (a,b)=>{
    return a+b
}

console.log(arr2.reduce(red))
let arr3=Array.from("Harry")
console.log(arr3)
