(function($, airheads, undefined) {
    "use strict";

    airheads.reinit = reinit;

    function reinit($module) {
        var moduleId = $module.data('module');

        if (typeof airheads.modules[moduleId] != 'undefined') {
            airheads.modules[moduleId].init($module);
        }
    }
})(jQuery, window.airheads);