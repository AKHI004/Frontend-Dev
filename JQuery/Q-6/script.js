$(document).ready(function () {

    // subscribe
    $(document).on("click", ".subscribe", function () {
        showMsg("Subscribed successfully");
    });

    // unsubscribe
    $(document).on("click", ".unsubscribe", function () {
        showMsg("Unsubscribed successfully");
    });

    // add new topic
    $("#addTopicBtn").click(function () {
        const name = $("#newTopicInput").val();
        if (!name) return;

        $("#topics").append(`
            <div class="topic">
                <span class="name">${name}</span>
                <button class="subscribe">Subscribe</button>
                <button class="unsubscribe">Unsubscribe</button>
            </div>
        `);

        $("#newTopicInput").val("");
        showMsg("New topic added");
    });

    // remove a topic (turns off events)
    $("#removeBtn").click(function () {
        const target = $(".topic").first();
        target.find(".subscribe").off();
        target.find(".unsubscribe").off();
        target.remove();
        showMsg("Topic removed");
    });

    // show message
    function showMsg(text) {
        $("#message").html(`<p>${text}</p>`);
    }

});
