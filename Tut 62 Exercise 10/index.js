/* create a business name generator by combining list of adjectives and shop name and another words

Adjective:
Crazy
Amazing
Fire

shop name:
Engine
Foods
Garments

Another words:
Bros
Limited
Hub

*/

let obj1={
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let obj2={
    1:"Engine",
    2:"Food",
    3:"Garment"
}
let obj3={
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

console.log(Math.random())
var ran1 = Math.floor(Math.random()*3)+1;
var ran2 = Math.floor(Math.random()*3)+1;
var ran3 = Math.floor(Math.random()*3)+1;

console.log(`${obj1[ran1]} ${obj2[ran2]} ${obj3[ran3]}`)
