console.log('This is promices');

let prom1= new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting you. 1")
    }
    else{

        setTimeout(()=>{
            console.log('Yes I am done 1');
            resolve("Supported 1")
            
        },1000);
    }
})

let prom2= new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting you. 2")
    }
    else{

        setTimeout(()=>{
            console.log('Yes I am done 2');
            resolve("Supported 2")
            
        },1000);
    }
})
let prom3= new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting you. 3")
    }
    else{

        setTimeout(()=>{
            console.log('Yes I am done 3');
            resolve("Supported 3")
            
        },1000);
    }
})
let prom4= new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting you. 4")
    }
    else{

        setTimeout(()=>{
            console.log('Yes I am done 4');
            resolve("Supported 4")
            
        },1000);
    }
})
let prom5= new Promise((resolve, reject)=>{
    let a=Math.random();
    if(a<0.5){
        reject("No random number was supporting you. 5")
    }
    else{

        setTimeout(()=>{
            console.log('Yes I am done 5');
            resolve("Supported 5")
            
        },1000);
    }
})


// console.log("ONLY FIRST PROMISE")
// prom1.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })


// console.log("ALLSETTELED PROMISE")
let p3=Promise.allSettled([prom1,prom2,prom3,prom4,prom5])
p3.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})





// console.log("RACE PROMISE")
// let p4=Promise.race([prom1,prom2,prom3,prom4,prom5])
// p4.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })



// console.log("ANY PROMISE")
// let p5=Promise.any([prom1,prom2,prom3,prom4,prom5])
// p5.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })




// console.log("RESOLVED PROMISE")
// let p6=Promise.resolve([prom1,prom2,prom3,prom4,prom5])
// p6.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })




// console.log("REJECTED PROMISE");
// let p7=Promise.reject([prom1,prom2,prom3,prom4,prom5])
// p7.then((a)=>{
//     console.log(a);
    
// }).catch((err)=>{
//     console.log(err);
    
// })