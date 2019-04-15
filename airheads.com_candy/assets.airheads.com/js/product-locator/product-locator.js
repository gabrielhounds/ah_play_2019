(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('product-locator', productLocatorCtrl);

    function productLocatorCtrl($module) {
        var $form = $('#ctl00');
        var $error = $('#error');
        var $zipCode = $('#txtZip');
        var $distance = $('#ddlDistance');
        var $product = $('#ddlProducts');
        var $Next = $('#Next');
        var $Prev = $('#Prev');
        var $storeWrap = $('#store-wrap');
        var $storeWrapInner = $('.store-wrap_inner');
        var $stores = $('#stores');
        var resultIndexStart;
        var resultIndexEnd;
        var zipCode;
        var distance;
        var productId;
        var productType;
        var hasErrors;
        var errorArray;
        var pageNum = 1;
        var resultsTotal = 0;
        var resultsOnPage = 0;
        var productIdMap = {
            '1': 'Airheads%20bars',
            '2': 'Airheads%20bites%20',
            '3': 'Airheads%20Xtremes%20Belts',
            '4': 'Airheads%20Xtremes%20Bites%20',
            '5': 'Airheads%20Xtremes%20Sourfuls',
            '6': 'Airheads%20Gum',
            '7': 'Airheads%20Gummies',
            '8': 'Airheads%20Soft%20Filled%20bites'
        };

        function onSubmitForm() {

            $form.on('submit', function(e) {
                e.preventDefault();
                updateErrors('');
                updateSelectedValues();

                if (hasFormErrors()) {
                    updateErrors(errorArray.join('<br>'));
                } else {
                    getStoreLocations();
                }
            });
        }

        function updateSelectedValues() {
            zipCode = $zipCode.val();
            distance = $distance.val();
            productId = $product.val();

            // e.g. change productID '1' to 'Airheads%20Bars'
            if (productId in productIdMap) {

                productId = productIdMap[productId];
                productType = 'agg';

            } else { // productID is a upc code

                productType = 'upc';

            }
        }

        function getUrlVars() {
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'),
                vars = [],
                hash;

            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }

            return vars;
        }

        function selectProduct() {
            var product = getUrlVars().product,
                $product = $('#' + product);

            if ($product.length) {
                $product.attr('selected', 'selected');
            }
        }

        function hasFormErrors() {
            hasErrors = false;
            errorArray = [];

            if (zipCode === '') {
                hasErrors = true;
                errorArray.push('Please enter a zip code!');
            } else if (isNaN(parseInt(zipCode, 10)) || zipCode.length < 5) {
                hasErrors = true;
                errorArray.push('Please enter a valid zip code!');
            }

            if (distance === '0') {
                hasErrors = true;
                errorArray.push('Please select a distance!');
            }
            if (parseInt(productId, 10) < 1) {
                hasErrors = true;
                errorArray.push('Please select a product!');
            }
            return hasErrors;
        }

        function updateErrors(errors) {
            $error.html(errors);
        }

        function getStoreLocations() {
            $storeWrap.addClass('_slide-down');

            var url = 'http://productlocator.infores.com/productlocator/servlet/ProductLocatorEngine?clientid=245&productfamilyid=ARHD&zip=' + zipCode + '&searchradius=' + distance + '&producttype=' + productType + '&productid=' + productId + '&storespagenum=' + pageNum;

            $.ajax({
                url: url,
                cache: true
            }).done(function(xml) {
                var xmlDoc = $.parseXML(xml);
                var $xmlStores = $(xmlDoc).find('STORE');
                var storesHtml = '';

                resultsOnPage = 0;
                resultsTotal = parseInt($(xmlDoc).find('STORES').last().attr('COUNT'), 10);

                if (resultsTotal < 1 || isNaN(resultsTotal)) {
                    updateErrors('Bummer, no stores near you have this item. Check back again soon!');
                    $storeWrap.removeClass('_slide-down');
                    return false;
                }

                resultIndexStart = (pageNum - 1) * 10 + 1;

                $xmlStores.each(function(index) {
                    var $store = $(this);
                    var name = $store.find('NAME').text();
                    var phone = $store.find('PHONE').text();
                    var address = $store.find('ADDRESS').text();
                    var city = $store.find('CITY').text();
                    var state = $store.find('STATE').text();
                    var zip = $store.find('ZIP').text();
                    var latitude = $store.find('LATITUDE').text();
                    var longitude = $store.find('LONGITUDE').text();
                    storesHtml +=
                        "<div class='store'><h5>" + (resultIndexStart + index) + '. ' + name + "</h5>" +
                        "<p class='address'>" + address + "</p>" +
                        "<p><span class='city'>" + city + "</span>, <span class='state'>" + state + "</span> <span class='zip'>" + zip + "</span></p>" +
                        "<p class='phone'><a href='tel:" + phone.replace(/[^0-9.]/g, '') + "'>" + phone + "</a></p>" +
                        "<a class='direction' target='_blank' href='https://maps.google.com/?daddr=" + address + "," + city + "," + state + " " + zip + "'><span>Get Directions</span></a>" +
                        "<input type='hidden' class='latitude' value=" + latitude + "/><input type='hidden' class='longitude' value=" + longitude + "/>" +
                        "<hr /></div>";

                    resultsOnPage += 1;
                });

                resultIndexEnd = resultsOnPage + (pageNum - 1) * 10;

                // show pagination link
                if (pageNum > 1) {
                    $Prev.show();
                }
                if (resultIndexEnd < resultsTotal) {
                    $Next.show();
                }

                $stores.html(storesHtml);
                initMap();
                updateResultsHeader();

            });

        }

        function updateResultsHeader() {
            $('.result-index-start').html(resultIndexStart);
            $('.result-index-end').html(resultIndexEnd);
            $('.result-length').html(resultsTotal);
            $('.result-distance').html(distance);
            $('.result-zip').html(zipCode);
        }

        function updatePageNum(incrementer) {
            pageNum = pageNum + incrementer;
            $storeWrapInner.css('opacity', 0);
            getStoreLocations();
        }

        //
        function onClickResultNavigation() {
            $Next.on('click', function() {
                updatePageNum(1);
            });
            $Prev.on('click', function() {
                updatePageNum(-1);
            });
        }

        function initMap() {
            var map;
            var bounds = new google.maps.LatLngBounds();
            var mapOptions = {
                mapTypeId: 'roadmap',
            };

            // Display a map on the page
            map = new google.maps.Map(document.getElementById("map"), mapOptions);

            // Multiple Markers
            var lat = [];
            var lng = [];
            var windowContent = [];
            var infoWindow;
            var i;
            var marker;

            if ($stores.children().length > 0) {
                $('.store').each(function(index) {
                    lat.push($(this).find('.latitude').val().replace('/', ''));
                    lng.push($(this).find('.longitude').val().replace('/', ''));
                    windowContent.push("<span>" + $(this).find('h5').html() + "</span><br />" + $(this).find('.address').html() + "<br />" + $(this).find('.city').html() + ", " + $(this).find('.state').html() + " " + $(this).find('.zip').html() + "<br /><a target='_blank' href='" + $(this).find('.direction').attr('href') + "'>Get Directions</a>");
                });

                // Display multiple markers on a map
                // Loop through our array of markers & place each one on the map
                for (i = 0; i < lat.length; i++) {
                    var myLatlng = new google.maps.LatLng(lat[i], lng[i]);
                    bounds.extend(myLatlng);
                    marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        icon: "//assets.airheads.com/img/oscar.png"
                    });

                    infoWindow = new google.maps.InfoWindow({
                        content: '<p id="bodyContent">' + windowContent[i] + '</p></div>',
                        maxWidth: 200
                    });

                    // Allow each marker to have an info window
                    google.maps.event.addListener(marker, 'click', function() {
                        infoWindow.open(map, this);
                    });
                }
                // Automatically center the map fitting all markers on the screen
                map.fitBounds(bounds);
                $storeWrapInner.css('opacity', 1);
                if ($(window).width() < 768) {
                    $('#map').detach().prependTo('#store-wrap');
                }
            }
        }

        // init function
        function init() {
            // loadQueryString();
            selectProduct();
            onSubmitForm();
            onClickResultNavigation();
        }

        init();

    }

})(jQuery, window.airheads);