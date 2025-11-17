// Mixed API data (hoisting note: const declarations are NOT hoisted like var)
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

// Exporting for use in other files (if running in Node)
// If in browser, ignore the export line.
if (typeof module !== "undefined") {
    module.exports = { apiData };
}
