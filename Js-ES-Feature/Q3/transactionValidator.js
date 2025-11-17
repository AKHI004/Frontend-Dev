"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

console.log("=== Transaction Validation Report ===");

for (let i = 0; i < transactions.length; i++) {
    try {
        const t = transactions[i];

        // check null
        if (t === null) {
            throw new Error("Null entry");
        }

        // check missing fields
        if (t.id === undefined || t.amount === undefined) {
            throw new Error("Missing id or amount");
        }

        // negative amount
        if (t.amount < 0) {
            throw new Error("Negative amount");
        }

        // if all good
        valid.push(t);

    } catch (err) {
        // keep track of bad ones
        invalid.push({ index: i, reason: err.message });
    }
}

console.log("\nValid Transactions:", valid);
console.log("Invalid Transactions:", invalid);

console.log(`\nSuccess Count: ${valid.length}`);
console.log(`Failed Count: ${invalid.length}`);

// breakpoint example (in VS Code you set it on this line)
// debugger;
