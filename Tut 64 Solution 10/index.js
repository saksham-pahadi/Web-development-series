let rand = Math.random()
let first,second,third;
// for first word
if(rand<0.33){
    first="Crazy"
}
else if(rand<0.66 && rand>=0.33){
    first="Amazing"
    
}
else{
    first="Fire"
}


// for second word
rand = Math.random()
if(rand<0.33){
    second="Engine"
}
else if(rand<0.66 && rand>=0.33){
    second="Food"
    
}
else{
    second="Garments"
}


// for third word
rand = Math.random()
if(rand<0.33){
    third="Bros"
}
else if(rand<0.66 && rand>=0.33){
    third="Limited"

}
else{
    third="Hub"

}

console.log(`${first} ${second} ${third}`)