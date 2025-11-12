// Step 1: Define input values
let accountType = "fixed";   // "savings" or "fixed"
let amount = 120000;         // Deposit amount in ₹
let years = 5;               // Number of years

// Step 2: Initialize interest rate variable
let rate = 0;

// Step 3: Determine base interest rate based on account type
if (accountType === "savings") {
  rate = 4; // 4% for savings
} else if (accountType === "fixed") {
  rate = 6.5; // 6.5% for fixed deposit
} else {
  console.log("Invalid account type entered.");
}

// Step 4: Add 1% bonus if deposit exceeds ₹1,00,000
if (amount > 100000) {
  rate += 1;
}

// Step 5: Calculate total balance using compound interest formula
let total = amount * Math.pow((1 + rate / 100), years);

// Step 6: Round to two decimal places
total = total.toFixed(2);

// Step 7: Display result in console
console.log("Banking Interest Calculator:-");
console.log(`Account Type: ${accountType}`);
console.log(`Principal Amount: ₹${amount}`);
console.log(`Interest Rate: ${rate}%`);
console.log(`Time Period: ${years} years`);
console.log("---------------------------------------");
console.log(`Final Balance: ₹${total}`);
console.log("=======================================");

