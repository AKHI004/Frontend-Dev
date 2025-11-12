// Step 1: Define delays for multiple books (in days)
let lateReturns = [3, 8, 12, 5, 15]; // Example: each number = days late for one book

// Step 2: Initialize total fine and loop counters
let totalFine = 0;

// Step 3: Loop through each book delay and calculate individual fine
console.log("===== Library Fine Summary =====");
for (let i = 0; i < lateReturns.length; i++) {
  let daysLate = lateReturns[i];
  let finePerBook = 0;

  // Determine fine per book based on delay range
  if (daysLate >= 1 && daysLate <= 5) {
    finePerBook = daysLate * 10;
  } else if (daysLate >= 6 && daysLate <= 10) {
    finePerBook = daysLate * 20;
  } else if (daysLate > 10) {
    finePerBook = daysLate * 50;
  } else {
    finePerBook = 0; // No fine if not late
  }

  totalFine += finePerBook;
  console.log(`Book ${i + 1}: ${daysLate} days late → Fine: ₹${finePerBook}`);
}

// Step 4: Apply ₹200 penalty if more than 3 delayed books
let penalty = 0;
if (lateReturns.length > 3) {
  penalty = 200;
  totalFine += penalty;
}

// Step 5: Display final results
console.log("--------------------------------");
console.log(`Number of Late Books: ${lateReturns.length}`);
console.log(`Penalty Applied: ₹${penalty}`);
console.log(`Total Fine: ₹${totalFine}`);
console.log("================================");
