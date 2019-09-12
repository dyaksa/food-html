var waypoint = new Waypoint({
    element: document.getElementById('section-features'),
    handler: function (direction) {
        if (direction == 'down') {
            $(document).ready(function () {
                $('nav').addClass('sticky');
                $('.sticky img.logo-black').css('display', 'inline');
            });
        } else {
            $(document).ready(function () {
                $('nav').removeClass('sticky');
                $('#logo-black').css('display', 'none');
            })
        }
    }
});

var appscreen = new Waypoint({
    element: document.getElementById('meals-showcase'),
    handler: function (direction) {
        if (direction == 'down') {
            $(document).ready(function () {
                $('.app-screen').addClass('animated');
                $('.app-screen').addClass('fadeInLeft');
            })
        }
    }
})