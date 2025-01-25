console.log("Saksham")

let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor = "red"
document.getElementById("box3").style.backgroundColor="green";
document.querySelector(".box").style.backgroundColor="blue"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="yellow"
});
console.log(document.getElementsByTagName("div"))
e=document.getElementsByTagName("div")
console.log(e[4].matches("#box3"))
console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))

console.log(document.querySelector(".container").contains(e[2]))
console.log(document.querySelector(".container").contains(e[0]))
console.log(document.querySelector("body").contains(document.querySelector(".container")))