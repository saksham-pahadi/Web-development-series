import fs from "fs/promises"

let a = await fs.readFile("saksham.txt")
console.log(a.toString());

let b = await fs.appendFile("saksham.txt","\nThis is amazing promise.")
// console.log(b.toString());