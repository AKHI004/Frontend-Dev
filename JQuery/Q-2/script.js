$(document).ready(function () {

    // highlight on click
    $(".product").click(function () {
        $(".product").css("background", ""); 
        $(this).css("background", "#e3e3e3");  

        // out-of-stock alert
        if ($(this).data("stock") === "out") {
            alert("This product is out of stock!");
        }
    });

    // show details on hover
    $(".product").hover(
        function () { $(this).find(".details").show(); },
        function () { $(this).find(".details").hide(); }
    );

    // toggle favorite icon
    $(".fav").click(function (e) {
        e.stopPropagation(); 
        const current = $(this).text();
        $(this).text(current === "♡" ? "♥" : "♡");
    });

    // mark discounted products (attribute selector mimic)
    $("[data-discount='yes']").each(function () {
        $(this).append("<p>(Discount Available)</p>");
    });
});
