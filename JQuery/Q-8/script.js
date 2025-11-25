$(document).ready(function () {

    // add new post
    $("#addPost").click(function () {
        $("#postList").append("<li class='post'>New blog post added.</li>");
    });

    // add featured at top
    $("#prependPost").click(function () {
        $("#postList").prepend("<li class='post'>Featured: Important Update</li>");
    });

    // remove last post
    $("#removeLast").click(function () {
        $("#postList .post:last").remove();
    });

    // add tag before or after posts
    $("#addTagBtn").click(function () {
        const tag = $("#tagInput").val();
        if (!tag) return;

        $("#postList .post").each(function () {
            $(this).before("<span>[" + tag + "]</span>");
        });

        $("#tagInput").val("");
    });

    // highlight posts with keyword
    $("#highlightBtn").click(function () {
        const key = $("#keywordInput").val().toLowerCase();
        $(".post").css("background", "");

        $(".post").each(function () {
            const text = $(this).text().toLowerCase();
            if (text.includes(key) && key !== "") {
                $(this).css("background", "#e3e3e3");
            }
        });
    });

});
