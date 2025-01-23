console.log("I am a tutorial on loops")

let a = 1;
console.log(a)
// for loop
// for(let i = 0;i<100;i++){
//     console.log(a + i);
// }

let obj = {
    name:"saksham",
    role:"Programmer",
    company:"Thepixelprogrammers"
}

// for-in loop
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key,element)
    }
}

// for-of loop
for (const c of "Saksham") {
    console.log(c)
    
}
let i = 0;
// while loop
while(i<6){
    console.log(i);
    i++;
}

// do-while loop
let j = 6;
do {
    console.log(j);
    j++;
} while (j<11);