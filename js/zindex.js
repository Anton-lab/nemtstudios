$(document).ready(function () {

    var ie = false;
    var ua = window.navigator.userAgent;
    var old_ie = ua.indexOf('MSIE ');
    var new_ie = ua.indexOf('Trident/');
    if ((old_ie > -1) || (new_ie > -1)) {
        ie = true;
    }
    if (!ie) {
        // $('#ie-bg').remove();
    } else if (ie) {
        $('.banner-video').addClass('ie-banner-video');
        $('.our-approach').addClass('ie-our-approach');
    }


    $('.menu a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location == link) {
            $(this).addClass('active-link');
        }
    });


    $(".contact").on("click", function () {
        $('body,html').animate({scrollTop:  $("#contact").offset().top}, 1500);
        $('#nav-mob,.back-layer,.burger-menu').removeClass('menu-open');
        $('body').css('overflow', 'auto');
        return false;
    });


    $('#nav-mob').PopupSlider({
        effect: 'right',
        button: '.burger-menu',
        closeButton: '.search-close',
        container: 'body',
        onMenuOpen: false,
        onMenuClose: false
    });


    var tabContainers = $('.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('.tabs .tab-list a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('.tabs .tab-list>li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    }).filter(':first').click();


    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        $(".header").addClass('header-fixed');
        $(".nav-link").addClass('color-menu');
        $(".logo").addClass('color-logo');

    }
    if (100 > scrolled) {
        $(".header").removeClass('header-fixed');
        $(".nav-link").removeClass('color-menu');
        $(".logo").removeClass('color-logo');
    }

    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 100) {
            $(".header").addClass('header-fixed');
            $(".nav-link").addClass('color-menu');
            $(".logo").addClass('color-logo');

        }
        if (100 > scrolled) {
            $(".header").removeClass('header-fixed');
            $(".nav-link").removeClass('color-menu');
            $(".logo").removeClass('color-logo');
        }
    };


    var row_list = $('.row-process');
    row_list.each(function () {
        if ($(window).width() > 768) {
            $(this).waypoint(function (dir) {
                if (dir === 'down') {
                    $(this.element).addClass('active-process').prev().removeClass('active-process');
                }
                else {
                    $(this.element).addClass('active-process').next().removeClass('active-process');
                }
            }, {
                offset: '20%'
            });
        }
        else if ($(window).width() < 768) {
            $(this).waypoint(function (dir) {
                if (dir === 'down') {
                    $(this.element).addClass('active-process').prev().removeClass('active-process');
                }
                else {
                    $(this.element).addClass('active-process').next().removeClass('active-process');
                }
            }, {
                offset: '10%'
            });
        }
    });

    var new_list = $('.block-news');
    new_list.each(function () {
        if ($(window).width() < 768) {
            $(this).waypoint(function (dir) {
                if (dir === 'down') {
                    $(this.element).addClass('active-new').prev().removeClass('active-new');
                }
                else {
                    $(this.element).addClass('active-new').next().removeClass('active-new');
                }
            }, {
                offset: '10%'
            });
        }
    });


    $(".button-video").fancybox({
        fitToView: false,
        autoScale: true,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });


    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        infinite: true,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: false
            }
        }]
    });


    $(".block-animation").each(function () {
        $(this).on("click", function () {
            $(this).find('.wrap-slider').addClass('active-slider');
            $("body").addClass("lock");
            $('.slider').slick('setPosition');
        });
    });

    $(".button-close-slider").on("click", function () {
        $(this).parents().removeClass('active-slider');
        $("body").removeClass("lock");
        return false;
    });


    $('.button-v-slider').click(function(){
        $('.video-slider')[0].play();
        $('.mask-video').css('display','none');
        $('.video-slider').attr('controls', 'true');
    });

});