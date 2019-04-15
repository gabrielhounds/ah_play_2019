// age gate will hide all content in .main_content on load, only shows once age requirement has been met, additionally,

(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('age-gate', ageGateCtrl);

    function ageGateCtrl($module) {
        var $hero = $('.hero');
        var $heroMobile = $('.hero-mobile');
        var $mainContent = $('.main_content');

        function showContent() {
            $hero.show();
            $heroMobile.show();
            $mainContent.show();
            airheads.publish('loadIFrameSrc'); // delayed iframe load, loading iframe behind age gate causes noticeable slowdown on mobile
            airheads.publish('setContentWidthIframe'); // certain iframes are not responsive and thus we set widths on body so as not to break layout
            $(window).trigger('scroll'); // hero loads in and changes position of global header
            airheads.publish('windowResize');
        }

        function init() {

            $(".age-gate-form .submit").on("click", function(e) {
                e.preventDefault();
                var today = new Date();
                var currentDate = today.getTime() / 1000;
                var monthString = $(".age-gate-form .month").val();
                var month = parseInt(monthString, 10);
                var dayString = $(".age-gate-form .day").val();
                var day = parseInt(dayString, 10);
                var yearString = $(".age-gate-form .year").val();
                var year = parseInt(yearString, 10);
                var birthDate = new Date(month + "/" + day + "/" + year).getTime() / 1000;
                var oneYear = 60 * 60 * 24 * 365;
                var thisAge = (currentDate - birthDate) / oneYear;

                if (
                    monthString.length < 2 ||
                    dayString.length < 2 ||
                    yearString.length < 4 ||
                    isNaN(month) ||
                    isNaN(day) ||
                    isNaN(year) ||
                    month > 12 ||
                    month < 1 ||
                    day > 31 ||
                    day < 1 ||
                    year > today.getFullYear()
                ) {
                    $("#ageGate .default").hide();
                    $("#ageGate .error .subhead2").text("Please enter your age in a valid MM-DD-YYYY format.");
                    $("#ageGate .error").show();
                } else if (thisAge < 13) {
                    $("#ageGate .default").hide();
                    $("#ageGate .error .subhead2").text("Please grab a parent or guardian to help you register.");
                    $("#ageGate .error").show();
                } else {
                    $("#ageGate .default").show();
                    $("#ageGate .error").hide();
                    $("#ageGate").fadeOut(500, function() {
                        showContent();
                    });
                }
            });
        }

        init();


    }

})(jQuery, window.airheads);