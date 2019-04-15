! function(e, t, r) {
    "use strict";

    function s(e) {
        return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
    }

    function n() {
        I = !1, B = e.devicePixelRatio, U = {}, $ = {}, A.DPR = B || 1, L.width = Math.max(e.innerWidth || 0, b.clientWidth), L.height = Math.max(e.innerHeight || 0, b.clientHeight), L.vw = L.width / 100, L.vh = L.height / 100, m = [L.height, L.width, B].join("-"), L.em = A.getEmValue(), L.rem = L.em
    }

    function i(e, t, r, s) {
        var n, i, c, a;
        return "saveData" === z.algorithm ? e > 2.7 ? a = r + 1 : (i = t - r, n = Math.pow(e - .6, 1.5), c = i * n, s && (c += .1 * n), a = e + c) : a = r > 1 ? Math.sqrt(e * t) : e, a > r
    }

    function c(e) {
        var t, r = A.getSet(e),
            s = !1;
        "pending" !== r && (s = m, r && (t = A.setRes(r), A.applySetCandidate(t, e))), e[A.ns].evaled = s
    }

    function a(e, t) {
        return e.res - t.res
    }

    function u(e, t, r) {
        var s;
        return !r && t && (r = e[A.ns].sets, r = r && r[r.length - 1]), s = l(t, r), s && (t = A.makeUrl(t), e[A.ns].curSrc = t, e[A.ns].curCan = s, s.res || K(s, s.set.sizes)), s
    }

    function l(e, t) {
        var r, s, n;
        if (e && t)
            for (n = A.parseSet(t), e = A.makeUrl(e), r = 0; r < n.length; r++)
                if (e === A.makeUrl(n[r].url)) {
                    s = n[r];
                    break
                }
        return s
    }

    function o(e, t) {
        var r, s, n, i, c = e.getElementsByTagName("source");
        for (r = 0, s = c.length; r < s; r++) n = c[r], n[A.ns] = !0, (i = n.getAttribute("srcset")) && t.push({
            srcset: i,
            media: n.getAttribute("media"),
            type: n.getAttribute("type"),
            sizes: n.getAttribute("sizes")
        })
    }

    function f(e, t) {
        function r(t) {
            var r, s = t.exec(e.substring(f));
            if (s) return r = s[0], f += r.length, r
        }

        function n() {
            var e, r, s, n, a, u, l, o, f, d = !1,
                h = {};
            for (n = 0; n < c.length; n++) a = c[n], u = a[a.length - 1], l = a.substring(0, a.length - 1), o = parseInt(l, 10), f = parseFloat(l), q.test(l) && "w" === u ? ((e || r) && (d = !0), 0 === o ? d = !0 : e = o) : N.test(l) && "x" === u ? ((e || r || s) && (d = !0), f < 0 ? d = !0 : r = f) : q.test(l) && "h" === u ? ((s || r) && (d = !0), 0 === o ? d = !0 : s = o) : d = !0;
            d || (h.url = i, e && (h.w = e), r && (h.d = r), s && (h.h = s), s || r || e || (h.d = 1), 1 === h.d && (t.has1x = !0), h.set = t, p.push(h))
        }
        for (var i, c, a, u, l, o = e.length, f = 0, p = [];;) {
            if (r(F), f >= o) return p;
            i = r(H), c = [], "," === i.slice(-1) ? (i = i.replace(j, ""), n()) : function() {
                for (r(G), a = "", u = "in descriptor";;) {
                    if (l = e.charAt(f), "in descriptor" === u)
                        if (s(l)) a && (c.push(a), a = "", u = "after descriptor");
                        else {
                            if ("," === l) return f += 1, a && c.push(a), void n();
                            if ("(" === l) a += l, u = "in parens";
                            else {
                                if ("" === l) return a && c.push(a), void n();
                                a += l
                            }
                        }
                    else if ("in parens" === u)
                        if (")" === l) a += l, u = "in descriptor";
                        else {
                            if ("" === l) return c.push(a), void n();
                            a += l
                        }
                    else if ("after descriptor" === u)
                        if (s(l));
                        else {
                            if ("" === l) return void n();
                            u = "in descriptor", f -= 1
                        }
                    f += 1
                }
            }()
        }
    }

    function p(e) {
        var t, r, n, i, c, a, u = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (r = function(e) {
                function t() {
                    i && (c.push(i), i = "")
                }

                function r() {
                    c[0] && (a.push(c), c = [])
                }
                for (var n, i = "", c = [], a = [], u = 0, l = 0, o = !1;;) {
                    if ("" === (n = e.charAt(l))) return t(), r(), a;
                    if (o) {
                        if ("*" === n && "/" === e[l + 1]) {
                            o = !1, l += 2, t();
                            continue
                        }
                        l += 1
                    } else {
                        if (s(n)) {
                            if (e.charAt(l - 1) && s(e.charAt(l - 1)) || !i) {
                                l += 1;
                                continue
                            }
                            if (0 === u) {
                                t(), l += 1;
                                continue
                            }
                            n = " "
                        } else if ("(" === n) u += 1;
                        else if (")" === n) u -= 1;
                        else {
                            if ("," === n) {
                                t(), r(), l += 1;
                                continue
                            }
                            if ("/" === n && "*" === e.charAt(l + 1)) {
                                o = !0, l += 2;
                                continue
                            }
                        }
                        i += n, l += 1
                    }
                }
            }(e), n = r.length, t = 0; t < n; t++)
            if (i = r[t], c = i[i.length - 1], function(e) {
                    return !!(u.test(e) && parseFloat(e) >= 0) || (!!l.test(e) || ("0" === e || "-0" === e || "+0" === e))
                }(c)) {
                if (a = c, i.pop(), 0 === i.length) return a;
                if (i = i.join(" "), A.matchesMedia(i)) return a
            }
        return "100vw"
    }
    t.createElement("picture");
    var d, h, m, A = {},
        g = !1,
        v = function() {},
        w = t.createElement("img"),
        S = w.getAttribute,
        x = w.setAttribute,
        y = w.removeAttribute,
        b = t.documentElement,
        E = {},
        z = {
            algorithm: ""
        },
        T = navigator.userAgent,
        R = /rident/.test(T) || /ecko/.test(T) && T.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        C = "currentSrc",
        M = /\s+\+?\d+(e\d+)?w/,
        P = /(\([^)]+\))?\s*(.+)/,
        D = e.picturefillCFG,
        k = "font-size:100%!important;",
        I = !0,
        U = {},
        $ = {},
        B = e.devicePixelRatio,
        L = {
            px: 1,
            in: 96
        },
        Q = t.createElement("a"),
        W = !1,
        G = /^[ \t\n\r\u000c]+/,
        F = /^[, \t\n\r\u000c]+/,
        H = /^[^ \t\n\r\u000c]+/,
        j = /[,]+$/,
        q = /^\d+$/,
        N = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        O = function(e, t, r, s) {
            e.addEventListener ? e.addEventListener(t, r, s || !1) : e.attachEvent && e.attachEvent("on" + t, r)
        },
        V = function(e) {
            var t = {};
            return function(r) {
                return r in t || (t[r] = e(r)), t[r]
            }
        },
        J = function() {
            var e = /^([\d\.]+)(em|vw|px)$/,
                t = function() {
                    for (var e = arguments, t = 0, r = e[0]; ++t in e;) r = r.replace(e[t], e[++t]);
                    return r
                },
                r = V(function(e) {
                    return "return " + t((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(t, s) {
                var n;
                if (!(t in U))
                    if (U[t] = !1, s && (n = t.match(e))) U[t] = n[1] * L[n[2]];
                    else try {
                        U[t] = new Function("e", r(t))(L)
                    } catch (e) {}
                return U[t]
            }
        }(),
        K = function(e, t) {
            return e.w ? (e.cWidth = A.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
        },
        X = function(e) {
            if (g) {
                var r, s, n, i = e || {};
                if (i.elements && 1 === i.elements.nodeType && ("IMG" === i.elements.nodeName.toUpperCase() ? i.elements = [i.elements] : (i.context = i.elements, i.elements = null)), r = i.elements || A.qsa(i.context || t, i.reevaluate || i.reselect ? A.sel : A.selShort), n = r.length) {
                    for (A.setupRun(i), W = !0, s = 0; s < n; s++) A.fillImg(r[s], i);
                    A.teardownRun(i)
                }
            }
        };
    e.console && console.warn, C in w || (C = "src"), E["image/jpeg"] = !0, E["image/gif"] = !0, E["image/png"] = !0, E["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), A.ns = ("pf" + (new Date).getTime()).substr(0, 9), A.supSrcset = "srcset" in w, A.supSizes = "sizes" in w, A.supPicture = !!e.HTMLPictureElement, A.supSrcset && A.supPicture && !A.supSizes && function(e) {
        w.srcset = "data:,a", e.src = "data:,a", A.supSrcset = w.complete === e.complete, A.supPicture = A.supSrcset && A.supPicture
    }(t.createElement("img")), A.supSrcset && !A.supSizes ? function() {
        var e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            r = t.createElement("img"),
            s = function() {
                2 === r.width && (A.supSizes = !0), h = A.supSrcset && !A.supSizes, g = !0, setTimeout(X)
            };
        r.onload = s, r.onerror = s, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", r.src = e
    }() : g = !0, A.selShort = "picture>img,img[srcset]", A.sel = A.selShort, A.cfg = z, A.DPR = B || 1, A.u = L, A.types = E, A.setSize = v, A.makeUrl = V(function(e) {
        return Q.href = e, Q.href
    }), A.qsa = function(e, t) {
        return "querySelector" in e ? e.querySelectorAll(t) : []
    }, A.matchesMedia = function() {
        return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? A.matchesMedia = function(e) {
            return !e || matchMedia(e).matches
        } : A.matchesMedia = A.mMQ, A.matchesMedia.apply(this, arguments)
    }, A.mMQ = function(e) {
        return !e || J(e)
    }, A.calcLength = function(e) {
        var t = J(e, !0) || !1;
        return t < 0 && (t = !1), t
    }, A.supportsType = function(e) {
        return !e || E[e]
    }, A.parseSize = V(function(e) {
        var t = (e || "").match(P);
        return {
            media: t && t[1],
            length: t && t[2]
        }
    }), A.parseSet = function(e) {
        return e.cands || (e.cands = f(e.srcset, e)), e.cands
    }, A.getEmValue = function() {
        var e;
        if (!d && (e = t.body)) {
            var r = t.createElement("div"),
                s = b.style.cssText,
                n = e.style.cssText;
            r.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", b.style.cssText = k, e.style.cssText = k, e.appendChild(r), d = r.offsetWidth, e.removeChild(r), d = parseFloat(d, 10), b.style.cssText = s, e.style.cssText = n
        }
        return d || 16
    }, A.calcListLength = function(e) {
        if (!(e in $) || z.uT) {
            var t = A.calcLength(p(e));
            $[e] = t || L.width
        }
        return $[e]
    }, A.setRes = function(e) {
        var t;
        if (e) {
            t = A.parseSet(e);
            for (var r = 0, s = t.length; r < s; r++) K(t[r], e.sizes)
        }
        return t
    }, A.setRes.res = K, A.applySetCandidate = function(e, t) {
        if (e.length) {
            var r, s, n, c, l, o, f, p, d, h = t[A.ns],
                m = A.DPR;
            if (o = h.curSrc || t[C], f = h.curCan || u(t, o, e[0].set), f && f.set === e[0].set && ((d = R && !t.complete && f.res - .1 > m) || (f.cached = !0, f.res >= m && (l = f))), !l)
                for (e.sort(a), c = e.length, l = e[c - 1], s = 0; s < c; s++)
                    if (r = e[s], r.res >= m) {
                        n = s - 1, l = e[n] && (d || o !== A.makeUrl(r.url)) && i(e[n].res, r.res, m, e[n].cached) ? e[n] : r;
                        break
                    }
            l && (p = A.makeUrl(l.url), h.curSrc = p, h.curCan = l, p !== o && A.setSrc(t, l), A.setSize(t))
        }
    }, A.setSrc = function(e, t) {
        var r;
        e.src = t.url, "image/svg+xml" === t.set.type && (r = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = r))
    }, A.getSet = function(e) {
        var t, r, s, n = !1,
            i = e[A.ns].sets;
        for (t = 0; t < i.length && !n; t++)
            if (r = i[t], r.srcset && A.matchesMedia(r.media) && (s = A.supportsType(r.type))) {
                "pending" === s && (r = s), n = r;
                break
            }
        return n
    }, A.parseSets = function(e, t, r) {
        var s, n, i, c, a = t && "PICTURE" === t.nodeName.toUpperCase(),
            u = e[A.ns];
        (void 0 === u.src || r.src) && (u.src = S.call(e, "src"), u.src ? x.call(e, "data-pfsrc", u.src) : y.call(e, "data-pfsrc")), (void 0 === u.srcset || r.srcset || !A.supSrcset || e.srcset) && (s = S.call(e, "srcset"), u.srcset = s, c = !0), u.sets = [], a && (u.pic = !0, o(t, u.sets)), u.srcset ? (n = {
            srcset: u.srcset,
            sizes: S.call(e, "sizes")
        }, u.sets.push(n), (i = (h || u.src) && M.test(u.srcset || "")) || !u.src || l(u.src, n) || n.has1x || (n.srcset += ", " + u.src, n.cands.push({
            url: u.src,
            d: 1,
            set: n
        }))) : u.src && u.sets.push({
            srcset: u.src,
            sizes: null
        }), u.curCan = null, u.curSrc = void 0, u.supported = !(a || n && !A.supSrcset || i && !A.supSizes), c && A.supSrcset && !u.supported && (s ? (x.call(e, "data-pfsrcset", s), e.srcset = "") : y.call(e, "data-pfsrcset")), u.supported && !u.srcset && (!u.src && e.src || e.src !== A.makeUrl(u.src)) && (null === u.src ? e.removeAttribute("src") : e.src = u.src), u.parsed = !0
    }, A.fillImg = function(e, t) {
        var r, s = t.reselect || t.reevaluate;
        e[A.ns] || (e[A.ns] = {}), r = e[A.ns], (s || r.evaled !== m) && (r.parsed && !t.reevaluate || A.parseSets(e, e.parentNode, t), r.supported ? r.evaled = m : c(e))
    }, A.setupRun = function() {
        W && !I && B === e.devicePixelRatio || n()
    }, A.supPicture ? (X = v, A.fillImg = v) : function() {
        var r, s = e.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            n = function() {
                var e = t.readyState || "";
                i = setTimeout(n, "loading" === e ? 200 : 999), t.body && (A.fillImgs(), (r = r || s.test(e)) && clearTimeout(i))
            },
            i = setTimeout(n, t.body ? 9 : 99),
            c = b.clientHeight,
            a = function() {
                I = Math.max(e.innerWidth || 0, b.clientWidth) !== L.width || b.clientHeight !== c, c = b.clientHeight, I && A.fillImgs()
            };
        O(e, "resize", function(e, t) {
            var r, s, n = function() {
                var i = new Date - s;
                i < t ? r = setTimeout(n, t - i) : (r = null, e())
            };
            return function() {
                s = new Date, r || (r = setTimeout(n, t))
            }
        }(a, 99)), O(t, "readystatechange", n)
    }(), A.picturefill = X, A.fillImgs = X, A.teardownRun = v, X._ = A, e.picturefillCFG = {
        pf: A,
        push: function(e) {
            var t = e.shift();
            "function" == typeof A[t] ? A[t].apply(A, e) : (z[t] = e[0], W && A.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; D && D.length;) e.picturefillCFG.push(D.shift());
    e.picturefill = X, "object" == typeof module && "object" == typeof module.exports ? module.exports = X : "function" == typeof define && define.amd && define("picturefill", function() {
        return X
    }), A.supPicture || (E["image/webp"] = function(t, r) {
        var s = new e.Image;
        return s.onerror = function() {
            E[t] = !1, X()
        }, s.onload = function() {
            E[t] = 1 === s.width, X()
        }, s.src = r, "pending"
    }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);