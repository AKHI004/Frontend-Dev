"use strict";

// user limit or default 5
const arg = process.argv[2];
const limit = (arg && !Number.isNaN(Number(arg)) && Number(arg) > 0) ? Number(arg) : 5;

console.log("Limit =", limit);

/* using let */
console.log("\nPyramid with let");

for (let i = 1; i <= limit; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
        // debugger;  // check j, row here
    }
    console.log(row.trim());
    // debugger; // check i, row after each line
}

/* using var */
console.log("\nPyramid with var");

for (var a = 1; a <= limit; a++) {
    var line = "";
    for (var b = 1; b <= a; b++) {
        line += "* ";
        // debugger; // watch b, line here
    }
    console.log(line.trim());
    // debugger; // see how a,b reuse same vars
}

// optional final breakpoint
// debugger;
