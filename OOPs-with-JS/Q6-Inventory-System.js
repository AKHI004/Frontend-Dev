// Inventory Data
const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 60000, stock: 5 },
    { id: 2, name: "Mouse", category: "Electronics", price: 800, stock: 50 },
    { id: 3, name: "Shoes", category: "Fashion", price: 2500, stock: 3 },
    { id: 4, name: "T-Shirt", category: "Fashion", price: 800, stock: 20 },
    { id: 5, name: "Rice Bag", category: "Grocery", price: 1200, stock: 2 },
    { id: 6, name: "Milk", category: "Grocery", price: 50, stock: 100 }
];


// 1. Get low stock products (filter)
function getLowStockProducts(products, threshold = 5) {
    return products.filter(p => p.stock < threshold);
}


// 2. Sort products by price (sort)
function sortProductsByPrice(products, order = "asc") {
    return products.slice().sort((a, b) =>
        order === "asc" ? a.price - b.price : b.price - a.price
    );
}


// 3. Calculate total inventory value (reduce)
function calculateTotalInventoryValue(products) {
    return products.reduce((total, p) => {
        return total + (p.price * p.stock);
    }, 0);
}


// 4. Group by category (reduce + object grouping)
function groupByCategory(products) {
    return products.reduce((grouped, p) => {
        if (!grouped[p.category]) grouped[p.category] = [];
        grouped[p.category].push(p);
        return grouped;
    }, {});
}


// Testing all functions
console.log("Q6 Output:");
console.log("Low Stock Products:", getLowStockProducts(products));
console.log("Sorted by Price (ASC):", sortProductsByPrice(products, "asc"));
console.log("Sorted by Price (DESC):", sortProductsByPrice(products, "desc"));
console.log("Total Inventory Value: ₹" + calculateTotalInventoryValue(products));
console.log("Grouped by Category:", groupByCategory(products));
