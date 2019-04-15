(function($, airheads, undefined) {
    "use strict";

    $.airheads.youtubePlayer = initializeYoutubePlayer;

    function initializeYoutubePlayer(el, options) {
        var base = {},
            srcUrl,
            defaultOptions = defaultOptions();

        base.el = el;
        base.$el = $(el);
        base.$video = base.$el.find('.youtube-player_video');
        base.$overlay = base.$el.find('.youtube-player_overlay');
        base.$iframe = base.$el.find('iframe');

        init();

        return base.$el;

        /**
         * Exposed Methods
         */

        /**
         * Internal Helper Functions
         */

        function resizeHandler() {
            var ar = String(base.options.aspectRatio).split(':'),
                height = base.$iframe.width() * parseInt(ar[1], 10) / parseInt(ar[0], 10);
            base.$iframe.height(height);
        }

        function overlayClickHandler() {
            base.$overlay.addClass('hide');
            base.$iframe.attr('src', srcUrl);
        }

        function attachListeners() {
            //add resize listener and adjust height
            airheads.subscribe('windowResize', resizeHandler);
            //add click hander to initialize video when user clicks on poster image
            base.$overlay.on('click', overlayClickHandler);
        }

        function init() {
            if (typeof options == "undefined") {
                options = {};
            }

            base.options = $.extend({}, defaultOptions, options);
            base.options.videoId = base.$video.data('video');

            srcUrl = 'http://www.youtube.com/embed/' + base.options.videoId + '?wmode=opaque&rel=0&fs=1&showinfo=' + base.options.showInfo + '&autoplay=' + base.options.autoplay;
            //srcUrl is added to the youtube player iframe when user clicks on poster image

            attachListeners();

            window.setTimeout(function() {
                resizeHandler();
            }, 2000);
        }

        function defaultOptions() {
            return {
                videoId: '',
                showInfo: false,
                autoplay: true, //youtube player loads when user clicks on overlay, so we want to autoplay
                aspectRatio: '16:9'
            };
        }

    }

})(jQuery, window.airheads);