// sets minwidth on body and viewport width as well on mobile (zoomed out view/kind of like desktop view on mobile) because iframe is not responsive
// only if data-contentwidth attr is set on moodule

(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('iframe', iframeCtrl);

    function iframeCtrl($module) {

        var contentWidth = $module.attr('data-contentwidth');
        var $iframe = $module.find('iframe');
        var iframeSrc = $module.attr('data-src');

        // for non responsive iframe
        function setContentWidth() {
            if (contentWidth !== '' && !isNaN(parseInt(contentWidth, 10))) {
                var viewportmeta = $('meta[name=viewport]');
                var parsedContentWidth = parseInt(contentWidth, 10);

                viewportmeta.attr('content', viewportmeta.attr('content').replace(/width=[^,]+/, 'width=' + parsedContentWidth));
                $('body').css('min-width', parsedContentWidth + 'px');
                $('.global-header').css('min-width', parsedContentWidth + 'px');
            }
        }

        function loadIFrameSrc() {
            $iframe.attr('src', iframeSrc);
        }

        // init function
        function init() {

            if ($('.age-gate').length > 0) {
                airheads.subscribe('setContentWidthIframe', setContentWidth);
            } else {
                setContentWidth();
            }

            // delayed load of iframe src
            if (iframeSrc !== '') {
                airheads.subscribe('loadIFrameSrc', loadIFrameSrc);
            }
        }

        // init();

    }

})(jQuery, window.airheads);