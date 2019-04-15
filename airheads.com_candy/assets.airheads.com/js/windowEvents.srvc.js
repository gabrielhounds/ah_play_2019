// will publish a windowResize event that's throttled

(function($, airheads, undefined) {
    "use strict";

    windowEvents();

    function windowEvents() {
        $(window).on('resize', _.throttle(function() {
            airheads.publish('windowResize');
        }, 200));
    }
})(jQuery, window.airheads);