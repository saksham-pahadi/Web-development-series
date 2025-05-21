// let arr = [1,2,4,5,7]
// // console.log(arr,typeof arr);
// // console.log(arr.length)
// // arr[0]=6;
// // console.log(arr[0])
// // console.log(arr[2])
// // console.log(arr[4])
// console.log(arr.toString())
// console.log(arr.join(" and "))
// console.log(arr.pop())
// console.log(arr.push(100))
// console.log(arr)
// console.log(arr.push("100"))
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)
// console.log(arr.unshift("jack"))
// console.log(arr)
// console.log(delete arr[6])
// console.log(arr[6])
// let a2=[40, 60, 50,70,90,80]
// a3=arr.concat(a2)
// console.log(a3)
// console.log(a2.sort())
// console.log(a2.splice(1,3,55,66,77))
// console.log(a2)
// console.log(a2.slice(1,4))
// console.log(a2)

let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
colors[1] = "yellow";

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

for (let color of colors) {
  console.log(color);
}

colors.forEach(color => console.log(color));

