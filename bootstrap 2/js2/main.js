$(document).ready(function() {
    $(".input").click(function () {
        $("#display").val ($("#display").val () + $(this).val())
    })
    $("#clear").click(function () {
        $("#display").val("")
    })
    $("#result").click(function () {
        $("#display").val(eval($("#display").val()))
    })
    $("#back").click(function () {
        delet=$("#display").val()
        $("#display").val(delet.substring(0, delet.length-1))
    })
});
