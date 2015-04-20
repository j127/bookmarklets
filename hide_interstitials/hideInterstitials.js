(function () {
    // Hides interstitial signin forms on Quora and Pinterest
    var currentHost = window.location.host;

    if (currentHost.indexOf('www.quora.com') > -1) {
        var $x = $('.modal_signup_background'),
            $y = $x.next();

            $x.remove();
            $y.remove();
    } else if (currentHost.indexOf('www.pinterest.com') > -1) {
        $('.Modal').remove();
    }
}());
