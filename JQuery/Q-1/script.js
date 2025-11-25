$(document).ready(function () {

    // set greeting based on current time
    function timeBasedGreeting() {
        const hour = new Date().getHours();
        let greeting = hour < 12 
            ? "Good Morning!" 
            : hour < 18 
            ? "Good Afternoon!" 
            : "Good Evening!";
        $("#greetingText").text(greeting);
    }

    timeBasedGreeting();

    // replace greeting with a random quote
    $("#changeGreetingBtn").click(function () {
        const quotes = [
            "Believe in yourself.",
            "Today is a fresh start.",
            "You’ve got this.",
            "Stay positive.",
            "Keep moving forward."
        ];
        $("#greetingText").text(quotes[Math.floor(Math.random() * quotes.length)]);
    });

    // show/hide welcome message
    $("#toggleMsgBtn").click(function () {
        $("#welcomeMsg").toggle();
    });

    // alert on greeting click
    $("#greetingText").click(function () {
        alert("You clicked the greeting!");
    });
});
