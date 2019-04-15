// load More is achieved by ajaxing in Tumblr pages, the url would be for example:
//  http://airheads-huge.tumblr.com/page/2 or http://airheads-huge.tumblr.com/tagged/stepbystep/page/2
//
// tumblr only allows filtering by one tag at a time
// for filter, we have to resort to loading by the more restrictive tag and then hiding the posts that don't match the less restrictive tag, in this case "crafts"

(function($, airheads, undefined) {
    "use strict";

    airheads.createModule('tumblr-posts', tumblrPostsCtrl);

    function tumblrPostsCtrl($module) {
        var $postsContainer = $module.find('.tumblr-posts_posts');
        var $posts = $module.find('.tumblr-posts_post');
        var $postsImages = $posts.find('img');
        var $loadMoreBtn = $module.find('.tumblr-posts_load-more');
        var $error = $module.find('.tumblr-posts_error');
        var $filter = $('.filter-posts');
        var $tags = $filter.find('.filter-posts_tag');
        var $allPosts;
        var loadMoreBtnBound = false;
        var tag = window.location.pathname !== '/' ? window.location.pathname : ''; // i.e. '/tagged/crafts'
        var originalTag = (tag.indexOf('tagged/') > -1) ? tag.split('tagged/')[1].toLowerCase() : ''; // cache tag as that will be used as a secondary filter, i.e. 'crafts'
        var initMasonryCount = 0;
        var loadCount = 2;

        var windowLocation = window.location.origin;

        function initMasonry() {

            var $firstImage = $postsContainer.find('.tumblr-posts_post--photo img').first();

            if ($firstImage.length > 0 && $firstImage.height() > 0 || initMasonryCount > 2) {
                $postsContainer.masonry({
                    itemSelector: '.tumblr-posts_post',
                    columnWidth: '.tumblr-posts_grid-sizer',
                    gutter: '.tumblr-posts_gutter-sizer',
                    percentPosition: true
                });
                // keep running again in case content not fully loaded in, good on slow connections
                // setIntervalMasonry();

                // reapply layout once last image has loaded
                lastImageOnLoadApplyFunction($postsImages.last(), reapplyMasonry);

            } else {
                initMasonryCount += 1;

                window.setTimeout(function() {
                    initMasonry();
                }, 400);
            }

        }

        function reapplyMasonry() {
            $postsContainer.masonry('layout');
        }

        function bindLoadMoreBtn() {
            if (!loadMoreBtnBound) {
                $loadMoreBtn.on('click.loadMore', loadMore);
                loadMoreBtnBound = true;
            }
        }

        function filterPostsByTag($posts, tag) {

            var filteredPosts = $posts.map(function() {

                if ($(this).attr('data-tags').indexOf(tag) > -1) {
                    return this;
                }
            });

            return $(filteredPosts);
        }

        //for loaded in posts, like button must be init-ed
        function initLikeButton($posts) {
            // get an array of the post Ids
            var $postsIds = $posts.map(function() {
                return $(this).attr('id');
            }).get();

            // init Like button on new posts
            Tumblr.LikeButton.get_status_by_post_ids($postsIds);
        }

        // check to see if there are more items to load
        function initLoadMore(loadMorePostsImmediately) {
            var morePostsToLoad = false;

            $.ajax({
                url: windowLocation + tag + '/page/' + loadCount
            }).done(function(html) {
                var $morePosts = $(html).find('.tumblr-posts_post');

                // additionally filter by original tag if exists, for example 'crafts' is original, ajax call is for 'stepbystep'
                if (originalTag) {
                    $morePosts = filterPostsByTag($morePosts, originalTag);
                }

                if ($morePosts.length > 0) {
                    $loadMoreBtn.show();

                    // only binds once
                    bindLoadMoreBtn();

                    // immediately load next round of posts
                    if (loadMorePostsImmediately) {
                        // console.log('no posts loaded on page, trying load more immediately');
                        loadMore();
                    }

                } else {
                    $loadMoreBtn.fadeOut();
                }
            });
        }

        function loadMore() {
            $error.html('');
            // console.log('loading from ' + windowLocation + tag + '/page/' + loadCount);

            $postsContainer.addClass('is-loading');

            $.ajax({
                url: windowLocation + tag + '/page/' + loadCount
            }).done(function(html) {
                var $morePosts = $(html).find('.tumblr-posts_post');
                var loadMorePostsImmediately = false;

                window.setTimeout(function() {
                    $postsContainer.removeClass('is-loading');
                }, 500);

                // additionally filter by original tag if exists, for example 'crafts' is original, ajax call is for 'stepbystep'
                if (originalTag) {
                    // console.log('filtering by ' + originalTag);
                    $morePosts = filterPostsByTag($morePosts, originalTag);
                }

                // init LikeButton on posts
                initLikeButton($morePosts);

                $postsContainer.append($morePosts).masonry('appended', $morePosts);

                window.setTimeout(function() {
                    reapplyMasonry();
                }, 500);

                // there's a possibility with filtering that all the posts that get pulled in on ajax get filtered out,
                // in which case we want to immediately load the next page of posts
                if ($morePosts.length === 0) {
                    loadMorePostsImmediately = true;
                }

                loadCount += 1;
                initLoadMore(loadMorePostsImmediately);

            }).fail(function() {
                $error.html('No posts found&hellip; Please select another option.');
            });

        }

        function initFilter() {
            $tags.on('click', function() {
                var $tag = $(this);
                var $pinnedVideo = $filter.siblings('.video');
                var dataTag = $tag.attr('data-tag');

                // only one filter can be active at a time
                $tags.removeClass('filter-posts_tag--active');
                $tag.addClass('filter-posts_tag--active');

                // all means crafts or originalTag
                if (dataTag === 'all') {
                    dataTag = originalTag;

                    // fade in pinned video
                    $pinnedVideo.fadeIn();
                } else {
                    // fade out pinned video
                    $pinnedVideo.fadeOut();
                }

                tag = '/tagged/' + dataTag;

                loadCount = 1;
                clearPostsAndLoadTagged();
            });
        }

        function clearPostsAndLoadTagged() {

            $allPosts = $postsContainer.children('.tumblr-posts_post').remove();
            $postsContainer.masonry('remove', $allPosts);
            loadMore();
        }

        function lastImageOnLoadApplyFunction($img, func, argList) {
            $img.one('load', function() {
                func.apply(null, argList);
            });
        }

        // init function
        function init() {
            initMasonry();
            initLoadMore();

            if ($filter.length > 0) {
                initFilter();
            }

            // init Sharing Links in each post
            $.airheads.sharePost($postsContainer);


        }

        init();


    }

})(jQuery, window.airheads);