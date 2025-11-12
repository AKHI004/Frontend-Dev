
// Step 1: Define input array of marks
let marks = [85, 92, 76, 59, 38]; // Example marks for 5 subjects

// Step 2: Initialize variables
let total = 0;
let failedSubjects = 0;

// Step 3: Loop through marks to calculate total and count failures
for (let i = 0; i < marks.length; i++) {
  total += marks[i];

  // Check for individual subject failure
  if (marks[i] < 40) {
    failedSubjects++;
  }
}

// Step 4: Calculate average and percentage
let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

// Step 5: Determine grade based on percentage
let grade;

if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 75) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 40) {
  grade = "C";
} else {
  grade = "Fail";
}

// Step 6: Determine final result (repeat year condition)
let finalRemark;
if (failedSubjects >= 2) {
  finalRemark = "Repeat Year";
} else if (grade === "Fail") {
  finalRemark = "Fail";
} else {
  finalRemark = "Pass";
}

// Step 7: Display results neatly in console
console.log("===== Marks Analyzer =====");
console.log(`Marks: ${marks.join(", ")}`);
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Grade: ${grade}`);
console.log(`Subjects Failed: ${failedSubjects}`);
console.log("----------------------------------");
console.log(`Final Remark: ${finalRemark}`);
console.log("==================================");
