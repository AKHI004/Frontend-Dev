const { apiData } = require("./data.js"); // Import from data.js (Node environment)

// Arrays to collect results
const validNumbers = [];
const invalidNumbers = [];

console.log("===== Dynamic Data Parser Report =====");

// Loop through every API value
for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    // Type conversions
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`\nIndex ${i}: Original →`, value);
    console.log("  As Number     →", numberValue);
    console.log("  As Boolean    →", booleanValue);
    console.log("  As String     →", stringValue);

    const isInvalidExplicit =
        value === " " ||                    // space-only string
        value === "NaN" ||                  // literal string NaN
        (typeof value === "string" && value.includes("px")); // e.g. "100px"

    if (!Number.isNaN(numberValue) && !isInvalidExplicit) {
        // Valid numeric data
        validNumbers.push(numberValue);
    } else {
        // Invalid numeric data
        invalidNumbers.push(value);
        console.log("  ⚠ Invalid numeric value detected.");
    }
}

console.log("\n==============================");
console.log("Valid Numbers:", validNumbers);
console.log("Invalid Numeric Entries:", invalidNumbers);
console.log("==============================");
