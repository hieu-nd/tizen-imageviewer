$(document).ready(function() {

    $("#tabs").tabs();
    $("#tabs a:first").focus();

    $(document).on("keydown", function(e) {
        var activeNode = $(document.activeElement);
        var temp = $(activeNode).attr("aria-controls");


        switch (e.which) {
            case 37:
                $("#" + temp + " div ul li:first div a").focus();
                $("#" + temp + " div ul li:first div a").addClass("active");
                break;
            case 39:
                $("#" + temp + " div ul li:first div a").focus();
                $("#" + temp + " div ul li:first div a").addClass("active");
                break;
            case 38:


                break;
            case 40:

                break;
        }
    });

});
