"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Employee Bonus Report ===");

for (let i = 0; i < employees.length; i++) {
    try {
        const e = employees[i];

        // basic check
        if (!e.name || !e.salary || !e.years) {
            throw new Error("Data missing");
        }

        // convert to numbers
        const sal = Number(e.salary);
        const yrs = Number(e.years);

        // check if conversion worked
        if (Number.isNaN(sal) || Number.isNaN(yrs)) {
            throw new Error("Invalid number");
        }

        // bonus calc
        let bonus;
        if (yrs > 3) {
            bonus = sal * 0.1;
        } else {
            bonus = sal * 0.05;
        }

        // final output
        console.log(
`Name: ${e.name}
Salary: ${sal}
Years: ${yrs}
Bonus: ${bonus}
------------------`
        );

    } catch (err) {
        // any error goes here
        console.log("Error:", err.message);
    }
}
