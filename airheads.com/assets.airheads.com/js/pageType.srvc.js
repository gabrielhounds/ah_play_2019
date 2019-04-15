// Tumblr fix, want to know if you are on '/' or '/tagged/crafts'
(function($, airheads, undefined) {
    'use strict';

    var $window = $(window),
        $body = $('body'),
        $navItems = $('.global-header_nav-item'),
        pathname = window.location.pathname,
        $dataPageEls = $('[data-page]'),
        carouselBreakpoint = 767,
        $hero = '',
        pageType = '',
        heroImage = 'hero.gif',
        isMobile = false,
        pageTitle;

    initPageType();

    function initPageType() {
        if (pathname === '/') {
            $navItems.first().addClass('global-header_nav-item--active');
            pageType = 'home-page';
        } else if (pathname === '/tagged/crafts') {
            $hero = $('.hero');
            pageType = 'crafts-page';

            if ($window.width() <= carouselBreakpoint) {
                heroImage = 'hero-m.jpg';
            }

            $hero.html('<div class="hero_slide"><img src="//assets.airheads.com/img/crafts/' + heroImage + '" alt=""></div>');

            $navItems.each(function() {
                var $navItem = $(this);
                if ($navItem.attr('href') === pathname) {
                    $navItem.addClass('global-header_nav-item--active');
                    return false;
                }
            });
        } else {
            pageTitle = $('h2').text();

            if (pageTitle === 'Not Found') {
                pageType = '404-page';
                $('.single-post').replaceWith('<div class="main_content"><p class="main_content--message">Page Not Found</p></div>');
            }
        }

        $body.addClass(pageType);

        // remove any data-page element that doesn't match current page Type
        $dataPageEls.each(function() {
            var $this = $(this);

            if ($this.attr('data-page') !== pageType) {
                $this.remove();
            } else {
                $this.css('opacity', '1');
            }
        });
    }
})(jQuery, window.airheads);