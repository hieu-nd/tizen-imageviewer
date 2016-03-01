$(document).ready(function() {

   

   

});
$("#enable").click(function(){
    $(this).hide();
    $("#right-coontainer").addClass("opacity");
    $("#disable").show();
})
$("#disable").click(function(){
    $(this).hide();
    $("#right-coontainer").removeClass("opacity");
    $("#enable").show();
})