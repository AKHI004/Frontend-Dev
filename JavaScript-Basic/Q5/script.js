/*
-----------------------------------------------------------
The Weather Alert System
Author: Akshat Jain
Description:
  This program evaluates weather conditions to determine whether
  an outdoor event should proceed or be canceled due to unsafe
  weather. It also provides comfort suggestions based on temperature.

Rules:
  • Cancel: Heat Alert → temperature > 35°C AND humidity > 70%
  • Cancel: Cold/Windy Alert → temperature < 10°C OR windSpeed > 40 km/h
  • Otherwise → "Event Approved"

Additional Comfort Tips:
  • Below 20°C → "Wear Jacket"
  • 20–30°C → "Comfortable"
  • Above 30°C → "Stay Hydrated"
-----------------------------------------------------------
*/

// Step 1: Define weather input values
let temperature = 37;  // in °C
let humidity = 75;     // in percentage (%)
let windSpeed = 15;    // in km/h

// Step 2: Initialize variables for alert messages
let eventStatus = "";
let comfortMessage = "";

// Step 3: Check safety conditions for outdoor events
if (temperature > 35 && humidity > 70) {
  eventStatus = "Cancel: Heat Alert.";
} else if (temperature < 10 || windSpeed > 40) {
  eventStatus = "Cancel: Cold/Windy Alert.";
} else {
  eventStatus = "Event Approved.";
}

// Step 4: Provide clothing/comfort recommendation based on temperature
if (temperature < 20) {
  comfortMessage = "Wear Jacket";
} else if (temperature <= 30) {
  comfortMessage = "Comfortable";
} else {
  comfortMessage = "Stay Hydrated";
}

// Step 5: Display results in console
console.log("===== Weather Alert System =====");
console.log(`Temperature: ${temperature}°C`);
console.log(`Humidity: ${humidity}%`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log("--------------------------------");
console.log(`Event Status: ${eventStatus}`);
console.log(`Suggestion: ${comfortMessage}`);
console.log("================================");
