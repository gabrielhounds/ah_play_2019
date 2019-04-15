(function($, airheads) {
    "use strict";

    var $upcButtons;
    var buttonObjects = {};
    var endpointBase = 'http://airheads.channelsight.com/Feeds/Get?format=json&source=MultipleSku&countryCode=en-US&Brand=airheads&skulist=';

    function init() {
        $upcButtons = $('[data-upc]');

        var upcCodes = [];

        $upcButtons.each(function(index, button) {
            var code = $(button).data('upc');

            buttonObjects[code] = $(button);

            upcCodes.push(code);
        });

        getBuyLinks(upcCodes);
    }

    function getBuyLinks(codes) {
        var endpoint = endpointBase + codes.join(',');

        $.getJSON(endpoint).then(function(results) {
            var products = [];
            if (results && results.dealers) {
                $.each(results.dealers, function(index, dealer) {
                    console.log(products, dealer.products);
                    products = products.concat(dealer.products);
                });
            }
            mapProductLinksToButtons(products);
        });
    }

    function mapProductLinksToButtons(products) {
        $.each(products, function(index, product) {
            if (product.availability.toLowerCase() === 'yes') {
                var $button = buttonObjects[product.sku];
                if ($button) {
                    $button.attr('href', product['buy-url']);
                }
            }
        });
    }

    init();

})(jQuery, window.airheads);