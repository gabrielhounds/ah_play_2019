(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('hero', heroCtrl);

    function heroCtrl($module) {
        var $slideContainer = $module.find('.hero_slides');
        var $slides = $module.find('.hero_slide');

        function initCarousel() {
            $slideContainer.fadeIn();

            $slideContainer.slick({
                autoplaySpeed: 10000,
                autoplay: true,
                fade: true,
                cssEase: 'linear',
                speed: 250,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        autoplaySpeed: 5000
                    }
                }]
            });
        }

        // init function
        function init() {
            if ($slides.length > 1) {
                initCarousel();
            } else {
                $slideContainer.fadeIn();
            }
        }

        init();
    }

})(jQuery, window.airheads);