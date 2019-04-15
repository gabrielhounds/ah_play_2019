(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('video', videoCtrl);

    function videoCtrl($module) {
        var $video = $.airheads.youtubePlayer($module.find('.youtube-player'));
    }

})(jQuery, window.airheads);