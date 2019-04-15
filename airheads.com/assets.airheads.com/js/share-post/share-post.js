// We won't know what posts will land on the page or if more are loaded in, will need to keep listeners dynamic
(function($, airheads) {
    "use strict";

    var socialNetworks = {
        facebook: {
            url: 'https://www.facebook.com/sharer/sharer.php?m2w&s=100&p[summary]={{description}}&p[url]={{url}}&p[images][0]={{media}}',
            popup: {
                width: 520,
                height: 350
            }
        },
        twitter: {
            url: 'https://twitter.com/intent/tweet?text={{description}}&url={{url}}&hashtags=airheads',
            popup: {
                width: 550,
                height: 450
            }
        },
        pinterest: {
            url: 'http://pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}',
            popup: {
                width: 700,
                height: 500
            }
        }
    };

    $.airheads.sharePost = initSharePost;

    function stripHtmlTags(string) {
        return string.replace(/<[^>]+>/ig, '');
    }

    function popUp(site, url) {
        var left = (window.innerWidth / 2) - (site.popup.width / 2),
            top = (window.innerHeight / 2) - (site.popup.height / 2);

        return window.open(url, 'share', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + site.popup.width + ', height=' + site.popup.height + ', top=' + top + ', left=' + left);
    }

    function prepareUrl(site, link) {
        var url = site.url.replace(/{{url}}/g, encodeURIComponent(link.url))
            .replace(/{{description}}/g, encodeURIComponent(stripHtmlTags(link.description)))
            .replace(/{{media}}/g, encodeURIComponent(link.media));

        return url;
    }

    function shareClickHandler() {
        var $this = $(this),
            $post = $this.closest('.js-post'),
            postUrl = $post.data('url'),
            postDescription = $post.find('.js-post_title').text(),
            postMedia = $post.data('media'),
            type = $this.data('type'),
            network = socialNetworks[type] || null,
            link, url;

        link = {
            url: postUrl || window.location.href.replace('http://localhost:9000/', 'http://airheads.com/'),
            description: postDescription || '',
            media: postMedia || ''
        };

        url = prepareUrl(network, link);
        popUp(network, url);
    }

    function initSharePost($postContainer) {
        $postContainer.on('click', '.share-post_link', shareClickHandler);
    }

})(jQuery, window.airheads);