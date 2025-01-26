// select only first element with this class
let container=document.querySelector(".container")
console.log(container.innerHTML)
console.log(container.outerHTML)
console.log(container.innerText)
console.log(container.tagName)
console.log(container.nodeName)
console.log(container.textContent)
console.log(container.hidden)
console.log(container.dataset)
console.log(container.classList)
console.log(container.className)
// container.hidden="True"
let box=document.querySelector(".box")
console.log(box.innerHTML)
console.log(box.hasAttribute("style"))
console.log(box.getAttribute("style"))
console.log(box.attributes)
box.setAttribute("style","displa:inline");
box.innerHTML="I am saksham"
box.removeAttribute("style","displa:inline");
// insern an element
let div = document.createElement("div");
div.innerHTML="I have been inserted.<b>by Saksham</b>"
div.setAttribute("class","created");
container.before(div)
container.after(div)
container.append(div)
container.insertAdjacentHTML("afterend","<b>I am under the water</b>")
box.remove()
container.classList.add("saksham")
container.classList.remove("red")
container.classList.toggle("red")
