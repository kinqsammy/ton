(function($) {
    "use strict";
    $(window).on('load', function(event) {
        $('#preloader').delay(500).fadeOut(500);
    });
    $(window).on('scroll', function(event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navigation").removeClass("sticky");
        } else {
            $(".navigation").addClass("sticky");
        }
    });
    var scrollLink = $('.page-scroll');
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function() {
            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    jQuery('#clock').countdown('2020/10/21', function(event) {
        var $this = jQuery(this).html(event.strftime('' + '<div class="time-entry days"><span>%-D</span> Days</div> ' + '<div class="time-entry hours"><span>%H</span> Hours</div> ' + '<div class="time-entry minutes"><span>%M</span> Minutes</div> ' + '<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
    });
    var wow = new WOW({
        mobile: false
    });
    wow.init();
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 900) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
}(jQuery));

