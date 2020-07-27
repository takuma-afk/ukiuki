window.onload = function() {
    (function () {
        $('#js-hamBtn').click(function () {
            console.log('aaaa');
            $('body').toggleClass('is-drawerActive');

            if ($(this).attr('aria-expanded') == 'false') {
                
            $(this).attr('aria-expanded', true);
            } else {
            $(this).attr('aria-expanded', false);
            }
        });
    }) ();
}