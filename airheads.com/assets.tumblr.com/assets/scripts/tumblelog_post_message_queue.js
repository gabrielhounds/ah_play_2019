/*! scripts/tumblelog_post_message_queue.js */ ! function(e) {
    "use strict";
    e.postMessageQueue || (e.postMessageQueue = [], e.postMessageCallback = function(s) {
        e.postMessageQueue.push(s.data)
    }, window.addEventListener ? window.addEventListener("message", e.postMessageCallback) : window.attachEvent("onmessage", e.postMessageCallback))
}(window.Tumblr || (window.Tumblr = {}));