(function(g) {
    var window = this;
    var OEa = function(a, b) {
            return g.Zb(a, b)
        },
        c6 = function(a) {
            g.Zn(a, "zx", g.zc());
            return a
        },
        d6 = function(a, b, c) {
            g.Ga(c) || (c = [String(c)]);
            g.bo(a.o, b, c)
        },
        PEa = function(a, b) {
            var c = [];
            g.Il(b, function(d) {
                try {
                    var e = g.DE.prototype.A.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                g.v(e) ? g.CE(e) && c.push(d) : c.push(d)
            }, a);
            return c
        },
        QEa = function(a, b) {
            var c = PEa(a, b);
            (0, g.E)(c, function(d) {
                g.DE.prototype.remove.call(this, d)
            }, a)
        },
        REa = function(a) {
            if (a.Kd) {
                if (a.Kd.locationOverrideToken) return {
                    locationOverrideToken: a.Kd.locationOverrideToken
                };
                if (null != a.Kd.latitudeE7 && null != a.Kd.longitudeE7) return {
                    latitudeE7: a.Kd.latitudeE7,
                    longitudeE7: a.Kd.longitudeE7
                }
            }
            return null
        },
        SEa = function(a, b, c, d) {
            var e = new g.Qn(null, void 0);
            a && g.Rn(e, a);
            b && g.Sn(e, b);
            c && g.Tn(e, c);
            d && g.Un(e, d);
            return e
        },
        e6 = function(a, b) {
            g.wF[a] = !0;
            var c = g.uF();
            c && c.publish.apply(c, arguments);
            g.wF[a] = !1
        },
        f6 = function(a) {
            this.app = this.name = this.id = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.C = !1;
            this.capabilities = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.Kn;
            this.o = this.A = "";
            a && (this.id = a.id || a.name, this.name = a.name, this.app = a.app, this.type = a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", TEa(this, a.capabilities || ""), UEa(this, a.experiments || ""), this.A = a.remoteControllerUrl || "", this.o = a.localChannelEncryptionKey ||
                "")
        },
        TEa = function(a, b) {
            a.capabilities.clear();
            (0, g.se)(b.split(","), g.Ma(OEa, VEa)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        UEa = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        g6 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || ""
        },
        h6 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        WEa = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid
            }
        },
        XEa = function(a) {
            return new g6(a)
        },
        YEa = function(a) {
            return g.Ga(a) ? (0, g.K)(a, XEa) : []
        },
        i6 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + (a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + "}" : "null"
        },
        j6 = function(a) {
            return g.Ga(a) ? "[" + (0, g.K)(a, i6).join(",") + "]" : "null"
        },
        k6 = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
                var b = 16 * Math.random() | 0;
                return ("x" == a ? b : b & 3 | 8).toString(16)
            })
        },
        ZEa = function(a) {
            return (0, g.K)(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        l6 = function(a, b) {
            return g.Va(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        m6 = function(a, b) {
            return g.Va(a, function(c) {
                return h6(c, b)
            })
        },
        $Ea = function() {
            var a = (0, g.KI)();
            a && QEa(a, a.o.be(!0))
        },
        n6 = function() {
            var a = g.NI("yt-remote-connected-devices") || [];
            g.tb(a);
            return a
        },
        aFa = function(a) {
            if (g.ab(a)) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return (0, g.K)(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        bFa = function(a) {
            g.MI("yt-remote-connected-devices", a, 86400)
        },
        p6 = function() {
            if (o6) return o6;
            var a = g.NI("yt-remote-device-id");
            a || (a = k6(), g.MI("yt-remote-device-id", a, 31536E3));
            for (var b = n6(), c = 1, d = a; g.Za(b, d);) c++, d = a + "#" + c;
            return o6 = d
        },
        q6 = function() {
            var a = n6(),
                b = p6();
            g.Za(a, b);
            g.PI() && g.vb(a, b);
            a = aFa(a);
            if (g.ab(a)) try {
                g.lI("remote_sid")
            } catch (c) {} else try {
                g.kI("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        cFa = function() {
            return g.NI("yt-remote-session-browser-channel")
        },
        dFa = function() {
            return g.NI("yt-remote-local-screens") || []
        },
        eFa = function() {
            g.MI("yt-remote-lounge-token-expiration", !0, 86400)
        },
        fFa = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = (0, g.K)(dFa(), function(d) {
                    return d.loungeToken
                }),
                c = (0, g.K)(a, function(d) {
                    return d.loungeToken
                });
            (0, g.Vj)(c, function(d) {
                return !g.Za(b, d)
            }) && eFa();
            g.MI("yt-remote-local-screens", a, 31536E3)
        },
        gFa = function(a, b) {
            g.MI("yt-remote-session-browser-channel", a);
            g.MI("yt-remote-session-screen-id", b);
            var c = n6(),
                d = p6();
            g.Za(c, d) || c.push(d);
            bFa(c);
            q6()
        },
        r6 = function(a) {
            a || (g.OI("yt-remote-session-screen-id"), g.OI("yt-remote-session-video-id"));
            q6();
            a = n6();
            g.eb(a, p6());
            bFa(a)
        },
        hFa = function() {
            if (!s6) {
                var a = g.OE();
                a && (s6 = new g.xE(a))
            }
            return s6 ? !!s6.get("yt-remote-use-staging-server") : !1
        },
        t6 = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        iFa = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        u6 = function(a) {
            a.length ? jFa(a.shift(), function() {
                u6(a)
            }) : v6()
        },
        kFa = function(a) {
            return "chrome-extension://" + a + w6
        },
        jFa = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            d.src = a;
            (document.head || document.documentElement).appendChild(d)
        },
        v6 = function() {
            var a = iFa();
            a && a(!1, "No cast extension found")
        },
        mFa = function() {
            if (lFa) {
                var a = 2,
                    b = iFa(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                jFa("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", v6, c)
            }
        },
        nFa = function() {
            mFa();
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            u6(["//www.gstatic.com/eureka/clank/" + (a ? parseInt(a[1], 10) : 0) + w6, "//www.gstatic.com/eureka/clank" + w6])
        },
        x6 = function(a, b, c) {
            g.L.call(this);
            this.F = null != c ? (0, g.C)(a, c) : a;
            this.Ed = b;
            this.D = (0, g.C)(this.ZK, this);
            this.o = !1;
            this.A = 0;
            this.C = this.Fa = null;
            this.B = []
        },
        y6 = function() {},
        z6 = function(a, b, c, d) {
            this.o = a;
            this.C = b;
            this.G = c;
            this.F = d || 1;
            this.B = 45E3;
            this.Z = new g.go(this);
            this.A = new g.ch;
            this.A.setInterval(250)
        },
        pFa = function(a, b, c) {
            a.ik = 1;
            a.Bh = c6(b.clone());
            a.pj = c;
            a.D = !0;
            oFa(a, null)
        },
        A6 = function(a, b, c, d, e) {
            a.ik = 1;
            a.Bh = c6(b.clone());
            a.pj = null;
            a.D = c;
            e && (a.GF = !1);
            oFa(a, d)
        },
        oFa = function(a, b) {
            a.bl = (0, g.J)();
            B6(a);
            a.fi = a.Bh.clone();
            d6(a.fi, "t", a.F);
            a.fo = 0;
            a.Xc = a.o.Vt(a.o.Vn() ? b : null);
            0 < a.Du && (a.tr = new g.um((0, g.C)(a.QG, a, a.Xc), a.Du));
            a.Z.X(a.Xc, "readystatechange", a.dV);
            var c = a.Oi ? g.ic(a.Oi) : {};
            a.pj ? (a.os = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", a.Xc.send(a.fi, a.os, a.pj, c)) : (a.os = "GET", a.GF && !g.ge && (c.Connection = "close"), a.Xc.send(a.fi, a.os, null, c));
            a.o.Cf(1)
        },
        sFa = function(a, b, c) {
            for (var d = !0; !a.wi && a.fo < c.length;) {
                var e = qFa(a, c);
                if (e == C6) {
                    4 == b && (a.Ch = 4, D6(15), d = !1);
                    break
                } else if (e == rFa) {
                    a.Ch = 4;
                    D6(16);
                    d = !1;
                    break
                } else E6(a, e)
            }
            4 == b && 0 == c.length && (a.Ch = 1, D6(17), d = !1);
            a.If = a.If && d;
            d || (F6(a), G6(a))
        },
        qFa = function(a, b) {
            var c = a.fo,
                d = b.indexOf("\n", c);
            if (-1 == d) return C6;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return rFa;
            d += 1;
            if (d + c > b.length) return C6;
            var e = b.substr(d, c);
            a.fo = d + c;
            return e
        },
        uFa = function(a, b) {
            a.bl = (0, g.J)();
            B6(a);
            var c = b ? window.location.hostname : "";
            a.fi = a.Bh.clone();
            g.Zn(a.fi, "DOMAIN", c);
            g.Zn(a.fi, "t", a.F);
            try {
                a.Lf = new ActiveXObject("htmlfile")
            } catch (n) {
                F6(a);
                a.Ch = 7;
                D6(22);
                G6(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                for (var e = "", f = 0; f < c.length; f++) {
                    var k = c.charAt(f);
                    if ("<" == k) e += "\\x3c";
                    else if (">" == k) e += "\\x3e";
                    else {
                        var l = k;
                        if (l in H6) k = H6[l];
                        else if (l in tFa) k = H6[l] = tFa[l];
                        else {
                            var m = l.charCodeAt(0);
                            if (31 < m && 127 > m) k = l;
                            else {
                                if (256 > m) {
                                    if (k = "\\x", 16 > m || 256 < m) k += "0"
                                } else k = "\\u", 4096 > m && (k += "0");
                                k += m.toString(16).toUpperCase()
                            }
                            k =
                                H6[l] = k
                        }
                        e += k
                    }
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.Fd(g.Vc("b/12014412"), d + "</body></html>");
            a.Lf.open();
            a.Lf.write(g.wd(c));
            a.Lf.close();
            a.Lf.parentWindow.m = (0, g.C)(a.lU, a);
            a.Lf.parentWindow.d = (0, g.C)(a.VE, a, !0);
            a.Lf.parentWindow.rpcClose = (0, g.C)(a.VE, a, !1);
            c = a.Lf.createElement("DIV");
            a.Lf.parentWindow.document.body.appendChild(c);
            d = g.jd(a.fi.toString());
            d = g.tc(g.gd(d));
            d = g.Fd(g.Vc("b/12014412"), '<iframe src="' + d + '"></iframe>');
            g.Gd(c, d);
            a.o.Cf(1)
        },
        B6 = function(a) {
            a.wy = (0, g.J)() + a.B;
            vFa(a, a.B)
        },
        vFa = function(a, b) {
            if (null != a.Cl) throw Error("WatchDog timer not null");
            a.Cl = I6((0, g.C)(a.AU, a), b)
        },
        J6 = function(a) {
            a.Cl && (g.y.clearTimeout(a.Cl), a.Cl = null)
        },
        G6 = function(a) {
            a.o.JB() || a.wi || a.o.Tq(a)
        },
        F6 = function(a) {
            J6(a);
            g.Pf(a.tr);
            a.tr = null;
            a.A.stop();
            g.mo(a.Z);
            if (a.Xc) {
                var b = a.Xc;
                a.Xc = null;
                b.abort();
                b.dispose()
            }
            a.Lf && (a.Lf = null)
        },
        E6 = function(a, b) {
            try {
                a.o.OE(a, b), a.o.Cf(4)
            } catch (c) {}
        },
        xFa = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                wFa(a, b, function(k) {
                    k ? c(!0) : g.y.setTimeout(function() {
                        xFa(a, b, c, d, f)
                    }, f)
                })
            }
        },
        wFa = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    K6(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    K6(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    K6(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    K6(d), c(!1)
                } catch (e) {}
            };
            g.y.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        K6 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        yFa = function(a) {
            this.o = a;
            this.A = new y6
        },
        zFa = function(a) {
            var b = L6(a.o, a.Ol, "/mail/images/cleardot.gif");
            c6(b);
            xFa(b.toString(), 5E3, (0, g.C)(a.ZJ, a), 3, 2E3);
            a.Cf(1)
        },
        N6 = function(a) {
            var b = a.o.I;
            if (null != b) D6(5), b ? (D6(11), M6(a.o, a, !1)) : (D6(12), M6(a.o, a, !0));
            else if (a.me = new z6(a, void 0, void 0, void 0), a.me.Oi = a.Bu, b = a.o, b = L6(b, b.Vn() ? a.Hm : null, a.Cu), D6(5), !g.ee || g.Nc(10)) d6(b, "TYPE", "xmlhttp"), A6(a.me, b, !1, a.Hm, !1);
            else {
                d6(b, "TYPE", "html");
                var c = a.me;
                a = !!a.Hm;
                c.ik = 3;
                c.Bh = c6(b.clone());
                uFa(c, a)
            }
        },
        O6 = function(a, b, c) {
            this.o = 1;
            this.A = [];
            this.B = [];
            this.D = new y6;
            this.H = a || null;
            this.I = null != b ? b : null;
            this.F = c || !1
        },
        AFa = function(a, b) {
            this.o = a;
            this.map = b;
            this.context = null
        },
        BFa = function(a) {
            g.Rf.call(this, "statevent", a)
        },
        CFa = function(a, b) {
            g.Rf.call(this, "timingevent", a);
            this.size = b
        },
        DFa = function(a) {
            g.Rf.call(this, "serverreachability", a)
        },
        GFa = function(a) {
            EFa(a);
            if (3 == a.o) {
                var b = a.yn++,
                    c = a.zp.clone();
                g.Zn(c, "SID", a.C);
                g.Zn(c, "RID", b);
                g.Zn(c, "TYPE", "terminate");
                P6(a, c);
                b = new z6(a, a.C, b, void 0);
                b.ik = 2;
                b.Bh = c6(c.clone());
                (new Image).src = b.Bh;
                b.bl = (0, g.J)();
                B6(b)
            }
            FFa(a)
        },
        HFa = function(a) {
            a.vK(1, 0);
            a.zp = L6(a, null, a.Au);
            Q6(a)
        },
        EFa = function(a) {
            a.rh && (a.rh.abort(), a.rh = null);
            a.Bc && (a.Bc.cancel(), a.Bc = null);
            a.Cg && (g.y.clearTimeout(a.Cg), a.Cg = null);
            R6(a);
            a.ge && (a.ge.cancel(), a.ge = null);
            a.vh && (g.y.clearTimeout(a.vh), a.vh = null)
        },
        IFa = function(a, b) {
            if (0 == a.o) throw Error("Invalid operation: sending map when state is closed");
            a.A.push(new AFa(a.XP++, b));
            2 != a.o && 3 != a.o || Q6(a)
        },
        Q6 = function(a) {
            a.ge || a.vh || (a.vh = I6((0, g.C)(a.UE, a), 0), a.Zj = 0)
        },
        KFa = function(a, b) {
            if (1 == a.o) {
                if (!b) {
                    a.yn = Math.floor(1E5 * Math.random());
                    var c = a.yn++,
                        d = new z6(a, "", c, void 0);
                    d.Oi = null;
                    var e = S6(a),
                        f = a.zp.clone();
                    g.Zn(f, "RID", c);
                    g.Zn(f, "CVER", "1");
                    P6(a, f);
                    pFa(d, f, e);
                    a.ge = d;
                    a.o = 2
                }
            } else 3 == a.o && (b ? JFa(a, b) : 0 == a.A.length || a.ge || JFa(a))
        },
        JFa = function(a, b) {
            if (b)
                if (6 < a.zi) {
                    a.A = a.B.concat(a.A);
                    a.B.length = 0;
                    var c = a.yn - 1;
                    var d = S6(a)
                } else c = b.G, d = b.pj;
            else c = a.yn++, d = S6(a);
            var e = a.zp.clone();
            g.Zn(e, "SID", a.C);
            g.Zn(e, "RID", c);
            g.Zn(e, "AID", a.Bk);
            P6(a, e);
            c = new z6(a, a.C, c, a.Zj + 1);
            c.Oi = null;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.ge = c;
            pFa(c, e, d)
        },
        P6 = function(a, b) {
            if (a.Dd) {
                var c = a.Dd.pB();
                c && g.Nb(c, function(d, e) {
                    g.Zn(b, e, d)
                })
            }
        },
        S6 = function(a) {
            var b = Math.min(a.A.length, 1E3),
                c = ["count=" + b];
            if (6 < a.zi && 0 < b) {
                var d = a.A[0].o;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = 0; e < b; e++) {
                var f = a.A[e].o,
                    k = a.A[e].map;
                f = 6 >= a.zi ? e : f - d;
                try {
                    g.Nb(k, function(l, m) {
                        c.push("req" + f + "_" + m + "=" + encodeURIComponent(l))
                    })
                } catch (l) {
                    c.push("req" + f + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.B = a.B.concat(a.A.splice(0, b));
            return c.join("&")
        },
        LFa = function(a) {
            a.Bc || a.Cg || (a.G = 1, a.Cg = I6((0, g.C)(a.TE, a), 0), a.Pj = 0)
        },
        T6 = function(a) {
            if (a.Bc || a.Cg || 3 <= a.Pj) return !1;
            a.G++;
            a.Cg = I6((0, g.C)(a.TE, a), MFa(a, a.Pj));
            a.Pj++;
            return !0
        },
        M6 = function(a, b, c) {
            a.ls = c;
            a.Vf = b.Qg;
            a.F || HFa(a)
        },
        R6 = function(a) {
            null != a.Ci && (g.y.clearTimeout(a.Ci), a.Ci = null)
        },
        MFa = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        U6 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Dd && (c = null);
                var d = (0, g.C)(a.TV, a);
                c || (c = new g.Qn("//www.google.com/images/cleardot.gif"), c6(c));
                wFa(c.toString(), 1E4, d)
            } else D6(2);
            NFa(a, b)
        },
        NFa = function(a, b) {
            a.o = 0;
            a.Dd && a.Dd.oA(b);
            FFa(a);
            EFa(a)
        },
        FFa = function(a) {
            a.o = 0;
            a.Vf = -1;
            if (a.Dd)
                if (0 == a.B.length && 0 == a.A.length) a.Dd.It();
                else {
                    g.jb(a.B);
                    var b = g.jb(a.A);
                    a.B.length = 0;
                    a.A.length = 0;
                    a.Dd.It(b)
                }
        },
        L6 = function(a, b, c) {
            var d = g.$n(c);
            if ("" != d.A) b && g.Sn(d, b + "." + d.A), g.Tn(d, d.D);
            else {
                var e = window.location;
                d = SEa(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.im && g.Nb(a.im, function(f, k) {
                g.Zn(d, k, f)
            });
            g.Zn(d, "VER", a.zi);
            P6(a, d);
            return d
        },
        I6 = function(a, b) {
            if (!g.Ia(a)) throw Error("Fn must not be null and must be a function");
            return g.y.setTimeout(function() {
                a()
            }, b)
        },
        D6 = function(a) {
            V6.dispatchEvent(new BFa(V6, a))
        },
        OFa = function() {},
        PFa = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        W6 = function(a, b) {
            g.L.call(this);
            this.o = new g.U(this.bU, 0, this);
            g.M(this, this.o);
            this.Ed = 5E3;
            this.A = 0;
            if (g.Ia(a)) b && (a = (0, g.C)(a, b));
            else if (a && g.Ia(a.handleEvent)) a = (0, g.C)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        X6 = function(a, b, c) {
            this.K = a;
            this.F = b;
            this.C = new g.wE;
            this.A = new W6(this.xW, this);
            this.o = this.jb = null;
            this.Bb = !1;
            this.D = null;
            this.I = "";
            this.H = this.B = 0;
            this.G = [];
            this.L = c || !1
        },
        QFa = function(a) {
            return {
                firstTestResults: [""],
                secondTestResults: !a.o.ls,
                sessionId: a.o.C,
                arrayId: a.o.Bk
            }
        },
        RFa = function(a, b) {
            a.H = b || 0;
            a.A.stop();
            a.o && (3 == a.o.o && KFa(a.o), GFa(a.o));
            a.H = 0
        },
        Y6 = function(a) {
            return !!a.o && 3 == a.o.o
        },
        SFa = function(a, b) {
            (a.F.loungeIdToken = b) || a.A.stop()
        },
        Z6 = function(a) {
            this.port = this.domain = "";
            this.o = "/api/lounge";
            this.A = !0;
            a = a || document.location.href;
            var b = g.rh(a) || "";
            b && (this.port = ":" + b);
            this.domain = g.qh(a) || "";
            a = g.Kb;
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.Jb(a, "10.0") && (this.A = !1))
        },
        $6 = function(a, b) {
            var c = a.o;
            if (g.v(void 0) ? 0 : a.A) c = "https://" + a.domain + a.port + a.o;
            return g.Ah(c + b, {})
        },
        a7 = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.Ma(a.B, d, !0),
                onError: g.Ma(a.C, e),
                Hd: g.Ma(a.D, e)
            };
            c && (a.Sb = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.fG(b, a)
        },
        WFa = function() {
            var a = TFa;
            UFa();
            b7.push(a);
            VFa(b7)
        },
        c7 = function(a, b) {
            UFa();
            var c = b7,
                d = XFa(a, String(b));
            g.ab(c) ? YFa(d) : (VFa(c), (0, g.E)(c, function(e) {
                e(d)
            }))
        },
        UFa = function() {
            b7 || (b7 = g.z("yt.mdx.remote.debug.handlers_") || [], g.Da("yt.mdx.remote.debug.handlers_", b7, void 0))
        },
        YFa = function(a) {
            var b = (d7 + 1) % 50;
            d7 = b;
            e7[b] = a;
            f7 || (f7 = 49 == b)
        },
        VFa = function(a) {
            var b = e7;
            if (b[0]) {
                var c = d7,
                    d = f7 ? c : -1;
                do {
                    d = (d + 1) % 50;
                    var e = b[d];
                    (0, g.E)(a, function(f) {
                        f(e)
                    })
                } while (d != c);
                e7 = Array(50);
                d7 = -1;
                f7 = !1
            }
        },
        XFa = function(a, b) {
            var c = ((0, g.J)() - ZFa) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g7 = function(a) {
            g.yH.call(this);
            this.G = a;
            this.o = []
        },
        $Fa = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) {
                var d = c.name;
                c.id = b.id || c.id;
                c.name = b.name;
                c.token = b.token;
                c.uuid = b.uuid || c.uuid;
                return c.name != d
            }
            a.o.push(b);
            return !0
        },
        aGa = function(a, b) {
            var c = a.o.length != b.length;
            a.o = (0, g.se)(a.o, function(f) {
                return !!l6(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = $Fa(a, b[d]) || c;
            return c
        },
        bGa = function(a, b) {
            var c = a.o.length;
            a.o = (0, g.se)(a.o, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.o.length < c
        },
        h7 = function(a, b, c, d) {
            g.yH.call(this);
            this.F = a;
            this.D = b;
            this.C = c;
            this.B = d;
            this.A = 0;
            this.o = null;
            this.Fa = NaN
        },
        j7 = function(a) {
            g7.call(this, "LocalScreenService");
            this.C = a;
            this.A = NaN;
            i7(this);
            this.info("Initializing with " + j6(this.o))
        },
        cGa = function(a) {
            if (a.o.length) {
                var b = (0, g.K)(a.o, function(d) {
                        return d.id
                    }),
                    c = $6(a.C, "/pairing/get_lounge_token_batch");
                a7(a.C, c, {
                    screen_ids: b.join(",")
                }, (0, g.C)(a.nL, a), (0, g.C)(a.mL, a))
            }
        },
        i7 = function(a) {
            var b = YEa(dFa());
            b = (0, g.se)(b, function(c) {
                return !c.uuid
            });
            return aGa(a, b)
        },
        k7 = function(a, b) {
            fFa((0, g.K)(a.o, WEa));
            b && eFa()
        },
        m7 = function(a, b) {
            g.yH.call(this);
            this.F = b;
            var c = g.NI("yt-remote-online-screen-ids") || "";
            c = c ? c.split(",") : [];
            for (var d = {}, e = this.F(), f = 0, k = e.length; f < k; ++f) {
                var l = e[f].id;
                d[l] = g.Za(c, l)
            }
            this.o = d;
            this.D = a;
            this.C = this.B = NaN;
            this.A = null;
            l7("Initialized with " + g.ih(this.o))
        },
        dGa = function(a, b, c) {
            var d = $6(a.D, "/pairing/get_screen_availability");
            a7(a.D, d, {
                lounge_token: b.token
            }, (0, g.C)(function(e) {
                e = e.screens || [];
                for (var f = 0, k = e.length; f < k; ++f)
                    if (e[f].loungeToken == b.token) {
                        c("online" == e[f].status);
                        return
                    }
                c(!1)
            }, a), (0, g.C)(function() {
                c(!1)
            }, a))
        },
        n7 = function(a, b) {
            a: if (g.Tb(b) != g.Tb(a.o)) var c = !1;
                else {
                    c = g.Wb(b);
                    for (var d = 0, e = c.length; d < e; ++d)
                        if (!a.o[c[d]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (l7("Updated online screens: " + g.ih(a.o)), a.o = b, a.U("screenChange"));eGa(a)
        },
        o7 = function(a) {
            isNaN(a.C) || g.tF(a.C);
            a.C = g.rF((0, g.C)(a.kx, a), 0 < a.B && a.B < (0, g.J)() ? 2E4 : 1E4)
        },
        l7 = function(a) {
            c7("OnlineScreenService", a)
        },
        fGa = function(a) {
            var b = {};
            (0, g.E)(a.F(), function(c) {
                c.token ? b[c.token] = c.id : this.sc("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        eGa = function(a) {
            a = g.Wb(g.Ob(a.o, function(b) {
                return b
            }));
            g.tb(a);
            a.length ? g.MI("yt-remote-online-screen-ids", a.join(","), 60) : g.OI("yt-remote-online-screen-ids")
        },
        p7 = function(a) {
            g7.call(this, "ScreenService");
            this.F = a;
            this.A = this.C = null;
            this.B = [];
            this.D = {};
            gGa(this)
        },
        iGa = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.D[b]);
            var k = a.xe();
            if (k = (c ? m6(k, c) : null) || m6(k, b)) {
                k.uuid = b;
                var l = q7(a, k);
                dGa(a.A, l, function(m) {
                    e(m ? l : null)
                })
            } else c ? hGa(a, c, (0, g.C)(function(m) {
                var n = q7(this, new g6({
                    name: d,
                    screenId: c,
                    loungeToken: m,
                    dialId: b || ""
                }));
                dGa(this.A, n, function(p) {
                    e(p ? n : null)
                })
            }, a), f) : e(null)
        },
        jGa = function(a, b) {
            for (var c = 0, d = a.o.length; c < d; ++c)
                if (a.o[c].name == b) return a.o[c];
            return null
        },
        hGa = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                Sb: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, k) {
                    var l = k && k.screens || [];
                    l[0] && l[0].screenId == b ? c(l[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.fG($6(a.F, "/pairing/get_lounge_token_batch"), e)
        },
        kGa = function(a) {
            a.o = a.C.xe();
            var b = a.D,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = 0;
            for (d = a.o.length; b < d; ++b) {
                var e = a.o[b];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + j6(a.o))
        },
        gGa = function(a) {
            r7(a);
            a.C = new j7(a.F);
            a.C.subscribe("screenChange", (0, g.C)(a.AL, a));
            kGa(a);
            a.B = YEa(g.NI("yt-remote-automatic-screen-cache") || []);
            r7(a);
            a.info("Initializing automatic screens: " + j6(a.B));
            a.A = new m7(a.F, (0, g.C)(a.xe, a, !0));
            a.A.subscribe("screenChange", (0, g.C)(function() {
                this.U("onlineScreenChange")
            }, a))
        },
        q7 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = m6(a.B, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.B.push(b), g.MI("yt-remote-automatic-screen-cache", (0, g.K)(a.B, WEa)));
            r7(a);
            a.D[b.uuid] = b.id;
            g.MI("yt-remote-device-id-map", a.D, 31536E3);
            return b
        },
        r7 = function(a) {
            a.D = g.NI("yt-remote-device-id-map") || {}
        },
        s7 = function(a, b, c) {
            g.yH.call(this);
            this.M = c;
            this.I = a;
            this.A = b;
            this.C = null
        },
        t7 = function(a, b) {
            c7(a.M, b)
        },
        u7 = function(a, b) {
            s7.call(this, a, b, "CastSession");
            this.o = null;
            this.B = 0;
            this.F = (0, g.C)(this.EW, this);
            this.D = (0, g.C)(this.MU, this);
            this.B = g.rF((0, g.C)(function() {
                lGa(this, null)
            }, this), 12E4)
        },
        mGa = function(a) {
            a.info("sendYoutubeMessage_: getMdxSessionStatus " + g.ih(void 0));
            var b = {
                type: "getMdxSessionStatus"
            };
            a.o ? a.o.sendMessage("urn:x-cast:com.google.youtube.mdx", b, g.A, (0, g.C)(function() {
                t7(this, "Failed to send message: getMdxSessionStatus.")
            }, a)) : t7(a, "Sending yt message without session: " + g.ih(b))
        },
        lGa = function(a, b) {
            g.tF(a.B);
            if (b) {
                if (a.info("onConnectedScreenId_: Received screenId: " + b), !a.C || a.C.id != b) {
                    var c = (0, g.C)(a.Uq, a),
                        d = (0, g.C)(a.De, a);
                    a.AB(b, c, d, 5)
                }
            } else a.De(Error("Waiting for session status timed out."))
        },
        v7 = function(a, b, c) {
            s7.call(this, a, b, "DialSession");
            this.B = this.H = null;
            this.K = "";
            this.V = c;
            this.D = null;
            this.G = g.A;
            this.F = NaN;
            this.L = (0, g.C)(this.HW, this);
            this.o = g.A
        },
        nGa = function(a) {
            a.o = a.I.WG(a.K, a.A.label, a.A.friendlyName, (0, g.C)(function(b) {
                this.o = g.A;
                this.Uq(b)
            }, a), (0, g.C)(function(b) {
                this.o = g.A;
                this.De(b)
            }, a))
        },
        oGa = function(a) {
            var b = {};
            b.pairingCode = a.K;
            b.theme = a.V;
            if (a.D) {
                var c = a.D.currentTime || 0;
                b.v = a.D.videoId;
                b.t = c
            }
            hFa() && (b.env_useStageMdx = 1);
            return g.yh(b)
        },
        w7 = function(a, b) {
            s7.call(this, a, b, "ManualSession");
            this.o = g.rF((0, g.C)(this.Dk, this, null), 150)
        },
        x7 = function(a, b, c, d) {
            g.yH.call(this);
            this.A = a;
            this.G = b || "233637DE";
            this.F = c || "cl";
            this.H = d || !1;
            this.o = null;
            this.D = !1;
            this.C = [];
            this.B = (0, g.C)(this.hT, this)
        },
        pGa = function(a, b) {
            return b ? g.Va(a.C, function(c) {
                return h6(b, c.label)
            }, a) : null
        },
        y7 = function(a) {
            c7("Controller", a)
        },
        TFa = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        z7 = function(a) {
            return a.D || !!a.C.length || !!a.o
        },
        A7 = function(a, b, c) {
            b != a.o && (g.Pf(a.o), (a.o = b) ? (c ? a.U("yt-remote-cast2-receiver-resumed", b.A) : a.U("yt-remote-cast2-receiver-selected",
                b.A), b.subscribe("sessionScreen", (0, g.C)(a.RE, a, b)), b.C ? a.U("yt-remote-cast2-session-change", b.C) : c && a.o.Dk(null)) : a.U("yt-remote-cast2-session-change", null))
        },
        qGa = function(a) {
            var b = a.A.VG(),
                c = a.o && a.o.A;
            a = (0, g.K)(b, function(d) {
                c && h6(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = pGa(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        wGa = function(a, b, c, d, e, f, k) {
            rGa() ? sGa(b, e, f, k) && (C7(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? tGa(a, c) : (window.__onGCastApiAvailable = function(l, m) {
                    l ? tGa(a, c) : (D7("Failed to load cast API: " + m), E7(!1), C7(!1), g.OI("yt-remote-cast-available"), g.OI("yt-remote-cast-receiver"), uGa(), c(!1))
                }, d ? g.EF("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") :
                0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? nFa() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? v6() : (mFa(), u6(vGa.map(kFa))))) : B7("Cannot initialize because not running Chrome")
        },
        uGa = function() {
            B7("dispose");
            var a = F7();
            a && a.dispose();
            g.Da("yt.mdx.remote.cloudview.instance_", null, void 0);
            xGa(!1);
            g.zF(G7);
            G7.length = 0
        },
        H7 = function() {
            return !!g.NI("yt-remote-cast-installed")
        },
        yGa = function() {
            var a = g.NI("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        zGa = function() {
            B7("clearCurrentReceiver");
            g.OI("yt-remote-cast-receiver")
        },
        AGa = function() {
            return H7() ? F7() ? F7().getCastSession() : (D7("getCastSelector: Cast is not initialized."), null) : (D7("getCastSelector: Cast API is not installed!"), null)
        },
        J7 = function() {
            H7() ? F7() ? I7() ? (B7("Requesting cast selector."), F7().requestSession()) : (B7("Wait for cast API to be ready to request the session."), G7.push(g.yF("yt-remote-cast2-api-ready", J7))) : D7("requestCastSelector: Cast is not initialized.") : D7("requestCastSelector: Cast API is not installed!")
        },
        K7 =
        function(a, b) {
            I7() ? F7().setConnectedScreenStatus(a, b) : D7("setConnectedScreenStatus called before ready.")
        },
        rGa = function() {
            var a = 0 <= g.Kb.search(/ (CrMo|Chrome|CriOS)\//);
            return g.pM || a
        },
        BGa = function(a, b) {
            F7().init(a, b)
        },
        sGa = function(a, b, c, d) {
            var e = !1;
            F7() || (a = new x7(a, b, c, d), a.subscribe("yt-remote-cast2-availability-change", function(f) {
                g.MI("yt-remote-cast-available", f);
                e6("yt-remote-cast2-availability-change", f)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(f) {
                B7("onReceiverSelected: " + f.friendlyName);
                g.MI("yt-remote-cast-receiver", f);
                e6("yt-remote-cast2-receiver-selected", f)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(f) {
                B7("onReceiverResumed: " + f.friendlyName);
                g.MI("yt-remote-cast-receiver", f)
            }), a.subscribe("yt-remote-cast2-session-change", function(f) {
                B7("onSessionChange: " + i6(f));
                f || g.OI("yt-remote-cast-receiver");
                e6("yt-remote-cast2-session-change", f)
            }), g.Da("yt.mdx.remote.cloudview.instance_", a, void 0), e = !0);
            B7("cloudview.createSingleton_: " + e);
            return e
        },
        F7 = function() {
            return g.z("yt.mdx.remote.cloudview.instance_")
        },
        tGa = function(a, b) {
            E7(!0);
            C7(!1);
            BGa(a, function(c) {
                c ? (xGa(!0), g.BF("yt-remote-cast2-api-ready")) : (D7("Failed to initialize cast API."), E7(!1), g.OI("yt-remote-cast-available"), g.OI("yt-remote-cast-receiver"), uGa());
                b(c)
            })
        },
        B7 = function(a) {
            c7("cloudview", a)
        },
        D7 = function(a) {
            c7("cloudview", a)
        },
        E7 = function(a) {
            B7("setCastInstalled_ " + a);
            g.MI("yt-remote-cast-installed", a)
        },
        I7 = function() {
            return !!g.z("yt.mdx.remote.cloudview.apiReady_")
        },
        xGa = function(a) {
            B7("setApiReady_ " + a);
            g.Da("yt.mdx.remote.cloudview.apiReady_", a, void 0)
        },
        C7 = function(a) {
            g.Da("yt.mdx.remote.cloudview.initializing_", a, void 0)
        },
        L7 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.F = this.G = 0;
            this.o = null;
            this.hasNext = this.Zf = !1;
            this.I = this.H = this.A = this.B = 0;
            this.C = NaN;
            this.D = !1;
            this.reset(a)
        },
        M7 = function(a) {
            a.audioTrackId = null;
            a.o = null;
            a.playerState = -1;
            a.Zf = !1;
            a.hasNext = !1;
            a.G = 0;
            a.F = (0, g.J)();
            a.B = 0;
            a.A = 0;
            a.H = 0;
            a.I = 0;
            a.C = NaN;
            a.D = !1
        },
        N7 = function(a) {
            return a.sb() ? ((0, g.J)() - a.F) / 1E3 : 0
        },
        O7 = function(a, b) {
            a.G = b;
            a.F = (0, g.J)()
        },
        P7 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return ((0, g.J)() - a.F) / 1E3 + a.G;
                case -1E3:
                    return 0
            }
            return a.G
        },
        Q7 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && M7(a)
        },
        R7 = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.jc(a.o);
            b.hasPrevious = a.Zf;
            b.hasNext = a.hasNext;
            b.playerTime = a.G;
            b.playerTimeAt = a.F;
            b.seekableStart = a.B;
            b.seekableEnd = a.A;
            b.duration = a.H;
            b.loadedTime = a.I;
            b.liveIngestionTime = a.C;
            return b
        },
        T7 = function(a, b) {
            g.yH.call(this);
            this.o = 0;
            this.B = a;
            this.F = [];
            this.D = new g.ND;
            this.C = this.A = null;
            this.I = (0, g.C)(this.IQ, this);
            this.G = (0, g.C)(this.Cn, this);
            this.H = (0, g.C)(this.HQ, this);
            this.K = (0, g.C)(this.UQ, this);
            var c = 0;
            a ? (c = a.getProxyState(), 3 != c && (a.subscribe("proxyStateChange", this.Fy, this), CGa(this))) : c = 3;
            0 != c && (b ? this.Fy(c) : g.rF((0, g.C)(function() {
                this.Fy(c)
            }, this), 0));
            var d = AGa();
            d && S7(this, d);
            this.subscribe("yt-remote-cast2-session-change", this.K)
        },
        U7 = function(a) {
            return new L7(a.B.getPlayerContextData())
        },
        CGa = function(a) {
            (0, g.E)("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange".split(" "), function(b) {
                this.F.push(this.B.subscribe(b, g.Ma(this.dT, b), this))
            }, a)
        },
        DGa = function(a) {
            (0, g.E)(a.F, function(b) {
                this.B.unsubscribeByKey(b)
            }, a);
            a.F.length = 0
        },
        V7 = function(a, b) {
            50 > a.D.Jc() && g.PD(a.D, b)
        },
        X7 = function(a, b, c) {
            var d = U7(a);
            O7(d, c); - 1E3 != d.playerState && (d.playerState = b);
            W7(a, d)
        },
        Y7 = function(a, b, c) {
            a.B.sendMessage(b, c)
        },
        W7 = function(a, b) {
            DGa(a);
            a.B.setPlayerContextData(R7(b));
            CGa(a)
        },
        S7 = function(a, b) {
            a.C && (a.C.removeUpdateListener(a.I), a.C.removeMediaListener(a.G), a.Cn(null));
            a.C = b;
            a.C && (c7("CP", "Setting cast session: " + a.C.sessionId), a.C.addUpdateListener(a.I), a.C.addMediaListener(a.G), a.C.media.length && a.Cn(a.C.media[0]))
        },
        EGa = function(a) {
            var b = a.A.media,
                c = a.A.customData;
            if (b && c) {
                var d = U7(a);
                b.contentId != d.videoId && c7("CP", "Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                O7(d, a.A.getEstimatedTime());
                W7(a, d)
            } else c7("CP", "No cast media video. Ignoring state update.")
        },
        Z7 = function(a, b, c) {
            return (0, g.C)(function(d) {
                this.sc("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.sc("Retrying " + b + " using MDx browser channel."), Y7(this, b, c))
            }, a)
        },
        $7 = function(a, b, c) {
            g.yH.call(this);
            this.D = NaN;
            this.V = !1;
            this.K = this.I = this.L = this.M = NaN;
            this.O = [];
            this.B = this.G = this.C = this.kb = this.o = null;
            this.ua = a;
            this.O.push(g.hH(window, "beforeunload", (0, g.C)(this.dL, this)));
            this.A = [];
            this.kb = new L7;
            this.aa = b.id;
            this.o = FGa(this, c);
            this.o.subscribe("handlerOpened", this.MQ, this);
            this.o.subscribe("handlerClosed", this.JQ, this);
            this.o.subscribe("handlerError", this.KQ, this);
            this.o.subscribe("handlerMessage", this.LQ, this);
            SFa(this.o, b.token);
            this.subscribe("remoteQueueChange", function() {
                var d = this.kb.videoId;
                g.PI() && g.MI("yt-remote-session-video-id", d)
            }, this)
        },
        a8 = function(a) {
            c7("conn", a)
        },
        FGa = function(a, b) {
            return new X6($6(a.ua, "/bc"), b)
        },
        b8 = function(a, b) {
            a.U("proxyStateChange", b)
        },
        GGa = function(a) {
            a.D = g.rF((0, g.C)(function() {
                a8("Connecting timeout");
                this.F(1)
            }, a), 2E4)
        },
        c8 = function(a) {
            g.tF(a.D);
            a.D = NaN
        },
        d8 = function(a) {
            g.tF(a.M);
            a.M = NaN
        },
        HGa = function(a) {
            e8(a);
            a.L = g.rF((0, g.C)(function() {
                f8(this, "getNowPlaying")
            }, a), 2E4)
        },
        e8 = function(a) {
            g.tF(a.L);
            a.L = NaN
        },
        JGa = function(a, b) {
            b && (c8(a), d8(a));
            b == (Y6(a.o) && isNaN(a.D)) ? b && (b8(a, 1), f8(a, "getSubtitlesTrack")) : b ? (a.Y() && a.kb.reset(), b8(a, 1), f8(a, "getNowPlaying"), IGa(a)) : a.F(1)
        },
        KGa = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.kb.videoId && (g.dc(b.params) ? a.kb.o = null : a.kb.o = b.params, a.U("remotePlayerChange"))
        },
        LGa = function(a, b) {
            var c = b.params.videoId || b.params.video_id,
                d = parseInt(b.params.currentIndex, 10);
            a.kb.listId = b.params.listId || a.kb.listId;
            Q7(a.kb, c, d);
            a.U("remoteQueueChange")
        },
        NGa = function(a, b) {
            b.params = b.params || {};
            LGa(a, b);
            MGa(a, b);
            a.U("autoplayDismissed")
        },
        MGa = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            O7(a.kb, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.kb.playerState && (c = -1E3);
            a.kb.playerState = c;
            c = Number(b.params.loadedTime);
            a.kb.I = isNaN(c) ? 0 : c;
            c = Number(b.params.duration);
            a.kb.H = isNaN(c) ? 0 : c;
            c = a.kb;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.D = isNaN(d) ? !1 : !0;
            c = a.kb;
            d = Number(b.params.seekableStartTime);
            var e = Number(b.params.seekableEndTime);
            c.B = isNaN(d) ? 0 : d;
            c.A = isNaN(e) ? 0 : e;
            1 == a.kb.playerState ? HGa(a) : e8(a);
            a.U("remotePlayerChange")
        },
        OGa = function(a, b) {
            if (-1E3 !=
                a.kb.playerState) {
                var c = 1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.kb.playerState = c;
                c = parseInt(b.params.currentTime, 10);
                O7(a.kb, isNaN(c) ? 0 : c);
                a.U("remotePlayerChange")
            }
        },
        PGa = function(a, b) {
            var c = "true" == b.params.muted;
            a.kb.volume = parseInt(b.params.volume, 10);
            a.kb.muted = c;
            a.U("remotePlayerChange")
        },
        QGa = function(a, b) {
            a.G = b.params.videoId;
            a.U("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        RGa = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.kb.Zf = "true" == b.params.hasPrevious;
            a.kb.hasNext = c;
            a.U("previousNextChange")
        },
        IGa = function(a) {
            g.tF(a.K);
            a.K = g.rF((0, g.C)(a.F, a, 1), 864E5)
        },
        f8 = function(a, b, c) {
            c ? a8("Sending: action=" + b + ", params=" + g.ih(c)) : a8("Sending: action=" + b);
            a.o.sendMessage(b, c)
        },
        g8 = function(a) {
            g7.call(this, "ScreenServiceProxy");
            this.jd = a;
            this.A = [];
            this.A.push(this.jd.$_s("screenChange", (0, g.C)(this.BW, this)));
            this.A.push(this.jd.$_s("onlineScreenChange", (0, g.C)(this.CS, this)))
        },
        WGa = function(a) {
            var b = {
                device: "Desktop",
                app: "youtube-desktop"
            };
            b = g.iF("MDX_CONFIG") || b;
            $Ea();
            q6();
            h8 || (h8 = new Z6(b ? b.loungeApiHost : void 0), hFa() && (h8.o = "/api/loungedev"));
            i8 || (i8 = g.z("yt.mdx.remote.deferredProxies_") || [], g.Da("yt.mdx.remote.deferredProxies_", i8, void 0));
            SGa();
            var c = j8();
            if (!c) {
                var d = new p7(h8);
                g.Da("yt.mdx.remote.screenService_", d, void 0);
                c = j8();
                var e = !1,
                    f = void 0,
                    k = void 0,
                    l = !1;
                b && (e = !!b.loadCastApiSetupScript, f = b.appId, k = b.theme, l = !!b.disableDial);
                wGa(a, d, function(m) {
                    m ? k8() && K7(k8(), "YouTube TV") : d.subscribe("onlineScreenChange",
                        function() {
                            e6("yt-remote-receiver-availability-change")
                        })
                }, e, f, k, l)
            }
            b && !g.z("yt.mdx.remote.initialized_") && (g.Da("yt.mdx.remote.initialized_", !0, void 0), l8("Initializing: " + g.ih(b)), m8.push(g.yF("yt-remote-cast2-availability-change", function() {
                e6("yt-remote-receiver-availability-change")
            })), m8.push(g.yF("yt-remote-cast2-receiver-selected", function() {
                n8(null);
                e6("yt-remote-auto-connect", "cast-selector-receiver")
            })), m8.push(g.yF("yt-remote-cast2-receiver-resumed", function() {
                e6("yt-remote-receiver-resumed", "cast-selector-receiver")
            })), m8.push(g.yF("yt-remote-cast2-session-change", TGa)), m8.push(g.yF("yt-remote-connection-change", function(m) {
                m ? K7(k8(), "YouTube TV") : o8() || (K7(null, null), zGa())
            })), a = p8(), b.isAuto && (a.id += "#dial"), g.XF("desktop_enable_autoplay") && (a.capabilities = ["atp"]), a.name = b.device, a.app = b.app, (k = b.theme) && (a.theme = k), l8(" -- with channel params: " +
                g.ih(a)), UGa(a), c.start(), k8() || VGa())
        },
        YGa = function() {
            var a = XGa();
            H7() && g.NI("yt-remote-cast-available") && a.push({
                key: "cast-selector-receiver",
                name: "Cast..."
            });
            return a
        },
        XGa = function() {
            var a = j8().jd.$_gos();
            var b = q8();
            b && r8() && (l6(a, b) || a.push(b));
            return ZEa(a)
        },
        s8 = function() {
            var a = ZGa();
            !a && H7() && yGa() && (a = {
                key: "cast-selector-receiver",
                name: yGa()
            });
            return a
        },
        ZGa = function() {
            var a = XGa(),
                b = q8();
            b || (b = o8());
            return g.Va(a, function(c) {
                return b && h6(b, c.key) ? !0 : !1
            })
        },
        q8 = function() {
            var a = k8();
            if (!a) return null;
            var b = j8().xe();
            return m6(b, a)
        },
        TGa = function(a) {
            l8("remote.onCastSessionChange_: " + i6(a));
            if (a) {
                var b = q8();
                b && b.id == a.id ? K7(b.id, "YouTube TV") : (b && t8(), u8(a, 1))
            } else r8() && t8()
        },
        t8 = function() {
            I7() ? F7().stopSession() : D7("stopSession called before API ready.");
            var a = r8();
            a && (a.disconnect(1), v8(null))
        },
        w8 = function() {
            var a = r8();
            return !!a && 3 != a.getProxyState()
        },
        l8 = function(a) {
            c7("remote", a)
        },
        j8 = function() {
            if (!x8) {
                var a = g.z("yt.mdx.remote.screenService_");
                x8 = a ? new g8(a) : null
            }
            return x8
        },
        k8 = function() {
            return g.z("yt.mdx.remote.currentScreenId_")
        },
        $Ga = function(a) {
            g.Da("yt.mdx.remote.currentScreenId_", a, void 0)
        },
        aHa = function() {
            return g.z("yt.mdx.remote.connectData_")
        },
        n8 = function(a) {
            g.Da("yt.mdx.remote.connectData_", a, void 0)
        },
        r8 = function() {
            return g.z("yt.mdx.remote.connection_")
        },
        v8 = function(a) {
            var b = r8();
            n8(null);
            a || $Ga("");
            g.Da("yt.mdx.remote.connection_", a, void 0);
            i8 && ((0, g.E)(i8, function(c) {
                c(a)
            }), i8.length = 0);
            b && !a ? e6("yt-remote-connection-change", !1) : !b && a && e6("yt-remote-connection-change", !0)
        },
        o8 = function() {
            var a = g.PI();
            if (!a) return null;
            var b = j8().xe();
            return m6(b, a)
        },
        u8 = function(a, b) {
            q8() && q8();
            $Ga(a.id);
            var c = new $7(h8, a, p8());
            c.connect(b, aHa());
            c.subscribe("beforeDisconnect", function(d) {
                e6("yt-remote-before-disconnect", d)
            });
            c.subscribe("beforeDispose", function() {
                r8() && v8(null)
            });
            v8(c)
        },
        VGa = function() {
            var a = o8();
            a ? (l8("Resume connection to: " + i6(a)), u8(a, 0)) : (r6(), zGa(), l8("Skipping connecting because no session screen found."))
        },
        SGa = function() {
            var a = p8();
            if (g.dc(a)) {
                a = p6();
                var b = g.NI("yt-remote-session-name") || "",
                    c = g.NI("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                g.Da("yt.mdx.remote.channelParams_", a, void 0)
            }
        },
        p8 = function() {
            return g.z("yt.mdx.remote.channelParams_") || {}
        },
        UGa = function(a) {
            a ? (g.MI("yt-remote-session-app", a.app), g.MI("yt-remote-session-name", a.name)) : (g.OI("yt-remote-session-app"), g.OI("yt-remote-session-name"));
            g.Da("yt.mdx.remote.channelParams_", a, void 0)
        },
        y8 = function(a, b, c) {
            g.L.call(this);
            this.D = a;
            this.A = b;
            this.C = new g.vH(this);
            g.M(this, this.C);
            this.C.R(b, "onCaptionsTrackListChanged", this.VR);
            this.C.R(b, "captionschanged", this.GQ);
            this.C.R(b, "captionssettingschanged", this.jG);
            this.C.R(b, "videoplayerreset", this.Vq);
            this.C.R(b, "mdxautoplaycancel", this.YJ);
            this.O = this.C.R(b, "onVolumeChange", this.yE);
            this.H = !1;
            this.o = c;
            c.subscribe("proxyStateChange", this.NE, this);
            c.subscribe("remotePlayerChange", this.Fn, this);
            c.subscribe("remoteQueueChange", this.Vq, this);
            c.subscribe("autoplayUpNext", this.kE,
                this);
            c.subscribe("previousNextChange", this.KE, this);
            c.subscribe("nowAutoplaying", this.CE, this);
            c.subscribe("autoplayDismissed", this.jE, this);
            this.suggestion = null;
            this.I = new g.GQ(64);
            this.B = new g.U(this.gG, 500, this);
            g.M(this, this.B);
            this.F = new g.U(this.hG, 1E3, this);
            g.M(this, this.F);
            this.L = new x6(this.dW, 0, this);
            g.M(this, this.L);
            this.G = {};
            this.M = new g.U(this.FG, 1E3, this);
            g.M(this, this.M);
            this.K = new g.um(this.DO, 1E3, this);
            g.M(this, this.K);
            this.V = g.A;
            this.jG();
            this.Vq();
            this.Fn()
        },
        z8 = function(a, b) {
            a.D.He(b,
                a.A.getVideoData().lengthSeconds)
        },
        bHa = function(a) {
            z8(a, 0);
            a.B.stop();
            A8(a, new g.GQ(64))
        },
        C8 = function(a, b) {
            if (B8(a) && !a.H) {
                var c = null;
                b && (c = {
                    style: a.A.getSubtitlesUserSettings()
                }, g.lc(c, b));
                a.o.UF(a.A.getVideoData(1).videoId, c);
                a.G = U7(a.o).o
            }
        },
        D8 = function(a, b) {
            var c = a.A.getPlaylist();
            if (c) {
                var d = c.we();
                var e = c.listId.toString()
            }
            c = a.A.getVideoData(1);
            a.o.playVideo(c.videoId, b, d, e, c.playerParams, c.Hh, REa(c));
            A8(a, new g.GQ(1))
        },
        cHa = function(a, b) {
            if (b) {
                var c = a.A.getOption("captions", "tracklist", {
                    G4: 1
                });
                c && c.length ? (a.A.setOption("captions", "track", b), a.H = !1) : (a.A.loadModule("captions"), a.H = !0)
            } else a.A.setOption("captions", "track", {})
        },
        B8 = function(a) {
            return U7(a.o).videoId == a.A.getVideoData(1).videoId
        },
        A8 = function(a, b) {
            a.F.stop();
            var c = a.I;
            if (!g.MQ(c, b)) {
                var d = g.W(b, 2);
                d != g.W(a.I, 2) && g.SU(a.A, d);
                a.I = b;
                dHa(a.D, c, b)
            }
        },
        E8 = function(a) {
            g.V.call(this, {
                J: "div",
                N: "ytp-remote",
                P: [{
                    J: "div",
                    N: "ytp-remote-display-status",
                    P: [{
                        J: "div",
                        N: "ytp-remote-display-status-icon",
                        P: [g.nta()]
                    }, {
                        J: "div",
                        N: "ytp-remote-display-status-text",
                        ca: "{{statustext}}"
                    }]
                }]
            });
            this.B = new g.IV(this, 250);
            g.M(this, this.B);
            this.D = a;
            this.R(a, "presentingplayerstatechange", this.F);
            eHa(this, g.OU(a))
        },
        eHa = function(a, b) {
            if (3 == a.D.getPresentingPlayerType()) {
                var c = {
                    RECEIVER_NAME: a.D.getOption("remote", "currentReceiver").name
                };
                c = g.W(b, 128) ? g.vV("Error on $RECEIVER_NAME", c) : b.sb() || g.W(b, 4) ? g.vV("Playing on $RECEIVER_NAME", c) : g.vV("Connected to $RECEIVER_NAME", c);
                a.updateValue("statustext", c);
                a.B.show()
            } else a.B.hide()
        },
        F8 = function(a, b) {
            g.ZW.call(this, "Play on", 0, a, b);
            this.B = a;
            this.K = {};
            this.R(a, "onMdxReceiversChange", this.M);
            this.R(a, "presentingplayerstatechange", this.M);
            this.M()
        },
        G8 = function(a) {
            g.lV.call(this, a);
            this.A = {
                key: k6(),
                name: "This computer"
            };
            this.B = null;
            this.D = [];
            this.G = this.o = null;
            this.F = [this.A];
            this.C = this.A;
            this.mn = new g.GQ(64);
            this.I = 0;
            this.H = -1;
            if (!g.oO(g.Y(this.player))) {
                a = this.player;
                var b = g.vQ(a);
                b && (b = b.pn()) && (b = new F8(a, b), g.M(this, b));
                b = new E8(a);
                g.M(this, b);
                g.cV(a, b.element, 4)
            }
        },
        dHa = function(a, b, c) {
            a.mn = c;
            a.player.U("presentingplayerstatechange", new g.QQ(c, b))
        },
        H8 = function(a, b) {
            if (b.key != a.C.key)
                if (b.key == a.A.key) t8();
                else {
                    a.C = b;
                    var c = a.player.getPlaylistId();
                    var d = a.player.getVideoData(1);
                    var e = d.videoId;
                    if (c || e) {
                        var f = a.player.getPlaylist();
                        if (f) {
                            var k = [];
                            for (var l = 0; l < f.getLength(); l++) k[l] = f.Aa(l).videoId
                        } else k = [e];
                        f = a.player.getCurrentTime(1);
                        c = {
                            videoIds: k,
                            listId: c,
                            videoId: e,
                            playerParams: d.playerParams,
                            clickTrackingParams: d.Hh,
                            index: Math.max(a.player.getPlaylistIndex(), 0),
                            currentTime: 0 == f ? void 0 : f
                        };
                        (d = REa(d)) && (c.locationInfo = d);
                        d = c
                    } else d = null;
                    l8("Connecting to: " + g.ih(b));
                    "cast-selector-receiver" == b.key ?
                        (n8(d || null), I7() ? F7().setLaunchParams(d || null) : D7("setLaunchParams called before ready.")) : !d && w8() && k8() == b.key ? e6("yt-remote-connection-change", !0) : (t8(), n8(d || null), d = j8().xe(), (d = m6(d, b.key)) && u8(d, 1))
                }
        },
        tFa = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "<"
        },
        H6 = {
            "'": "\\'"
        },
        fHa = {},
        VEa = {
            aY: "atp",
            K2: "ska",
            X1: "que",
            e1: "mus",
            G2: "sus",
            o_: "dsp",
            q2: "seq"
        };
    f6.prototype.sh = function() {
        var a = new f6({
            id: this.id,
            name: this.name,
            app: this.app,
            type: this.type,
            user: this.username,
            userAvatarUri: this.avatar,
            obfuscatedGaiaId: this.obfuscatedGaiaId,
            theme: this.theme,
            capabilities: Array.from(this.capabilities.values()).join(","),
            experiments: Array.from(this.experiments.values()).join(",")
        });
        a.C = this.C;
        a.A = this.A;
        a.o = this.o
    };
    var s6, o6 = "",
        w6 = t6("loadGamesSDK") ? "/cast_game_sender.js" : "/cast_sender.js",
        lFa = t6("loadCastFramework") || t6("loadCastApplicationFramework"),
        vGa = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.D(x6, g.L);
    g.h = x6.prototype;
    g.h.YK = function(a) {
        this.B = arguments;
        this.o = !1;
        this.Fa ? this.C = (0, g.J)() + this.Ed : this.Fa = g.dh(this.D, this.Ed)
    };
    g.h.stop = function() {
        this.Fa && (g.eh(this.Fa), this.Fa = null);
        this.C = null;
        this.o = !1;
        this.B = []
    };
    g.h.pause = function() {
        ++this.A
    };
    g.h.resume = function() {
        this.A && (--this.A, !this.A && this.o && (this.o = !1, this.F.apply(null, this.B)))
    };
    g.h.W = function() {
        this.stop();
        x6.fa.W.call(this)
    };
    g.h.ZK = function() {
        this.C ? (this.Fa = g.dh(this.D, this.C - (0, g.J)()), this.C = null) : (this.Fa = null, this.A ? this.o = !0 : (this.o = !1, this.F.apply(null, this.B)))
    };
    y6.prototype.stringify = function(a) {
        return g.y.JSON.stringify(a, void 0)
    };
    y6.prototype.parse = function(a) {
        return g.y.JSON.parse(a, void 0)
    };
    g.h = z6.prototype;
    g.h.Oi = null;
    g.h.If = !1;
    g.h.Cl = null;
    g.h.wy = null;
    g.h.bl = null;
    g.h.ik = null;
    g.h.Bh = null;
    g.h.fi = null;
    g.h.pj = null;
    g.h.Xc = null;
    g.h.fo = 0;
    g.h.Lf = null;
    g.h.os = null;
    g.h.Ch = null;
    g.h.Im = -1;
    g.h.GF = !0;
    g.h.wi = !1;
    g.h.Du = 0;
    g.h.tr = null;
    var rFa = {},
        C6 = {};
    g.h = z6.prototype;
    g.h.setTimeout = function(a) {
        this.B = a
    };
    g.h.dV = function(a) {
        a = a.target;
        var b = this.tr;
        b && 3 == g.Ky(a) ? b.Em() : this.QG(a)
    };
    g.h.QG = function(a) {
        try {
            if (a == this.Xc) a: {
                var b = g.Ky(this.Xc),
                    c = this.Xc.A,
                    d = this.Xc.getStatus();
                if (g.ee && !g.Nc(10) || g.ge && !g.Mc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Tf && !g.Oy(this.Xc)) break a;this.wi || 4 != b || 7 == c || (8 == c || 0 >= d ? this.o.Cf(3) : this.o.Cf(2));J6(this);
                var e = this.Xc.getStatus();this.Im = e;
                var f = g.Oy(this.Xc);
                (this.If = 200 == e) ? (4 == b && F6(this), this.D ? (sFa(this, b, f), g.Tf && this.If && 3 == b && (this.Z.X(this.A, "tick", this.YU), this.A.start())) : E6(this, f), this.If && !this.wi && (4 == b ? this.o.Tq(this) :
                    (this.If = !1, B6(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? (this.Ch = 3, D6(13)) : (this.Ch = 0, D6(14)), F6(this), G6(this))
            }
        } catch (k) {
            this.Xc && g.Oy(this.Xc)
        } finally {}
    };
    g.h.YU = function() {
        var a = g.Ky(this.Xc),
            b = g.Oy(this.Xc);
        this.fo < b.length && (J6(this), sFa(this, a, b), this.If && 4 != a && B6(this))
    };
    g.h.lU = function(a) {
        I6((0, g.C)(this.kU, this, a), 0)
    };
    g.h.kU = function(a) {
        this.wi || (J6(this), E6(this, a), B6(this))
    };
    g.h.VE = function(a) {
        I6((0, g.C)(this.jU, this, a), 0)
    };
    g.h.jU = function(a) {
        this.wi || (F6(this), this.If = a, this.o.Tq(this), this.o.Cf(4))
    };
    g.h.cancel = function() {
        this.wi = !0;
        F6(this)
    };
    g.h.AU = function() {
        this.Cl = null;
        var a = (0, g.J)();
        0 <= a - this.wy ? (2 != this.ik && this.o.Cf(3), F6(this), this.Ch = 2, D6(18), G6(this)) : vFa(this, this.wy - a)
    };
    g.h.getLastError = function() {
        return this.Ch
    };
    g.h = yFa.prototype;
    g.h.Bu = null;
    g.h.me = null;
    g.h.ur = !1;
    g.h.KB = null;
    g.h.xp = null;
    g.h.Hv = null;
    g.h.Cu = null;
    g.h.Xe = null;
    g.h.Qg = -1;
    g.h.Hm = null;
    g.h.Ol = null;
    g.h.connect = function(a) {
        this.Cu = a;
        a = L6(this.o, null, this.Cu);
        D6(3);
        this.KB = (0, g.J)();
        var b = this.o.H;
        null != b ? (this.Hm = b[0], (this.Ol = b[1]) ? (this.Xe = 1, zFa(this)) : (this.Xe = 2, N6(this))) : (d6(a, "MODE", "init"), this.me = new z6(this, void 0, void 0, void 0), this.me.Oi = this.Bu, A6(this.me, a, !1, null, !0), this.Xe = 0)
    };
    g.h.ZJ = function(a) {
        if (a) this.Xe = 2, N6(this);
        else {
            D6(4);
            var b = this.o;
            b.Vf = b.rh.Qg;
            U6(b, 9)
        }
        a && this.Cf(2)
    };
    g.h.Vt = function(a) {
        return this.o.Vt(a)
    };
    g.h.abort = function() {
        this.me && (this.me.cancel(), this.me = null);
        this.Qg = -1
    };
    g.h.JB = function() {
        return !1
    };
    g.h.OE = function(a, b) {
        this.Qg = a.Im;
        if (0 == this.Xe)
            if (b) {
                try {
                    var c = this.A.parse(b)
                } catch (d) {
                    c = this.o;
                    c.Vf = this.Qg;
                    U6(c, 2);
                    return
                }
                this.Hm = c[0];
                this.Ol = c[1]
            } else c = this.o, c.Vf = this.Qg, U6(c, 2);
        else if (2 == this.Xe)
            if (this.ur) D6(7), this.Hv = (0, g.J)();
            else if ("11111" == b) {
            if (D6(6), this.ur = !0, this.xp = (0, g.J)(), c = this.xp - this.KB, !g.ee || g.Nc(10) || 500 > c) this.Qg = 200, this.me.cancel(), D6(12), M6(this.o, this, !0)
        } else D6(8), this.xp = this.Hv = (0, g.J)(), this.ur = !1
    };
    g.h.Tq = function() {
        this.Qg = this.me.Im;
        if (this.me.If) 0 == this.Xe ? this.Ol ? (this.Xe = 1, zFa(this)) : (this.Xe = 2, N6(this)) : 2 == this.Xe && ((!g.ee || g.Nc(10) ? !this.ur : 200 > this.Hv - this.xp) ? (D6(11), M6(this.o, this, !1)) : (D6(12), M6(this.o, this, !0)));
        else {
            0 == this.Xe ? D6(9) : 2 == this.Xe && D6(10);
            var a = this.o;
            this.me.getLastError();
            a.Vf = this.Qg;
            U6(a, 2)
        }
    };
    g.h.Vn = function() {
        return this.o.Vn()
    };
    g.h.isActive = function() {
        return this.o.isActive()
    };
    g.h.Cf = function(a) {
        this.o.Cf(a)
    };
    g.h = O6.prototype;
    g.h.im = null;
    g.h.ge = null;
    g.h.Bc = null;
    g.h.Au = null;
    g.h.zp = null;
    g.h.eA = null;
    g.h.Mp = null;
    g.h.yn = 0;
    g.h.XP = 0;
    g.h.Dd = null;
    g.h.vh = null;
    g.h.Cg = null;
    g.h.Ci = null;
    g.h.rh = null;
    g.h.ls = null;
    g.h.Bk = -1;
    g.h.zC = -1;
    g.h.Vf = -1;
    g.h.Zj = 0;
    g.h.Pj = 0;
    g.h.zi = 8;
    var V6 = new g.sg;
    g.D(BFa, g.Rf);
    g.D(CFa, g.Rf);
    g.D(DFa, g.Rf);
    g.h = O6.prototype;
    g.h.connect = function(a, b, c, d, e) {
        D6(0);
        this.Au = b;
        this.im = c || {};
        d && g.v(e) && (this.im.OSID = d, this.im.OAID = e);
        this.F ? (I6((0, g.C)(this.vA, this, a), 100), HFa(this)) : this.vA(a)
    };
    g.h.vA = function(a) {
        this.rh = new yFa(this);
        this.rh.Bu = null;
        this.rh.A = this.D;
        this.rh.connect(a)
    };
    g.h.JB = function() {
        return 0 == this.o
    };
    g.h.UE = function(a) {
        this.vh = null;
        KFa(this, a)
    };
    g.h.TE = function() {
        this.Cg = null;
        this.Bc = new z6(this, this.C, "rpc", this.G);
        this.Bc.Oi = null;
        this.Bc.Du = 0;
        var a = this.eA.clone();
        g.Zn(a, "RID", "rpc");
        g.Zn(a, "SID", this.C);
        g.Zn(a, "CI", this.ls ? "0" : "1");
        g.Zn(a, "AID", this.Bk);
        P6(this, a);
        if (!g.ee || g.Nc(10)) g.Zn(a, "TYPE", "xmlhttp"), A6(this.Bc, a, !0, this.Mp, !1);
        else {
            g.Zn(a, "TYPE", "html");
            var b = this.Bc,
                c = !!this.Mp;
            b.ik = 3;
            b.Bh = c6(a.clone());
            uFa(b, c)
        }
    };
    g.h.OE = function(a, b) {
        if (0 != this.o && (this.Bc == a || this.ge == a))
            if (this.Vf = a.Im, this.ge == a && 3 == this.o)
                if (7 < this.zi) {
                    try {
                        var c = this.D.parse(b)
                    } catch (f) {
                        c = null
                    }
                    if (g.Ga(c) && 3 == c.length)
                        if (0 == c[0]) a: {
                            if (!this.Cg) {
                                if (this.Bc)
                                    if (this.Bc.bl + 3E3 < this.ge.bl) R6(this), this.Bc.cancel(), this.Bc = null;
                                    else break a;
                                T6(this);
                                D6(19)
                            }
                        }
                    else this.zC = c[1], 0 < this.zC - this.Bk && 37500 > c[2] && this.ls && 0 == this.Pj && !this.Ci && (this.Ci = I6((0, g.C)(this.BQ, this), 6E3));
                    else U6(this, 11)
                } else b != fHa.dZ.o && U6(this, 11);
        else if (this.Bc == a &&
            R6(this), !g.F(b)) {
            c = this.D.parse(b);
            g.Ga(c);
            for (var d = 0; d < c.length; d++) {
                var e = c[d];
                this.Bk = e[0];
                e = e[1];
                2 == this.o ? "c" == e[0] ? (this.C = e[1], this.Mp = e[2], e = e[3], null != e ? this.zi = e : this.zi = 6, this.o = 3, this.Dd && this.Dd.qA(), this.eA = L6(this, this.Vn() ? this.Mp : null, this.Au), LFa(this)) : "stop" == e[0] && U6(this, 7) : 3 == this.o && ("stop" == e[0] ? U6(this, 7) : "noop" != e[0] && this.Dd && this.Dd.pA(e), this.Pj = 0)
            }
        }
    };
    g.h.BQ = function() {
        null != this.Ci && (this.Ci = null, this.Bc.cancel(), this.Bc = null, T6(this), D6(20))
    };
    g.h.Tq = function(a) {
        if (this.Bc == a) {
            R6(this);
            this.Bc = null;
            var b = 2
        } else if (this.ge == a) this.ge = null, b = 1;
        else return;
        this.Vf = a.Im;
        if (0 != this.o)
            if (a.If) 1 == b ? (b = (0, g.J)() - a.bl, V6.dispatchEvent(new CFa(V6, a.pj ? a.pj.length : 0, b, this.Zj)), Q6(this), this.B.length = 0) : LFa(this);
            else {
                var c = a.getLastError(),
                    d;
                if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Vf)) {
                    if (d = 1 == b) this.ge || this.vh || 1 == this.o || 2 <= this.Zj ? d = !1 : (this.vh = I6((0, g.C)(this.UE, this, a), MFa(this, this.Zj)), this.Zj++, d = !0);
                    d = !(d || 2 == b && T6(this))
                }
                if (d) switch (c) {
                    case 1:
                        U6(this,
                            5);
                        break;
                    case 4:
                        U6(this, 10);
                        break;
                    case 3:
                        U6(this, 6);
                        break;
                    case 7:
                        U6(this, 12);
                        break;
                    default:
                        U6(this, 2)
                }
            }
    };
    g.h.vK = function(a) {
        if (!g.Za(arguments, this.o)) throw Error("Unexpected channel state: " + this.o);
    };
    g.h.TV = function(a) {
        a ? D6(2) : (D6(1), NFa(this, 8))
    };
    g.h.Vt = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.Ey;
        a.H = !1;
        return a
    };
    g.h.isActive = function() {
        return !!this.Dd && this.Dd.isActive(this)
    };
    g.h.Cf = function(a) {
        V6.dispatchEvent(new DFa(V6, a))
    };
    g.h.Vn = function() {
        return !(!g.ee || g.Nc(10))
    };
    g.h = OFa.prototype;
    g.h.qA = function() {};
    g.h.pA = function() {};
    g.h.oA = function() {};
    g.h.It = function() {};
    g.h.pB = function() {
        return {}
    };
    g.h.isActive = function() {
        return !0
    };
    g.D(W6, g.L);
    g.h = W6.prototype;
    g.h.bU = function() {
        this.Ed = Math.min(3E5, 2 * this.Ed);
        this.C();
        this.A && this.start()
    };
    g.h.start = function() {
        var a = this.Ed + 15E3 * Math.random();
        g.Dv(this.o, a);
        this.A = (0, g.J)() + a
    };
    g.h.stop = function() {
        this.o.stop();
        this.A = 0
    };
    g.h.isActive = function() {
        return this.o.isActive()
    };
    g.h.reset = function() {
        this.o.stop();
        this.Ed = 5E3
    };
    g.D(X6, OFa);
    g.h = X6.prototype;
    g.h.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.h.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.h.Gk = function(a) {
        return this.C.Pi(a)
    };
    g.h.U = function(a, b) {
        return this.C.U.apply(this.C, arguments)
    };
    g.h.dispose = function() {
        this.Bb || (this.Bb = !0, g.Pf(this.C), RFa(this), g.Pf(this.A), this.A = null)
    };
    g.h.la = function() {
        return this.Bb
    };
    g.h.connect = function(a, b, c) {
        if (!this.o || 2 != this.o.o) {
            this.I = "";
            this.A.stop();
            this.D = a || null;
            this.B = b || 0;
            a = this.K + "/test";
            b = this.K + "/bind";
            var d = new O6(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.L),
                e = this.o;
            e && (e.Dd = null);
            d.Dd = this;
            this.o = d;
            e ? this.o.connect(a, b, this.F, e.C, e.Bk) : c ? this.o.connect(a, b, this.F, c.sessionId, c.arrayId) : this.o.connect(a, b, this.F)
        }
    };
    g.h.sendMessage = function(a, b) {
        var c = {
            _sc: a
        };
        b && g.lc(c, b);
        this.A.isActive() || 2 == (this.o ? this.o.o : 0) ? this.G.push(c) : Y6(this) && IFa(this.o, c)
    };
    g.h.qA = function() {
        this.A.reset();
        this.D = null;
        this.B = 0;
        if (this.G.length) {
            var a = this.G;
            this.G = [];
            for (var b = 0, c = a.length; b < c; ++b) IFa(this.o, a[b])
        }
        this.U("handlerOpened")
    };
    g.h.oA = function(a) {
        var b = 2 == a && 401 == this.o.Vf;
        4 == a || b || this.A.start();
        this.U("handlerError", a)
    };
    g.h.It = function(a) {
        if (!this.A.isActive()) this.U("handlerClosed");
        else if (a)
            for (var b = 0, c = a.length; b < c; ++b) {
                var d = a[b].map;
                d && this.G.push(d)
            }
    };
    g.h.pB = function() {
        var a = {
            v: 2
        };
        this.I && (a.gsessionid = this.I);
        0 != this.B && (a.ui = "" + this.B);
        0 != this.H && (a.ui = "" + this.H);
        this.D && g.lc(a, this.D);
        return a
    };
    g.h.pA = function(a) {
        "S" == a[0] ? this.I = a[1] : "gracefulReconnect" == a[0] ? (this.A.start(), GFa(this.o)) : this.U("handlerMessage", new PFa(a[0], a[1]))
    };
    g.h.xW = function() {
        this.A.isActive();
        var a = this.o,
            b = 0;
        a.Bc && b++;
        a.ge && b++;
        0 != b || this.connect(this.D, this.B)
    };
    Z6.prototype.B = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z6.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z6.prototype.D = function(a) {
        a(Error("request timed out"))
    };
    var ZFa = (0, g.J)(),
        b7 = null,
        e7 = Array(50),
        d7 = -1,
        f7 = !1;
    g.D(g7, g.yH);
    g7.prototype.xe = function() {
        return this.o
    };
    g7.prototype.contains = function(a) {
        return !!l6(this.o, a)
    };
    g7.prototype.get = function(a) {
        return a ? m6(this.o, a) : null
    };
    g7.prototype.info = function(a) {
        c7(this.G, a)
    };
    g.D(h7, g.yH);
    var gHa = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.h = h7.prototype;
    g.h.start = function() {
        !this.o && isNaN(this.Fa) && this.UG()
    };
    g.h.stop = function() {
        this.o && (this.o.abort(), this.o = null);
        isNaN(this.Fa) || (g.tF(this.Fa), this.Fa = NaN)
    };
    g.h.W = function() {
        this.stop();
        h7.fa.W.call(this)
    };
    g.h.UG = function() {
        this.Fa = NaN;
        this.o = g.fG($6(this.F, "/pairing/get_screen"), {
            method: "POST",
            Sb: {
                pairing_code: this.D
            },
            timeout: 5E3,
            onSuccess: (0, g.C)(this.zW, this),
            onError: (0, g.C)(this.yW, this),
            Hd: (0, g.C)(this.AW, this)
        })
    };
    g.h.zW = function(a, b) {
        this.o = null;
        var c = b.screen || {};
        c.dialId = this.C;
        c.name = this.B;
        this.U("pairingComplete", new g6(c))
    };
    g.h.yW = function(a) {
        this.o = null;
        a.status && 404 == a.status ? this.A >= gHa.length ? this.U("pairingFailed", Error("DIAL polling timed out")) : (a = gHa[this.A], this.Fa = g.rF((0, g.C)(this.UG, this), a), this.A++) : this.U("pairingFailed", Error("Server error " + a.status))
    };
    g.h.AW = function() {
        this.o = null;
        this.U("pairingFailed", Error("Server not responding"))
    };
    g.D(j7, g7);
    g.h = j7.prototype;
    g.h.start = function() {
        i7(this) && this.U("screenChange");
        !g.NI("yt-remote-lounge-token-expiration") && cGa(this);
        g.tF(this.A);
        this.A = g.rF((0, g.C)(this.start, this), 1E4)
    };
    g.h.add = function(a, b) {
        i7(this);
        $Fa(this, a);
        k7(this, !1);
        this.U("screenChange");
        b(a);
        a.token || cGa(this)
    };
    g.h.remove = function(a, b) {
        var c = i7(this);
        bGa(this, a) && (k7(this, !1), c = !0);
        b(a);
        c && this.U("screenChange")
    };
    g.h.es = function(a, b, c, d) {
        var e = i7(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, k7(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.U("screenChange")
    };
    g.h.W = function() {
        g.tF(this.A);
        j7.fa.W.call(this)
    };
    g.h.nL = function(a) {
        i7(this);
        var b = this.o.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        k7(this, !b);
        b && c7(this.G, "Missed " + b + " lounge tokens.")
    };
    g.h.mL = function(a) {
        c7(this.G, "Requesting lounge tokens failed: " + a)
    };
    g.D(m7, g.yH);
    g.h = m7.prototype;
    g.h.start = function() {
        var a = parseInt(g.NI("yt-remote-fast-check-period") || "0", 10);
        (this.B = (0, g.J)() - 144E5 < a ? 0 : a) ? o7(this): (this.B = (0, g.J)() + 3E5, g.MI("yt-remote-fast-check-period", this.B), this.kx())
    };
    g.h.isEmpty = function() {
        return g.dc(this.o)
    };
    g.h.update = function() {
        l7("Updating availability on schedule.");
        var a = this.F(),
            b = g.Ob(this.o, function(c, d) {
                return c && !!m6(a, d)
            }, this);
        n7(this, b)
    };
    g.h.W = function() {
        g.tF(this.C);
        this.C = NaN;
        this.A && (this.A.abort(), this.A = null);
        m7.fa.W.call(this)
    };
    g.h.kx = function() {
        g.tF(this.C);
        this.C = NaN;
        this.A && this.A.abort();
        var a = fGa(this);
        if (g.Tb(a)) {
            var b = $6(this.D, "/pairing/get_screen_availability");
            this.A = a7(this.D, b, {
                lounge_token: g.Wb(a).join(",")
            }, (0, g.C)(this.DT, this, a), (0, g.C)(this.CT, this))
        } else n7(this, {}), o7(this)
    };
    g.h.DT = function(a, b) {
        this.A = null;
        var c = g.Wb(fGa(this));
        if (g.ub(c, g.Wb(a))) {
            c = b.screens || [];
            for (var d = {}, e = 0, f = c.length; e < f; ++e) d[a[c[e].loungeToken]] = "online" == c[e].status;
            n7(this, d);
            o7(this)
        } else this.sc("Changing Screen set during request."), this.kx()
    };
    g.h.CT = function(a) {
        this.sc("Screen availability failed: " + a);
        this.A = null;
        o7(this)
    };
    g.h.sc = function(a) {
        c7("OnlineScreenService", a)
    };
    g.D(p7, g7);
    g.h = p7.prototype;
    g.h.start = function() {
        this.C.start();
        this.A.start();
        this.o.length && (this.U("screenChange"), this.A.isEmpty() || this.U("onlineScreenChange"))
    };
    g.h.add = function(a, b, c) {
        this.C.add(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.C.remove(a, b, c);
        this.A.update()
    };
    g.h.es = function(a, b, c, d) {
        this.C.contains(a) ? this.C.es(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, c7(this.G, a), d(Error(a)))
    };
    g.h.xe = function(a) {
        return a ? this.o : g.ib(this.o, (0, g.se)(this.B, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.h.VG = function() {
        return (0, g.se)(this.xe(!0), function(a) {
            return !!this.A.o[a.id]
        }, this)
    };
    g.h.WG = function(a, b, c, d, e) {
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var f = new h7(this.F, a, b, c);
        f.subscribe("pairingComplete", (0, g.C)(function(k) {
            g.Pf(f);
            d(q7(this, k))
        }, this));
        f.subscribe("pairingFailed", function(k) {
            g.Pf(f);
            e(k)
        });
        f.start();
        return (0, g.C)(f.stop, f)
    };
    g.h.DW = function(a, b, c, d) {
        g.fG($6(this.F, "/pairing/get_screen"), {
            method: "POST",
            Sb: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.C)(function(e, f) {
                var k = new g6(f.screen || {});
                if (!k.name || jGa(this, k.name)) {
                    a: {
                        var l = k.name;
                        for (var m = 2, n = b(l, m); jGa(this, n);) {
                            m++;
                            if (20 < m) break a;
                            n = b(l, m)
                        }
                        l = n
                    }
                    k.name = l
                }
                c(q7(this, k))
            }, this),
            onError: (0, g.C)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            Hd: (0, g.C)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.h.W = function() {
        g.Pf(this.C);
        g.Pf(this.A);
        p7.fa.W.call(this)
    };
    g.h.AL = function() {
        kGa(this);
        this.U("screenChange");
        this.A.update()
    };
    p7.prototype.dispose = p7.prototype.dispose;
    g.D(s7, g.yH);
    g.h = s7.prototype;
    g.h.Uq = function(a) {
        this.C = a;
        this.U("sessionScreen", this.C)
    };
    g.h.De = function(a) {
        this.la() || (a && t7(this, "" + a), this.C = null, this.U("sessionScreen", null))
    };
    g.h.info = function(a) {
        c7(this.M, a)
    };
    g.h.YG = function() {
        return null
    };
    g.h.Ax = function(a) {
        var b = this.A;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.C)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.C)(function() {
            t7(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.h.W = function() {
        this.Ax("");
        s7.fa.W.call(this)
    };
    g.D(u7, s7);
    g.h = u7.prototype;
    g.h.zx = function(a) {
        if (this.o) {
            if (this.o == a) return;
            t7(this, "Overriding cast sesison with new session object");
            this.o.removeUpdateListener(this.F);
            this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D)
        }
        this.o = a;
        this.o.addUpdateListener(this.F);
        this.o.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.D);
        mGa(this)
    };
    g.h.Dk = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.ih(a))
    };
    g.h.stop = function() {
        this.o ? this.o.stop((0, g.C)(function() {
            this.De()
        }, this), (0, g.C)(function() {
            this.De(Error("Failed to stop receiver app."))
        }, this)) : this.De(Error("Stopping cast device witout session."))
    };
    g.h.Ax = g.A;
    g.h.W = function() {
        this.info("disposeInternal");
        g.tF(this.B);
        this.B = 0;
        this.o && (this.o.removeUpdateListener(this.F), this.o.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.D));
        this.o = null;
        u7.fa.W.call(this)
    };
    g.h.MU = function(a, b) {
        if (!this.la())
            if (b) {
                var c = g.zy(b);
                if (g.Ja(c)) {
                    var d = "" + c.type;
                    c = c.data || {};
                    this.info("onYoutubeMessage_: " + d + " " + g.ih(c));
                    switch (d) {
                        case "mdxSessionStatus":
                            lGa(this, c.screenId);
                            break;
                        default:
                            t7(this, "Unknown youtube message: " + d)
                    }
                } else t7(this, "Unable to parse message.")
            } else t7(this, "No data in message.")
    };
    g.h.AB = function(a, b, c, d) {
        iGa(this.I, this.A.label, a, this.A.friendlyName, (0, g.C)(function(e) {
            e ? b(e) : 0 <= d ? (t7(this, "Screen " + a + " appears to be offline. " + d + " retries left."), g.rF((0, g.C)(this.AB, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.h.YG = function() {
        return this.o
    };
    g.h.EW = function(a) {
        this.la() || a || (t7(this, "Cast session died."), this.De())
    };
    g.D(v7, s7);
    g.h = v7.prototype;
    g.h.zx = function(a) {
        this.B = a;
        this.B.addUpdateListener(this.L)
    };
    g.h.Dk = function(a) {
        this.D = a;
        this.G()
    };
    g.h.stop = function() {
        this.o();
        this.o = g.A;
        g.tF(this.F);
        this.B ? this.B.stop((0, g.C)(this.De, this, null), (0, g.C)(this.De, this, "Failed to stop DIAL device.")) : this.De()
    };
    g.h.W = function() {
        this.o();
        this.o = g.A;
        g.tF(this.F);
        this.B && this.B.removeUpdateListener(this.L);
        this.B = null;
        v7.fa.W.call(this)
    };
    g.h.HW = function(a) {
        this.la() || a || (t7(this, "DIAL session died."), this.o(), this.o = g.A, this.De())
    };
    g.h.ev = function(a) {
        this.K = k6();
        if (this.D) {
            var b = new chrome.cast.DialLaunchResponse(!0, oGa(this));
            a(b);
            nGa(this)
        } else this.G = (0, g.C)(function() {
            g.tF(this.F);
            this.G = g.A;
            this.F = NaN;
            var c = new chrome.cast.DialLaunchResponse(!0, oGa(this));
            a(c);
            nGa(this)
        }, this), this.F = g.rF((0, g.C)(function() {
            this.G()
        }, this), 100)
    };
    g.h.OM = function(a, b, c) {
        iGa(this.I, this.H.receiver.label, a, this.A.friendlyName, (0, g.C)(function(d) {
            d && d.token ? (this.Uq(d), b(new chrome.cast.DialLaunchResponse(!1))) : this.ev(b, c)
        }, this), (0, g.C)(function(d) {
            t7(this, "Failed to get DIAL screen: " + d);
            this.ev(b, c)
        }, this))
    };
    g.D(w7, s7);
    w7.prototype.stop = function() {
        this.De()
    };
    w7.prototype.zx = g.A;
    w7.prototype.Dk = function() {
        g.tF(this.o);
        this.o = NaN;
        var a = m6(this.I.xe(), this.A.label);
        a ? this.Uq(a) : this.De(Error("No such screen"))
    };
    w7.prototype.W = function() {
        g.tF(this.o);
        this.o = NaN;
        w7.fa.W.call(this)
    };
    g.D(x7, g.yH);
    g.h = x7.prototype;
    g.h.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.G);
        this.H || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED,
            e = a ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        c = new chrome.cast.ApiConfig(c, (0, g.C)(this.QE, this), (0, g.C)(this.lT, this), d, e);
        c.customDialLaunchCallback = (0, g.C)(this.jR, this);
        chrome.cast.initialize(c, (0, g.C)(function() {
            this.la() ||
                (chrome.cast.addReceiverActionListener(this.B), WFa(), this.A.subscribe("onlineScreenChange", (0, g.C)(this.XG, this)), this.C = qGa(this), chrome.cast.setCustomReceivers(this.C, g.A, (0, g.C)(function(f) {
                    this.sc("Failed to set initial custom receivers: " + g.ih(f))
                }, this)), this.U("yt-remote-cast2-availability-change", z7(this)), b(!0))
        }, this), (0, g.C)(function(f) {
            this.sc("Failed to initialize API: " + g.ih(f));
            b(!1)
        }, this))
    };
    g.h.BV = function(a, b) {
        y7("Setting connected screen ID: " + a + " -> " + b);
        if (this.o) {
            var c = this.o.C;
            if (!a || c && c.id != a) y7("Unsetting old screen status: " + this.o.A.friendlyName), A7(this, null)
        }
        if (a && b) {
            if (!this.o) {
                c = m6(this.A.xe(), a);
                if (!c) {
                    y7("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                var d = pGa(this, c);
                d || (y7("setConnectedScreenStatus: Connected receiver not custom..."), d = new chrome.cast.Receiver(c.uuid ? c.uuid : c.id, c.name), d.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(d), chrome.cast.setCustomReceivers(this.C,
                    g.A, (0, g.C)(function(e) {
                        this.sc("Failed to set initial custom receivers: " + g.ih(e))
                    }, this)));
                y7("setConnectedScreenStatus: new active receiver: " + d.friendlyName);
                A7(this, new w7(this.A, d), !0)
            }
            this.o.Ax(b)
        } else y7("setConnectedScreenStatus: no screen.")
    };
    g.h.CV = function(a) {
        this.la() ? this.sc("Setting connection data on disposed cast v2") : this.o ? this.o.Dk(a) : this.sc("Setting connection data without a session")
    };
    g.h.GW = function() {
        this.la() ? this.sc("Stopping session on disposed cast v2") : this.o ? (this.o.stop(), A7(this, null)) : y7("Stopping non-existing session")
    };
    g.h.requestSession = function() {
        chrome.cast.requestSession((0, g.C)(this.QE, this), (0, g.C)(this.HT, this))
    };
    g.h.W = function() {
        this.A.unsubscribe("onlineScreenChange", (0, g.C)(this.XG, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.B);
        g.eb(g.z("yt.mdx.remote.debug.handlers_") || [], TFa);
        g.Pf(this.o);
        x7.fa.W.call(this)
    };
    g.h.sc = function(a) {
        c7("Controller", a)
    };
    g.h.RE = function(a, b) {
        this.o == a && (b || A7(this, null), this.U("yt-remote-cast2-session-change", b))
    };
    g.h.hT = function(a, b) {
        if (!this.la())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), y7("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.o)
                        if (this.o.A.label != a.label) y7("onReceiverAction_: Stopping active receiver: " + this.o.A.friendlyName), this.o.stop();
                        else {
                            y7("onReceiverAction_: Casting to active receiver.");
                            this.o.C && this.U("yt-remote-cast2-session-change", this.o.C);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            A7(this,
                                new w7(this.A, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            A7(this, new v7(this.A, a, this.F));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            A7(this, new u7(this.A, a));
                            break;
                        default:
                            this.sc("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.o && this.o.A.label == a.label ? this.o.stop() : this.sc("Stopping receiver w/o session: " + a.friendlyName)
            } else this.sc("onReceiverAction_ called without receiver.")
    };
    g.h.jR = function(a) {
        if (this.la()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.sc("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.o ? this.o.A : null;
        if (!c || c.label != b.label) return this.sc("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.o.C) return y7("Reselecting dial screen."),
                this.U("yt-remote-cast2-session-change", this.o.C), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.sc('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            A7(this, new v7(this.A, b, this.F))
        }
        b = this.o;
        b.H = a;
        return b.H.appState == chrome.cast.DialAppState.RUNNING ? new Promise((0, g.C)(b.OM, b, (b.H.extraData || {}).screenId || null)) : new Promise((0, g.C)(b.ev, b))
    };
    g.h.QE = function(a) {
        if (!this.la()) {
            y7("New cast session ID: " + a.sessionId);
            var b = a.receiver;
            if (b.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.o)
                    if (b.receiverType == chrome.cast.ReceiverType.CAST) y7("Got resumed cast session before resumed mdx connection."), b.friendlyName = chrome.cast.unescape(b.friendlyName), A7(this, new u7(this.A, b), !0);
                    else {
                        this.sc("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var c = this.o.A,
                    d = m6(this.A.xe(), c.label);
                d && h6(d, b.label) &&
                    c.receiverType != chrome.cast.ReceiverType.CAST && b.receiverType == chrome.cast.ReceiverType.CAST && (y7("onSessionEstablished_: manual to cast session change " + b.friendlyName), g.Pf(this.o), this.o = new u7(this.A, b), this.o.subscribe("sessionScreen", (0, g.C)(this.RE, this, this.o)), this.o.Dk(null));
                this.o.zx(a)
            }
        }
    };
    g.h.FW = function() {
        return this.o ? this.o.YG() : null
    };
    g.h.HT = function(a) {
        this.la() || (this.sc("Failed to estabilish a session: " + g.ih(a)), a.code != chrome.cast.ErrorCode.CANCEL && A7(this, null))
    };
    g.h.lT = function(a) {
        y7("Receiver availability updated: " + a);
        if (!this.la()) {
            var b = z7(this);
            this.D = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            z7(this) != b && this.U("yt-remote-cast2-availability-change", z7(this))
        }
    };
    g.h.XG = function() {
        this.la() || (this.C = qGa(this), y7("Updating custom receivers: " + g.ih(this.C)), chrome.cast.setCustomReceivers(this.C, g.A, (0, g.C)(function() {
            this.sc("Failed to set custom receivers.")
        }, this)), this.U("yt-remote-cast2-availability-change", z7(this)))
    };
    x7.prototype.setLaunchParams = x7.prototype.CV;
    x7.prototype.setConnectedScreenStatus = x7.prototype.BV;
    x7.prototype.stopSession = x7.prototype.GW;
    x7.prototype.getCastSession = x7.prototype.FW;
    x7.prototype.requestSession = x7.prototype.requestSession;
    x7.prototype.init = x7.prototype.init;
    x7.prototype.dispose = x7.prototype.dispose;
    var G7 = [];
    g.h = L7.prototype;
    g.h.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        M7(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.o = a.trackData, this.Zf = a.hasPrevious, this.hasNext = a.hasNext, this.G = a.playerTime, this.F = a.playerTimeAt, this.B = a.seekableStart, this.A = a.seekableEnd, this.H = a.duration, this.I = a.loadedTime, this.C = a.liveIngestionTime, this.D = !isNaN(this.C))
    };
    g.h.sb = function() {
        return 1 == this.playerState
    };
    g.h.isAdPlaying = function() {
        return 1081 == this.playerState
    };
    g.h.getDuration = function() {
        return this.D ? this.H + N7(this) : this.H
    };
    g.h.clone = function() {
        return new L7(R7(this))
    };
    g.D(T7, g.yH);
    g.h = T7.prototype;
    g.h.play = function() {
        1 == this.o ? (this.A ? this.A.play(null, g.A, Z7(this, "play")) : Y7(this, "play"), X7(this, 1, P7(U7(this))), this.U("remotePlayerChange")) : V7(this, this.play)
    };
    g.h.pause = function() {
        1 == this.o ? (this.A ? this.A.pause(null, g.A, Z7(this, "pause")) : Y7(this, "pause"), X7(this, 2, P7(U7(this))), this.U("remotePlayerChange")) : V7(this, this.pause)
    };
    g.h.seekTo = function(a) {
        if (1 == this.o) {
            if (this.A) {
                var b = U7(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.sb() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.A.seek(c, g.A, Z7(this, "seekTo", {
                    newTime: a
                }))
            } else Y7(this, "seekTo", {
                newTime: a
            });
            X7(this, 3, a);
            this.U("remotePlayerChange")
        } else V7(this, g.Ma(this.seekTo, a))
    };
    g.h.stop = function() {
        if (1 == this.o) {
            this.A ? this.A.stop(null, g.A, Z7(this, "stopVideo")) : Y7(this, "stopVideo");
            var a = U7(this);
            a.index = -1;
            a.videoId = "";
            M7(a);
            W7(this, a);
            this.U("remotePlayerChange")
        } else V7(this, this.stop)
    };
    g.h.setVolume = function(a, b) {
        if (1 == this.o) {
            var c = U7(this);
            if (this.C) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.C.setReceiverVolumeLevel(d, (0, g.C)(function() {
                        c7("CP", "set receiver volume: " + d)
                    }, this), (0, g.C)(function() {
                        this.sc("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.C.setReceiverMuted(b, (0, g.C)(function() {
                    c7("CP", "set receiver muted: " + b)
                }, this), (0, g.C)(function() {
                    this.sc("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Y7(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            W7(this, c)
        } else V7(this, g.Ma(this.setVolume, a, b))
    };
    g.h.UF = function(a, b) {
        if (1 == this.o) {
            var c = U7(this),
                d = {
                    videoId: a
                };
            b && (c.o = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, d.style = g.ih(b.style), g.lc(d, c.o));
            Y7(this, "setSubtitlesTrack", d);
            W7(this, c)
        } else V7(this, g.Ma(this.UF, a, b))
    };
    g.h.setAudioTrack = function(a, b) {
        if (1 == this.o) {
            var c = b.getLanguageInfo().getId();
            Y7(this, "setAudioTrack", {
                videoId: a,
                audioTrackId: c
            });
            var d = U7(this);
            d.audioTrackId = c;
            W7(this, d)
        } else V7(this, g.Ma(this.setAudioTrack, a, b))
    };
    g.h.playVideo = function(a, b, c, d, e, f, k) {
        var l = U7(this);
        c = c || 0;
        var m = {
            videoId: a,
            currentIndex: c
        };
        Q7(l, a, c);
        g.v(b) && (O7(l, b), m.currentTime = b);
        g.v(d) && (m.listId = d);
        null != e && (m.playerParams = e);
        null != f && (m.clickTrackingParams = f);
        null != k && (m.locationInfo = g.ih(k));
        Y7(this, "setPlaylist", m);
        d || W7(this, l)
    };
    g.h.dr = function(a, b) {
        if (1 == this.o) {
            if (a && b) {
                var c = U7(this);
                Q7(c, a, b);
                W7(this, c)
            }
            Y7(this, "previous")
        } else V7(this, g.Ma(this.dr, a, b))
    };
    g.h.nextVideo = function(a, b) {
        if (1 == this.o) {
            if (a && b) {
                var c = U7(this);
                Q7(c, a, b);
                W7(this, c)
            }
            Y7(this, "next")
        } else V7(this, g.Ma(this.nextVideo, a, b))
    };
    g.h.PA = function() {
        1 == this.o ? Y7(this, "dismissAutoplay") : V7(this, this.PA)
    };
    g.h.dispose = function() {
        if (3 != this.o) {
            var a = this.o;
            this.o = 3;
            this.U("proxyStateChange", a, this.o)
        }
        T7.fa.dispose.call(this)
    };
    g.h.W = function() {
        DGa(this);
        this.B = null;
        this.D.clear();
        S7(this, null);
        T7.fa.W.call(this)
    };
    g.h.Fy = function(a) {
        if ((a != this.o || 2 == a) && 3 != this.o && 0 != a) {
            var b = this.o;
            this.o = a;
            this.U("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.D.isEmpty();) g.QD(this.D).apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.h.dT = function(a, b) {
        this.U(a, b)
    };
    g.h.IQ = function(a) {
        if (!a) this.Cn(null), S7(this, null);
        else if (this.C.receiver.volume) {
            a = this.C.receiver.volume;
            var b = U7(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c7("CP", "Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, W7(this, b)
        }
    };
    g.h.Cn = function(a) {
        c7("CP", "Cast media: " + !!a);
        this.A && this.A.removeUpdateListener(this.H);
        if (this.A = a) this.A.addUpdateListener(this.H), EGa(this), this.U("remotePlayerChange")
    };
    g.h.HQ = function(a) {
        a ? (EGa(this), this.U("remotePlayerChange")) : this.Cn(null)
    };
    g.h.Tx = function() {
        Y7(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.h.UQ = function() {
        var a = AGa();
        a && S7(this, a)
    };
    g.h.sc = function(a) {
        c7("CP", a)
    };
    g.D($7, g.yH);
    g.h = $7.prototype;
    g.h.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.playerParams,
                f = b.clickTrackingParams,
                k = b.index,
                l = {
                    videoId: d
                },
                m = b.currentTime,
                n = b.locationInfo;
            g.v(m) && (l.currentTime = 5 >= m ? 0 : m);
            e && (l.playerParams = e);
            n && (l.locationInfo = n);
            f && (l.clickTrackingParams = f);
            c && (l.listId = c);
            g.v(k) && (l.currentIndex = k);
            c && (this.kb.listId = c);
            this.kb.videoId = d;
            this.kb.index = k || 0;
            this.kb.state = 3;
            O7(this.kb, m);
            this.B = "UNSUPPORTED";
            a8("Connecting with setPlaylist and params: " + g.ih(l));
            this.o.connect({
                method: "setPlaylist",
                params: g.ih(l)
            }, a, cFa())
        } else a8("Connecting without params"), this.o.connect({}, a, cFa());
        GGa(this)
    };
    g.h.dispose = function() {
        this.la() || (this.U("beforeDispose"), b8(this, 3));
        $7.fa.dispose.call(this)
    };
    g.h.W = function() {
        c8(this);
        e8(this);
        d8(this);
        g.tF(this.I);
        this.I = NaN;
        g.tF(this.K);
        this.K = NaN;
        this.C = null;
        g.iH(this.O);
        this.O.length = 0;
        this.o.dispose();
        $7.fa.W.call(this);
        this.B = this.G = this.A = this.kb = this.o = null
    };
    g.h.dL = function() {
        this.F(2)
    };
    g.h.MQ = function() {
        a8("Channel opened");
        this.V && (this.V = !1, d8(this), this.M = g.rF((0, g.C)(function() {
            a8("Timing out waiting for a screen.");
            this.F(1)
        }, this), 15E3));
        gFa(QFa(this.o), this.aa)
    };
    g.h.JQ = function() {
        a8("Channel closed");
        isNaN(this.D) ? r6(!0) : r6();
        this.dispose()
    };
    g.h.KQ = function(a) {
        r6();
        isNaN(this.H()) ? (a8("Channel error: " + a + " without reconnection"), this.dispose()) : (this.V = !0, a8("Channel error: " + a + " with reconnection in " + this.H() + " ms"), b8(this, 2))
    };
    g.h.LQ = function(a) {
        a.params ? a8("Received: action=" + a.action + ", params=" + g.ih(a.params)) : a8("Received: action=" + a.action + " {}");
        switch (a.action) {
            case "loungeStatus":
                a = g.zy(a.params.devices);
                this.A = (0, g.K)(a, function(c) {
                    return new f6(c)
                });
                a = !!g.Va(this.A, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                JGa(this, a);
                break;
            case "loungeScreenDisconnected":
                g.fb(this.A, function(c) {
                    return "LOUNGE_SCREEN" == c.type
                });
                JGa(this, !1);
                break;
            case "remoteConnected":
                var b = new f6(g.zy(a.params.device));
                g.Va(this.A, function(c) {
                    return b ? c.id == b.id : !1
                }) || g.cb(this.A, b);
                break;
            case "remoteDisconnected":
                b = new f6(g.zy(a.params.device));
                g.fb(this.A, function(c) {
                    return b ? c.id == b.id : !1
                });
                break;
            case "gracefulDisconnect":
                break;
            case "playlistModified":
                LGa(this, a);
                break;
            case "nowPlaying":
                NGa(this, a);
                break;
            case "onStateChange":
                MGa(this, a);
                break;
            case "onAdStateChange":
                OGa(this, a);
                break;
            case "onVolumeChanged":
                PGa(this, a);
                break;
            case "onSubtitlesTrackChanged":
                KGa(this, a);
                break;
            case "nowAutoplaying":
                QGa(this, a);
                break;
            case "autoplayDismissed":
                this.U("autoplayDismissed");
                break;
            case "autoplayUpNext":
                this.G = a.params.videoId || null;
                this.U("autoplayUpNext", this.G);
                break;
            case "onAutoplayModeChanged":
                this.B =
                    a.params.autoplayMode;
                this.U("autoplayModeChange", this.B);
                "DISABLED" == this.B && this.U("autoplayDismissed");
                break;
            case "onHasPreviousNextChanged":
                RGa(this, a);
                break;
            case "requestAssistedSignIn":
                this.U("assistedSignInRequested", a.params.authCode);
                break;
            default:
                a8("Unrecognized action: " + a.action)
        }
    };
    g.h.lV = function() {
        if (this.C) {
            var a = this.C;
            this.C = null;
            this.kb.videoId != a && f8(this, "getNowPlaying")
        }
    };
    $7.prototype.subscribe = $7.prototype.subscribe;
    $7.prototype.unsubscribeByKey = $7.prototype.Gk;
    $7.prototype.ia = function() {
        var a = 3;
        this.la() || (a = 0, isNaN(this.H()) ? Y6(this.o) && isNaN(this.D) && (a = 1) : a = 2);
        return a
    };
    $7.prototype.getProxyState = $7.prototype.ia;
    $7.prototype.F = function(a) {
        a8("Disconnecting with " + a);
        c8(this);
        this.U("beforeDisconnect", a);
        1 == a && r6();
        RFa(this.o, a);
        this.dispose()
    };
    $7.prototype.disconnect = $7.prototype.F;
    $7.prototype.ea = function() {
        var a = this.kb;
        this.C && (a = this.kb.clone(), Q7(a, this.C, a.index));
        return R7(a)
    };
    $7.prototype.getPlayerContextData = $7.prototype.ea;
    $7.prototype.ma = function(a) {
        var b = new L7(a);
        b.videoId && b.videoId != this.kb.videoId && (this.C = b.videoId, g.tF(this.I), this.I = g.rF((0, g.C)(this.lV, this), 5E3));
        var c = [];
        this.kb.listId == b.listId && this.kb.videoId == b.videoId && this.kb.index == b.index || c.push("remoteQueueChange");
        this.kb.playerState == b.playerState && this.kb.volume == b.volume && this.kb.muted == b.muted && P7(this.kb) == P7(b) && g.ih(this.kb.o) == g.ih(b.o) || c.push("remotePlayerChange");
        this.kb.reset(a);
        (0, g.E)(c, function(d) {
            this.U(d)
        }, this)
    };
    $7.prototype.setPlayerContextData = $7.prototype.ma;
    $7.prototype.Y = function() {
        var a = this.o.F.id,
            b = g.Va(this.A, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    $7.prototype.getOtherConnectedRemoteId = $7.prototype.Y;
    $7.prototype.H = function() {
        var a = this.o;
        return a.A.isActive() ? a.A.A - (0, g.J)() : NaN
    };
    $7.prototype.getReconnectTimeout = $7.prototype.H;
    $7.prototype.ba = function() {
        return this.B || "UNSUPPORTED"
    };
    $7.prototype.getAutoplayMode = $7.prototype.ba;
    $7.prototype.ga = function() {
        return this.G || ""
    };
    $7.prototype.getAutoplayVideoId = $7.prototype.ga;
    $7.prototype.ya = function() {
        if (!isNaN(this.H())) {
            var a = this.o.A;
            g.Ev(a.o);
            a.start()
        }
    };
    $7.prototype.reconnect = $7.prototype.ya;
    $7.prototype.ka = function(a, b) {
        f8(this, a, b);
        IGa(this)
    };
    $7.prototype.sendMessage = $7.prototype.ka;
    g.D(g8, g7);
    g.h = g8.prototype;
    g.h.xe = function(a) {
        return this.jd.$_gs(a)
    };
    g.h.contains = function(a) {
        return !!this.jd.$_c(a)
    };
    g.h.get = function(a) {
        return this.jd.$_g(a)
    };
    g.h.start = function() {
        this.jd.$_st()
    };
    g.h.add = function(a, b, c) {
        this.jd.$_a(a, b, c)
    };
    g.h.remove = function(a, b, c) {
        this.jd.$_r(a, b, c)
    };
    g.h.es = function(a, b, c, d) {
        this.jd.$_un(a, b, c, d)
    };
    g.h.W = function() {
        for (var a = 0, b = this.A.length; a < b; ++a) this.jd.$_ubk(this.A[a]);
        this.A.length = 0;
        this.jd = null;
        g8.fa.W.call(this)
    };
    g.h.BW = function() {
        this.U("screenChange")
    };
    g.h.CS = function() {
        this.U("onlineScreenChange")
    };
    p7.prototype.$_st = p7.prototype.start;
    p7.prototype.$_gspc = p7.prototype.DW;
    p7.prototype.$_gsppc = p7.prototype.WG;
    p7.prototype.$_c = p7.prototype.contains;
    p7.prototype.$_g = p7.prototype.get;
    p7.prototype.$_a = p7.prototype.add;
    p7.prototype.$_un = p7.prototype.es;
    p7.prototype.$_r = p7.prototype.remove;
    p7.prototype.$_gs = p7.prototype.xe;
    p7.prototype.$_gos = p7.prototype.VG;
    p7.prototype.$_s = p7.prototype.subscribe;
    p7.prototype.$_ubk = p7.prototype.Gk;
    var h8 = null,
        i8 = null,
        x8 = null,
        m8 = [];
    g.t(y8, g.L);
    g.h = y8.prototype;
    g.h.W = function() {
        g.L.prototype.W.call(this);
        this.B.stop();
        this.F.stop();
        this.L.stop();
        this.V();
        this.o.unsubscribe("proxyStateChange", this.NE, this);
        this.o.unsubscribe("remotePlayerChange", this.Fn, this);
        this.o.unsubscribe("remoteQueueChange", this.Vq, this);
        this.o.unsubscribe("autoplayUpNext", this.kE, this);
        this.o.unsubscribe("previousNextChange", this.KE, this);
        this.o.unsubscribe("nowAutoplaying", this.CE, this);
        this.o.unsubscribe("autoplayDismissed", this.jE, this);
        this.o = this.D = null
    };
    g.h.nD = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        if (2 != this.o.o)
            if (B8(this)) {
                if (!U7(this.o).isAdPlaying() || "control_seek" != a) switch (a) {
                    case "control_toggle_play_pause":
                        U7(this.o).sb() ? this.o.pause() : this.o.play();
                        break;
                    case "control_play":
                        this.o.play();
                        break;
                    case "control_pause":
                        this.o.pause();
                        break;
                    case "control_seek":
                        this.K.Em(c[0], c[1]);
                        break;
                    case "control_subtitles_set_track":
                        C8(this, c[0]);
                        break;
                    case "control_set_audio_track":
                        c = c[0], B8(this) && this.o.setAudioTrack(this.A.getVideoData(1).videoId,
                            c)
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    c = this.A.getCurrentTime();
                    D8(this, 0 == c ? void 0 : c);
                    break;
                case "control_seek":
                    D8(this, c[0]);
                    break;
                case "control_subtitles_set_track":
                    C8(this, c[0]);
                    break;
                case "control_set_audio_track":
                    c = c[0], B8(this) && this.o.setAudioTrack(this.A.getVideoData(1).videoId, c)
            }
    };
    g.h.GQ = function(a) {
        this.L.YK(a)
    };
    g.h.dW = function(a) {
        this.nD("control_subtitles_set_track", g.dc(a) ? null : a)
    };
    g.h.jG = function() {
        var a = this.A.getOption("captions", "track");
        g.dc(a) || C8(this, a)
    };
    g.h.yE = function(a) {
        if (B8(this)) {
            this.o.unsubscribe("remotePlayerChange", this.Fn, this);
            var b = Math.round(a.volume);
            a = !!a.muted;
            var c = U7(this.o);
            if (b != c.volume || a != c.muted) this.o.setVolume(b, a), this.M.start();
            this.o.subscribe("remotePlayerChange", this.Fn, this)
        }
    };
    g.h.VR = function() {
        g.dc(this.G) || cHa(this, this.G);
        this.H = !1
    };
    g.h.NE = function(a, b) {
        this.F.stop();
        2 == b && this.hG()
    };
    g.h.Fn = function() {
        if (B8(this)) {
            this.B.stop();
            var a = U7(this.o);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.D.jl(1);
                    break;
                case 1082:
                case 1083:
                    this.D.jl(0);
                    break;
                default:
                    this.D.jl(-1)
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    A8(this, new g.GQ(8));
                    this.gG();
                    break;
                case 1085:
                case 3:
                    A8(this, new g.GQ(9));
                    break;
                case 1083:
                case 0:
                    A8(this, new g.GQ(2));
                    this.K.stop();
                    z8(this, this.A.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    A8(this, new g.GQ(4));
                    break;
                case 2:
                    A8(this, new g.GQ(4));
                    z8(this, P7(a));
                    break;
                case -1:
                    A8(this, new g.GQ(64));
                    break;
                case -1E3:
                    A8(this, new g.GQ(128, {
                        errorCode: "mdx.remoteerror",
                        message: "This video is not available for remote playback."
                    }))
            }
            a = U7(this.o).o;
            var b = this.G;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.G = a, cHa(this, a));
            a = U7(this.o); - 1 == a.volume || Math.round(this.A.getVolume()) == a.volume && this.A.isMuted() == a.muted || this.M.isActive() || this.FG()
        } else bHa(this)
    };
    g.h.KE = function() {
        this.A.U("mdxpreviousnextchange")
    };
    g.h.Vq = function() {
        B8(this) || bHa(this)
    };
    g.h.YJ = function() {
        this.o.PA()
    };
    g.h.kE = function(a) {
        a && (a = g.fG("/watch_queue_ajax", {
            method: "GET",
            ed: {
                action_get_watch_queue_item: 1,
                video_id: a
            },
            onSuccess: (0, g.C)(this.nU, this)
        })) && (this.V = (0, g.C)(a.abort, a))
    };
    g.h.nU = function(a, b) {
        var c = new g.yP(g.Y(this.A), {
            videoId: b.videoId,
            title: b.title,
            author: b.author,
            murlmq_webp: b.url
        });
        this.suggestion = c;
        this.A.U("mdxautoplayupnext", c)
    };
    g.h.CE = function(a) {
        isNaN(a) || this.A.U("mdxnowautoplaying", a)
    };
    g.h.jE = function() {
        this.A.U("mdxautoplaycanceled")
    };
    g.h.DO = function(a, b) {
        -1 == U7(this.o).playerState ? D8(this, a) : b && this.o.seekTo(a)
    };
    g.h.FG = function() {
        if (B8(this)) {
            var a = U7(this.o);
            this.C.Ka(this.O);
            a.muted ? this.A.mute() : this.A.unMute();
            this.A.setVolume(a.volume);
            this.O = this.C.R(this.A, "onVolumeChange", this.yE)
        }
    };
    g.h.gG = function() {
        this.B.stop();
        if (!this.o.la()) {
            var a = U7(this.o);
            a.sb() && A8(this, new g.GQ(8));
            z8(this, P7(a));
            this.B.start()
        }
    };
    g.h.hG = function() {
        this.F.stop();
        this.B.stop();
        var a = this.o.B.getReconnectTimeout();
        2 == this.o.o && !isNaN(a) && this.F.start()
    };
    g.t(E8, g.V);
    E8.prototype.F = function(a) {
        eHa(this, a.state)
    };
    g.t(F8, g.ZW);
    F8.prototype.M = function() {
        var a = this.B.getOption("remote", "receivers");
        a && 1 < a.length && !this.B.getOption("remote", "quickCast") ? (this.K = g.wb(a, this.G, this), g.$W(this, (0, g.K)(a, this.G)), a = this.B.getOption("remote", "currentReceiver"), this.Bf(this.G(a)), this.enable(!0)) : this.enable(!1)
    };
    F8.prototype.G = function(a) {
        return a.key
    };
    F8.prototype.Af = function(a) {
        return "cast-selector-receiver" == a ? "Cast..." : this.K[a].name
    };
    F8.prototype.ld = function(a) {
        g.ZW.prototype.ld.call(this, a);
        this.B.setOption("remote", "currentReceiver", this.K[a]);
        this.D.Kb()
    };
    g.t(G8, g.lV);
    g.h = G8.prototype;
    g.h.create = function() {
        WGa(g.hO(g.Y(this.player)));
        this.D.push(g.yF("yt-remote-before-disconnect", this.CQ, this));
        this.D.push(g.yF("yt-remote-connection-change", this.mT, this));
        this.D.push(g.yF("yt-remote-receiver-availability-change", this.LE, this));
        this.D.push(g.yF("yt-remote-auto-connect", this.kT, this));
        this.D.push(g.yF("yt-remote-receiver-resumed", this.jT, this));
        this.LE()
    };
    g.h.load = function() {
        this.player.cancelPlayback();
        g.lV.prototype.load.call(this);
        this.B = new y8(this, this.player, this.o);
        var a = (a = aHa()) ? a.currentTime : 0;
        var b = w8() ? new T7(r8(), void 0) : null;
        0 == a && b && (a = P7(U7(b)));
        0 != a && this.He(a);
        dHa(this, this.mn, this.mn);
        g.D0(this.player.app, 6)
    };
    g.h.unload = function() {
        this.player.U("mdxautoplaycanceled");
        this.C = this.A;
        g.Qf(this.B, this.o);
        this.o = this.B = null;
        g.lV.prototype.unload.call(this);
        g.D0(this.player.app, 5)
    };
    g.h.W = function() {
        g.zF(this.D);
        g.lV.prototype.W.call(this)
    };
    g.h.Zh = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        this.loaded && this.B.nD.apply(this.B, [a].concat(g.ea(c)))
    };
    g.h.jl = function(a) {
        this.H = a
    };
    g.h.getAdState = function() {
        return this.H
    };
    g.h.SK = function() {
        return this.loaded ? this.B.suggestion : null
    };
    g.h.Zf = function() {
        return this.o ? U7(this.o).Zf : !1
    };
    g.h.hasNext = function() {
        return this.o ? U7(this.o).hasNext : !1
    };
    g.h.He = function(a, b) {
        this.I = a || 0;
        this.player.U("progresssync", a, b)
    };
    g.h.getCurrentTime = function() {
        return this.I
    };
    g.h.getProgressState = function() {
        var a = U7(this.o),
            b = this.player.getVideoData();
        return {
            allowSeeking: g.Y(this.player).experiments.o("web_player_mdx_allow_seeking_change_killswitch") ? this.player.Mc() : !a.isAdPlaying() && this.player.Mc(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.D ? a.C + N7(a) : a.C,
            isAtLiveHead: 1 >= (a.D ? a.A + N7(a) : a.A) - this.getCurrentTime(),
            loaded: a.I,
            seekableEnd: a.D ? a.A + N7(a) : a.A,
            seekableStart: 0 < a.B ? a.B + N7(a) : a.B
        }
    };
    g.h.nextVideo = function() {
        this.o && this.o.nextVideo()
    };
    g.h.dr = function() {
        this.o && this.o.dr()
    };
    g.h.CQ = function(a) {
        1 == a && (this.G = this.o ? U7(this.o) : null)
    };
    g.h.mT = function() {
        var a = w8() ? new T7(r8(), void 0) : null;
        if (a) {
            var b = this.C;
            this.loaded && this.unload();
            this.o = a;
            this.G = null;
            b.key != this.A.key && (this.C = b, this.load())
        } else g.Pf(this.o), this.o = null, this.loaded && (this.unload(), (a = this.G) && a.videoId == this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, P7(a)));
        this.player.U("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.h.LE = function() {
        this.F = [this.A].concat(YGa());
        var a = s8() || this.A;
        H8(this, a);
        this.player.Ca("onMdxReceiversChange")
    };
    g.h.kT = function() {
        var a = s8();
        H8(this, a)
    };
    g.h.jT = function() {
        this.C = s8()
    };
    g.h.Ic = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.F;
            case "currentReceiver":
                return b && ("cast-selector-receiver" == b.key ? J7() : H8(this, b)), this.loaded ? this.C : this.A;
            case "quickCast":
                return 2 == this.F.length && "cast-selector-receiver" == this.F[1].key ? (b && J7(), !0) : !1
        }
    };
    g.h.Tx = function() {
        this.o.Tx()
    };
    g.h.xc = function() {
        return !1
    };
    g.h.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.WZ.remote = G8;
})(_yt_player);