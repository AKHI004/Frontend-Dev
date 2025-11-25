$(document).ready(function () {

    // highlight direct reports
    $(".managerName").click(function () {
        $(".employee").css("background", "");
        $(this).closest(".manager").find(".employee").css("background", "#e3e3e3");
    });

    // hover show contact
    $(".person").hover(
        function () { $(this).next(".contact").show(); },
        function () { $(this).next(".contact").hide(); }
    );

    // department background
    $(".deptTitle").click(function () {
        $(".department *").css("background", "");
        $(this).parent().children().css("background", "#f0f0f0");
    });

    // random employee highlight siblings
    $("#randomBtn").click(function () {
        const employees = $(".employee");
        const rand = Math.floor(Math.random() * employees.length);
        $(".employee").css("border", "");
        $(employees[rand]).siblings().css("border", "2px solid blue");
    });

    // collapse / expand teams
    $("#toggleTeam").click(function () {
        $("#directory").find(".employees").slideToggle();
    });

});
