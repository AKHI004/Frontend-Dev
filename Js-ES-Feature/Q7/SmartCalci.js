"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

console.log("=== Smart Calculator ===");

for (let i = 0; i < operations.length; i++) {
    const op = operations[i];

    try {
        let result;

        switch (op) {
            case "add":
                result = num1 + num2;
                break;

            case "subtract":
                result = num1 - num2;
                break;

            case "divide":
                if (num2 === 0) throw new Error("Divide by 0");
                result = num1 / num2;
                break;

            case "power":
                result = Math.pow(num1, num2);
                break;

            case "root":
                if (num1 < 0) throw new Error("Negative root");
                result = Math.sqrt(num1);
                break;

            default:
                throw new Error("InvalidOperationError");
        }

        console.log(`Operation: ${op}\nResult: ${result}\n----------------------`);

    } catch (err) {
        console.log(`Operation: ${op}\nError: ${err.message}\n----------------------`);
    }
}
