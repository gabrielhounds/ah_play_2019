(function($, airheads, undefined) {
    'use strict';

    airheads.createModule('product-slider', productSliderCtrl);

    function productSliderCtrl($module) {
        var $window = $(window),
            $slideContainers = $('.product-slider_slides'),
            mediumBreakpoint = 960;

        function centerNavArrows($slider) {
            var imageHeight = ($slider.find('.slick-active').find('img').height() / 2);
            $slider.find('.slick-arrow').css('top', imageHeight + 'px');
        }

        function resizeHandler() {
            centerNavArrows($slideContainers);
        }

        function attachListeners() {
            airheads.subscribe('windowResize', resizeHandler);
        }

        function initCarousels() {
            $slideContainers.each(function(i) {
                var $this = $(this),
                    $slides = $this.find('.product-slider_slide');

                $this.fadeIn();

                if ($slides.length === 1) {
                    return 'continue';
                }

                $this.slick({
                        adaptiveHeight: true,
                        appendDots: $('.product-slider_nav')[i],
                        cssEase: 'linear',
                        customPaging: function(slider, i) {
                            var thumb = $(slider.$slides[i]).data('thumb');
                            if (i === 0) {
                                return '';
                            } else {
                                return '<a class="product-slider_thumb product-slider_thumb--' + thumb + '" data-role="none" role="button" aria-required="false" tabindex="0"></a>';
                            }
                        },
                        dots: true,
                        fade: true,
                        speed: 400
                    })
                    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
                        if (currentSlide === 0) {
                            $this.closest('.product-slider').removeClass('product-slider--intro-active');
                        }
                    })
                    .on('setPosition', function() {
                        if ($window.width() <= mediumBreakpoint) {
                            centerNavArrows($this);
                        }
                    })
                    .on('afterChange', function(event, slick, currentSlide) {
                        if (currentSlide === 0) {
                            $this.closest('.product-slider').addClass('product-slider--intro-active');
                        }
                    });
            });
        }

        // init function
        function init() {
            initCarousels();


        }

        init();
    }

})(jQuery, window.airheads);