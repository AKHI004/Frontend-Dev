$(document).ready(function () {

    const usedEmails = ["test@example.com", "demo@mail.com"];

    // validate on click
    $("#submitBtn").click(function () {
        let valid = true;

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const pass = $("#password").val().trim();

        // reset borders
        $("input").css("border", "");

        // name check
        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        // email format + unique
        const pattern = /\S+@\S+\.\S+/;
        if (!pattern.test(email) || usedEmails.includes(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }

        // password length
        if (pass.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        // result
        if (valid) {
            $("#status").text("Registration Successful!");
        } else {
            $("#status").text("Please fix the highlighted fields.");
        }
    });

});
