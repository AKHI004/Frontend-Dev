// Step 1: Define input values
let baseCost = 2200;       // Base cost of the food in ₹
let diningIn = true;        // true → dining in, false → takeaway

// Step 2: Calculate GST (5%)
let gst = (5 / 100) * baseCost;

// Step 3: Calculate Service Tax (10% if dining in)
let serviceTax = diningIn ? (10 / 100) * baseCost : 0;

// Step 4: Subtotal after taxes
let totalAfterTax = baseCost + gst + serviceTax;

// Step 5: Add Tip if applicable (8% if totalAfterTax > ₹2000)
let tip = 0;
if (totalAfterTax > 2000) {
  tip = (8 / 100) * totalAfterTax;
}

// Step 6: Final Total Bill
let finalTotal = totalAfterTax + tip;

// Step 7: Display full summary in console
console.log("===== Restaurant Billing Summary =====");
console.log(`Dining Mode: ${diningIn ? "Dine-In" : "Takeaway"}`);
console.log(`Base Amount: ₹${baseCost.toFixed(2)}`);
console.log("--------------------------------------");
console.log(`GST (5%): ₹${gst.toFixed(2)}`);
console.log(`Service Tax (10%): ₹${serviceTax.toFixed(2)}`);
console.log("--------------------------------------");
console.log(`Subtotal (After Tax): ₹${totalAfterTax.toFixed(2)}`);
console.log(`Recommended Tip (8%): ₹${tip.toFixed(2)}`);
console.log("--------------------------------------");
console.log(`Final Total Bill: ₹${finalTotal.toFixed(2)}`);
console.log("=======================================");
