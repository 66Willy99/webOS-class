$(document).ready(function(){

let numero1 = "";
let numero2 = "";

$("#btnSumar").click(function(){

    numero1 = $("#numero1").val();
    if(numero1 === ""){
        $("#error1").text("Debe agregar un numero");
        $("#error1").css("color","red");
        return;
    }

    numero2 = $("#numero2").val();
    if(numero1 === ""){
        $("#error2").text("Debe agregar un numero");
        $("#error2").css("color","red");
        return;
    }
})

});