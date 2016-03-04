$(document).ready(function() {

    $("#tabs").tabs();
    $("#tabs-1 div ul li:first div a").focus();
    $("#tabs-1 div ul li:first div a").addClass("active");



    $("#tab1").on("click", function() {

        $("#tabs-1 div ul li:first div a").focus();
        $("#tabs-1 div ul li:first div a").addClass("active");
    });

    $("#tab2").on("click", function() {

        $("#tabs-2 div ul li:first div a").focus();
        $("#tabs-2 div ul li:first div a").addClass("active");
    });
    $("#tab3").on("click", function() {

        $("#tabs-3 div ul li:first div a").focus();
        $("#tabs-3 div ul li:first div a").addClass("active");
    });

    $(document).on("keydown", function(e) {
        var activeNode = $(document.activeElement);

        var activeNodeActive = $(".active");
        switch (e.which) {
            case 13:
                //enter
                activeNodeActive.click();
                $(activeNode).click();

                break;
            case 37:
                //Prev
                $(".similar_album").removeClass("active");
                activeNode.parent().parent().parent().prev().children().children().children().focus();
                activeNode.parent().parent().parent().prev().children().children().children().addClass("active");
                break;
            case 39:
                //Next
                $(".similar_album").removeClass("active");
                activeNode.parent().parent().parent().next().children().children().children().focus();
                activeNode.parent().parent().parent().next().children().children().children().addClass("active");
                break;
            case 38:

                // $("#tab3 a").click();
                // $("#tabs-3 div ul li:first div a").focus();
                // $("#tabs-3 div ul li:first div a").addClass("active");
                //Up

                e.preventDefault();
                break;
            case 40:
                // $("#tab2 a").click();
                // $("#tabs-2 div ul li:first div a").focus();
                // $("#tabs-2 div ul li:first div a").addClass("active");
                //Down

                e.preventDefault();
                break;

            case 415:


                break;
            case 404:

                $("#tab1 a").click();
                $("#tabs-1 div ul li:first div a").focus();
                $("#tabs-1 div ul li:first div a").addClass("active");
                break;
            case 405:
                $("#tab2 a").click();
                $("#tabs-2 div ul li:first div a").focus();
                $("#tabs-2 div ul li:first div a").addClass("active");
                break;
            case 406:

                $("#tab3 a").click();
                $("#tabs-3 div ul li:first div a").focus();
                $("#tabs-3 div ul li:first div a").addClass("active");
                break;


        }
    });

});
