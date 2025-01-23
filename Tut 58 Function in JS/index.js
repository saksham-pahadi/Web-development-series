function nice(name) {
    console.log("hey " + name + " you are nice!")
    console.log("hey " + name + " you are good!")
    console.log("hey " + name + " your tshirt is nice!")
    console.log("hey " + name + " your course is good too!\n")
}
function sum(a, b, c=3) {
    // console.log(a + b);
    return(a + b + c);
}
nice("Harry")
nice("Rohan")
result=sum(3,7)
console.log("The some of these number is :",result);
result=sum(3,7,2)
console.log("The some of these number is :",result);

// Arrow function
const func1 = (x)=>{
    console.log("I am a arrow function",x)
}
func1(34);
func1(66);
func1(68);