$(document).ready(function () {

    // hide banners
    $("#hideBtn").click(function () {
        $(".banner").hide();
    });

    // show banners
    $("#showBtn").click(function () {
        $(".banner").show();
    });

    // slide effect
    $("#slideBtn").click(function () {
        $(".banner").slideToggle();
    });

    // fade effect
    $("#fadeBtn").click(function () {
        $(".banner").fadeToggle();
    });

    // auto-rotate banners
    let i = 0;
    const banners = $(".banner");

    setInterval(function () {
        banners.eq(i).fadeOut(400);
        i = (i + 1) % banners.length;
        banners.eq(i).fadeIn(400);
    }, 5000);

});
