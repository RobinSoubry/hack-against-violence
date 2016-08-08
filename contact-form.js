var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/robin.soubry@gmail.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });


    $("#contact").innerHTML = "<div class='container'><div class='row'><div class='col-lg-12 text-center'><h2 class='section-heading'>Thanks for your message, we\'ll be in touch promptly.</h2></div></div></div>";

    // alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});