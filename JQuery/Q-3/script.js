$(document).ready(function () {

    // toggle answer on question click
    $(".question").click(function () {
        $(this).next(".answer").toggle();
    });

    // hover color change
    $(".question").hover(
        function () { $(this).css("color", "blue"); },
        function () { $(this).css("color", ""); }
    );

    // double-click → collapse all answers
    $(".question").dblclick(function () {
        $(".answer").hide();
    });

    // highlight parent on input focus
    $("input").focus(function () {
        $(this).closest(".item").css("background", "#e3e3e3");
    });

    // remove highlight on blur
    $("input").blur(function () {
        $(this).closest(".item").css("background", "");
    });

});
