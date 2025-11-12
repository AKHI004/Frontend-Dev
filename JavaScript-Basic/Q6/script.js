// Step 1: Define input values
let level = 15;                // Player's current level
let performanceScore = 70;     // Performance score achieved
let missionsCompleted = true;  // Whether all missions were completed

// Step 2: Calculate base coin reward using formula
let coins = (level * 50) + (performanceScore * 10);

// Step 3: Double the coins if player completed all missions
if (missionsCompleted === true) {
  coins *= 2;
}

// Step 4: Determine rank based on total coins
let rank;
if (coins > 1000) {
  rank = "Elite";
} else {
  rank = "Regular";
}

// Step 5: Display results in the console
console.log("===== Game Reward System =====");
console.log(`Player Level: ${level}`);
console.log(`Performance Score: ${performanceScore}`);
console.log(`Missions Completed: ${missionsCompleted ? "Yes" : "No"}`);
console.log("---------------------------------");
console.log(`Total Coins Earned: ${coins}`);
console.log(`Player Rank: ${rank}`);
console.log("=================================");
