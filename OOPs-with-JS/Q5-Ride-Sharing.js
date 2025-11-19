// Base User class
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

// Driver inherits from User
class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

// Trip class
class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    // Fare calculation based on distance
    calculateFare() {
        if (this.distance === undefined || this.distance === null) {
            throw new Error("Distance not provided");
        }

        if (this.distance < 0) {
            throw new Error("Distance cannot be negative");
        }

        const ratePerKm = 12;   // Example rate
        return this.distance * ratePerKm;
    }
}

// Scenario execution
try {
    const rider = new User("Akhi", 4.7);
    const driver = new Driver("Ravi", 4.9, "Honda City");

    const trip = new Trip("Pune", "Mumbai", 150);

    const fare = trip.calculateFare();
    console.log(`Trip from ${trip.fromLocation} to ${trip.toLocation}`);
    console.log(`Driver: ${driver.name}, Vehicle: ${driver.vehicle}`);
    console.log(`Distance: ${trip.distance} km`);
    console.log(`Total Fare: ₹${fare}`);

} catch (error) {
    console.log("Error:", error.message);
}


// Testing Error Case
try {
    const badTrip = new Trip("Delhi", "Noida", -20);
    console.log(badTrip.calculateFare());
} catch (error) {
    console.log("Error:", error.message);
}
