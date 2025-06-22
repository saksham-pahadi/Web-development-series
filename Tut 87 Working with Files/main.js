const { error } = require("console");
const fs = require("fs");
// const fs = require("fs/promises");

console.log("starting");
// fs.writeFileSync("Saksham.txt","Saksham is a good boy.");
fs.writeFile("saksham2.txt","Saksham is a good boy 2.",()=>{

    console.log("done");
    fs.readFile("saksham2.txt",(error,data)=>
    {
        console.log(error,data.toString());
    })
})

fs.appendFile("saksham.txt"," Saksham Robo",(e,d)=>{
    console.log(d);
})
console.log("ending");

