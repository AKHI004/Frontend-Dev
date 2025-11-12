// Step 1: Define input values
let showTime = "evening";   // "morning" or "evening"
let numTickets = 5;         // Number of tickets booked
let userType = "senior";    // "student", "senior", or "regular"
let age = 65;               // User age (for senior verification)

// Step 2: Set ticket price based on show time
let ticketPrice = 0;
if (showTime === "morning") {
  ticketPrice = 120;
} else if (showTime === "evening") {
  ticketPrice = 180;
} else {
  console.log("Invalid show time entered!");
}

// Step 3: Calculate base price (before discounts or fees)
let basePrice = ticketPrice * numTickets;

// Step 4: Determine discount rate
let discountRate = 0;

if (userType === "student") {
  discountRate = 10;  // 10% discount for students
} else if (userType === "senior" || age > 60) {
  discountRate = 20;  // 20% discount for seniors
}

// Step 5: Apply discount to calculate discounted total
let discountedTotal = basePrice - (basePrice * discountRate / 100);

// Step 6: Apply service fee if user books more than 3 tickets
let serviceFee = 0;
if (numTickets > 3) {
  serviceFee = 50;
}

// Step 7: Calculate final amount (after discount + fee)
let finalAmount = discountedTotal + serviceFee;

// Step 8: Display results neatly in console
console.log("===== Cinema Ticketing System =====");
console.log(`Show Time: ${showTime}`);
console.log(`Tickets Booked: ${numTickets}`);
console.log(`User Type: ${userType}`);
console.log(`Base Price: ₹${basePrice}`);
console.log(`Discount Applied: ${discountRate}%`);
console.log(`Discounted Total: ₹${discountedTotal.toFixed(2)}`);
console.log(`Service Fee: ₹${serviceFee}`);
console.log("-----------------------------------");
console.log(`Final Amount Payable: ₹${finalAmount.toFixed(2)}`);
console.log("===================================");
