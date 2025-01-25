
let c = document.getElementsByClassName("box")

for (i = 0; i < 5; i++) {
    let ran1 = Math.floor(Math.random() * 250)
    let ran2 = Math.floor(Math.random() * 250)
    let ran3 = Math.floor(Math.random() * 250)
    c[i].style.backgroundColor = `rgb(${ran1},${ran2},${ran3})`;
}
// for body background optional
let ran1 = Math.floor(Math.random() * 250)
let ran2 = Math.floor(Math.random() * 250)
let ran3 = Math.floor(Math.random() * 250)
document.querySelector("body").style.backgroundColor = `rgb(${ran1},${ran2},${ran3})`;
