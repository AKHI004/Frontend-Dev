// "use strict";
// function showMessage() {
// greeting = "Welcome"; // undeclared
// console.log(greeting);
// }
// showMessage();

"use strict";

// the issue was greeting was never declared
function showMessage() {
    let greeting = "Welcome"; // fixed by declaring it
    console.log(greeting);
}

showMessage();

// breakpoint for debugging
// debugger;
