/*! scripts/vendor/yahoo/rapid/rapid-3.53.1.js */
"undefined" != typeof YAHOO && YAHOO || (YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.EventTypes = function() {
    function e(e, t, n) {
        this.yqlid = e, this.eventName = t, this.spaceidPrefix = n
    }
    var t = "richview",
        n = "contentmodification";
    e.prototype = {
        getYQLID: function() {
            return this.yqlid
        },
        getEventName: function() {
            return this.eventName
        }
    };
    var r = {
        pageview: new e("pv", "pageview", ""),
        simple: new e("lv", "event", "P"),
        linkview: new e("lv", "linkview", "P"),
        richview: new e(t, t, "R"),
        contentmodification: new e(t, n, "R"),
        dwell: new e("lv", "dwell", "D")
    };
    return {
        getEventByName: function(e) {
            return r[e]
        }
    }
}(), YAHOO.i13n.Rapid = function(e) {
    function t() {}

    function n(e) {
        this.map = {}, this.count = 0, e && this.absorb(e)
    }

    function r() {
        this.map = {}, this.count = 0
    }

    function i(e, t) {
        if (!e) return null;
        null === t && (t = !1);
        var n = new r,
            i = B.getAttribute(e, B.data_action_outcome);
        i && n.set("outcm", i);
        var o = B.getAttribute(e, "data-ylk");
        if (null === o || 0 === o.length) return n;
        for (var a = o.split(B.ylk_pair_delim), s = 0, l = a.length; s < l; s++) {
            var u = a[s].split(B.ylk_kv_delim);
            if (2 === u.length) {
                var c = u[0],
                    d = u[1];
                null !== c && "" !== c && null !== d && ("_p" !== c || t) && n.set(c, d)
            }
        }
        return n
    }

    function o(e, t, n) {
        return e < t ? t : e > n ? n : e
    }

    function a(t, n) {
        W.set("A_sid", YAHOO.i13n.A_SID || B.rand()), W.set("_w", B.rmProto(n)), t ? W.absorb(t) : e.keys && W.absorb(e.keys)
    }

    function s(e) {
        var t = (YAHOO.i13n, YAHOO.i13n.TEST_ID || e.test_id),
            n = e.location || document.location.href;
        a(e.keys, n), t && (t = B.norm("" + t));
        var r = 300,
            i = 700,
            s = 1e4,
            l = "ganon.yahoo.com",
            u = e.override || {},
            c = {
                override: u,
                version: "3.53.1",
                comboName: "VERSIONED-DEV",
                keys: W,
                referrer: e.referrer,
                getReferrer: function() {
                    return B.norm(B.clref("undefined" != typeof this.referrer ? this.referrer : document.referrer))
                },
                spaceid: B.norm(u.spaceid || YAHOO.i13n.SPACEID || e.spaceid),
                yrid: B.norm(e.yrid || ""),
                oo: e.oo ? "1" : "0",
                nol: e.nol ? "1" : "0",
                yql_enabled: e.yql_enabled !== !1,
                fing: 1 == e.use_fing,
                linktrack_attribut: e.lt_attr || "text",
                tracked_mods: e.tracked_mods || [],
                tracked_mods_viewability: e.tracked_mods_viewability || [],
                viewability: e.viewability !== !1,
                viewability_time: e.viewability_time || 300,
                viewability_px: e.viewability_px || 50,
                lt_attr: e.lt_attr || "text",
                client_only: "undefined" == typeof e.client_only || !!e.client_only,
                text_link_len: e.text_link_len || -1,
                test_id: t,
                yql_host: e.yql_host || "udc.yahoo.com",
                yql_path: e.yql_path || "/v2/public/yql",
                geo_host: e.geo_host || "geo.yahoo.com",
                anonymized: e.anonymized === !0,
                click_timeout: e.click_timeout || s,
                compr_timeout: e.compr_timeout || i,
                compr_on: e.compr_on !== !1,
                compr_type: e.compr_type || "deflate",
                webworker_file: YAHOO.i13n.WEBWORKER_FILE || e.webworker_file || null,
                nofollow_classname: e.nofollow_class || "rapidnofollow",
                no_click_listen: e.rapid_noclick_resp || "rapid-noclick-resp",
                nonanchor_track_class: e.nonanchor_track_class || "rapid-nonanchor-lt",
                anc_pos_attr: "data-rapid_p",
                anc_v9y_attr: "data-v9y",
                deb: e.debug === !0,
                ldbg: e.ldbg > 0 || n.indexOf("yhldebug=1") > 0,
                addmod_timeout: e.addmodules_timeout || 300,
                ult_token_capture: "boolean" == typeof e.ult_token_capture && e.ult_token_capture,
                track_type: e.track_type || "data-tracktype",
                dwell_on: e.dwell_on !== !1,
                prerender: e.prerender === !0,
                query_parameters: e.query_parameters === !0,
                async_all_clicks: e.async_all_clicks === !0,
                click_postmsg: e.click_postmsg || {},
                apv: e.apv !== !1,
                apv_time: e.apv_time || 500,
                apv_px: e.apv_px || 500,
                ex: e.ex === !0,
                persist_asid: e.persist_asid === !0,
                track_right_click: e.track_right_click !== !1,
                gen_bcookie: e.gen_bcookie === !0,
                bcookie_override: e.bcookie_override || null,
                skip_attr: e.skip_attr || "data-rapid-skip",
                parse_dom: e.parse_dom === !0,
                pageview_on_init: e.pageview_on_init !== !1,
                perf_navigationtime: e.perf_navigationtime || 0,
                perf_commontime: e.perf_commontime || null,
                perf_usertime: e.perf_usertime || null,
                perf_resourcetime: e.perf_resourcetime || 0,
                sample: e.sample || {},
                loc: n,
                fpc: !(e.fpc === !1),
                accountGUID: e.accountGUID || null,
                customUID: e.customUID || null
            };
        if (c.anonymized && (c.geo_host = l), (c.anonymized || c.bcookie_override) && (c.yql_enabled = !1), c.customUID) {
            var d = c.customUID;
            "object" == typeof d && d.type && d.id ? c.customUID = B.aug({}, d) : (console.error('customUID must be an Object with "id" and "type"'), c.customUID = null)
        }
        var f = 1 * c.compr_timeout;
        return B.isNum(f) ? c.compr_timeout = o(f, r, i) : c.compr_timeout = i, c.ldbg && c.click_timeout != s && console.warn("Click timeout set to " + c.click_timeout + "ms (default 10000ms)"), e.apv_callback && "function" == typeof e.apv_callback ? c.apv_callback = e.apv_callback : c.apv_callback = null, c
    }

    function l() {
        W.set("A_sid", B.rand())
    }

    function u() {
        return "Rapid-" + F.version + "(" + (new Date).getTime() + "):"
    }

    function c(e) {
        F.ldbg && console.warn("RAPID WARNING: " + e)
    }

    function d(e) {
        F.ldbg && console.error("RAPID ERROR: " + e)
    }

    function f(e) {
        F.ldbg && console.log(u() + e)
    }

    function p(e) {
        var t = {
                B: {
                    log: !1
                },
                BX: {
                    log: !0,
                    key: "bx"
                },
                WV: {
                    log: !0,
                    key: "_wv"
                },
                TT: {
                    log: !1
                },
                D: {
                    log: !1
                },
                _ga: {
                    log: !0,
                    key: "_ga"
                },
                yx: {
                    log: !0,
                    key: "_yx"
                },
                rxx: {
                    log: !0,
                    key: "_rx"
                },
                UNAUTHID: {
                    log: !0,
                    key: "aol_unauth"
                },
                _utd: {
                    log: !0,
                    key: "aol_utd",
                    filter: function(e) {
                        var t = e.match(/((?:\||^))gd#[^\|]+/g)[0].split("#")[1];
                        return 24 !== t.length && c("_utd value may be malformed"), t
                    }
                },
                RSP_COOKIE: {
                    log: !0,
                    key: "aol_rsp",
                    filter: function(e) {
                        var t = e.match(/(?:(\&|^))sn=[^\&]+/g)[0].split("=")[1];
                        return 24 !== t.length && c("RSP_COOKIE value may be malformed"), t
                    }
                },
                GUC: {
                    log: !0,
                    key: "_guc"
                },
                OTH: {
                    log: !0,
                    key: "_li",
                    filter: function() {
                        return "1"
                    }
                }
            },
            n = {};
        this.getCookieByName = function(e) {
            return n[e]
        }, this.setRxx = function() {
            function r(e) {
                return "." + s.slice(e).join(".")
            }

            function i() {
                var a = r(o),
                    s = "rxx",
                    u = n[s];
                if (!u) {
                    var c = 14383872e5,
                        d = (new Date).getTime() - c;
                    u = parseInt(Math.random().toString().substring(2)).toString(36) + "." + d.toString(36) + "&v=1"
                }
                if (g(s, u, 31536e3, a), document.cookie.indexOf(u) !== -1) {
                    n[s] = u;
                    var f = t[s];
                    e && f && f.log && e.set(f.key, u)
                } else o + l > 0 && (o--, i())
            }
            var o = -2,
                a = document.domain || "",
                s = a.split("."),
                l = s.length;
            F.fpc && ".yahoo.com" !== r(o) && i()
        }, this.extendBCookie = function() {
            var e = n.B;
            e ? g("B", e, 31536e3, ".yahoo.com") : c("Bcookie not set")
        };
        var r = document.cookie;
        if (/[^=]+=[^=;]?(?:; [^=]+=[^=]?)?/.test(r))
            for (var i = r.split(/;\s/g), o = null, a = null, s = null, l = 0, u = i.length; l < u; l++) {
                if (s = i[l].match(/([^=]+)=/i), s instanceof Array) try {
                    o = B.dec(s[1]), a = i[l].substring(s[1].length + 1)
                } catch (f) {
                    d(f)
                } else o = B.dec(i[l]), a = o;
                var p = t[o];
                if (p && !n[o]) {
                    if (a = a.replace(/(^["']|["']$)/g, ""), p.filter && "function" == typeof p.filter) try {
                        a = p.filter(a)
                    } catch (m) {
                        d(o + " Has an Invalid Value; Cookie is not captured"), a = null
                    }
                    a && (a = B.dec(a), n[o] || (n[o] = a, e && p.log && e.set(p.key || o, a)))
                }
            }
        this.setRxx(), this.extendBCookie(), B.clearCookie("rx", "/", B.isIE ? document.domain : "")
    }

    function m() {
        if (F.ult_token_capture && YAHOO.i13n.__handled_ult_tokens__ !== !0) {
            YAHOO.i13n.__handled_ult_tokens__ = !0;
            var e = F.loc;
            if (e.match(/;_yl[a-z]{1}=/)) F.ldbg && f("Found ULT Token on URL."), z.sendGeoT(e);
            else {
                var t = new p,
                    n = t.getCookieByName("D");
                n && (B.clearCookie("D", "/", ".yahoo.com"), z.sendGeoT(n))
            }
        }
    }

    function v() {
        function e() {
            t = (new Date).valueOf().toString(), n = t.length
        }
        var t = null,
            n = null;
        return e(), {
            ts: t.substr(0, n - 3),
            ms: t.substr(n - 3)
        }
    }

    function g(e, t, n, r) {
        var i = new Date,
            o = "";
        i.setTime(i.getTime() + 1e3 * n), o = "; expires=" + i.toGMTString();
        var a = "";
        r && (a = ";domain=" + r);
        var s = e + "=" + t + o + a + "; path=/";
        document.cookie = s
    }

    function h() {
        function t(e, t) {
            function n(t) {
                var n = new Image,
                    r = null;
                n.onload = n.onabort = n.onerror = function() {
                    clearTimeout(r), t.call(null)
                }, n.src = e, t && "function" == typeof t && (r = setTimeout(function() {
                    t.call(null)
                }, F.click_timeout)), setTimeout(function() {
                    n = null
                }, 1e7)
            }
            F.ldbg && f(e);
            var r = t && "function" == typeof t ? t : function() {};
            navigator && navigator.sendBeacon ? (navigator.sendBeacon(e), r()) : n(r)
        }

        function r() {
            return "rapid_if_" + B.rand()
        }

        function i(e) {
            var t = "display:none;";
            !B.isIE || 6 !== B.ieV && 7 !== B.ieV && 8 !== B.ieV ? B.sa(e, "style", t) : e.style.setAttribute("cssText", t, 0)
        }

        function o(e) {
            var t = null;
            if (B.isIE && B.ieV <= 8) {
                var n = "";
                B.isSecure() && 6 == B.ieV && (n = 'src="https://' + F.geo_host + '/b.html"'), t = document.createElement("<iframe " + n + ' name="' + e + '"></iframe>')
            } else t = document.createElement("iframe");
            return t.name = e, t
        }

        function a() {
            setTimeout(function() {
                var e = o("");
                B.addEvent(e, "load", function() {
                    B.rmBodyEl(e)
                }), B.appBodyEl(e)
            }, 1)
        }

        function s(e, t) {
            var n = null,
                s = B.make("form"),
                u = B.make("input"),
                c = r(),
                d = r(),
                p = "application/x-www-form-urlencoded;charset=UTF-8";
            n = o(c), i(n), i(s), s.id = d, s.method = "POST", s.action = l(t), s.target = c, B.isIE && B.ieV <= 7 ? s.setAttribute("enctype", p) : (s.setAttribute("enctype", p), s.setAttribute("encoding", p)), u.name = "q", u.value = e, B.isIE && B.ieV >= 10 && (u.type = "submit"), s.appendChild(u);
            var m = "load",
                v = function() {
                    var e = "";
                    if (F.ldbg && (!B.isIE || B.ieV >= 9)) {
                        var t = n.contentDocument || n.contentWindow.document;
                        e = t.body.innerHTML
                    }
                    B.rmEvent(n, m, v), setTimeout(function() {
                        B.rmBodyEl(n), B.rmBodyEl(s)
                    }, 0), F.ldbg && f("iframe resp: " + e), B.isIE && B.ieV <= 7 && a()
                };
            B.addEvent(n, m, v), B.appBodyEl(n), B.appBodyEl(s), s.submit()
        }

        function l(e) {
            var t = F.deb,
                n = B.rand(),
                r = ["http:" === window.location.protocol ? "http://" : "https://", F.yql_host, F.yql_path, "?yhlVer=2&yhlClient=rapid&yhlS=", F.spaceid, t === !0 ? "&yhlEnv=staging" : "", t === !0 || F.ldbg ? "&debug=true&diagnostics=true" : "", B.isIE && B.ieV ? "&yhlUA=ie" + B.ieV : "", B.isIE && 8 == B.ieV ? "&format=json" : "", "&yhlCT=2", "&yhlBTMS=", (new Date).valueOf(), "&yhlClientVer=", F.version, "&yhlRnd=", n, "&yhlCompressed=", e || 0, F.gen_bcookie ? "&yhlBcookie=1" : ""].join("");
            return F.ldbg && f(r), r
        }

        function u(e) {
            var r = new n(e);
            t(O("p", r, 1197799914))
        }

        function m(e, t) {
            var n = l(t);
            try {
                var r = B.getXHR();
                r.open("POST", n, !0), r.withCredentials = !0, r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), F.ldbg && (r.onreadystatechange = function() {
                    4 === r.readyState && f(r.status + ":xhr response: " + r.responseText)
                }), r.send(e)
            } catch (i) {
                u({
                    _err_nm: "sendToYQL Failed",
                    _err_msg: "sendToYQL Failed",
                    _err_rs: String(i),
                    _err_st: i.stack,
                    urlUsed: n
                })
            }
        }

        function g(e, t, n) {
            var r = {};
            return B.isObj(e) ? (B.aug(r, e, n), r) : r
        }

        function h(e, t, n) {
            n = n || {};
            var r = {
                m: B.norm(e.moduleName),
                l: []
            };
            e.moduleYLK && (r.ylk = e.moduleYLK.getAll());
            for (var i = r.ylk && r.ylk.sec ? r.ylk.sec : "", o = e.links, o = e.links, a = function(e, n) {
                    var o = "_p" === e;
                    return !(!t || !o) || ("sec" == e && n != r.m && n != i || "sec" !== e && !o)
                }, s = 0, l = o.length; s < l; s++) o[s] && (!n.useViewability && !F.viewability || o[s].viewable ? r.l.push(g(o[s].data, t, a)) : F.ldbg && f("Skipping not viewable link: " + o[s].data.slk));
            return r
        }

        function _(e, t, n) {
            var r = [],
                i = null;
            for (var o in e)
                if (B.hasOwn(e, o) && (i = e[o])) {
                    var a = h(i, t, n);
                    a.l.length > 0 ? r.push(a) : F.ldbg && f('Not capturing 0 links mod: "' + i.moduleName + '"')
                }
            return r
        }

        function w(e, t) {
            return e ? "pv" : t && t.event ? t.event.type.getYQLID() : "lv"
        }

        function y(e, t, n, r, i) {
            var o;
            return o = $ ? ee : v(), [{
                t: w(t, i),
                s: F.spaceid,
                pp: b(t, r).getAll(),
                _ts: o.ts,
                _ms: o.ms,
                lv: _(e, n, i)
            }]
        }

        function b(e, t) {
            Q = new p(F.keys);
            var r = n.makeFromPP(F.keys);
            return r.absorb(t), e && r.set("A_", 1), r.set("A_sr", B.sr()), r.set("A_vr", B.vr()), r.set("A_do", B.dor()), r.set("A_ib", B.ib()), r.set("A_ob", B.ob()), r.set("A_srr", B.srr()), r
        }

        function k(e, t, n) {
            var r = "select * from x where a = '" + e + "'";
            return (t ? "q=" : "") + (n ? B.enc(r) : r)
        }

        function A(t) {
            var n = B.aug({}, e);
            delete n.keys;
            var r = M();
            r.set("A_cnf", B.toJSON(n));
            var i = {
                bp: r.getAll(),
                r: t.call(0),
                yrid: F.yrid,
                optout: F.oo,
                nol: F.nol
            };
            return B.toJSON(i)
        }

        function E(e, t, n) {
            var r = {};
            t && $ && $.start_dwell() && (r.etag = "dwell,start", r.usergenf = 1, r.A_prets = te ? te.ts : null, r.A_prems = te ? te.ms : null), n.event && B.aug(r, n.event.data), n.pp && B.aug(r, n.pp);
            var i = A(function() {
                return y([e], t, !0, r, n)
            });
            D(i, t)
        }

        function C(e, t, n, r) {
            var i = A(function() {
                return y(e, t, !0, n, r)
            });
            D(i)
        }

        function T(e) {
            return e.identifier
        }

        function D(e) {
            function t(e, t) {
                0 === t && (e = e.replace(/'/g, "\\'")), r && f("body: " + e), B.hasCORS() ? (i = k(e, !0, !0), m(i, t)) : (i = k(e, 0, 0), B.addEvent(document, "load", function() {
                    s(i, t)
                }))
            }

            function n() {
                l || (l = !0, t(e, 0), r && f("sent in failSend"))
            }
            var r = F.ldbg,
                i = "",
                o = G[F.compr_type];
            if (F.compr_on && F.webworker_file && B.hasWorkers() && o > 1 && e.length > 2048) {
                r && f("Looking for worker:" + F.webworker_file + ", compr timeout:" + F.compr_timeout);
                try {
                    var a = new Worker(F.webworker_file),
                        l = !1,
                        u = null,
                        d = 0;
                    a.onerror = function(e) {
                        clearTimeout(u), n(), c(e.message), a.terminate()
                    }, a.onmessage = function(i) {
                        clearTimeout(u);
                        var s = B.tms();
                        "Decompress fail" !== i.data && "Compress fail" !== i.data && 0 != i.data.indexOf("error:") || (r && f(i.data), n()), l || (l = !0, t(i.data, o)), r && f("Ratio (" + i.data.length + "/" + e.length + "): " + (100 * i.data.length / e.length).toFixed(2) + "% -> C_T: " + (s - d) + " ms (" + s + "-" + d + ")"), a.terminate()
                    }, r && f("posting to worker: " + e), d = B.tms(), a.postMessage({
                        type: o,
                        json: e
                    }), u = setTimeout(function() {
                        n(), a.terminate()
                    }, F.compr_timeout)
                } catch (p) {
                    r && f("compression worker exception " + p), t(e, 0)
                }
            } else t(e, 0)
        }

        function O(e, t, n) {
            var r = ["?s=" + (n ? n : F.spaceid), "t=" + B.rand() + "," + Math.random(), "_I=" + F.yrid, "_AO=" + F.oo, "_NOL=" + F.nol, "_R=" + B.enc(F.getReferrer()), ("c" === e ? "_K=" : "_P=") + x(t)];
            F.bcookie_override && r.push("_BM=" + F.bcookie_override);
            var i = r.join("&");
            return ("http:" === window.location.protocol ? "http://" : "https://") + S + "/" + e + i
        }

        function x(e) {
            Q = new p(F.keys);
            var t = new n(M(!1).getAll());
            t.absorb(F.keys.getAll()), e && (e instanceof n ? t.absorb(e.getAll()) : d("Internal error in buildGeoPP: not PP type"));
            var r;
            return r = "dwell,start" === t.get("etag") ? ee : "dwell,stop" === t.get("etag") ? te : v(), t.set("_ts", r.ts), t.set("_ms", r.ms), t.set("A_sr", B.sr()), t.set("A_vr", B.vr()), t.set("A_do", B.dor()), t.set("A_ib", B.ib()), t.set("A_ob", B.ob()), t.set("A_srr", B.srr()), F.version + "%05" + t.ser()
        }

        function I(e) {
            var t = new n(e.pp),
                r = [O("c", t) + "&_C=" + B.ser(e.data)];
            return r.join("&")
        }
        var S = F.geo_host || YAHOO.i13n.beacon_server,
            M = function(e) {
                var t = new n;
                t.set("_pl", 1), t.set("A_v", F.version), t.set("A_cn", F.comboName);
                var r = F.getReferrer();
                if (r && e !== !1 && t.set("_R", r), F.test_id && t.set("test", F.test_id), F.customUID) {
                    var i = F.customUID;
                    t.set("user_id", i.id), t.set("user_id_type", i.type)
                }
                if (F.accountGUID && t.set("_lGUID", F.accountGUID), F.ex && t.set("_ex", 1), t.get("_bt") || t.set("_bt", "rapid"), F.query_parameters) {
                    var o = /^(test|outcm|etrg|usergenf|etag|sec|slk|tar|tar_uri|yhldebug|tsrc|action)$|^(A_|_)/,
                        a = document.location.search;
                    if (a) {
                        a = a.substring(1), a = a.split("&");
                        for (var s in a)
                            if (a.hasOwnProperty(s)) {
                                var l = a[s].split("=");
                                if (l.length >= 2) {
                                    var u = decodeURIComponent(l[0]),
                                        c = decodeURIComponent(l[1]),
                                        d = !o.test(u);
                                    f("Queryparams decoded: " + u + " : " + c), f("Blacklist filter: " + d), d && t.set(u, c)
                                }
                            }
                    }
                }
                var p = window.location.protocol || "";
                p = p.replace(/:$/, ""), t.set("A_pr", p);
                var m = (new Date).getTimezoneOffset();
                return m = m ? -1 * m / 60 : 0, t.set("A_tzoff", m), t
            },
            L = function() {
                var e = null,
                    t = [],
                    n = 0,
                    r = F.addmod_timeout;
                return function(i, o, a, s) {
                    clearTimeout(e);
                    var l = +new Date - n;
                    if (t = B.uniqConcat(t, i, T), l > r) n = +new Date, C(t, o, a, s), t = [];
                    else {
                        var u = r - l;
                        e = setTimeout(function() {
                            F.ldbg && f("queueing send in addMods"), C(t, o, a, s), t = []
                        }, u)
                    }
                }
            }();
        return {
            sendGeoT: function(e) {
                var n = ["http:" === window.location.protocol ? "http://" : "https://", S, "/t?", e].join("");
                t(n)
            },
            sendGeoPV: function() {
                t(O("b"))
            },
            sendRapidNoDelay: function(e, r, i, o, a) {
                if (r && $ && $.start_dwell() && (i.etag = "dwell,start", i.usergenf = 1, i.A_prets = te ? te.ts : null, i.A_prems = te ? te.ms : null), !F.yql_enabled || a) {
                    var s = null;
                    i && (s = new n(i)), t(O(r ? "b" : "p", s))
                } else C(e, r, i, o)
            },
            sendRapid: function(e, t, n, r) {
                t && $ && $.start_dwell() && (n.etag = "dwell,start", n.usergenf = 1, n.A_prets = te ? te.ts : null, n.A_prems = te ? te.ms : null), L(e, t, n, r)
            },
            sendRefreshedContent: E,
            sendULTEvent: function(e, r, i) {
                var o = {};
                e && e.data && (o = e.data);
                var a = O("p", new n(o), r || 0);
                e.type && (a += "&_V=" + e.type.spaceidPrefix), t(a, i)
            },
            sendEvents: function(e, t) {
                this.sendULTEvent(e, t)
            },
            sendClick: function(e, n) {
                var r = null,
                    i = I(e),
                    o = !1;
                return F.async_all_clicks || !e.synch ? void(i && t(i, n)) : (B.prevDef(e.event), r = function() {
                    if (!o) {
                        if (o = !0, n) return void n.call();
                        var t = e.targetElement.href;
                        if (F.click_postmsg.origin) {
                            var r = F.click_postmsg.window || top,
                                i = F.click_postmsg.payload || {};
                            i.href = t, r.postMessage(B.toJSON(i), F.click_postmsg.origin)
                        } else e.hasTargetTop ? top.document.location = t : document.location = t
                    }
                }, void t(i, r))
            }
        }
    }

    function _(e, t, n, r, o, a, s, l) {
        var u = "",
            c = null,
            d = !s || B.isInView(r, l),
            f = {
                viewable: d,
                data: {
                    sec: t,
                    _p: n
                }
            };
        return s && B.aug(f.data, {
            A_lv: 1
        }), a ? (f.data.slk = o || "section", c = i(r)) : (r.setAttribute(F.anc_pos_attr, n), s && r.setAttribute(F.anc_v9y_attr, d ? "1" : "0"), u = B.getLT(r, e), u && "" !== u ? c = i(r) : u = "_ELINK_", f.data.slk = o ? o : u), null !== c && B.aug(f.data, c.getAll()), f
    }

    function w(e) {
        var t = {},
            n = e || window;
        return {
            addModule: function(e, n) {
                t[B.norm(e)] = n
            },
            addModules: function(e, t) {
                var r = B.isArr(e),
                    i = [];
                r || B.isStr(e) && (e = new Array(e), r = !0);
                for (var o in e)
                    if (B.hasOwn(e, o)) {
                        var a = r ? e[o] : o,
                            s = B.trim(e[o]);
                        if (this.exists(a)) d('addModules() called with prev processed id:"' + a + '"');
                        else {
                            var l = x(s, a, t, n);
                            l && (this.addModule(a, l), i.push(l))
                        }
                    }
                return i
            },
            getModules: function() {
                return t
            },
            getModulesWithViewability: function() {
                var e = {};
                for (var n in t) {
                    var r = t[n];
                    r.useViewability && (e[n] = r)
                }
                return e
            },
            reevaluateModuleViewability: function(e) {
                var t, n = this.getModulesWithViewability();
                if (e) t = n[e], t && t.reevaluateViewableLinks();
                else
                    for (var r in n) t = n[r], t.reevaluateViewableLinks()
            },
            refreshModule: function(e, n, r, i) {
                var o = t[B.norm(e)];
                o ? o.refreshModule(e, n, r, i) : d("refreshModule called on unknown section: " + o)
            },
            removeModule: function(e) {
                var n = t[B.norm(e)];
                n && (n.removeHandlers(), delete t[e])
            },
            destroy: function() {
                for (var e in t) B.hasOwn(t, e) && this.removeModule(e);
                t = {}
            },
            exists: function(e) {
                return t[B.norm(e)]
            }
        }
    }

    function y(e, t) {
        return B.hasClass(e, "rapid_track_href") ? "href" : B.hasClass(e, "rapid_track_text") ? "text" : B.hasClass(e, "rapid_track_title") ? "title" : B.hasClass(e, "rapid_track_id") ? "id" : t
    }

    function b(e) {
        return "input" === e.nodeName.toLowerCase() && "submit" === B.getAttribute(e, "type")
    }

    function k(e, t) {
        var n = C(e, t);
        J = n, n && (e.ctrlKey || e.metaKey || "contextmenu" === e.type || $ && $.stop_dwell() && (n.pp = {
            etag: "dwell,stop",
            usergenf: 1,
            A_prets: ee ? ee.ts : null,
            A_prems: ee ? ee.ms : null
        }), z.sendClick(n))
    }

    function A(e, t, n) {
        var r = B.getAttribute;
        return t.target && "_blank" === t.target.toLowerCase() || 2 === e.which || 4 === e.button || e.altKey || e.ctrlKey || e.shiftKey || e.metaKey || "on" === r(t, "data-nofollow") || r(t, "href") && "javascript:" === r(t, "href").substr(0, 11).toLowerCase() || B.hasClass(t, F.nofollow_classname) || B.hasClass(n, F.nofollow_classname)
    }

    function E(e, t, n, r) {
        n = n || {};
        var i = null;
        return e ? (i = YAHOO.i13n.EventTypes.getEventByName(e), n._E = i.getEventName(), t = n._E) : n._E = t || "_", r && (n.outcm = r), {
            type: i,
            name: t,
            data: n,
            outcome: r
        }
    }

    function C(e, t) {
        e = e || event;
        for (var n = B.getTarget(e), r = "button", o = "input", a = "", s = !1, l = null; n && (a = n.nodeName.toLowerCase()) && "a" !== a && a !== r && !b(n) && !B.hasClass(n, F.nonanchor_track_class);) n = n.parentNode;
        if (!n || B.hasClass(n, F.no_click_listen)) return 0;
        if (B.hasClass(n, F.nonanchor_track_class)) {
            l = {
                pos: 0,
                sec: t.moduleName,
                slk: "_"
            };
            var u = i(n, 1);
            u && B.aug(l, u.getAll())
        } else {
            var c = B.getAttribute(n, F.anc_pos_attr);
            if (l = t.getLinkAtPos(c), !l) return 0;
            l = B.aug({}, l.data), a === o || a === r || A(e, n, t.moduleElement) || (s = !0)
        }
        if (!l.tar) {
            var d = B.getAttribute(n, "href");
            d && (l.tar = B.extDomain(d)), d && l.tar || (l.tar = B.extDomain(F.loc))
        }
        l.tar_uri || (n.pathname ? l.tar_uri = n.pathname : l.tar_uri = "");
        var f = t.moduleYLK;
        if (f) {
            var p = f.getAll();
            B.aug(l, p, function(e) {
                return !(e in l)
            })
        }
        return l.A_xy = B.xy(e), "contextmenu" == e.type && (l.A_cl = 3, s = !1), {
            data: l,
            event: e,
            moduleElement: t.moduleElement,
            targetElement: n,
            synch: s,
            hasTargetTop: n && n.target && "_top" === n.target.toLowerCase()
        }
    }

    function T(e, t, n, r, i) {
        var o = {};
        return B.aug(o, r), o.sec = e, o.slk = t, o._p = n, {
            data: o,
            outcome: i,
            event: null,
            moduleElement: null,
            targetElement: null,
            synch: !1,
            hasTargetTop: !1
        }
    }

    function D(e, t, n) {
        t || (t = document);
        for (var r = e.split(","), i = [], o = 0, a = r.length; o < a; o++)
            for (var s = t.getElementsByTagName(r[o]), l = 0, u = s.length; l < u; l++) {
                var c = s[l];
                n && !n.call(0, c) || i.push(c)
            }
        var d = i[0];
        return d ? (d.sourceIndex ? i.sort(function(e, t) {
            return e.sourceIndex - t.sourceIndex
        }) : d.compareDocumentPosition && i.sort(function(e, t) {
            return 3 - (6 & e.compareDocumentPosition(t))
        }), i) : []
    }

    function O(e, t, n, r) {
        t || (t = document);
        var i = e.split(",");
        n = n || [];
        var o = t.childNodes;
        if ("true" !== B.getAttribute(t, F.skip_attr))
            for (var a = 0, s = o.length; a < s; a++) {
                var l = o[a];
                B.isTagOfInterest(l, i) && (r && !r.call(0, l) || n.push(l)), "true" !== B.getAttribute(l, F.skip_attr) ? O(e, l, n, r) : "true" === B.getAttribute(l, F.skip_attr) && n.push(l)
            }
        var u = n[0];
        return u ? (u.sourceIndex ? n.sort(function(e, t) {
            return e.sourceIndex - t.sourceIndex
        }) : u.compareDocumentPosition && n.sort(function(e, t) {
            return 3 - (6 & e.compareDocumentPosition(t))
        }), n) : []
    }

    function x(e, t, n, r) {
        function o(t, o) {
            var a = [];
            o = o || 1;
            for (var s = 0, u = t.length; s < u; s++)
                if ("div" === t[s].tagName.toLowerCase()) {
                    var c = t[s],
                        f = i(c),
                        m = _(v, d.map.sec || e, 1, c, f.map.slk || d.map.slk, !0, n, r);
                    p[0] = m, a.push(m)
                } else {
                    var g = t[s],
                        m = _(v, d.map.sec || e, o, g, d.map.slk, 0, n, r);
                    p[o - 1] = m, a.push(m), o++
                }
            if ("true" === B.getAttribute(l, F.skip_attr)) {
                var m = _(v, d.map.sec || e, 1, c, d.map.slk, !0, n, r);
                p[0] = m, a.push(m)
            }
            return a
        }

        function a(t) {
            for (var n = [], i = 0, o = t.length; i < o; i++) {
                var a = t[i],
                    s = B.getAttribute(a, F.anc_pos_attr),
                    l = _(v, d.map.sec || e, s, a, d.map.slk, 0, !0, r);
                n.push(l)
            }
            return n
        }

        function s(e) {
            return !B.getAttribute(e, F.anc_pos_attr)
        }
        var l = document.getElementById(t),
            u = "a,button,input";
        if (!l) return c("Specified module not in DOM: " + t), null;
        var d = i(l),
            p = [],
            m = F.parse_dom ? O(u, l) : D(u, l),
            v = y(l, F.lt_attr),
            g = m.length,
            h = B.getAttribute(l, F.track_type);
        o(m);
        var w = {
                useViewability: n,
                moduleYLK: d,
                links: p,
                moduleName: e,
                trackType: h,
                moduleElement: l,
                refreshModule: function(e, t, r, i) {
                    i.isRefreshed = !0;
                    var a = F.parse_dom ? O(u, B.$(e), null, s) : D(u, B.$(e), s);
                    if (t === !0 || a.length > 0) {
                        var l = o(a, g + 1);
                        g += a.length;
                        var c = a.length;
                        if (n) {
                            c = 0;
                            for (var d = 0, p = l.length; d < p; d++) l[d].viewable && c++
                        }
                        if (t === !0 || c > 0) {
                            var m = {};
                            B.aug(m, this), r ? m.links = l : m.links = [], (t === !0 || r) && z.sendRefreshedContent(m, t, i)
                        }
                    } else B.ldbg && f("refreshModule(" + e + ") - no new links.");
                    t === !0 && F.apv && X && X.reInit()
                },
                reevaluateViewableLinks: function() {
                    var t = p.length,
                        n = D(u, this.moduleElement, function(t) {
                            return function(n) {
                                if (!B.getAttribute(n, F.anc_pos_attr)) {
                                    t++, n.setAttribute(F.anc_pos_attr, t);
                                    var i = _(v, d.map.sec || e, t, n, d.map.slk, 0, !1);
                                    p[t - 1] = i
                                }
                                var o = B.getAttribute(n, F.anc_v9y_attr);
                                return !("1" === o || !B.isInView(n, r)) && (n.setAttribute(F.anc_v9y_attr, "1"), !0)
                            }
                        }(t));
                    if (0 !== n.length) {
                        var i = a(n),
                            o = {};
                        B.aug(o, this), o.links = i, z.sendRefreshedContent(o, !1, {})
                    }
                },
                removeHandlers: function() {
                    B.rmEvent(l, "click", b), F.track_right_click && B.rmEvent(l, "contextmenu", b)
                },
                getLinkAtPos: function(e) {
                    return e > p.length ? null : p[e - 1]
                },
                identifier: t
            },
            b = function(e) {
                k(e, w)
            };
        return B.addEvent(l, "click", b), F.track_right_click && B.addEvent(l, "contextmenu", b), w
    }

    function I(e, t, n) {
        "object" == typeof e && e || (e = {}), F.ldbg && f("beaconPageview called, pp=" + B.fData(e)), t && !F.persist_asid && l(), z.sendRapidNoDelay([], !0, e, null, n), F.apv && null != X && X.reInit()
    }

    function S(e, t, n, r) {
        F.ldbg && f('beaconEvent: event="' + e + '" data=' + B.fData(t) + " outcome=" + n);
        var i = E(0, e, t, n);
        z.sendEvents(i, r)
    }

    function M(e) {
        function t() {
            var t = null,
                r = (new Date).getTime(),
                i = r,
                o = B.getScrollY(e),
                a = -1,
                s = function() {
                    var t = B.getScrollY(e),
                        r = a === -1 ? t - o : t - a;
                    Math.abs(r) > F.viewability_px && (n.reevaluateModuleViewability(), a = t, i = (new Date).getTime())
                },
                l = function() {
                    null != t && clearTimeout(t);
                    var n = (new Date).getTime();
                    n - r < F.viewability_time && (o = B.getScrollY(e), i = n), t = setTimeout(function() {
                        s()
                    }, F.viewability_time)
                };
            B.addEvent(e, "scroll", l), this.reInit = function() {
                o = B.getScrollY(e), a = -1, r = i = (new Date).getTime()
            }, this.destroy = function() {
                B.rmEvent(e, "scroll", l)
            }
        }
        var e = document.getElementById(e) || window,
            n = new w(e),
            r = null;
        B.executeOnLoad(function() {
            r = new t
        }), this.getModules = function() {
            return n
        }, this.addModules = function(e, t, r) {
            F.ldbg && f("addModules() called: mods=" + B.fData(e) + " isPage: " + t), r = r || {};
            var i = {
                A_am: 1
            };
            r.pp && B.aug(i, r.pp), r.useViewability = r.useViewability || !1, r.clickonly = r.clickonly || !1;
            var o = !1,
                a = !1;
            switch (t || (t = !!r.useViewability && 2), t) {
                case 1:
                case "1":
                case !0:
                    t = !0, a = !0;
                    break;
                case 2:
                case "2":
                    o = !0, t = !1, r.event = E("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    t = !1
            }
            if (!F.yql_enabled) return f("LVs is are disabled when geo only"), void(t && I(i, a));
            r && r.event && t && (d("Cannot track event type and pageview at same time."), r.event = null);
            var s = n.addModules(e, r.useViewability);
            (0 !== s.length || r.event) && (r.clickonly && (s = []), t || r.event || r.pp ? (a && !F.persist_asid && l(), r.event && r.event.data && B.aug(i, r.event.data), z.sendRapidNoDelay(s, t, i, r)) : s.length > 0 && z.sendRapid(s, t, i, r), t === !0 && F.apv && X && X.reInit())
        }, this.addModulesWithViewability = function(e, t, n) {
            n = n || {}, n.useViewability = n.useViewability || F.viewability, this.addModules(e, t, n)
        }, this.reevaluateModulesViewability = function() {
            n.reevaluateModuleViewability()
        }, this.refreshModules = function(e, t, r, i) {
            F.ldbg && f("refreshModule called: mod=" + e + " isPV: " + t + " sendLinks: " + r + " options: " + B.fData(i));
            var o = !1,
                a = !1;
            switch (i = i || {}, t || (t = !1), t) {
                case 1:
                case "1":
                case !0:
                    t = !0, a = !0;
                    break;
                case 2:
                case "2":
                    o = !0, t = !1, i.event = E("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    t = !1
            }
            if (!F.yql_enabled) {
                var s = i.pp || {};
                return f("LVs is are disabled when geo only"), void(t && I(s, a))
            }
            var u = r !== !1;
            a && !F.persist_asid && l(), t && i && i.event && (i.event = null), n.refreshModule(e, t, u, i), n.reevaluateModuleViewability(e)
        }, this.removeModule = function(e) {
            n.removeModule(e)
        }, this.isModuleTracked = function(e) {
            return F.ldbg && f("isTracked called: " + e), q && void 0 !== q.exists(e)
        }, this.destroy = function() {
            r.destroy()
        }
    }

    function L(e) {
        var e = e ? document.getElementById(e) : window,
            t = null,
            n = lastApvTime = (new Date).getTime(),
            r = B.getScrollY(e),
            i = -1,
            o = function() {
                var t = B.getScrollY(e),
                    n = i === -1 ? t - r : t - i,
                    o = n > 0 ? 0 : 1;
                if (Math.abs(n) > F.apv_px) {
                    var a = {
                        A_apv: 1,
                        A_apx: t,
                        A_asd: o
                    };
                    I(a, !1, !0), i = t, lastApvTime = (new Date).getTime(), F.apv_callback && F.apv_callback.call(this, {
                        pixel_pos: t,
                        scroll_dir: o
                    })
                }
            },
            a = function() {
                null != t && clearTimeout(t);
                var i = (new Date).getTime();
                i - n < F.apv_time && (r = B.getScrollY(e), lastApvTime = i), t = setTimeout(function() {
                    o()
                }, F.apv_time)
            };
        B.addEvent(e, "scroll", a), this.reInit = function() {
            r = B.getScrollY(e), i = -1, n = lastApvTime = (new Date).getTime()
        }, this.destroy = function() {
            B.rmEvent(e, "scroll", a)
        }
    }

    function R() {
        var e = {
                focus: {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "window.focus"
                },
                pageshow: {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "window.pageshow"
                },
                "visibilitychange-visible": {
                    state: "start",
                    etrg: "show",
                    etag: "dwell,start",
                    jse: "document.visibilitychange"
                },
                blur: {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "window.blur"
                },
                pagehide: {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "window.pagehide"
                },
                "visibilitychange-hidden": {
                    state: "stop",
                    etrg: "hide",
                    etag: "dwell,stop",
                    jse: "document.visibilitychange"
                },
                beforeunload: {
                    state: "stop",
                    etrg: "close",
                    etag: "dwell,stop",
                    jse: "window.beforeunload"
                }
            },
            t = "start";
        ee = v();
        var n, r;
        "undefined" != typeof document.hidden ? (n = "hidden", r = "visibilitychange") : "undefined" != typeof document.mozHidden ? (n = "mozHidden", r = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (n = "msHidden", r = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (n = "webkitHidden", r = "webkitvisibilitychange");
        var i = function(i) {
            var o = "",
                a = i.type;
            if (i.type == r && (a = document[n] ? "visibilitychange-hidden" : "visibilitychange-visible"), B.hasOwn(e, a) && (o = e[a].state), 0 != o.length) {
                if (t == o) return void f("dwell: -- state already " + t + " (event=" + a + ")");
                t = o;
                var s = e[a];
                f("dwell: change state to " + t + " (event=" + a + ")");
                var l = {
                    etrg: s.etrg,
                    outcm: "window",
                    usergenf: 1,
                    etag: s.etag,
                    A_jse: s.jse
                };
                "start" === t && (ee = v(), null != te && (l.A_prets = te.ts, l.A_prems = te.ms)), "stop" === t && (te = v(), null != ee && (l.A_prets = ee.ts, l.A_prems = ee.ms)), S("dwell", l, "")
            }
        };
        for (var o in e) e.hasOwnProperty(o) && B.addEvent(window, o, i);
        B.addEvent(window, r, i), this.set_state = function(e) {
            t = e
        }, this.start_dwell = function() {
            return "start" === t ? (f("dwell: -- state already " + t), !1) : (t = "start", ee = v(), !0)
        }, this.stop_dwell = function() {
            return "stop" === t ? (f("dwell: -- state already " + t), !1) : (t = "stop", te = v(), !0)
        }, this.destroy = function() {
            for (var t in e) e.hasOwnProperty(t) && B.rmEvent(window, t, i);
            B.rmEvent(window, r, i)
        }
    }

    function U(e, t) {
        function r() {
            var e = P(o, a, s, l, d, f),
                r = new n(e);
            "object" == typeof t && r.absorb(t);
            var i = E(0, "pageperf", r.getAll(), "");
            z.sendEvents(i)
        }
        var i = 10;
        if (window.performance && window.performance.timing) {
            var o = e ? e.perf_navigationtime || 0 : F.perf_navigationtime || 0,
                a = e ? e.perf_resourcetime || 0 : F.perf_resourcetime || 0,
                s = e ? e.perf_commontime || null : F.perf_commontime || null,
                l = e ? e.perf_usertime || null : F.perf_usertime || null;
            if (!(o < 1 && a < 1) || s || l) {
                var u = B.hasOwn(F.sample, "perf_navigationtime") ? F.sample.perf_navigationtime : 100,
                    c = B.hasOwn(F.sample, "perf_resourcetime") ? F.sample.perf_resourcetime : 100,
                    d = B.samplingSuccess(u),
                    f = B.samplingSuccess(c);
                if (d || f) return (o > 0 || a > 0) && 0 === window.performance.timing.loadEventStart && (Z += i, Z <= 200) ? void setTimeout(function() {
                    U(e, t)
                }, i) : void r()
            }
        }
    }

    function P(e, t, n, r, i, o) {
        var a = {},
            s = window.performance.timing;
        if (i && e > 0 && (V(s.responseStart, s.connectEnd, a, "A_pfb"), V(s.responseEnd, s.responseStart, a, "A_pbp"), V(s.responseEnd, s.requestStart, a, "A_psr"), V(s.loadEventStart, s.navigationStart, a, "A_pol"), V(s.domInteractive, s.navigationStart, a, "A_pdi")), i && e > 1 && (V(s.redirectEnd, s.redirectStart, a, "A_prd"), V(s.domainLookupEnd, s.domainLookupStart, a, "A_pdl"), V(s.connectEnd, s.secureConnectionStart, a, "A_psh"), V(s.connectEnd, s.connectStart, a, "A_psc"), V(s.loadEventStart, s.responseEnd, a, "A_pfe")), o && t > 0 && "undefined" != typeof window.performance.getEntries) {
            var l = [],
                u = window.performance.getEntries();
            u.sort(function(e, t) {
                return e.duration > t.duration ? -1 : e.duration < t.duration ? 1 : 0
            });
            for (var c = u.slice(0, 10), d = c.length, f = 0; f < d; f++) {
                var p = {},
                    m = c[f].name.replace(/\?.+$/, "");
                m = m.replace(/^.+\//, ""), p.name = m, p.dur = Math.floor(c[f].duration), p.st = Math.floor(c[f].startTime), l.push(p)
            }
            a.A_res = B.sfy(l)
        }
        if (n && (B.hasOwn(n, "initialPageLoad") && (a.A_cmi = B.sfy(n.initialPageLoad)), B.hasOwn(n, "afterPageLoad") && (a.A_cma = B.sfy(n.afterPageLoad))), r)
            for (var v = ["utm"], f = 0; f < v.length; f++) B.hasOwn(r, v[f]) && (a.A_utm = B.sfy(r[v[f]]));
        return a.etrg = "backgroundPost", a.outcm = "performance", a.usergenf = 0, a.etag = "performance", a
    }

    function V(e, t, n, r) {
        if ("number" == typeof e && "number" == typeof t && t > 0 && e > t) {
            var i = e - t;
            i < Date.now() && (n[r] = i)
        }
    }

    function N() {
        if ("prerender" == document.visibilityState) {
            var e = {
                    etrg: "prerender",
                    outcm: "page",
                    usergenf: 0,
                    etag: "prerender"
                },
                t = E(0, "prerender", e, "");
            z.sendEvents(t)
        }
    }

    function H() {
        F.dwell_on && ($ = new R), m(), F.ldbg && f("tracked_mods: " + B.fData(F.tracked_mods));
        var e = q.addModules(F.tracked_mods, !1),
            t = q.addModules(F.tracked_mods_viewability, F.viewability);
        F.pageview_on_init && z.sendRapidNoDelay(e.concat(t), F.client_only), F.prerender && N(), B.executeOnLoad(function() {
            F.apv && (X = new L), U(), Q.extendBCookie()
        })
    }

    function j(e) {
        var t = navigator.userAgent,
            n = Object.prototype,
            r = t.match(/MSIE\s[^;]*/) || t.match(/Trident\/[^;]*/) ? 1 : 0,
            i = /KHTML/.test(t) ? 1 : 0,
            o = null !== t.match(/(iPhone|iPad|iPod)/gi),
            a = (t.indexOf("Android") > -1, o && null !== t.match(/AppleWebKit/)),
            s = null !== t.match(/AppleWebKit/) && null === t.match(/Chrome/),
            l = new RegExp(/\ufeff|\uffef|[\u0000-\u001f]|[\ue000-\uf8ff]/g),
            u = new RegExp(/[\u007f-\u00a0]|\s{2,}/g),
            c = "http://",
            f = "https://",
            m = "class",
            v = " ",
            g = -1,
            h = ["A_res", "A_cmi", "A_cma", "A_utm"],
            _ = -1,
            w = "https:" === window.location.protocol;
        return r && (document.documentMode ? _ = document.documentMode : (_ = 5, document.compatMode && "CSS1Compat" == document.compatMode && (_ = 7))), {
            $: function(e) {
                return document.getElementById(e)
            },
            ca: "%01",
            cb: "%02",
            cc: "%03",
            cd: "%04",
            ce: "%05",
            cf: "%06",
            cg: "%07",
            ch: "%08",
            ylk_kv_delim: e.ylk_kv_delim || ":",
            ylk_pair_delim: e.ylk_pair_delim || ";",
            DATA_ACTION: "data-action",
            data_action_outcome: "data-action-outcome",
            isIE: r,
            isIOSSafari: a,
            isSafari: s,
            isWebkit: i,
            ieV: _,
            value_len_whitelist: h,
            hasOwn: function(e, t) {
                return n.hasOwnProperty.call(e, t)
            },
            enc: encodeURIComponent,
            dec: decodeURIComponent,
            getQueryStringValue: function(e, t) {
                return decodeURIComponent(e.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(t).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"))
            },
            curProto: function() {
                return w ? f : c
            },
            isSecure: function() {
                return w
            },
            isScrollHorizontalVisible: function(e) {
                var e = e || document.documentElement;
                return e.scrollWidth > e.clientWidth
            },
            getCompStyle: function(e, t) {
                return void 0 !== window.getComputedStyle ? window.getComputedStyle(e, t) : (this.el = e, this.getPropertyValue = function(t) {
                    var n = /(\-([a-z]){1})/g;
                    return "float" == t && (t = "styleFloat"), n.test(t) && (t = t.replace(n, function() {
                        return arguments[2].toUpperCase()
                    })), e.currentStyle[t] ? e.currentStyle[t] : 0
                }, this)
            },
            getBorder: function(e, t) {
                if (!e || !t) return 0;
                var n = parseInt(this.getCompStyle(e, null).getPropertyValue(t), 10);
                return isNaN(n) && (n = 0), n
            },
            getElementHeight: function(e) {
                if (!e) return 0;
                var t = e.offsetHeight || 0;
                return t ? t - this.getBorder(e, "border-top-width") - this.getBorder(e, "border-bottom-width") : 0
            },
            getPositionTop: function(e) {
                for (var t = 0; e;) t += e.offsetTop, e = e.offsetParent;
                return t
            },
            getScrollbarWidthHeight: function() {
                var e = this.make("div");
                e.style.overflow = "scroll",
                    e.style.visibility = "hidden", e.style.position = "absolute", e.style.width = "100px", e.style.height = "100px", document.body.appendChild(e);
                var t = {
                    width: e.offsetWidth - e.clientWidth,
                    height: e.offsetHeight - e.clientHeight
                };
                return this.rmBodyEl(e), t
            },
            isInView: function(e, t) {
                function n(e) {
                    var t = e.getBoundingClientRect(),
                        n = t.left,
                        r = t.top,
                        i = e.clientWidth / 2,
                        o = e.clientHeight / 2;
                    return {
                        x: n + i,
                        y: r + o
                    }
                }

                function i(e, t) {
                    var r = n(e),
                        i = r.x,
                        o = r.y,
                        a = t.getBoundingClientRect(),
                        s = a.left,
                        l = a.right,
                        u = a.top,
                        c = a.bottom;
                    return i >= s && i <= l && o >= u && o <= c
                }

                function o(e) {
                    var t = n(e),
                        r = t.x,
                        i = t.y,
                        o = window.innerHeight || document.documentelement.clientHeight,
                        a = window.innerWidth || document.documentelement.clientWidth;
                    return r >= 0 && r <= a && i >= 0 && i <= o
                }
                if (r && _ <= 7) return !0;
                var a = B.getCompStyle(e);
                return "hidden" != a.visibility && "none" != a.display && (t !== window ? i(e, t) && o(e) : o(e))
            },
            strip: function(e) {
                for (var t = {
                        "/": "P",
                        ";": "1",
                        "?": "P",
                        "&": "1",
                        "#": "P"
                    }, n = {
                        url: e,
                        clean: "",
                        cookie: "",
                        keys: []
                    }, r = 0; e.indexOf("_yl", r) !== -1;) {
                    var i = e.indexOf("_yl", r);
                    if (r < i && (n.clean += e.slice(r, i - 1)), r = i + 3, t[e.charAt(i - 1)] && "=" === e.charAt(i + 4)) {
                        n.ult = 1;
                        var o = "_yl" + e.charAt(i + 3),
                            a = "";
                        for (i += 5; i < e.length && !t[e.charAt(i)]; i++) a += e.charAt(i);
                        n.keys.push(o), n[o] = a, "_ylv" !== o && (n.cookie += "&" + o + "=" + a), t[e.charAt(i)] && "P" === t[e.charAt(i)] && (n.clean += e.charAt(i)), r = i + 1
                    } else n.clean += e.slice(i - 1, r)
                }
                return n.ult && (n.cookie = n.cookie.substr(1), n.clean += e.substr(r)), n
            },
            prevDef: function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            appBodyEl: function(e) {
                document.body.appendChild(e)
            },
            rmBodyEl: function(e) {
                document.body.removeChild(e)
            },
            sa: function(e, t, n) {
                e.setAttribute(t, n)
            },
            getScrollY: function(e) {
                return e && e !== window ? e.scrollTop : void 0 !== window.pageYOffset ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
            },
            make: function(e, t) {
                var n = document.createElement(e);
                if (t && this.isObj(t))
                    for (var r in t) this.sa(n, r, t[r]);
                return n
            },
            getXHR: function() {
                function e() {
                    for (var e = !1, n = t.length, r = 0; r < n; r++) {
                        try {
                            e = t[r]()
                        } catch (i) {
                            continue
                        }
                        break
                    }
                    return e
                }
                var t = [function() {
                    return new XMLHttpRequest
                }, function() {
                    return new ActiveXObject("Msxml2.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Msxml3.XMLHTTP")
                }, function() {
                    return new ActiveXObject("Microsoft.XMLHTTP")
                }];
                return e()
            },
            hasLS: function() {
                try {
                    return "localStorage" in window && null !== window.localStorage
                } catch (e) {
                    return !1
                }
            },
            hasCORS: function() {
                return !(r && _ < 10) && ("withCredentials" in new XMLHttpRequest || "undefined" != typeof XDomainRequest)
            },
            hasWorkers: function() {
                return !!window.Worker
            },
            clearCookie: function(e, t, n) {
                t = t ? t : "/", n = n ? n : "", document.cookie = e + "= ; path=" + t + "; Expires=Thu, 01 Jan 1970 00:00:00 GMT; Domain=" + n + ";"
            },
            uniqConcat: function(e, t, n) {
                function r(e) {
                    for (var t = 0, r = e.length; t < r; t++) {
                        var a = e[t];
                        if (a) {
                            var s = n(a);
                            o[s] || (o[s] = 1, i.push(a))
                        }
                    }
                }
                var i = [],
                    o = {};
                return r(e), r(t), i
            },
            trim: function(e) {
                return e ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : e
            },
            extDomain: function(e) {
                var t = e.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);
                return t && t[1]
            },
            getAttribute: function(e, t) {
                var n = "";
                return document.documentElement.hasAttribute || t !== m || (t = "className"), e && e.getAttribute && (n = e.getAttribute(t, 2)), n
            },
            isDate: function(e) {
                return "[object Date]" === n.toString.call(e)
            },
            isArr: function(e) {
                return "[object Array]" === n.toString.apply(e)
            },
            isStr: function(e) {
                return "string" == typeof e
            },
            isNum: function(e) {
                return "number" == typeof e && isFinite(e)
            },
            isNumeric: function(e) {
                return e - 0 == e && (e + "").replace(/^\s+|\s+$/g, "").length > 0
            },
            isObj: function(e) {
                return e && "object" == typeof e
            },
            rTN: function(e) {
                try {
                    if (e && 3 === e.nodeType) return e.parentNode
                } catch (t) {
                    d(t)
                }
                return e
            },
            getTarget: function(e) {
                var t = e.target || e.srcElement;
                return t && !t.nodeName && (t = t.correspondingUseElement && t.correspondingUseElement.parentNode ? t.correspondingUseElement.parentNode : null), this.rTN(t)
            },
            addEvent: function(e, t, n) {
                e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
            },
            rmEvent: function(e, t, n) {
                e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
            },
            aug: function(e, t, n) {
                if (t) {
                    for (var r in t)
                        if (this.hasOwn(t, r)) {
                            if (n && !n.call(null, r, t[r])) continue;
                            e[r] = t[r]
                        }
                    return e
                }
            },
            rmProto: function(e) {
                return e ? e.substr(0, 7) === c ? e.substr(7, e.length) : e.substr(0, 8) === f ? e.substr(8, e.length) : e : ""
            },
            norm: function(e) {
                return null === e ? "" : (e = "" + e, this.trim(e.replace(u, " ").replace(l, "")))
            },
            _hasClass: function(e, t) {
                var n, r = !1;
                return e && t && (n = this.getAttribute(e, m) || "", r = t.exec ? t.test(n) : t && (v + n + v).indexOf(v + t + v) > -1), r
            },
            hasClass: function(e, t) {
                if (this.isArr(t)) {
                    for (var n = 0, r = t.length; n < r; n++)
                        if (this._hasClass(e, t[n])) return !0;
                    return !1
                }
                return !!this.isStr(t) && this._hasClass(e, t)
            },
            quote: function(e) {
                var t = /["\\\x00-\x1f\x7f-\x9f]/g,
                    n = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    r = '"',
                    i = '"';
                if (e.match(t)) {
                    var o = e.replace(t, function(e) {
                        var t = n[e];
                        return "string" == typeof t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (e % 16).toString(16))
                    });
                    return r + o + r
                }
                return i + e + i
            },
            /* @license
                   Copyright 2013 jQuery Foundation and other contributors

                   Permission is hereby granted, free of charge, to any person obtaining a copy
                   of this software and associated documentation files (the "Software"), to deal
                   in the Software without restriction, including without limitation the rights
                   to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                   copies of the Software, and to permit persons to whom the Software is
                   furnished to do so, subject to the following conditions:

                   The above copyright notice and this permission notice shall be included in
                   all copies or substantial portions of the Software.

                   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                   IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                   AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                   LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                   OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                   THE SOFTWARE.
                   */
            sfy: function(e) {
                if (!e && "" !== e) return {};
                var t, n = typeof e;
                if ("undefined" === n) return "undefined";
                if ("number" === n || "boolean" === n) return "" + e;
                if ("string" === n) return this.quote(e);
                if ("function" == typeof e.toJSON) return this.sfy(e.toJSON());
                if (this.isDate(e)) {
                    var r = e.getUTCMonth() + 1,
                        i = e.getUTCDate(),
                        o = e.getUTCFullYear(),
                        a = e.getUTCHours(),
                        s = e.getUTCMinutes(),
                        l = e.getUTCSeconds(),
                        u = e.getUTCMilliseconds();
                    return r < 10 && (r = "0" + r), i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), s < 10 && (s = "0" + s), l < 10 && (l = "0" + l), u < 100 && (u = "0" + u), u < 10 && (u = "0" + u), '"' + o + "-" + r + "-" + i + "T" + a + ":" + s + ":" + l + "." + u + 'Z"'
                }
                if (t = [], this.isArr(e)) {
                    for (var c = 0, d = e.length; c < d; c++) t.push(this.sfy(e[c]));
                    return "[" + t.join(",") + "]"
                }
                if ("object" === n) {
                    for (var f in e)
                        if (this.hasOwn(e, f)) {
                            var p = typeof f,
                                m = null;
                            if ("string" === p) m = this.quote(f);
                            else {
                                if ("number" !== p) continue;
                                m = '"' + f + '"'
                            }
                            if (p = typeof e[f], "function" !== p && "undefined" !== p) {
                                var v = "";
                                v = null === e[f] ? '""' : 0 === e[f] ? 0 : this.sfy(e[f]), t.push(m + ":" + v)
                            }
                        }
                    return "{" + t.join(",") + "}"
                }
            },
            toJSON: function() {
                var e = null;
                return function(t) {
                    return e || (e = "object" == typeof JSON && JSON.stringify && 6 !== _ && 7 !== _ && 8 !== _ ? JSON.stringify : this.sfy), e.call(this, t)
                }
            }(),
            executeOnLoad: function(e) {
                var t = !1,
                    n = function(n) {
                        (document.addEventListener || n && "load" === n.type || "complete" === document.readyState) && (t = !0, r(), e.call(this))
                    },
                    r = function() {
                        document.addEventListener ? (document.removeEventListener("DOMContentLoaded", n, !1), window.removeEventListener("load", n, !1)) : (document.detachEvent("onreadystatechange", n), window.detachEvent("onload", n))
                    };
                if ("complete" === document.readyState) setTimeout(n);
                else if (document.addEventListener) document.addEventListener("DOMContentLoaded", n, !1), window.addEventListener("load", n, !1);
                else {
                    document.attachEvent("onreadystatechange", n), window.attachEvent("onload", n);
                    var i = !1;
                    try {
                        i = null == window.frameElement && document.documentElement
                    } catch (o) {}
                    i && i.doScroll && ! function a() {
                        if (!t) {
                            try {
                                i.doScroll("left")
                            } catch (n) {
                                return setTimeout(a, 50)
                            }
                            r(), e.call(this)
                        }
                    }()
                }
            },
            getLinkContent: function(e) {
                for (var t, n = 0, r = "";
                    (t = e.childNodes[n]) && t; n++) 1 === t.nodeType && ("img" === t.nodeName.toLowerCase() && (r += (this.getAttribute(t, "alt") || "") + " "), r += this.getLinkContent(t));
                return r
            },
            fData: function(e) {
                return this.isStr(e) ? e : this.toJSON(e)
            },
            getLT: function(e, t) {
                if (!e) return "_";
                var n = "";
                return t = t.toLowerCase(), n = "input" === e.nodeName.toLowerCase() ? this.getAttribute(e, "value") : "text" === t ? i ? e.textContent : e.innerText ? e.innerText : e.textContent : "href" === t ? this.rmProto(this.getAttribute(e, "href")) : this.getAttribute(e, t) || "", n = this.norm(n), "" === n && (n = this.norm(this.getLinkContent(e))), "" === n ? "_" : n
            },
            clref: function(e) {
                if (0 !== e.indexOf(c) && 0 !== e.indexOf(f)) return "";
                var t = this.strip(e);
                return t.clean || t.url
            },
            cold: function() {
                return screen ? screen.colorDepth || screen.pixelDepth : "unknown"
            },
            sr: function() {
                return screen && screen.width && screen.height ? screen.width + "x" + screen.height : ""
            },
            vr: function() {
                return screen && screen.availHeight && screen.availWidth ? screen.availWidth + "x" + screen.availHeight : ""
            },
            dor: function() {
                return screen && screen.orientation && screen.orientation.type ? screen.orientation.type.indexOf("landscape") > -1 ? 1 : 0 : ""
            },
            ib: function() {
                return window && window.innerHeight && window.innerWidth ? window.innerWidth + "x" + window.innerHeight : document.documentElement.clientWidth + "x" + document.documentElement.clientHeight
            },
            ob: function() {
                return window && window.outerHeight && window.outerWidth ? window.outerWidth + "x" + window.outerHeight : document.documentElement.clientWidth + "x" + document.documentElement.clientHeight
            },
            srr: function() {
                return window && window.devicePixelRatio ? window.devicePixelRatio : "1"
            },
            xy: function(e) {
                function t() {
                    var e = document.documentElement,
                        t = document.body;
                    return e && (e.scrollTop || e.scrollLeft) ? [e.scrollTop, e.scrollLeft] : t ? [t.scrollTop, t.scrollLeft] : [0, 0]
                }
                var n = null,
                    i = e.pageX,
                    o = e.pageY;
                return r && (n = t()), i || 0 === i || (i = e.clientX || 0, r && (i += n[1])), o || 0 === o || (o = e.clientY || 0, r && (o += n[0])), i + "," + o
            },
            hasCC: function(e) {
                for (var t = 0, n = e.length; t < n; t++) {
                    var r = e.charCodeAt(t);
                    if (r < 32 || "=" === r) return !0
                }
                return !1
            },
            isValidPair: function(e, t) {
                return !!B.in_value_whitelist(e) || (!(e.length <= 0 || e.length > 32) || (B.ldbg && console.warn("Invalid key (" + e + ") length. Keys Must be <=32."), !1))
            },
            ser: function(e, t) {
                if (!e) return "";
                void 0 === typeof t && (t = !0);
                var n = [],
                    r = "";
                for (var i in e)
                    if (this.hasOwn(e, i)) {
                        var o = i,
                            a = e[i];
                        if (null === o || null === a) continue;
                        if (o += "", a += "", !this.isValidPair(o, a)) continue;
                        if (!this.hasCC(o) && !this.hasCC(a)) {
                            r = "", a = this.trim(a), "" !== a && " " !== a || !t || (a = "_");
                            try {
                                r = this.enc(o + "" + a), r = r.replace(/'/g, "%27")
                            } catch (s) {
                                r = "_ERR_ENCODE_", d(s)
                            }
                            n.push(r)
                        }
                    }
                return n.join(this.cd)
            },
            rand: function() {
                for (var e = 0, t = "", n = ""; e++ < 16;) {
                    var r = Math.floor(62 * Math.random());
                    n = r < 10 ? r : String.fromCharCode(r < 36 ? r + 55 : r + 61), t += n
                }
                return t
            },
            tms: function() {
                return +new Date
            },
            cookEn: function() {
                var e = navigator.cookieEnabled ? 1 : 0,
                    t = "rapidtc";
                return "undefined" != typeof navigator.cookieEnabled || e || (document.cookie = t + "=1", e = document.cookie.indexOf("testcookie") != -1, document.cookie = t + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"), e
            },
            isResCF: function(e) {
                var t = {
                    14: 1,
                    15: 1,
                    18: 1,
                    19: 1,
                    20: 1
                };
                return t[e]
            },
            isTagOfInterest: function(e, t) {
                for (var n = 0, r = t.length; n < r; n++)
                    if (e.tagName && e.tagName.toLowerCase() == t[n].toLowerCase()) return !0;
                return !1
            },
            samplingSuccess: function(e) {
                var t = function(e) {
                        for (var t = 33554467, n = t, r = 0, i = e.length; r < i; r++) n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24), n ^= e.charCodeAt(r);
                        return n < 0 && (n &= 2147483647, n += 2147483648), n
                    },
                    n = function(e) {
                        var n = 1e3;
                        e *= 10;
                        var r = new p,
                            i = "" + r.getCookieByName("B");
                        return !!i && (g < 0 && (g = t(i) % n), g < e)
                    };
                return n(e)
            },
            in_value_whitelist: function(e) {
                return !(r && _ <= 8) && B.value_len_whitelist.indexOf(e) !== -1
            }
        }
    }
    "undefined" != typeof console && "undefined" != typeof console.log || (console = {
        log: function() {}
    }), "undefined" == typeof console.error && (console.error = console.log), "undefined" == typeof console.warn && (console.warn = console.log), t.prototype = {
        ser: function() {
            return B.ser(this.map)
        },
        set: function(e, t) {
            var n = t ? B.norm(t) : t;
            void 0 !== n && null !== n || (n = ""), null !== n && B.isStr(n) && (n = n.replace(/\\/g, "\\\\")), e = e.replace(/[^a-zA-Z0-9-_\u0080-\uFFFF]/g, "_"), B.isValidPair(e, n) && (this.map[B.norm(e)] = n, this.count++)
        },
        get: function(e) {
            return this.map[e]
        },
        getAll: function() {
            return this.map
        },
        absorb: function(e) {
            if (e && B.isObj(e))
                for (var t in e) B.hasOwn(e, t) && this.set(t, e[t])
        },
        absorb_filter: function(e, t) {
            if (e && B.isObj(e))
                for (var n in e) t && !t.call(null, n) || B.hasOwn(e, n) && this.set(n, e[n])
        },
        getSize: function() {
            return this.count
        }
    }, n.prototype = new t, n.prototype.constructor = t, r.prototype = new t, r.prototype.constructor = t, n.makeFromPP = function(e) {
        var t = new n;
        return e && t.absorb(e.getAll()), t
    };
    var B = j(e),
        Y = new M(window),
        W = new n,
        q = Y.getModules(),
        G = {
            none: 0,
            gzip: 1,
            lzw: 2,
            deflate: 3
        },
        K = {
            tumblr: !0
        },
        F = s(e),
        z = h(),
        X = null,
        $ = null,
        J = null,
        Q = new p(W),
        Z = 0,
        ee = null,
        te = null;
    H();
    var ne = {
        utils: B
    };
    return {
        init: function() {},
        beaconEvent: function(e, t, n, r) {
            S(e, t, n, r)
        },
        beaconClick: function(e, t, n, r, i, o, a) {
            F.ldbg && f("beaconClick: sec=" + e + " slk=" + t + " callback=" + o), !r && i && (r = {});
            var s = {};
            if (i && (r.outcm = i, s.outcm = i), a && a.pp && B.aug(s, a.pp), a && a.dwell && F.dwell_on) {
                var l = a.dwell;
                "start" !== l && "stop" !== l || ("start" === l ? $.start_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = te ? te.ts : null, s.A_prems = te ? te.ms : null) : $.stop_dwell() && (s.etag = "dwell," + l, s.usergenf = 1, s.A_prets = ee ? ee.ts : null, s.A_prems = ee ? ee.ms : null))
            }
            var u = T(e, t, n, r, i);
            u.pp = s, z.sendClick(u, o)
        },
        addModuleAPV: function(e) {
            return new L(e)
        },
        beaconAPV: function(e, t) {
            I({
                A_apv: 1,
                A_apx: e || 0,
                A_asd: t || 0
            }, !1, !0)
        },
        addTargetedModuleViewabilityManager: function(e) {
            return new M(e)
        },
        addModules: Y.addModules,
        addModulesWithViewability: Y.addModulesWithViewability,
        refreshModule: Y.refreshModules,
        reevaluateModulesViewability: Y.reevaluateModulesViewability,
        removeModule: Y.removeModule,
        isModuleTracked: Y.isModuleTracked,
        destroy: function() {
            f("destroy called"), q.destroy(), X && (X.destroy(), X = null), Y && (Y.destroy(), Y = null), $ && ($.destroy(), $ = null)
        },
        reInit: function(e) {
            return F.ldbg && f("reInit called with: " + B.fData(e)), e = e || {}, e.spaceid ? (W = new n, F = s(e), B = j(e), void(Q = new p(W))) : void d("Invalid spid in reInit config: " + B.fData(e))
        },
        setRapidAttribute: function(e) {
            if (e.keys && F.keys.absorb(e.keys), e.spaceid && (F.spaceid = e.spaceid), e.referrer && (F.referrer = e.referrer), e.A_sid && (F.keys.set("A_sid", e.A_sid), F.persist_asid = !0), e.accountGUID && (F.accountGUID = e.accountGUID), e.customUID) {
                var t = e.customUID;
                if ("object" == typeof t && t.type && t.id) {
                    var n = t.type;
                    K[n] ? F.customUID = B.aug({}, e.customUID) : console.error('customUID type: "' + n + '", is not valid')
                } else console.error('customUID must be an Object with "id" and "type"')
            }
            e.location && (F.loc = e.location, F.keys.set("_w", B.rmProto(e.location))), B.hasOwn(e, "apv") && (e.apv ? X ? X.reInit() : X = new L : X && (X.destroy(), X = null))
        },
        getRapidAttribute: function(e) {
            switch (e) {
                case "accountGUID":
                    return F.accountGUID;
                case "customUID":
                    return B.aug({}, F.customUID);
                case "spaceid":
                    return F.spaceid;
                case "keys":
                    return B.aug({}, F.keys.getAll());
                default:
                    return null
            }
        },
        setAccountGUID: function(e) {
            this.setRapidAttribute({
                accountGUID: e
            })
        },
        getAccountGUID: function() {
            return this.getRapidAttribute("accountGUID")
        },
        clearAccountGUID: function() {
            this.clearRapidAttribute(["accountGUID"])
        },
        setCustomUID: function(e) {
            this.setRapidAttribute({
                customUID: e
            })
        },
        getCustomUID: function() {
            return this.getRapidAttribute("customUID")
        },
        clearCustomUID: function() {
            this.clearRapidAttribute(["customUID"])
        },
        clearRapidAttribute: function(e) {
            for (var t in e)
                if ("keys" === e[t]) {
                    var r = F.keys.get("_w"),
                        i = F.keys.get("A_sid");
                    F.keys = new n, F.keys.set("_w", r), F.keys.set("A_sid", i)
                } else "referrer" === e[t] ? F.referrer = "" : "A_sid" === e[t] ? (F.keys.set("A_sid", ""), F.persist_asid = !0) : "location" === e[t] ? (F.loc = "", F.keys.set("_w", "")) : "accountGUID" === e[t] ? F.accountGUID = null : "customUID" === e[t] && (F.customUID = null)
        },
        beaconPageview: function(e) {
            I(e, !0)
        },
        beaconRouteChange: function(e) {
            F.dwell_on && $.stop_dwell() && S("dwell", {
                etag: "dwell,stop",
                usergenf: 1,
                A_prets: ee ? ee.ts : null,
                A_prems: ee ? ee.ms : null
            }, ""), this.clearRapidAttribute(["keys"]), this.setRapidAttribute(e), I()
        },
        beaconECommerce: function() {},
        beaconInternalSearch: function() {},
        getCurrentSID: function() {
            return W.get("A_sid")
        },
        notifyHistoryPushStateCalled: function() {},
        beaconLinkViews: function(e, t, n, i) {
            F.ldbg && f("beaconLinkViews() called"), n = n || {};
            var o = {};
            n.pp && B.aug(o, n.pp);
            var a = !1,
                s = !1;
            switch (t) {
                case 1:
                case "1":
                case !0:
                    s = !0;
                    break;
                case 2:
                case "2":
                    a = !0, s = !1, n.event = E("contentmodification", "", {});
                    break;
                case 0:
                case "0":
                case !1:
                default:
                    s = !1
            }
            if (!F.yql_enabled) return f("LVs is are disable when geo only"), void(s && I(o, !1));
            if (n && n.event && s && (d("Cannot track event type and pageview at same time."), n.event = null), 0 !== e.length || n.event) {
                for (var l = [], u = 0; u < e.length; u++) {
                    var c = e[u],
                        p = new r;
                    p.absorb_filter(c, function(e) {
                        return "sec" != e && "_links" != e
                    });
                    for (var m = [], v = 1, g = 0; g < c._links.length; g++) {
                        var h = c._links[g],
                            _ = {
                                viewable: !0,
                                data: {
                                    sec: c.sec,
                                    _p: v++,
                                    A_lv: 2
                                }
                            };
                        B.aug(_.data, h), m.push(_)
                    }
                    var w = {
                        moduleName: c.sec,
                        moduleYLK: p,
                        links: m,
                        identifier: c.sec
                    };
                    l.push(w)
                }(s || n.event || n.pp) && n.event && n.event.data && B.aug(o, n.event.data), z.sendRapidNoDelay(l, s, o, n), i && i.call()
            }
        },
        beaconPerformanceData: function(e, t) {
            U(e, t)
        },
        __test_only__: function() {
            return ne
        }
    }
};