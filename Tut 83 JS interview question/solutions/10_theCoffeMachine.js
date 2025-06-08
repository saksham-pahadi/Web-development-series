async function brewCoffe(coffe) {
    return await new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Your ${coffe} is ready!`);
        }, Math.floor(Math.random() * 10000));
    });
   
}

let coffes = brewCoffe('Espresso');
coffes.then(result => {
    console.log(result);
}).catch(error => {
    console.error('Error:', error);
});