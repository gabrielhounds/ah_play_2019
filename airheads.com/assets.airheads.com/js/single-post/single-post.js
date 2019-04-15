(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('single-post', singlePostCtrl);

    function singlePostCtrl($module) {
        var $postsContainer = $module.find('.single-post_inner'),
            path = window.location.pathname !== '/' ? window.location.pathname : '',
            pathPieces = path.split('/'),
            projectUrlSuffix = '-project';

        function checkIfCraftsPage() {
            if (pathPieces[1] === 'post' && (/^-?\d[0-9]*$/).test(pathPieces[2]) && pathPieces[3].match(projectUrlSuffix + '$')) {
                loadProjectPage();
            } else {
                initAvatars();
                $module.show();
            }
        }

        function loadProjectPage() {
            $.ajax({
                    url: '/project/' + pathPieces[3]
                }).fail(function() {
                    $postsContainer.html('<p class="single-post_error">Error loading content.</p>');
                })
                .done(function(html) {
                    $module.replaceWith(html);
                })
                .always(function() {
                    $module.show();
                });
        }

        function initAvatars() {
            $postsContainer.find('.avatar').attr('src', function() {
                return this.src.replace(/_16\.png/g, '_64.png');
            });
        }

        function externalLinks() {
            var $externalUrl = $module.find('.js-external-url'),
                url = $externalUrl.data('external-url');

            if ($externalUrl.length > 0) {
                $('.single-post_photo').wrap('<a href="' + url + '" target="_blank"></a>');
            }
        }

        // init function
        function init() {
            checkIfCraftsPage();
            externalLinks();

            // init Sharing Links
            $.airheads.sharePost($postsContainer);
        }

        init();
    }

})(jQuery, window.airheads);