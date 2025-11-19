// Menu with item → price
const menu = {
    pizza: 250,
    burger: 120,
    pasta: 180,
    momos: 100,
    fries: 80
};

function calculateBill(orderItems) {
    try {
        // Convert item names to prices
        const priceList = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Item not found: ${item}`);
            }
            return menu[item];
        });

        // Calculate total using reduce
        const total = priceList.reduce((sum, price) => sum + price, 0);

        return `Total Bill: ₹${total}`;

    } catch (err) {
        return `Error: ${err.message}`;
    }
}

// Testing the function
console.log(calculateBill(["pizza", "fries"]));          // Valid
console.log(calculateBill(["burger", "pasta", "momos"])); // Valid
console.log(calculateBill(["pizza", "icecream"]));        // Invalid
