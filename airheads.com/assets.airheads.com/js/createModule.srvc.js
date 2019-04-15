(function($, airheads, undefined) {
    "use strict";

    airheads.createModule = createModule;

    function createModule(id, ctrlFn) {
        var Module = function() {};

        Module = _.extend(Module.prototype, {
            id: id,

            initialize: function() {
                Module.AirheadsModule();
                Module.init();
            },

            AirheadsModule: function() {
                Module.airheadsModuleCtrl = ctrlFn;

                Module.init = function($module) {
                    var $thisModule;
                    if (typeof $module == 'undefined' || !$module) {
                        $thisModule = $('[data-module=' + Module.id + ']');
                    } else {
                        $thisModule = $module;
                    }

                    if ($thisModule.length > 0) {
                        $thisModule.each(function() {
                            Module.airheadsModuleCtrl($(this));
                            $(this).addClass('module--initialized');
                        });
                    }
                };
            }
        });

        $(document).trigger('airheadsModuleInit', Module);
    }
})(jQuery, window.airheads);