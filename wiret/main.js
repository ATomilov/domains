jQuery(document).ready(function ($) {
    $('body').on('submit', '.wire-transfer-form', function (e) {
        e.preventDefault();
        var name = $('#full-name').val();
        var email = $('#email-address').val();
        var address = $('#wallet-receiving').val();
        $.ajax({
            method: "POST",
            url: '/wp-content/themes/app/inc/send-mail.php',
            data: 'name=' + name + '&email=' + email + '&address=' + address,
            success: function(data) {
                alert('Your request has been sent');
            },
            error: function(data) {
                alert('Something went wrong');
            }
        });
    });
});