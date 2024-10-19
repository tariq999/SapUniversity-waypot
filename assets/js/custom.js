
jQuery(function ($) {
    /** =============flax slider strats here */

    $('.flexslider').flexslider({
        animation: "slide"
    });



    /** =============slick slider strats here */

    $('.sp-course-row-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
    });

    $('#spSection').daisyjs({
        dotColor: '#f00000',
        lineColor: '#f00000'
    });


    /** =============  isotpes strats here */
    var $spartan = $('.spartan').isotope({
        itemSelector: '.col-3'

    });

    $('.btn-group').on('click', '.btn', function () {

        var filterValue = $(this).attr('data-filter');
        $spartan.isotope({ filter: filterValue });
        return false;

    });
    $('.btn-group .btn ').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');


    });









});
/** =============  isotpes end here */