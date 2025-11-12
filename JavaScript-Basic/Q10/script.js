// Step 1: Generate a random coupon number between 1 and 100
let couponNumber = Math.floor(Math.random() * 100) + 1;

// Step 2: Determine reward based on number range
let rewardMessage = "";

if (couponNumber <= 30) {
  rewardMessage = "🎉 You won a 10% discount!";
} else if (couponNumber <= 60) {
  rewardMessage = "🎊 You won a 20% discount!";
} else if (couponNumber <= 90) {
  rewardMessage = "🏅 You won a 30% discount!";
} else {
  rewardMessage = "💥 You won a 50% Mega Offer!";
}

// Step 3: Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Step 4: Add bonus message if the number is prime
let bonusMessage = "";
if (isPrime(couponNumber)) {
  bonusMessage = "🌟 Prime number bonus applied!";
}

// Step 5: Display all details neatly in console
console.log("===== Random Coupon Generator =====");
console.log(`Generated Coupon Number: ${couponNumber}`);
console.log("-----------------------------------");
console.log(`${rewardMessage}`);
if (bonusMessage) console.log(bonusMessage);
console.log("===================================");
