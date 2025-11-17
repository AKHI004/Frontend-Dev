"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const errors = [];

console.log("=== JSON Audit ===");

for (let i = 0; i < rawData.length; i++) {
    const lineNo = i + 1;
    const text = rawData[i];

    try {
        // try parse
        const obj = JSON.parse(text);

        // missing keys
        if (obj.user === undefined || obj.age === undefined) {
            throw new Error("Missing key(s): " + [
                obj.user === undefined ? "user" : null,
                obj.age === undefined ? "age" : null
            ].filter(Boolean).join(", "));
        }

        // convert age
        const ageNum = Number(obj.age);
        if (Number.isNaN(ageNum)) {
            throw new Error("Invalid age value");
        }
        obj.age = ageNum;

        // push valid
        clean.push(obj);

    } catch (err) {
        errors.push({ line: lineNo, raw: text, message: err.message });
        console.log(`Error (line ${lineNo}): ${err.message}`);
        // debugger; // uncomment to step into error handling
    }
}

// debug point to inspect clean array
// debugger;

console.log("\nClean entries:");
console.log(clean);

const adults = clean.filter(u => u.age >= 18);
const minors = clean.filter(u => u.age < 18);

console.log("\nAdults (18+):");
console.log(adults);

console.log("\nUnder-18 (filtered out):");
console.log(minors);

console.log("\nErrors summary:");
console.log(errors);
