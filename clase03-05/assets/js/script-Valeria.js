$(document).ready(function(){

    let numero1 ="";

    $("#btnSumar").click(function(){
        numero1=$("#numero1").val();
        if(numero1 === ""){
            $("#error1").text("error1");
            $("#error1").css("color","red");
            return;
        }



    })
})