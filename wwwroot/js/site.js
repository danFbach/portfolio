$(document).ready(function($) {
    var windowHeight = $(window).height();
    var _offset = windowHeight * 0.66;
    var hlTop = 0;
    // var subOffsets = $('.subh2').each(function() {
    //     $(this).offset().top;
    // });
    // subOffsets.each(function() {
    //     console.log(this.offsetTop);
    // });
    $(window).resize(function() {
        windowHeight = $(window).height();
        _offset = windowHeight * 0.66;
    });
    eachRow(_offset);
    $(document).on('scroll', function() {
        eachRow(_offset);
        hlTop = $('.hl').offset().top;
        var curScrollY = scrollY + 40;
        stickyH2(hlTop, curScrollY)

    });
    $("a.subnavLink").click(function() {
        $(this).next().addClass('active');
        $('.navStack').addClass('subnavActive');
    });
    $('#contactTrigger').click(function() {
        $('.sub-navbar-ul').toggleClass('active');
        $('.navStack').toggleClass('contactSub');
    });
    $('.navStack').click(function() {
        if ($(this).hasClass('subnavActive')) {
            $(this).removeClass('subnavActive');
            $('.sub-navbar-ul').removeClass('active');
        } else if ($(this).hasClass('contactSub')) {
            $('.sub-navbar-ul').toggleClass('active');
            $('.navStack').toggleClass('contactSub');
        } else {
            $('nav').removeClass('preload');
            $('.navStack span').toggleClass('active');
            $('.navbar-ul').toggleClass('active');
        }
    });
    $('h2.subh2').click(function() {
        var curScrollY = scrollY + 40;
        if ($(this).hasClass('hl')) {
            $('.slider').slideUp();
            $('h2.subh2').removeClass('hl');
            $('h2.subh2').removeClass('sticky');
            stickyH2(hlTop, curScrollY);
        } else {
            $('h2.subh2').removeClass('sticky');
            $('.slider').slideUp();
            $('h2.subh2').removeClass('hl');
            $(this).toggleClass('hl');
            $(this).next().slideToggle(250, function() {
                hlTop = $(this).offset().top;
                stickyH2(hlTop, curScrollY);
            });
            slideTo($(this).next());
        }
    });
    $('.anicon').click(function() {
        $(this).removeClass('preload');
        if ($(this).children().hasClass('navStack7')) {
            $(this).children().toggleClass('active');
        } else {
            var kids = $(this).children().children();
            $(kids).toggleClass('active');
        }
    });
    $("[href]").each(function() {
        if (this.href == window.location.href) {
            $(this).addClass("curPage");
        } else if ($(this).hasClass('packageLink') && window.location.href.includes('Package')) {
            $(this).addClass("curPage");
        } else if ($(this).hasClass('webDevLink') && window.location.href.includes('Projects')) {
            $(this).addClass("curPage");
        }
    });
    // TO FIX CURRENT VIEW TO TOP OF PAGE ON SCROLL
    // function subh2Sticky(element){
    // 	if(scrollY>= $(element).offset().top){
    // 		$(element).css({
    // 			position: 'fixed',
    // 			top: '50',
    // 			z-index: '10'
    // 		});
    // 	}
    // }
    function stickyH2(h2Top, curScrollY) {
        if (h2Top <= curScrollY) {
            $('.hl').addClass('sticky');
        } else if (h2Top > curScrollY) {
            $('.hl').removeClass('sticky');
        }
    }

    function setOffset() {
        var windowHeight = $(window).height();
        return windowHeight * 0.66;
    }

    function slide(element) {
        $(element).addClass('active');
    }

    function slideTo(element) {
        setTimeout(function() { $('html, body').animate({ scrollTop: ($(element).offset().top - 80) }, 200); }, 400);
    }

    function eachRow(_offset) {
        $('.row').each(function() {
            var scrollPos = scrollY + _offset;
            var divTopPos = $(this).offset().top;
            if (divTopPos < scrollPos) {
                $(this).addClass('active');
                var cols = $(this).children();
                cols.each(function() {
                    slide(this);
                });
            }

        });
    }
});