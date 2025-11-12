// Step 1: Define input variables
let orderAmount = 400;     // Example: total cart value in ₹
let isPremium = false;     // Example: true if user is premium
let isRemote = true;       // Example: true if address is remote

// Step 2: Initialize variables for fee and delivery time
let deliveryFee = 0;
let deliveryDays = 3;

// Step 3: Determine delivery fee based on membership and order amount
if (!isPremium) { 
  // Non-premium users
  if (orderAmount < 500) {
    deliveryFee = 50; // Add ₹50 fee for small orders
  }
} else {
  // Premium members get free delivery
  deliveryFee = 0;
}

// Step 4: Adjust delivery time for remote locations
if (isRemote) {
  deliveryDays += 2; // Add 2 extra days for remote areas
}

// Step 5: Calculate total cost including any delivery fee
let totalCost = orderAmount + deliveryFee;

// Step 6: Display results in the console
console.log("===== E-Commerce Delivery Estimator =====");
console.log(`Order Amount: ₹${orderAmount}`);
console.log(`Premium Member: ${isPremium ? "Yes" : "No"}`);
console.log(`Remote Area: ${isRemote ? "Yes" : "No"}`);
console.log("------------------------------------------");
console.log(`Delivery Fee: ₹${deliveryFee}`);
console.log(`Total Cost: ₹${totalCost}`);
console.log(`Estimated Delivery Time: ${deliveryDays} days`);
console.log("==========================================");
