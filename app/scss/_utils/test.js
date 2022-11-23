/*! menu_main.js */
var menuMobile=function(notAddSubmenuopenEvent) {
    $('.js-nav').addClass('mobile');
    $('.js-menu_mobile').addClass('menu-mobile');

    if( !$('.submenuopen').length) {
        if($('.mobile .js-mainMenu_submenu, .mobile .js-mainMenu_submenu ul').length) {
            $('.mobile .js-mainMenu_submenu, .mobile .js-mainMenu_submenu ul').each(function() {
                    $(this).prev('.js-add_collapse').prepend('<span class="submenuopen"></span>');
                });
        }

        if('undefined'===typeof notAddSubmenuopenEvent) {
            $(document).on('click', '.submenuopen', function(e) {
                    e.preventDefault(); var isMenuOpen=$(this).parent().next('ul').hasClass('ulopen'); if( !isMenuOpen) {
                        $(this).parent().parent().find('.js-open_sub').toggleClass('show').slideToggle('fast'); $(this).parent().next('.js-add_collapse').removeClass('opensub'); $(this).parent().toggleClass('opensub'); $(this).parent().next('.submenu').slideToggle(); $(this).parent().next('ul').toggleClass('ulopen').slideToggle(); var selfClick=$(this).closest('li').index(); var list=$(this).closest('ul').children('li').find('ul.ulopen'); for(var i=0; i<list.length; i++) {
                            var itemOpen=$(list[i]).closest('li').index(); if(selfClick==itemOpen) {
                                continue;
                            }

                            $(list[i]).slideUp().removeClass('ulopen');
                        }

                        $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').slideToggle(); $(this).parent().parent().siblings().find('.opensub').toggleClass('opensub');
                    }

                    else {
                        $(this).parent().next('ul').toggleClass('ulopen').slideToggle(); $(this).parent().toggleClass('opensub'); $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').slideToggle(); $(this).parent().parent().siblings().find('.opensub').toggleClass('opensub');
                    }
                });
        }
    }

    $('.js-menu_btn').on('click', function(e) {
            e.preventDefault(); $('html, .menu').addClass('open'); $('body').addClass('modal-open'); setTimeout(function() {
                    $('.js-overlay').addClass('active');
                }

                , 50);
        });

    $('.js-mainMenu, .js-mainMenu ul').on('click', function(e) {
            if(e.target !==this) return; $('html, .menu').removeClass('open'); $('.menu > ul > li').find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $('.menu > ul > li').find('.opensub').parent().find('.submenu').slideToggle(); $('.menu > ul > li').find('.opensub').toggleClass('opensub'); $('body').removeClass('modal-open'); $('.js-overlay').removeClass('active');
        });

    $('.js-mainMenu').swipe({
        allowPageScroll:'auto', swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $('html, .menu').removeClass('open'); $('.menu > ul > li').find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $('.menu > ul > li').find('.opensub').parent().find('.submenu').slideToggle(); $('.menu > ul > li').find('.opensub').toggleClass('opensub'); $('.js-overlay').removeClass('active');
        }
    });

$('.js-menu_close').on('click', function() {
        $('html, .menu').removeClass('open'); $('.menu > ul > li').find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $('.menu > ul > li').find('.opensub').parent().find('.submenu').slideToggle(); $('.menu > ul > li').find('.opensub').toggleClass('opensub'); $('body').removeClass('modal-open'); $('.js-overlay').removeClass('active');
    });

$('.js-quick_find_mobile').on('click', function() {
        if(showDoofinderMobile()) {
            return false;
        }
    });

$('#quick_find').on('show.bs.collapse', function() {
        if( !$('.content').hasClass('searchpad')) {
            $('.content').addClass('searchpad');
        }

    }).on('shown.bs.collapse', function() {
        var top_position=$(".header").height(); $(".df-classic").css({
            top:top_position+'px'
        });

}).on('hide.bs.collapse', function() {
        if($('.content').hasClass('searchpad')) {
            $('.content').removeClass('searchpad');
        }
    });
}

var limpiarmenuMobile=function() {
    $('.js-nav').removeClass('mobile');
    $('.js-menu_mobile').removeClass('menu-mobile');
    $('.opensub').removeClass('opensub');
    $('.js-mainMenu_submenu, .js-mainMenu_submenu ul').css('display', '');

    if($('html, .js-mainMenu').hasClass('open')) {
        $('html, .js-mainMenu').removeClass('open');
    }

    if($('.content').hasClass('searchpad')) {
        $('.content').removeClass('searchpad');
    }

    $('.js-overlay').removeClass('active');
}

$('.js-mainMenu').hover(function() {
        $(this).addClass('over');
    }

    , function() {
        $(this).removeClass('over');
    });

$('body').on('touchstart', '.js-mainMenu_general_cat', function(e) {
        "use strict"; var link=$(this); if(link.hasClass('hover')) {
            return true;
        }

        else {
            link.addClass('hover'); $('.js-mainMenu_general_cat').not(this).removeClass('hover'); e.preventDefault(); return false;
        }
    });

$('[data-toggle="collapse"]').on('click', function() {
        if($(this).data('target')) {
            var cTarget=$(this).data('target');
        }

        else {
            var cTarget=$(this).attr('href');
        }

        $(document).find('[href="' +cTarget+'"]').each(function() {
                changeText($(this));

            }); $(document).find('[data-target="' +cTarget+'"]').each(function() {
                changeText($(this));
            });
    });

function changeText($this) {
    if($this.attr('aria-expanded')=='true') {
        $this.html($this.data('inicial'));
    }

    else {
        $this.html($this.data('final'));
    }
}

/*! menu_main.js */
var menuMobile=function(notAddSubmenuopenEvent) {
    $('.js-nav').addClass('mobile');
    $('.js-menu_mobile').addClass('menu-mobile');

    if( !$('.submenuopen').length) {
        if($('.mobile .js-mainMenu_submenu, .mobile .js-mainMenu_submenu ul').length) {
            $('.mobile .js-mainMenu_submenu, .mobile .js-mainMenu_submenu ul').each(function() {
                    $(this).prev('.js-add_collapse').prepend('<span class="submenuopen"></span>');
                });
        }

        if('undefined'===typeof notAddSubmenuopenEvent) {
            $(document).on('click', '.submenuopen', function(e) {
                    e.preventDefault(); var isMenuOpen=$(this).parent().next('ul').hasClass('ulopen'); if( !isMenuOpen) {
                        $(this).parent().parent().find('.js-open_sub').toggleClass('show').slideToggle('fast'); $(this).parent().next('.js-add_collapse').removeClass('opensub'); $(this).parent().toggleClass('opensub'); $(this).parent().next('.submenu').slideToggle(); $(this).parent().next('ul').toggleClass('ulopen').slideToggle(); var selfClick=$(this).closest('li').index(); var list=$(this).closest('ul').children('li').find('ul.ulopen'); for(var i=0; i<list.length; i++) {
                            var itemOpen=$(list[i]).closest('li').index(); if(selfClick==itemOpen) {
                                continue;
                            }

                            $(list[i]).slideUp().removeClass('ulopen');
                        }

                        $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').slideToggle(); $(this).parent().parent().siblings().find('.opensub').toggleClass('opensub');
                    }

                    else {
                        $(this).parent().next('ul').toggleClass('ulopen').slideToggle(); $(this).parent().toggleClass('opensub'); $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $(this).parent().parent().siblings().find('.opensub').parent().find('.submenu').slideToggle(); $(this).parent().parent().siblings().find('.opensub').toggleClass('opensub');
                    }
                });
        }
    }

    $('.js-menu_btn').on('click', function(e) {
            e.preventDefault(); $('html, .menu').addClass('open'); $('body').addClass('modal-open'); setTimeout(function() {
                    $('.js-overlay').addClass('active');
                }

                , 50);
        });

    $('.js-mainMenu, .js-mainMenu ul').on('click', function(e) {
            if(e.target !==this) return; $('html, .menu').removeClass('open'); $('.menu > ul > li').find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $('.menu > ul > li').find('.opensub').parent().find('.submenu').slideToggle(); $('.menu > ul > li').find('.opensub').toggleClass('opensub'); $('body').removeClass('modal-open'); $('.js-overlay').removeClass('active');
        });

    $('.js-mainMenu').swipe({
        allowPageScroll:'auto', swipeLeft:function(event, direction, distance, duration, fingerCount) {
            $('html, .menu').removeClass('open'); $('.menu > ul > li').find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $('.menu > ul > li').find('.opensub').parent().find('.submenu').slideToggle(); $('.menu > ul > li').find('.opensub').toggleClass('opensub'); $('.js-overlay').removeClass('active');
        }
    });

$('.js-menu_close').on('click', function() {
        $('html, .menu').removeClass('open'); $('.menu > ul > li').find('.opensub').parent().find('.submenu').find('.ulopen').slideToggle(); $('.menu > ul > li').find('.opensub').parent().find('.submenu').slideToggle(); $('.menu > ul > li').find('.opensub').toggleClass('opensub'); $('body').removeClass('modal-open'); $('.js-overlay').removeClass('active');
    });

$('.js-quick_find_mobile').on('click', function() {
        if(showDoofinderMobile()) {
            return false;
        }
    });

$('#quick_find').on('show.bs.collapse', function() {
        if( !$('.content').hasClass('searchpad')) {
            $('.content').addClass('searchpad');
        }

    }).on('shown.bs.collapse', function() {
        var top_position=$(".header").height(); $(".df-classic").css({
            top:top_position+'px'
        });

}).on('hide.bs.collapse', function() {
        if($('.content').hasClass('searchpad')) {
            $('.content').removeClass('searchpad');
        }
    });
}

var limpiarmenuMobile=function() {
    $('.js-nav').removeClass('mobile');
    $('.js-menu_mobile').removeClass('menu-mobile');
    $('.opensub').removeClass('opensub');
    $('.js-mainMenu_submenu, .js-mainMenu_submenu ul').css('display', '');

    if($('html, .js-mainMenu').hasClass('open')) {
        $('html, .js-mainMenu').removeClass('open');
    }

    if($('.content').hasClass('searchpad')) {
        $('.content').removeClass('searchpad');
    }

    $('.js-overlay').removeClass('active');
}

$('.js-mainMenu').hover(function() {
        $(this).addClass('over');
    }

    , function() {
        $(this).removeClass('over');
    });

$('body').on('touchstart', '.js-mainMenu_general_cat', function(e) {
        "use strict"; var link=$(this); if(link.hasClass('hover')) {
            return true;
        }

        else {
            link.addClass('hover'); $('.js-mainMenu_general_cat').not(this).removeClass('hover'); e.preventDefault(); return false;
        }
    });

$('[data-toggle="collapse"]').on('click', function() {
        if($(this).data('target')) {
            var cTarget=$(this).data('target');
        }

        else {
            var cTarget=$(this).attr('href');
        }

        $(document).find('[href="' +cTarget+'"]').each(function() {
                changeText($(this));

            }); $(document).find('[data-target="' +cTarget+'"]').each(function() {
                changeText($(this));
            });
    });

function changeText($this) {
    if($this.attr('aria-expanded')=='true') {
        $this.html($this.data('inicial'));
    }

    else {
        $this.html($this.data('final'));
    }
}