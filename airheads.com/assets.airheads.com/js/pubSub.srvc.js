/**
 * Custom services are used to provide functionality that is reusable
 * across modules and to help them communicate.  This allows our code
 * to be decoupled and modules to be independant of other modules.
 *
 * This service is a pubSub service which allows one module or component
 * to subscribe to a certain event and other modules or components to
 * publish data to it.
 *
 * var subscription = airheads.subscribe('demo.demoEvent', function(topic, data){
 *     //Do something with data
 * });
 *
 * airheads.publish('demo.demoEvent', {demo: true});
 * airheads.unsubscribe(subscription);
 */

(function($, airheads, undefined) {
    "use strict";

    pubSub();

    function pubSub() {
        var topics = {},
            subUid = 0;

        airheads.subscribe = subscribe;
        airheads.unsubscribe = unsubscribe;
        airheads.publish = publish;

        function subscribe(topic, func) {
            if (!topics[topic]) {
                topics[topic] = [];
            }
            var token = (++subUid).toString();
            topics[topic].push({
                token: token,
                func: func
            });
            return token;
        }

        function unsubscribe(token) {
            for (var m in topics) {
                if (topics[m]) {
                    for (var i = 0, j = topics[m].length; i < j; i++) {
                        if (topics[m][i].token === token) {
                            topics[m].splice(i, 1);
                            return token;
                        }
                    }
                }
            }

            return false;
        }

        function publish(topic, args) {
            if (!topics[topic]) {
                return false;
            }

            setTimeout(function() {
                var subscribers = topics[topic],
                    len = subscribers ? subscribers.length : 0;

                while (len--) {
                    subscribers[len].func(topic, args);
                }
            }, 0);

            return true;
        }
    }
})(jQuery, window.airheads);