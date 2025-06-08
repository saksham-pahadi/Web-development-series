function calculateTotal(cart) {
    if (!Array.isArray(cart)) {
        throw new Error("Invalid input: cart must be an array");
    }

    return cart.reduce((total, item) => {
        if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
            throw new Error("Invalid item in cart: each item must have a numeric price and quantity");
        }
        return total + (item.price * item.quantity);
    }, 0);
}
// Example usage:
const cart = [
    { price: 10.99, quantity: 2 },
    { price: 5.49, quantity: 1 },
    { price: 3.99, quantity: 4 }
];
const total = calculateTotal(cart);
console.log(`Total cart value: $${total.toFixed(2)}`); // Output: Total cart value: $47.94
