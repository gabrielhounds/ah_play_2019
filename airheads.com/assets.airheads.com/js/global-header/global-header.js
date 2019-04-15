(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('global-header', globalHeaderCtrl);

    function globalHeaderCtrl($module) {

        var $menu = $module.find('.global-header_hamburger-menu');
        var sticky = {};

        function updateStickyObject() {
            sticky.lastPosition = {};
            sticky.lastPosition.window = window.pageYOffset;
            sticky.lastPosition.nav = $module.offset().top;
            sticky.fixedPosition = $module.offset().top;

            if (sticky.lastPosition.window > sticky.fixedPosition) {
                $body.addClass('_fixed-header');
            } else {
                $body.removeClass('_fixed-header');
            }

            sticky.isFixed = $body.hasClass('_fixed-header');
        }

        function handleBodyClass() {

            if (sticky.isFixed && window.pageYOffset < sticky.fixedPosition) {
                $body.removeClass('_fixed-header');
                sticky.isFixed = false;
            } else if (!sticky.isFixed && window.pageYOffset > sticky.fixedPosition) {
                $body.addClass('_fixed-header');
                sticky.isFixed = true;
            }
        }

        function initSticky() {
            setTimeout(function() {
                updateStickyObject();
            }, 1000);

            airheads.subscribe('windowResize', updateStickyObject);

            $(window).on('scroll', _.throttle(handleBodyClass, 50));
        }

        function addEventListeners() {
            $menu.on('click', function() {

                if (!$module.hasClass('global-header--menu-open')) {
                    $module.addClass('global-header--menu-open');
                } else {
                    $module.removeClass('global-header--menu-open');
                }

            });
        }

        function init() {

            if (!$module.hasClass('global-header--not-sticky')) {
                initSticky();
            }

            addEventListeners();

            // init function
        }

        init();


    }

})(jQuery, window.airheads);