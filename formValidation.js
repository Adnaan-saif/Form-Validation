function isEmail(email){
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

$("#submitButton").click(function(){
    var errorMessage = "";
    var fieldMissing = "";
    if ($("#email").val() == ""){
        fieldMissing += "<br>Email";
    }
    if ($("#phone").val() == ""){
        fieldMissing += "<br>Telephone";
    }
    if ($("#password").val() == ""){
        fieldMissing += "<br>Password";
    }
    if ($("#passwordConfirm").val() == ""){
        fieldMissing += "<br>Confirm Password";
    }
    if (fieldMissing != ""){
        errorMessage += "<p>The following field(s) is/are missing:" + fieldMissing;
    }
    if(isEmail($("#email").val()) == false){
        errorMessage += "<p>Your email address is not valid</p>";
    }
    if($.isNumeric($("#phone").val()) == false){
        errorMessage += "<p>Your phone number is not numeric</p>";
    }
    if($("#password").val() != $("#passwordConfirm").val()){
        errorMessage += "<p>Your passwords don't match</P>";
    }
    if(errorMessage != ""){
        $("#errorMessage").html(errorMessage);
    } else {
        $("#sucessMessage").show();
        $("#errorMessage").hide();
    }
})