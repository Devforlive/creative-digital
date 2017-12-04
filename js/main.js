$(document).ready(function () {

    $('.hd-slider').slick({
        dots: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });


    $('.team-slider').slick({
        dots: false,
        arrows: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1367,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(document).foundation();

});

$(window).on('load', function () {
    $("a").on('click touch', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {


                window.location.hash = hash;
            });
        }   // End if
    });     //smoth scroll

    $(window).scroll(function (e) {
        var height = $(this).scrollTop();
        var section = document.getElementById('home').offsetHeight;
        $('.general-header')[height >= section ? 'addClass' : 'removeClass']('active-header')
    });
});

