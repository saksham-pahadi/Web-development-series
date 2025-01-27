let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    // alert("I was clicked yaaah!");
    document.querySelector(".box").innerHTML="<b>Yayy you were clicked</b> Enjoy your click!"
})
button.addEventListener("contextmenu",(e)=>{
    alert("Don't hack me by right click.");
    console.log(e)
})
document.addEventListener("keydown", (e)=>{
    console.log(e,e.key,e.node);
})
