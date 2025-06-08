async function placeOrder(object) {
    console.log(`Placing order for ${object}...`);
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve(`Order for ${object} placed successfully!`);
    }, Math.floor(Math.random() * 10000));
    })
}

// let objects = ['Laptop', 'Smartphone', 'Headphones', 'Smartwatch', 'Tablet'];
let objects = 'Laptop';
let orders = placeOrder(objects);
orders.then(results => {
    console.log(results);
}).catch(error => {
    console.error('Error:', error);
});