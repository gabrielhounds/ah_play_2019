/**
 * init.js
 * Initializes a namespace for airheads related utilities, as well as a namespace on jQuery for
 * airheads related plugins.
 */

;
(function($, window, undefined) {

    var $body = $('body');
    var bodyClasses = [];
    var $window = $(window);

    if (!$.airheads) {
        $.airheads = {};
    }

    if (!window.airheads) {
        window.airheads = {
            modules: {}
        };
    }

    // check if IE11 and add class

    if (!(window.ActiveXObject) && "ActiveXObject" in window) {
        bodyClasses.push('ie11');
    }

    // check if iOS and add class
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        bodyClasses.push('ios', 'touch');
    }

    if (/IEMobile/.test(navigator.userAgent)) {
        bodyClasses.push('iemobile');
    }

    if (/Android/.test(navigator.userAgent)) {
        bodyClasses.push('android', 'touch');
    }

    $.each(bodyClasses, function(index, bodyClass) {
        $body.addClass(bodyClass);
    });

    $(document).on("airheadsModuleInit", bootstrapModule);

    function bootstrapModule(event, Module) {
        window.$body = $body;
        Module.initialize();
        window.airheads.modules[Module.id] = Module;
    }
})(jQuery, window);