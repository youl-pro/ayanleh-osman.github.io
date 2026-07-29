$(function() {
    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $('.comments').empty();
        var postdata = $('#contact-form').serialize();

        $.ajax({
            type: 'POST',
            url: 'php/contact.php',
            data: postdata,
            dataType: 'json',
          /*  success: function(result) {
                   console.log(result);
                if (result.isSuccess) {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                    $('#contact-form')[0].reset();
                } else {
                    $('#firstname + .comments').html(result.firstnameError);
                    $('#name + .comments').html(result.nameError);
                    $('#email + .comments').html(result.emailError);
                    $('#phone + .comments').html(result.phoneError);
                    $('#message + .comments').html(result.messageError);
                }
            }*/

                success: function(result) {
    console.log(result); // debug
    if (result.isSuccess) {
        $('#contact-form').append("<p class='thank-you'>'Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.' :)</p>");
        $('#contact-form')[0].reset();
    } else {
        $('#firstname').next('.comments').html(result.firstnameError);
        $('#name').next('.comments').html(result.nameError);
        $('#email').next('.comments').html(result.emailError);
        $('#phone').next('.comments').html(result.phoneError);
        $('#message').next('.comments').html(result.messageError);
    }
}
        });
    });
});

