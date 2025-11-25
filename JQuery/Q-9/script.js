// carousel rotation (version 1)
jq1(document).ready(function () {
    let index = 0;
    const slides = jq1(".slide");

    setInterval(function () {
        slides.hide();
        slides.eq(index).show();
        index = (index + 1) % slides.length;
    }, 2000);

    // highlight active widget
    jq1(".widget").click(function () {
        jq1(".widget").css("background", "");
        jq1(this).css("background", "#e3e3e3");
    });
});

// modal + tooltip (version 2)
jq2(document).ready(function () {

    // show modal
    jq2("#notifyBtn").click(function () {
        jq2("#modal").show();
    });

    // close modal
    jq2("#closeModal").click(function () {
        jq2("#modal").hide();
    });

    // tooltip on hover
    jq2(".widget").hover(
        function () { jq2(this).append("<span class='tip'> Tooltip info </span>"); },
        function () { jq2(this).find(".tip").remove(); }
    );
});
