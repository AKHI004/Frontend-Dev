$(document).ready(function () {

    // filter on keyup
    $("#searchBox").keyup(function () {
        const text = $(this).val().toLowerCase();
        let count = 0;

        $(".course").each(function () {
            const name = $(this).text().toLowerCase();

            if (name.includes(text)) {
                $(this).show();
                $(this).css("background", "#e3e3e3");
                count++;
            } else {
                $(this).hide();
            }
        });

        $("#matchCount").text("Matched: " + count);
    });

    // clear search
    $("#clearBtn").click(function () {
        $("#searchBox").val("");
        $(".course").show().css("background", "");
        $("#matchCount").text("");
    });

});
