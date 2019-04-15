! function(e, t, i) {
    function n(e, i) {
        t.$body = o, i.initialize(), t.airheads.modules[i.id] = i
    }
    var o = e("body"),
        a = [];
    e(t);
    e.airheads || (e.airheads = {}), t.airheads || (t.airheads = {
        modules: {}
    }), !t.ActiveXObject && "ActiveXObject" in t && a.push("ie11"), /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream && a.push("ios", "touch"), /IEMobile/.test(navigator.userAgent) && a.push("iemobile"), /Android/.test(navigator.userAgent) && a.push("android", "touch"), e.each(a, function(e, t) {
        o.addClass(t)
    }), e(document).on("airheadsModuleInit", n)
}(jQuery, window),
function(e, t, i) {
    "use strict";

    function n(t, i) {
        var n = function() {};
        n = _.extend(n.prototype, {
            id: t,
            initialize: function() {
                n.AirheadsModule(), n.init()
            },
            AirheadsModule: function() {
                n.airheadsModuleCtrl = i, n.init = function(t) {
                    var i;
                    i = void 0 !== t && t ? t : e("[data-module=" + n.id + "]"), i.length > 0 && i.each(function() {
                        n.airheadsModuleCtrl(e(this)), e(this).addClass("module--initialized")
                    })
                }
            }
        }), e(document).trigger("airheadsModuleInit", n)
    }
    t.createModule = n
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";
    var n, o = e(window),
        a = e("body"),
        s = e(".global-header_nav-item"),
        r = window.location.pathname,
        d = e("[data-page]"),
        u = 767,
        c = "",
        l = "",
        h = "hero.gif";
    ! function() {
        "/" === r ? (s.first().addClass("global-header_nav-item--active"), l = "home-page") : "/tagged/crafts" === r ? (c = e(".hero"), l = "crafts-page", o.width() <= u && (h = "hero-m.jpg"), c.html('<div class="hero_slide"><img src="//assets.airheads.com/img/crafts/' + h + '" alt=""></div>'), s.each(function() {
            var t = e(this);
            if (t.attr("href") === r) return t.addClass("global-header_nav-item--active"), !1
        })) : "Not Found" === (n = e("h2").text()) && (l = "404-page", e(".single-post").replaceWith('<div class="main_content"><p class="main_content--message">Page Not Found</p></div>')), a.addClass(l), d.each(function() {
            var t = e(this);
            t.attr("data-page") !== l ? t.remove() : t.css("opacity", "1")
        })
    }()
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";
    ! function() {
        function e(e, t) {
            o[e] || (o[e] = []);
            var i = (++a).toString();
            return o[e].push({
                token: i,
                func: t
            }), i
        }

        function i(e) {
            for (var t in o)
                if (o[t])
                    for (var i = 0, n = o[t].length; i < n; i++)
                        if (o[t][i].token === e) return o[t].splice(i, 1), e;
            return !1
        }

        function n(e, t) {
            return !!o[e] && (setTimeout(function() {
                for (var i = o[e], n = i ? i.length : 0; n--;) i[n].func(e, t)
            }, 0), !0)
        }
        var o = {},
            a = 0;
        t.subscribe = e, t.unsubscribe = i, t.publish = n
    }()
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(e) {
        var i = e.data("module");
        void 0 !== t.modules[i] && t.modules[i].init(e)
    }
    t.reinit = n
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";
    ! function() {
        e(window).on("resize", _.throttle(function() {
            t.publish("windowResize")
        }, 200))
    }()
}(jQuery, window.airheads),
function(e, t) {
    "use strict";

    function i(t) {
        var i = s + t.join(",");
        e.getJSON(i).then(function(t) {
            var i = [];
            t && t.dealers && e.each(t.dealers, function(e, t) {
                console.log(i, t.products), i = i.concat(t.products)
            }), n(i)
        })
    }

    function n(t) {
        e.each(t, function(e, t) {
            if ("yes" === t.availability.toLowerCase()) {
                var i = a[t.sku];
                i && i.attr("href", t["buy-url"])
            }
        })
    }
    var o, a = {},
        s = "http://airheads.channelsight.com/Feeds/Get?format=json&source=MultipleSku&countryCode=en-US&Brand=airheads&skulist=";
    ! function() {
        o = e("[data-upc]");
        var t = [];
        o.each(function(i, n) {
            var o = e(n).data("upc");
            a[o] = e(n), t.push(o)
        }), i(t)
    }()
}(jQuery, window.airheads),
function(e, t) {
    "use strict";

    function i(e) {
        return e.replace(/<[^>]+>/gi, "")
    }

    function n(e, t) {
        var i = window.innerWidth / 2 - e.popup.width / 2,
            n = window.innerHeight / 2 - e.popup.height / 2;
        return window.open(t, "share", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + e.popup.width + ", height=" + e.popup.height + ", top=" + n + ", left=" + i)
    }

    function o(e, t) {
        return e.url.replace(/{{url}}/g, encodeURIComponent(t.url)).replace(/{{description}}/g, encodeURIComponent(i(t.description))).replace(/{{media}}/g, encodeURIComponent(t.media))
    }

    function a() {
        var t, i, a = e(this),
            s = a.closest(".js-post"),
            d = s.data("url"),
            u = s.find(".js-post_title").text(),
            c = s.data("media"),
            l = a.data("type"),
            h = r[l] || null;
        t = {
            url: d || window.location.href.replace("http://localhost:9000/", "http://airheads.com/"),
            description: u || "",
            media: c || ""
        }, i = o(h, t), n(h, i)
    }

    function s(e) {
        e.on("click", ".share-post_link", a)
    }
    var r = {
        facebook: {
            url: "https://www.facebook.com/sharer/sharer.php?m2w&s=100&p[summary]={{description}}&p[url]={{url}}&p[images][0]={{media}}",
            popup: {
                width: 520,
                height: 350
            }
        },
        twitter: {
            url: "https://twitter.com/intent/tweet?text={{description}}&url={{url}}&hashtags=airheads",
            popup: {
                width: 550,
                height: 450
            }
        },
        pinterest: {
            url: "http://pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}",
            popup: {
                width: 700,
                height: 500
            }
        }
    };
    e.airheads.sharePost = s
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(i, n) {
        function o() {
            var e = String(u.options.aspectRatio).split(":"),
                t = u.$iframe.width() * parseInt(e[1], 10) / parseInt(e[0], 10);
            u.$iframe.height(t)
        }

        function a() {
            u.$overlay.addClass("hide"), u.$iframe.attr("src", d)
        }

        function s() {
            t.subscribe("windowResize", o), u.$overlay.on("click", a)
        }

        function r() {
            return {
                videoId: "",
                showInfo: !1,
                autoplay: !0,
                aspectRatio: "16:9"
            }
        }
        var d, u = {},
            r = r();
        return u.el = i, u.$el = e(i), u.$video = u.$el.find(".youtube-player_video"), u.$overlay = u.$el.find(".youtube-player_overlay"), u.$iframe = u.$el.find("iframe"),
            function() {
                void 0 === n && (n = {}), u.options = e.extend({}, r, n), u.options.videoId = u.$video.data("video"), d = "http://www.youtube.com/embed/" + u.options.videoId + "?wmode=opaque&rel=0&fs=1&showinfo=" + u.options.showInfo + "&autoplay=" + u.options.autoplay, s(), window.setTimeout(function() {
                    o()
                }, 2e3)
            }(), u.$el
    }
    e.airheads.youtubePlayer = n
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(i) {
        function n() {
            o.show(), a.show(), s.show(), t.publish("loadIFrameSrc"), t.publish("setContentWidthIframe"), e(window).trigger("scroll"), t.publish("windowResize")
        }
        var o = e(".hero"),
            a = e(".hero-mobile"),
            s = e(".main_content");
        ! function() {
            e(".age-gate-form .submit").on("click", function(t) {
                t.preventDefault();
                var i = new Date,
                    o = i.getTime() / 1e3,
                    a = e(".age-gate-form .month").val(),
                    s = parseInt(a, 10),
                    r = e(".age-gate-form .day").val(),
                    d = parseInt(r, 10),
                    u = e(".age-gate-form .year").val(),
                    c = parseInt(u, 10),
                    l = new Date(s + "/" + d + "/" + c).getTime() / 1e3,
                    h = (o - l) / 31536e3;
                a.length < 2 || r.length < 2 || u.length < 4 || isNaN(s) || isNaN(d) || isNaN(c) || s > 12 || s < 1 || d > 31 || d < 1 || c > i.getFullYear() ? (e("#ageGate .default").hide(), e("#ageGate .error .subhead2").text("Please enter your age in a valid MM-DD-YYYY format."), e("#ageGate .error").show()) : h < 13 ? (e("#ageGate .default").hide(), e("#ageGate .error .subhead2").text("Please grab a parent or guardian to help you register."), e("#ageGate .error").show()) : (e("#ageGate .default").show(), e("#ageGate .error").hide(), e("#ageGate").fadeOut(500, function() {
                    n()
                }))
            })
        }()
    }
    t.createModule("age-gate", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(i) {
        function n() {
            d.lastPosition = {}, d.lastPosition.window = window.pageYOffset, d.lastPosition.nav = i.offset().top, d.fixedPosition = i.offset().top, d.lastPosition.window > d.fixedPosition ? $body.addClass("_fixed-header") : $body.removeClass("_fixed-header"), d.isFixed = $body.hasClass("_fixed-header")
        }

        function o() {
            d.isFixed && window.pageYOffset < d.fixedPosition ? ($body.removeClass("_fixed-header"), d.isFixed = !1) : !d.isFixed && window.pageYOffset > d.fixedPosition && ($body.addClass("_fixed-header"), d.isFixed = !0)
        }

        function a() {
            setTimeout(function() {
                n()
            }, 1e3), t.subscribe("windowResize", n), e(window).on("scroll", _.throttle(o, 50))
        }

        function s() {
            r.on("click", function() {
                i.hasClass("global-header--menu-open") ? i.removeClass("global-header--menu-open") : i.addClass("global-header--menu-open")
            })
        }
        var r = i.find(".global-header_hamburger-menu"),
            d = {};
        ! function() {
            i.hasClass("global-header--not-sticky") || a(), s()
        }()
    }
    t.createModule("global-header", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(e) {
        function t() {
            i.fadeIn(), i.slick({
                autoplaySpeed: 1e4,
                autoplay: !0,
                fade: !0,
                cssEase: "linear",
                speed: 250,
                responsive: [{
                    breakpoint: 767,
                    settings: {
                        autoplaySpeed: 5e3
                    }
                }]
            })
        }
        var i = e.find(".hero_slides"),
            n = e.find(".hero_slide");
        ! function() {
            n.length > 1 ? t() : i.fadeIn()
        }()
    }
    t.createModule("hero", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(e) {
        e.attr("data-contentwidth"), e.find("iframe"), e.attr("data-src")
    }
    t.createModule("iframe", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(t) {
        function i() {
            _.on("submit", function(e) {
                e.preventDefault(), r(""), n(), s() ? r(y.join("<br>")) : d()
            })
        }

        function n() {
            g = C.val(), m = k.val(), w = j.val(), w in Q ? (w = Q[w], v = "agg") : v = "upc"
        }

        function o() {
            for (var e, t = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), i = [], n = 0; n < t.length; n++) e = t[n].split("="), i.push(e[0]), i[e[0]] = e[1];
            return i
        }

        function a() {
            var t = o().product,
                i = e("#" + t);
            i.length && i.attr("selected", "selected")
        }

        function s() {
            return b = !1, y = [], "" === g ? (b = !0, y.push("Please enter a zip code!")) : (isNaN(parseInt(g, 10)) || g.length < 5) && (b = !0, y.push("Please enter a valid zip code!")), "0" === m && (b = !0, y.push("Please select a distance!")), parseInt(w, 10) < 1 && (b = !0, y.push("Please select a product!")), b
        }

        function r(e) {
            x.html(e)
        }

        function d() {
            M.addClass("_slide-down");
            var t = "http://productlocator.infores.com/productlocator/servlet/ProductLocatorEngine?clientid=245&productfamilyid=ARHD&zip=" + g + "&searchradius=" + m + "&producttype=" + v + "&productid=" + w + "&storespagenum=" + T;
            e.ajax({
                url: t,
                cache: !0
            }).done(function(t) {
                var i = e.parseXML(t),
                    n = e(i).find("STORE"),
                    o = "";
                if (N = 0, (S = parseInt(e(i).find("STORES").last().attr("COUNT"), 10)) < 1 || isNaN(S)) return r("Bummer, no stores near you have this item. Check back again soon!"), M.removeClass("_slide-down"), !1;
                p = 10 * (T - 1) + 1, n.each(function(t) {
                    var i = e(this),
                        n = i.find("NAME").text(),
                        a = i.find("PHONE").text(),
                        s = i.find("ADDRESS").text(),
                        r = i.find("CITY").text(),
                        d = i.find("STATE").text(),
                        u = i.find("ZIP").text(),
                        c = i.find("LATITUDE").text(),
                        l = i.find("LONGITUDE").text();
                    o += "<div class='store'><h5>" + (p + t) + ". " + n + "</h5><p class='address'>" + s + "</p><p><span class='city'>" + r + "</span>, <span class='state'>" + d + "</span> <span class='zip'>" + u + "</span></p><p class='phone'><a href='tel:" + a.replace(/[^0-9.]/g, "") + "'>" + a + "</a></p><a class='direction' target='_blank' href='https://maps.google.com/?daddr=" + s + "," + r + "," + d + " " + u + "'><span>Get Directions</span></a><input type='hidden' class='latitude' value=" + c + "/><input type='hidden' class='longitude' value=" + l + "/><hr /></div>", N += 1
                }), f = N + 10 * (T - 1), T > 1 && P.show(), f < S && I.show(), A.html(o), h(), u()
            })
        }

        function u() {
            e(".result-index-start").html(p), e(".result-index-end").html(f), e(".result-length").html(S), e(".result-distance").html(m), e(".result-zip").html(g)
        }

        function c(e) {
            T += e, $.css("opacity", 0), d()
        }

        function l() {
            I.on("click", function() {
                c(1)
            }), P.on("click", function() {
                c(-1)
            })
        }

        function h() {
            var t, i = new google.maps.LatLngBounds,
                n = {
                    mapTypeId: "roadmap"
                };
            t = new google.maps.Map(document.getElementById("map"), n);
            var o, a, s, r = [],
                d = [],
                u = [];
            if (A.children().length > 0) {
                for (e(".store").each(function(t) {
                        r.push(e(this).find(".latitude").val().replace("/", "")), d.push(e(this).find(".longitude").val().replace("/", "")), u.push("<span>" + e(this).find("h5").html() + "</span><br />" + e(this).find(".address").html() + "<br />" + e(this).find(".city").html() + ", " + e(this).find(".state").html() + " " + e(this).find(".zip").html() + "<br /><a target='_blank' href='" + e(this).find(".direction").attr("href") + "'>Get Directions</a>")
                    }), a = 0; a < r.length; a++) {
                    var c = new google.maps.LatLng(r[a], d[a]);
                    i.extend(c), s = new google.maps.Marker({
                        position: c,
                        map: t,
                        icon: "//assets.airheads.com/img/oscar.png"
                    }), o = new google.maps.InfoWindow({
                        content: '<p id="bodyContent">' + u[a] + "</p></div>",
                        maxWidth: 200
                    }), google.maps.event.addListener(s, "click", function() {
                        o.open(t, this)
                    })
                }
                t.fitBounds(i), $.css("opacity", 1), e(window).width() < 768 && e("#map").detach().prependTo("#store-wrap")
            }
        }
        var p, f, g, m, w, v, b, y, _ = e("#ctl00"),
            x = e("#error"),
            C = e("#txtZip"),
            k = e("#ddlDistance"),
            j = e("#ddlProducts"),
            I = e("#Next"),
            P = e("#Prev"),
            M = e("#store-wrap"),
            $ = e(".store-wrap_inner"),
            A = e("#stores"),
            T = 1,
            S = 0,
            N = 0,
            Q = {
                1: "Airheads%20bars",
                2: "Airheads%20bites%20",
                3: "Airheads%20Xtremes%20Belts",
                4: "Airheads%20Xtremes%20Bites%20",
                5: "Airheads%20Xtremes%20Sourfuls",
                6: "Airheads%20Gum",
                7: "Airheads%20Gummies",
                8: "Airheads%20Soft%20Filled%20bites"
            };
        ! function() {
            a(), i(), l()
        }()
    }
    t.createModule("product-locator", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(t) {
        function i() {
            o.load(function() {
                var e = window.location.hash;
                e && n(e)
            }), a.each(function(t) {
                e(this).on({
                    click: function(t) {
                        var i = e(this).attr("href");
                        t.preventDefault(), n(i)
                    },
                    mouseover: function() {
                        e(".product-nav_link:nth-child(" + (e(this).index() + 1) + ")").addClass("product-nav_link--hover")
                    },
                    mouseout: function() {
                        e(".product-nav_link:nth-child(" + (e(this).index() + 1) + ")").removeClass("product-nav_link--hover")
                    }
                })
            })
        }

        function n(t) {
            var i = e(".global-header").outerHeight(!0),
                n = e(t).offset().top - i;
            if (0 !== n) return e("html, body").animate({
                scrollTop: n
            }, 500, function() {
                location.hash = t
            }), history.pushState({}, "", t), !1
        }
        var o = e(window),
            a = t.find(".js-product-nav_link");
        ! function() {
            i()
        }()
    }
    t.createModule("product-nav", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(t) {
        function i(e) {
            var t = e.find(".slick-active").find("img").height() / 2;
            e.find(".slick-arrow").css("top", t + "px")
        }

        function n() {
            a.each(function(t) {
                var n = e(this),
                    a = n.find(".product-slider_slide");
                if (n.fadeIn(), 1 === a.length) return "continue";
                n.slick({
                    adaptiveHeight: !0,
                    appendDots: e(".product-slider_nav")[t],
                    cssEase: "linear",
                    customPaging: function(t, i) {
                        var n = e(t.$slides[i]).data("thumb");
                        return 0 === i ? "" : '<a class="product-slider_thumb product-slider_thumb--' + n + '" data-role="none" role="button" aria-required="false" tabindex="0"></a>'
                    },
                    dots: !0,
                    fade: !0,
                    speed: 400
                }).on("beforeChange", function(e, t, i, o) {
                    0 === i && n.closest(".product-slider").removeClass("product-slider--intro-active")
                }).on("setPosition", function() {
                    o.width() <= s && i(n)
                }).on("afterChange", function(e, t, i) {
                    0 === i && n.closest(".product-slider").addClass("product-slider--intro-active")
                })
            })
        }
        var o = e(window),
            a = e(".product-slider_slides"),
            s = 960;
        ! function() {
            n()
        }()
    }
    t.createModule("product-slider", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(t) {
        function i() {
            "post" === d[1] && /^-?\d[0-9]*$/.test(d[2]) && d[3].match(u + "$") ? n() : (o(), t.show())
        }

        function n() {
            e.ajax({
                url: "/project/" + d[3]
            }).fail(function() {
                s.html('<p class="single-post_error">Error loading content.</p>')
            }).done(function(e) {
                t.replaceWith(e)
            }).always(function() {
                t.show()
            })
        }

        function o() {
            s.find(".avatar").attr("src", function() {
                return this.src.replace(/_16\.png/g, "_64.png")
            })
        }

        function a() {
            var i = t.find(".js-external-url"),
                n = i.data("external-url");
            i.length > 0 && e(".single-post_photo").wrap('<a href="' + n + '" target="_blank"></a>')
        }
        var s = t.find(".single-post_inner"),
            r = "/" !== window.location.pathname ? window.location.pathname : "",
            d = r.split("/"),
            u = "-project";
        ! function() {
            i(), a(), e.airheads.sharePost(s)
        }()
    }
    t.createModule("single-post", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(t) {
        function i() {
            var e = p.find(".tumblr-posts_post--photo img").first();
            e.length > 0 && e.height() > 0 || C > 2 ? (p.masonry({
                itemSelector: ".tumblr-posts_post",
                columnWidth: ".tumblr-posts_grid-sizer",
                gutter: ".tumblr-posts_gutter-sizer",
                percentPosition: !0
            }), l(g.last(), n)) : (C += 1, window.setTimeout(function() {
                i()
            }, 400))
        }

        function n() {
            p.masonry("layout")
        }

        function o() {
            y || (m.on("click.loadMore", d), y = !0)
        }

        function a(t, i) {
            var n = t.map(function() {
                if (e(this).attr("data-tags").indexOf(i) > -1) return this
            });
            return e(n)
        }

        function s(t) {
            var i = t.map(function() {
                return e(this).attr("id")
            }).get();
            Tumblr.LikeButton.get_status_by_post_ids(i)
        }

        function r(t) {
            e.ajax({
                url: j + _ + "/page/" + k
            }).done(function(i) {
                var n = e(i).find(".tumblr-posts_post");
                x && (n = a(n, x)), n.length > 0 ? (m.show(), o(), t && d()) : m.fadeOut()
            })
        }

        function d() {
            w.html(""), p.addClass("is-loading"), e.ajax({
                url: j + _ + "/page/" + k
            }).done(function(t) {
                var i = e(t).find(".tumblr-posts_post"),
                    o = !1;
                window.setTimeout(function() {
                    p.removeClass("is-loading")
                }, 500), x && (i = a(i, x)), s(i), p.append(i).masonry("appended", i), window.setTimeout(function() {
                    n()
                }, 500), 0 === i.length && (o = !0), k += 1, r(o)
            }).fail(function() {
                w.html("No posts found&hellip; Please select another option.")
            })
        }

        function u() {
            b.on("click", function() {
                var t = e(this),
                    i = v.siblings(".video"),
                    n = t.attr("data-tag");
                b.removeClass("filter-posts_tag--active"), t.addClass("filter-posts_tag--active"), "all" === n ? (n = x, i.fadeIn()) : i.fadeOut(), _ = "/tagged/" + n, k = 1, c()
            })
        }

        function c() {
            h = p.children(".tumblr-posts_post").remove(), p.masonry("remove", h), d()
        }

        function l(e, t, i) {
            e.one("load", function() {
                t.apply(null, i)
            })
        }
        var h, p = t.find(".tumblr-posts_posts"),
            f = t.find(".tumblr-posts_post"),
            g = f.find("img"),
            m = t.find(".tumblr-posts_load-more"),
            w = t.find(".tumblr-posts_error"),
            v = e(".filter-posts"),
            b = v.find(".filter-posts_tag"),
            y = !1,
            _ = "/" !== window.location.pathname ? window.location.pathname : "",
            x = _.indexOf("tagged/") > -1 ? _.split("tagged/")[1].toLowerCase() : "",
            C = 0,
            k = 2,
            j = window.location.origin;
        ! function() {
            i(), r(), v.length > 0 && u(), e.airheads.sharePost(p)
        }()
    }
    t.createModule("tumblr-posts", n)
}(jQuery, window.airheads),
function(e, t, i) {
    "use strict";

    function n(t) {
        e.airheads.youtubePlayer(t.find(".youtube-player"))
    }
    t.createModule("video", n)
}(jQuery, window.airheads);
//# sourceMappingURL=app.js.map