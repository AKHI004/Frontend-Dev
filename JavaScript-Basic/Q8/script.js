// Step 1: Define input values
let baseSalary = 120000;  // Employee base salary in ₹
let rating = 5;           // Performance rating (1–5)
let experience = 7;       // Years of experience

// Step 2: Determine base bonus percentage based on rating
let bonusPercent = 0;

if (rating === 5) {
  bonusPercent = 20;
} else if (rating === 4) {
  bonusPercent = 15;
} else if (rating === 3) {
  bonusPercent = 10;
} else {
  bonusPercent = 0;
}

// Step 3: Add extra 5% if experience > 5 years
if (experience > 5) {
  bonusPercent += 5;
}

// Step 4: Calculate initial bonus amount
let calculatedBonus = (bonusPercent / 100) * baseSalary;

// Step 5: Apply bonus cap if salary > ₹1,00,000 and bonus > ₹25,000
let finalBonus = calculatedBonus;
if (baseSalary > 100000 && calculatedBonus > 25000) {
  finalBonus = 25000;
}

// Step 6: Compute total salary after bonus
let totalSalary = baseSalary + finalBonus;

// Step 7: Display all details neatly in console
console.log("===== Employee Bonus Distribution =====");
console.log(`Base Salary: ₹${baseSalary}`);
console.log(`Performance Rating: ${rating}`);
console.log(`Experience: ${experience} years`);
console.log("---------------------------------------");
console.log(`Calculated Bonus: ₹${calculatedBonus.toFixed(2)}`);
console.log(`Final Bonus (After Cap): ₹${finalBonus.toFixed(2)}`);
console.log(`Total Salary After Bonus: ₹${totalSalary.toFixed(2)}`);
console.log("=======================================");
