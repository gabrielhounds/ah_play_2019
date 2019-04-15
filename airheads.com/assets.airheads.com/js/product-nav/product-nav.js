(function($, airheads, undefined) {
    'use strict';

    airheads.createModule('product-nav', productNavCtrl);

    function productNavCtrl($module) {
        var $window = $(window),
            $links = $module.find('.js-product-nav_link');

        function addEventListeners() {
            $window.load(function() {
                var hash = window.location.hash;

                if (hash) {
                    goToTarget(hash);
                }
            });

            $links.each(function(i) {
                $(this).on({
                    click: function(e) {
                        var target = $(this).attr('href');
                        e.preventDefault();
                        goToTarget(target);
                    },
                    mouseover: function() {
                        $('.product-nav_link:nth-child(' + ($(this).index() + 1) + ')').addClass('product-nav_link--hover');
                    },
                    mouseout: function() {
                        $('.product-nav_link:nth-child(' + ($(this).index() + 1) + ')').removeClass('product-nav_link--hover');
                    }
                });
            });
        }

        function goToTarget(target) {
            var headerHeight = $('.global-header').outerHeight(true),
                position = $(target).offset().top - headerHeight;

            if (position !== 0) {
                $('html, body').animate({
                    scrollTop: position
                }, 500, function() {
                    location.hash = target;
                });

                history.pushState({}, '', target);

                return false;
            }
        }

        // init function
        function init() {
            addEventListeners();
        }

        init();
    }

})(jQuery, window.airheads);