// Base Class
class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Adding method to prototype of MovieTicket
MovieTicket.prototype.printTicket = function () {
    return `Movie: ${this.movieName}, Seat: ${this.seatNo}, Price: ₹${this.price}`;
};


// Child Class extending MovieTicket
class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}


// ----------- Testing / Demonstration -----------

const t1 = new OnlineTicket("Interstellar", "A12", 300, 50);
const t2 = new OnlineTicket("Inception", "B07", 250, 40);

console.log("Ticket 1 Details:");
console.log(t1.printTicket());   // calling parent prototype method
console.log("Total Amount:", t1.getTotalAmount());

console.log("\nTicket 2 Details:");
console.log(t2.printTicket());   // prototype chain works here too
console.log("Total Amount:", t2.getTotalAmount());
