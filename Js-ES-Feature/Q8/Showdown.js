// Q8 – Strict Mode Showdown (clean for VS Code)

console.log("=== NON STRICT MODE ===");

/* eslint-disable */
(function () {
    function demo1(a, a) {      // duplicate params allowed (non strict)
        total = 10;             // becomes global
        delete total;           // delete fails silently
        console.log("non strict done");
    }
    demo1(5, 10);
})();
 /* eslint-enable */


console.log("\n=== STRICT MODE TEST ===");

try {
    eval(`
        "use strict";
        function demo2(a, a) {    // error: duplicate params
            total = 10;          // error: not declared
            delete total;        // error: can't delete variable
        }
        demo2(5, 10);
    `);
} catch (err) {
    console.log("strict error:", err.message);
}


console.log("\n=== FIXED ES6 VERSION ===");

"use strict";

function demo3(a, b) {
    let total = 10;
    console.log("total =", total);
}

demo3(5, 10);

let obj = { x: 10 };
delete obj.x;
console.log("after delete:", obj);
