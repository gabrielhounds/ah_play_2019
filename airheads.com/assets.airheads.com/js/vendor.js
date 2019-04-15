(function() {
    function t(t, e) {
        if (t !== e) {
            var n = null === t,
                i = t === b,
                r = t === t,
                o = null === e,
                s = e === b,
                a = e === e;
            if (t > e && !o || !r || n && !s && a || i && a) return 1;
            if (t < e && !n || !a || o && !i && r || s && r) return -1
        }
        return 0
    }

    function e(t, e, n) {
        for (var i = t.length, r = n ? i : -1; n ? r-- : ++r < i;)
            if (e(t[r], r, t)) return r;
        return -1
    }

    function n(t, e, n) {
        if (e !== e) return f(t, n);
        n -= 1;
        for (var i = t.length; ++n < i;)
            if (t[n] === e) return n;
        return -1
    }

    function i(t) {
        return "function" == typeof t || !1
    }

    function r(t) {
        return null == t ? "" : t + ""
    }

    function o(t, e) {
        for (var n = -1, i = t.length; ++n < i && -1 < e.indexOf(t.charAt(n)););
        return n
    }

    function s(t, e) {
        for (var n = t.length; n-- && -1 < e.indexOf(t.charAt(n)););
        return n
    }

    function a(e, n) {
        return t(e.a, n.a) || e.b - n.b
    }

    function l(t) {
        return Dt[t]
    }

    function u(t) {
        return It[t]
    }

    function c(t, e, n) {
        return e ? t = Wt[t] : n && (t = Mt[t]), "\\" + t
    }

    function d(t) {
        return "\\" + Mt[t]
    }

    function f(t, e, n) {
        var i = t.length;
        for (e += n ? 0 : -1; n ? e-- : ++e < i;) {
            var r = t[e];
            if (r !== r) return e
        }
        return -1
    }

    function p(t) {
        return !!t && "object" == typeof t
    }

    function h(t) {
        return 160 >= t && 9 <= t && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || 8192 <= t && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
    }

    function v(t, e) {
        for (var n = -1, i = t.length, r = -1, o = []; ++n < i;) t[n] === e && (t[n] = W, o[++r] = n);
        return o
    }

    function g(t) {
        for (var e = -1, n = t.length; ++e < n && h(t.charCodeAt(e)););
        return e
    }

    function y(t) {
        for (var e = t.length; e-- && h(t.charCodeAt(e)););
        return e
    }

    function m(t) {
        return Pt[t]
    }

    function w(h) {
        function Dt(t) {
            if (p(t) && !($o(t) || t instanceof Ht)) {
                if (t instanceof Pt) return t;
                if (tr.call(t, "__chain__") && tr.call(t, "__wrapped__")) return qn(t)
            }
            return new Pt(t)
        }

        function It() {}

        function Pt(t, e, n) {
            this.__wrapped__ = t, this.__actions__ = n || [], this.__chain__ = !!e
        }

        function Ht(t) {
            this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Er, this.__views__ = []
        }

        function Wt() {
            this.__data__ = {}
        }

        function Mt(t) {
            var e = t ? t.length : 0;
            for (this.data = {
                    hash: gr(null),
                    set: new cr
                }; e--;) this.push(t[e])
        }

        function Rt(t, e) {
            var n = t.data;
            return ("string" == typeof e || gi(e) ? n.set.has(e) : n.hash[e]) ? 0 : -1
        }

        function qt(t, e) {
            var n = -1,
                i = t.length;
            for (e || (e = Mi(i)); ++n < i;) e[n] = t[n];
            return e
        }

        function Ft(t, e) {
            for (var n = -1, i = t.length; ++n < i && !1 !== e(t[n], n, t););
            return t
        }

        function Bt(t, e) {
            for (var n = -1, i = t.length; ++n < i;)
                if (!e(t[n], n, t)) return !1;
            return !0
        }

        function Ut(t, e) {
            for (var n = -1, i = t.length, r = -1, o = []; ++n < i;) {
                var s = t[n];
                e(s, n, t) && (o[++r] = s)
            }
            return o
        }

        function Vt(t, e) {
            for (var n = -1, i = t.length, r = Mi(i); ++n < i;) r[n] = e(t[n], n, t);
            return r
        }

        function Qt(t, e) {
            for (var n = -1, i = e.length, r = t.length; ++n < i;) t[r + n] = e[n];
            return t
        }

        function Gt(t, e, n, i) {
            var r = -1,
                o = t.length;
            for (i && o && (n = t[++r]); ++r < o;) n = e(n, t[r], r, t);
            return n
        }

        function Kt(t, e) {
            for (var n = -1, i = t.length; ++n < i;)
                if (e(t[n], n, t)) return !0;
            return !1
        }

        function Jt(t, e, n, i) {
            return t !== b && tr.call(i, n) ? t : e
        }

        function Zt(t, e, n) {
            for (var i = -1, r = Wo(e), o = r.length; ++i < o;) {
                var s = r[i],
                    a = t[s],
                    l = n(a, e[s], s, t, e);
                (l === l ? l === a : a !== a) && (a !== b || s in t) || (t[s] = l)
            }
            return t
        }

        function te(t, e) {
            return null == e ? t : ne(e, Wo(e), t)
        }

        function ee(t, e) {
            for (var n = -1, i = null == t, r = !i && An(t), o = r ? t.length : 0, s = e.length, a = Mi(s); ++n < s;) {
                var l = e[n];
                a[n] = r ? jn(l, o) ? t[l] : b : i ? b : t[l]
            }
            return a
        }

        function ne(t, e, n) {
            n || (n = {});
            for (var i = -1, r = e.length; ++i < r;) {
                var o = e[i];
                n[o] = t[o]
            }
            return n
        }

        function ie(t, e, n) {
            var i = typeof t;
            return "function" == i ? e === b ? t : We(t, e, n) : null == t ? Di : "object" == i ? be(t) : e === b ? Wi(t) : xe(t, e)
        }

        function re(t, e, n, i, r, o, s) {
            var a;
            if (n && (a = r ? n(t, i, r) : n(t)), a !== b) return a;
            if (!gi(t)) return t;
            if (i = $o(t)) {
                if (a = Sn(t), !e) return qt(t, a)
            } else {
                var l = nr.call(t),
                    u = l == U;
                if (l != Y && l != M && (!u || r)) return Lt[l] ? En(t, l, e) : r ? t : {};
                if (a = Cn(u ? {} : t), !e) return te(a, t)
            }
            for (o || (o = []), s || (s = []), r = o.length; r--;)
                if (o[r] == t) return s[r];
            return o.push(t), s.push(a), (i ? Ft : pe)(t, function(i, r) {
                a[r] = re(i, e, n, r, t, o, s)
            }), a
        }

        function oe(t, e, n) {
            if ("function" != typeof t) throw new Qi(H);
            return dr(function() {
                t.apply(b, n)
            }, e)
        }

        function se(t, e) {
            var i = t ? t.length : 0,
                r = [];
            if (!i) return r;
            var o = -1,
                s = Tn(),
                a = s === n,
                l = a && e.length >= D && gr && cr ? new Mt(e) : null,
                u = e.length;
            l && (s = Rt, a = !1, e = l);
            t: for (; ++o < i;)
                if (l = t[o], a && l === l) {
                    for (var c = u; c--;)
                        if (e[c] === l) continue t;
                    r.push(l)
                } else 0 > s(e, l, 0) && r.push(l);
            return r
        }

        function ae(t, e) {
            var n = !0;
            return Lr(t, function(t, i, r) {
                return n = !!e(t, i, r)
            }), n
        }

        function le(t, e, n, i) {
            var r = i,
                o = r;
            return Lr(t, function(t, s, a) {
                s = +e(t, s, a), (n(s, r) || s === i && s === o) && (r = s, o = t)
            }), o
        }

        function ue(t, e) {
            var n = [];
            return Lr(t, function(t, i, r) {
                e(t, i, r) && n.push(t)
            }), n
        }

        function ce(t, e, n, i) {
            var r;
            return n(t, function(t, n, o) {
                return e(t, n, o) ? (r = i ? n : t, !1) : void 0
            }), r
        }

        function de(t, e, n, i) {
            i || (i = []);
            for (var r = -1, o = t.length; ++r < o;) {
                var s = t[r];
                p(s) && An(s) && (n || $o(s) || fi(s)) ? e ? de(s, e, n, i) : Qt(i, s) : n || (i[i.length] = s)
            }
            return i
        }

        function fe(t, e) {
            Ir(t, e, Ei)
        }

        function pe(t, e) {
            return Ir(t, e, Wo)
        }

        function he(t, e) {
            return Pr(t, e, Wo)
        }

        function ve(t, e) {
            for (var n = -1, i = e.length, r = -1, o = []; ++n < i;) {
                var s = e[n];
                vi(t[s]) && (o[++r] = s)
            }
            return o
        }

        function ge(t, e, n) {
            if (null != t) {
                n !== b && n in Mn(t) && (e = [n]), n = 0;
                for (var i = e.length; null != t && n < i;) t = t[e[n++]];
                return n && n == i ? t : b
            }
        }

        function ye(t, e, n, i, r, o) {
            if (t === e) t = !0;
            else if (null == t || null == e || !gi(t) && !p(e)) t = t !== t && e !== e;
            else t: {
                var s = ye,
                    a = $o(t),
                    l = $o(e),
                    u = R,
                    c = R;a || (u = nr.call(t), u == M ? u = Y : u != Y && (a = Ti(t))),
                l || (c = nr.call(e), c == M ? c = Y : c != Y && Ti(e));
                var d = u == Y,
                    l = c == Y,
                    c = u == c;
                if (!c || a || d) {
                    if (!i && (u = d && tr.call(t, "__wrapped__"), l = l && tr.call(e, "__wrapped__"), u || l)) {
                        t = s(u ? t.value() : t, l ? e.value() : e, n, i, r, o);
                        break t
                    }
                    if (c) {
                        for (r || (r = []), o || (o = []), u = r.length; u--;)
                            if (r[u] == t) {
                                t = o[u] == e;
                                break t
                            }
                        r.push(t), o.push(e), t = (a ? yn : wn)(t, e, s, n, i, r, o), r.pop(), o.pop()
                    } else t = !1
                } else t = mn(t, e, u)
            }
            return t
        }

        function me(t, e, n) {
            var i = e.length,
                r = i,
                o = !n;
            if (null == t) return !r;
            for (t = Mn(t); i--;) {
                var s = e[i];
                if (o && s[2] ? s[1] !== t[s[0]] : !(s[0] in t)) return !1
            }
            for (; ++i < r;) {
                var s = e[i],
                    a = s[0],
                    l = t[a],
                    u = s[1];
                if (o && s[2]) {
                    if (l === b && !(a in t)) return !1
                } else if (s = n ? n(l, u, a) : b, s === b ? !ye(u, l, n, !0) : !s) return !1
            }
            return !0
        }

        function we(t, e) {
            var n = -1,
                i = An(t) ? Mi(t.length) : [];
            return Lr(t, function(t, r, o) {
                i[++n] = e(t, r, o)
            }), i
        }

        function be(t) {
            var e = kn(t);
            if (1 == e.length && e[0][2]) {
                var n = e[0][0],
                    i = e[0][1];
                return function(t) {
                    return null != t && (t[n] === i && (i !== b || n in Mn(t)))
                }
            }
            return function(t) {
                return me(t, e)
            }
        }

        function xe(t, e) {
            var n = $o(t),
                i = zn(t) && e === e && !gi(e),
                r = t + "";
            return t = Rn(t),
                function(o) {
                    if (null == o) return !1;
                    var s = r;
                    if (o = Mn(o), !(!n && i || s in o)) {
                        if (null == (o = 1 == t.length ? o : ge(o, $e(t, 0, -1)))) return !1;
                        s = Yn(t), o = Mn(o)
                    }
                    return o[s] === e ? e !== b || s in o : ye(e, o[s], b, !0)
                }
        }

        function Te(t, e, n, i, r) {
            if (!gi(t)) return t;
            var o = An(e) && ($o(e) || Ti(e)),
                s = o ? b : Wo(e);
            return Ft(s || e, function(a, l) {
                if (s && (l = a, a = e[l]), p(a)) {
                    i || (i = []), r || (r = []);
                    t: {
                        for (var u = l, c = i, d = r, f = c.length, h = e[u]; f--;)
                            if (c[f] == h) {
                                t[u] = d[f];
                                break t
                            }
                        var f = t[u],
                            v = n ? n(f, h, u, t, e) : b,
                            g = v === b;g && (v = h, An(h) && ($o(h) || Ti(h)) ? v = $o(f) ? f : An(f) ? qt(f) : [] : wi(h) || fi(h) ? v = fi(f) ? Si(f) : wi(f) ? f : {} : g = !1),
                        c.push(h),
                        d.push(v),
                        g ? t[u] = Te(v, h, n, c, d) : (v === v ? v !== f : f === f) && (t[u] = v)
                    }
                } else u = t[l], c = n ? n(u, a, l, t, e) : b, (d = c === b) && (c = a), c === b && (!o || l in t) || !d && (c === c ? c === u : u !== u) || (t[l] = c)
            }), t
        }

        function ke(t) {
            return function(e) {
                return null == e ? b : e[t]
            }
        }

        function _e(t) {
            var e = t + "";
            return t = Rn(t),
                function(n) {
                    return ge(n, t, e)
                }
        }

        function Se(t, e) {
            for (var n = t ? e.length : 0; n--;) {
                var i = e[n];
                if (i != r && jn(i)) {
                    var r = i;
                    fr.call(t, i, 1)
                }
            }
        }

        function Ce(t, e) {
            return t + yr(Sr() * (e - t + 1))
        }

        function Ee(t, e, n, i, r) {
            return r(t, function(t, r, o) {
                n = i ? (i = !1, t) : e(n, t, r, o)
            }), n
        }

        function $e(t, e, n) {
            var i = -1,
                r = t.length;
            for (e = null == e ? 0 : +e || 0, 0 > e && (e = -e > r ? 0 : r + e), n = n === b || n > r ? r : +n || 0, 0 > n && (n += r), r = e > n ? 0 : n - e >>> 0, e >>>= 0, n = Mi(r); ++i < r;) n[i] = t[i + e];
            return n
        }

        function Ae(t, e) {
            var n;
            return Lr(t, function(t, i, r) {
                return !(n = e(t, i, r))
            }), !!n
        }

        function je(t, e) {
            var n = t.length;
            for (t.sort(e); n--;) t[n] = t[n].c;
            return t
        }

        function Oe(e, n, i) {
            var r = bn(),
                o = -1;
            return n = Vt(n, function(t) {
                return r(t)
            }), e = we(e, function(t) {
                return {
                    a: Vt(n, function(e) {
                        return e(t)
                    }),
                    b: ++o,
                    c: t
                }
            }), je(e, function(e, n) {
                var r;
                t: {
                    for (var o = -1, s = e.a, a = n.a, l = s.length, u = i.length; ++o < l;)
                        if (r = t(s[o], a[o])) {
                            if (o >= u) break t;
                            o = i[o], r *= "asc" === o || !0 === o ? 1 : -1;
                            break t
                        }
                    r = e.b - n.b
                }
                return r
            })
        }

        function ze(t, e) {
            var n = 0;
            return Lr(t, function(t, i, r) {
                n += +e(t, i, r) || 0
            }), n
        }

        function Ne(t, e) {
            var i = -1,
                r = Tn(),
                o = t.length,
                s = r === n,
                a = s && o >= D,
                l = a && gr && cr ? new Mt(void 0) : null,
                u = [];
            l ? (r = Rt, s = !1) : (a = !1, l = e ? [] : u);
            t: for (; ++i < o;) {
                var c = t[i],
                    d = e ? e(c, i, t) : c;
                if (s && c === c) {
                    for (var f = l.length; f--;)
                        if (l[f] === d) continue t;
                    e && l.push(d), u.push(c)
                } else 0 > r(l, d, 0) && ((e || a) && l.push(d), u.push(c))
            }
            return u
        }

        function Le(t, e) {
            for (var n = -1, i = e.length, r = Mi(i); ++n < i;) r[n] = t[e[n]];
            return r
        }

        function De(t, e, n, i) {
            for (var r = t.length, o = i ? r : -1;
                (i ? o-- : ++o < r) && e(t[o], o, t););
            return n ? $e(t, i ? 0 : o, i ? o + 1 : r) : $e(t, i ? o + 1 : 0, i ? r : o)
        }

        function Ie(t, e) {
            var n = t;
            n instanceof Ht && (n = n.value());
            for (var i = -1, r = e.length; ++i < r;) var o = e[i],
                n = o.func.apply(o.thisArg, Qt([n], o.args));
            return n
        }

        function Pe(t, e, n) {
            var i = 0,
                r = t ? t.length : i;
            if ("number" == typeof e && e === e && r <= Ar) {
                for (; i < r;) {
                    var o = i + r >>> 1,
                        s = t[o];
                    (n ? s <= e : s < e) && null !== s ? i = o + 1 : r = o
                }
                return r
            }
            return He(t, e, Di, n)
        }

        function He(t, e, n, i) {
            e = n(e);
            for (var r = 0, o = t ? t.length : 0, s = e !== e, a = null === e, l = e === b; r < o;) {
                var u = yr((r + o) / 2),
                    c = n(t[u]),
                    d = c !== b,
                    f = c === c;
                (s ? f || i : a ? f && d && (i || null != c) : l ? f && (i || d) : null == c ? 0 : i ? c <= e : c < e) ? r = u + 1: o = u
            }
            return Tr(o, $r)
        }

        function We(t, e, n) {
            if ("function" != typeof t) return Di;
            if (e === b) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 3:
                    return function(n, i, r) {
                        return t.call(e, n, i, r)
                    };
                case 4:
                    return function(n, i, r, o) {
                        return t.call(e, n, i, r, o)
                    };
                case 5:
                    return function(n, i, r, o, s) {
                        return t.call(e, n, i, r, o, s)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }

        function Me(t) {
            var e = new or(t.byteLength);
            return new pr(e).set(new pr(t)), e
        }

        function Re(t, e, n) {
            for (var i = n.length, r = -1, o = xr(t.length - i, 0), s = -1, a = e.length, l = Mi(a + o); ++s < a;) l[s] = e[s];
            for (; ++r < i;) l[n[r]] = t[r];
            for (; o--;) l[s++] = t[r++];
            return l
        }

        function qe(t, e, n) {
            for (var i = -1, r = n.length, o = -1, s = xr(t.length - r, 0), a = -1, l = e.length, u = Mi(s + l); ++o < s;) u[o] = t[o];
            for (s = o; ++a < l;) u[s + a] = e[a];
            for (; ++i < r;) u[s + n[i]] = t[o++];
            return u
        }

        function Fe(t, e) {
            return function(n, i, r) {
                var o = e ? e() : {};
                if (i = bn(i, r, 3), $o(n)) {
                    r = -1;
                    for (var s = n.length; ++r < s;) {
                        var a = n[r];
                        t(o, a, i(a, r, n), n)
                    }
                } else Lr(n, function(e, n, r) {
                    t(o, e, i(e, n, r), r)
                });
                return o
            }
        }

        function Be(t) {
            return ci(function(e, n) {
                var i = -1,
                    r = null == e ? 0 : n.length,
                    o = 2 < r ? n[r - 2] : b,
                    s = 2 < r ? n[2] : b,
                    a = 1 < r ? n[r - 1] : b;
                for ("function" == typeof o ? (o = We(o, a, 5), r -= 2) : (o = "function" == typeof a ? a : b, r -= o ? 1 : 0), s && On(n[0], n[1], s) && (o = 3 > r ? b : o, r = 1); ++i < r;)(s = n[i]) && t(e, s, o);
                return e
            })
        }

        function Ue(t, e) {
            return function(n, i) {
                var r = n ? Mr(n) : 0;
                if (!Ln(r)) return t(n, i);
                for (var o = e ? r : -1, s = Mn(n);
                    (e ? o-- : ++o < r) && !1 !== i(s[o], o, s););
                return n
            }
        }

        function Xe(t) {
            return function(e, n, i) {
                var r = Mn(e);
                i = i(e);
                for (var o = i.length, s = t ? o : -1; t ? s-- : ++s < o;) {
                    var a = i[s];
                    if (!1 === n(r[a], a, r)) break
                }
                return e
            }
        }

        function Ye(t, e) {
            function n() {
                return (this && this !== Xt && this instanceof n ? i : t).apply(e, arguments)
            }
            var i = Qe(t);
            return n
        }

        function Ve(t) {
            return function(e) {
                var n = -1;
                e = Ni(ji(e));
                for (var i = e.length, r = ""; ++n < i;) r = t(r, e[n], n);
                return r
            }
        }

        function Qe(t) {
            return function() {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                    case 5:
                        return new t(e[0], e[1], e[2], e[3], e[4]);
                    case 6:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                    case 7:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                }
                var n = Nr(t.prototype),
                    e = t.apply(n, e);
                return gi(e) ? e : n
            }
        }

        function Ge(t) {
            function e(n, i, r) {
                return r && On(n, i, r) && (i = b), n = gn(n, t, b, b, b, b, b, i), n.placeholder = e.placeholder, n
            }
            return e
        }

        function Ke(t, e) {
            return ci(function(n) {
                var i = n[0];
                return null == i ? i : (n.push(e), t.apply(b, n))
            })
        }

        function Je(t, e) {
            return function(n, i, r) {
                if (r && On(n, i, r) && (i = b), i = bn(i, r, 3), 1 == i.length) {
                    r = n = $o(n) ? n : Wn(n);
                    for (var o = i, s = -1, a = r.length, l = e, u = l; ++s < a;) {
                        var c = r[s],
                            d = +o(c);
                        t(d, l) && (l = d, u = c)
                    }
                    if (r = u, !n.length || r !== e) return r
                }
                return le(n, i, t, e)
            }
        }

        function Ze(t, n) {
            return function(i, r, o) {
                return r = bn(r, o, 3), $o(i) ? (r = e(i, r, n), -1 < r ? i[r] : b) : ce(i, r, t)
            }
        }

        function tn(t) {
            return function(n, i, r) {
                return n && n.length ? (i = bn(i, r, 3), e(n, i, t)) : -1
            }
        }

        function en(t) {
            return function(e, n, i) {
                return n = bn(n, i, 3), ce(e, n, t, !0)
            }
        }

        function nn(t) {
            return function() {
                for (var e, n = arguments.length, i = t ? n : -1, r = 0, o = Mi(n); t ? i-- : ++i < n;) {
                    var s = o[r++] = arguments[i];
                    if ("function" != typeof s) throw new Qi(H);
                    !e && Pt.prototype.thru && "wrapper" == xn(s) && (e = new Pt([], !0))
                }
                for (i = e ? -1 : n; ++i < n;) {
                    var s = o[i],
                        r = xn(s),
                        a = "wrapper" == r ? Wr(s) : b;
                    e = a && Nn(a[0]) && a[1] == (A | S | E | j) && !a[4].length && 1 == a[9] ? e[xn(a[0])].apply(e, a[3]) : 1 == s.length && Nn(s) ? e[r]() : e.thru(s)
                }
                return function() {
                    var t = arguments,
                        i = t[0];
                    if (e && 1 == t.length && $o(i) && i.length >= D) return e.plant(i).value();
                    for (var r = 0, t = n ? o[r].apply(this, t) : i; ++r < n;) t = o[r].call(this, t);
                    return t
                }
            }
        }

        function rn(t, e) {
            return function(n, i, r) {
                return "function" == typeof i && r === b && $o(n) ? t(n, i) : e(n, We(i, r, 3))
            }
        }

        function on(t) {
            return function(e, n, i) {
                return ("function" != typeof n || i !== b) && (n = We(n, i, 3)), t(e, n, Ei)
            }
        }

        function sn(t) {
            return function(e, n, i) {
                return ("function" != typeof n || i !== b) && (n = We(n, i, 3)), t(e, n)
            }
        }

        function an(t) {
            return function(e, n, i) {
                var r = {};
                return n = bn(n, i, 3), pe(e, function(e, i, o) {
                    o = n(e, i, o), i = t ? o : i, e = t ? e : o, r[i] = e
                }), r
            }
        }

        function ln(t) {
            return function(e, n, i) {
                return e = r(e), (t ? e : "") + fn(e, n, i) + (t ? "" : e)
            }
        }

        function un(t) {
            var e = ci(function(n, i) {
                var r = v(i, e.placeholder);
                return gn(n, t, b, i, r)
            });
            return e
        }

        function cn(t, e) {
            return function(n, i, r, o) {
                var s = 3 > arguments.length;
                return "function" == typeof i && o === b && $o(n) ? t(n, i, r, s) : Ee(n, bn(i, o, 4), r, s, e)
            }
        }

        function dn(t, e, n, i, r, o, s, a, l, u) {
            function c() {
                for (var w = arguments.length, x = w, _ = Mi(w); x--;) _[x] = arguments[x];
                if (i && (_ = Re(_, i, r)), o && (_ = qe(_, o, s)), h || y) {
                    var x = c.placeholder,
                        S = v(_, x),
                        w = w - S.length;
                    if (w < u) {
                        var C = a ? qt(a) : b,
                            w = xr(u - w, 0),
                            A = h ? S : b,
                            S = h ? b : S,
                            j = h ? _ : b,
                            _ = h ? b : _;
                        return e |= h ? E : $, e &= ~(h ? $ : E), g || (e &= ~(T | k)), _ = [t, e, n, j, A, _, S, C, l, w], C = dn.apply(b, _), Nn(t) && Rr(C, _), C.placeholder = x, C
                    }
                }
                if (x = f ? n : this, C = p ? x[t] : t, a)
                    for (w = _.length, A = Tr(a.length, w), S = qt(_); A--;) j = a[A], _[A] = jn(j, w) ? S[j] : b;
                return d && l < _.length && (_.length = l), this && this !== Xt && this instanceof c && (C = m || Qe(t)), C.apply(x, _)
            }
            var d = e & A,
                f = e & T,
                p = e & k,
                h = e & S,
                g = e & _,
                y = e & C,
                m = p ? b : Qe(t);
            return c
        }

        function fn(t, e, n) {
            return t = t.length, e = +e, t < e && wr(e) ? (e -= t, n = null == n ? " " : n + "", Oi(n, vr(e / n.length)).slice(0, e)) : ""
        }

        function pn(t, e, n, i) {
            function r() {
                for (var e = -1, a = arguments.length, l = -1, u = i.length, c = Mi(u + a); ++l < u;) c[l] = i[l];
                for (; a--;) c[l++] = arguments[++e];
                return (this && this !== Xt && this instanceof r ? s : t).apply(o ? n : this, c)
            }
            var o = e & T,
                s = Qe(t);
            return r
        }

        function hn(t) {
            var e = Bi[t];
            return function(t, n) {
                return (n = n === b ? 0 : +n || 0) ? (n = lr(10, n), e(t * n) / n) : e(t)
            }
        }

        function vn(t) {
            return function(e, n, i, r) {
                var o = bn(i);
                return null == i && o === ie ? Pe(e, n, t) : He(e, n, o(i, r, 1), t)
            }
        }

        function gn(t, e, n, i, r, o, s, a) {
            var l = e & k;
            if (!l && "function" != typeof t) throw new Qi(H);
            var u = i ? i.length : 0;
            if (u || (e &= ~(E | $), i = r = b), u -= r ? r.length : 0, e & $) {
                var c = i,
                    d = r;
                i = r = b
            }
            var f = l ? b : Wr(t);
            return n = [t, e, n, i, r, c, d, o, s, a], f && (i = n[1], e = f[1], a = i | e, r = e == A && i == S || e == A && i == j && n[7].length <= f[8] || e == (A | j) && i == S, (a < A || r) && (e & T && (n[2] = f[2], a |= i & T ? 0 : _), (i = f[3]) && (r = n[3], n[3] = r ? Re(r, i, f[4]) : qt(i), n[4] = r ? v(n[3], W) : qt(f[4])), (i = f[5]) && (r = n[5], n[5] = r ? qe(r, i, f[6]) : qt(i), n[6] = r ? v(n[5], W) : qt(f[6])), (i = f[7]) && (n[7] = qt(i)), e & A && (n[8] = null == n[8] ? f[8] : Tr(n[8], f[8])), null == n[9] && (n[9] = f[9]), n[0] = f[0], n[1] = a), e = n[1], a = n[9]), n[9] = null == a ? l ? 0 : t.length : xr(a - u, 0) || 0, (f ? Hr : Rr)(e == T ? Ye(n[0], n[2]) : e != E && e != (T | E) || n[4].length ? dn.apply(b, n) : pn.apply(b, n), n)
        }

        function yn(t, e, n, i, r, o, s) {
            var a = -1,
                l = t.length,
                u = e.length;
            if (l != u && (!r || u <= l)) return !1;
            for (; ++a < l;) {
                var c = t[a],
                    u = e[a],
                    d = i ? i(r ? u : c, r ? c : u, a) : b;
                if (d !== b) {
                    if (d) continue;
                    return !1
                }
                if (r) {
                    if (!Kt(e, function(t) {
                            return c === t || n(c, t, i, r, o, s)
                        })) return !1
                } else if (c !== u && !n(c, u, i, r, o, s)) return !1
            }
            return !0
        }

        function mn(t, e, n) {
            switch (n) {
                case q:
                case F:
                    return +t == +e;
                case B:
                    return t.name == e.name && t.message == e.message;
                case X:
                    return t != +t ? e != +e : t == +e;
                case V:
                case Q:
                    return t == e + ""
            }
            return !1
        }

        function wn(t, e, n, i, r, o, s) {
            var a = Wo(t),
                l = a.length,
                u = Wo(e).length;
            if (l != u && !r) return !1;
            for (u = l; u--;) {
                var c = a[u];
                if (!(r ? c in e : tr.call(e, c))) return !1
            }
            for (var d = r; ++u < l;) {
                var c = a[u],
                    f = t[c],
                    p = e[c],
                    h = i ? i(r ? p : f, r ? f : p, c) : b;
                if (h === b ? !n(f, p, i, r, o, s) : !h) return !1;
                d || (d = "constructor" == c)
            }
            return !(!d && (n = t.constructor, i = e.constructor, n != i && "constructor" in t && "constructor" in e && !("function" == typeof n && n instanceof n && "function" == typeof i && i instanceof i)))
        }

        function bn(t, e, n) {
            var i = Dt.callback || Li,
                i = i === Li ? ie : i;
            return n ? i(t, e, n) : i
        }

        function xn(t) {
            for (var e = t.name + "", n = zr[e], i = n ? n.length : 0; i--;) {
                var r = n[i],
                    o = r.func;
                if (null == o || o == t) return r.name
            }
            return e
        }

        function Tn(t, e, i) {
            var r = Dt.indexOf || Xn,
                r = r === Xn ? n : r;
            return t ? r(t, e, i) : r
        }

        function kn(t) {
            t = $i(t);
            for (var e = t.length; e--;) {
                var n = t[e][1];
                t[e][2] = n === n && !gi(n)
            }
            return t
        }

        function _n(t, e) {
            var n = null == t ? b : t[e];
            return yi(n) ? n : b
        }

        function Sn(t) {
            var e = t.length,
                n = new t.constructor(e);
            return e && "string" == typeof t[0] && tr.call(t, "index") && (n.index = t.index, n.input = t.input), n
        }

        function Cn(t) {
            return t = t.constructor, "function" == typeof t && t instanceof t || (t = Xi), new t
        }

        function En(t, e, n) {
            var i = t.constructor;
            switch (e) {
                case G:
                    return Me(t);
                case q:
                case F:
                    return new i(+t);
                case K:
                case J:
                case Z:
                case tt:
                case et:
                case nt:
                case it:
                case rt:
                case ot:
                    return e = t.buffer, new i(n ? Me(e) : e, t.byteOffset, t.length);
                case X:
                case Q:
                    return new i(t);
                case V:
                    var r = new i(t.source, _t.exec(t));
                    r.lastIndex = t.lastIndex
            }
            return r
        }

        function $n(t, e, n) {
            return null == t || zn(e, t) || (e = Rn(e), t = 1 == e.length ? t : ge(t, $e(e, 0, -1)), e = Yn(e)), e = null == t ? t : t[e], null == e ? b : e.apply(t, n)
        }

        function An(t) {
            return null != t && Ln(Mr(t))
        }

        function jn(t, e) {
            return t = "number" == typeof t || Et.test(t) ? +t : -1, e = null == e ? jr : e, -1 < t && 0 == t % 1 && t < e
        }

        function On(t, e, n) {
            if (!gi(n)) return !1;
            var i = typeof e;
            return !!("number" == i ? An(n) && jn(e, n.length) : "string" == i && e in n) && (e = n[e], t === t ? t === e : e !== e)
        }

        function zn(t, e) {
            var n = typeof t;
            return !!("string" == n && yt.test(t) || "number" == n) || !$o(t) && (!gt.test(t) || null != e && t in Mn(e))
        }

        function Nn(t) {
            var e = xn(t),
                n = Dt[e];
            return "function" == typeof n && e in Ht.prototype && (t === n || !!(e = Wr(n)) && t === e[0])
        }

        function Ln(t) {
            return "number" == typeof t && -1 < t && 0 == t % 1 && t <= jr
        }

        function Dn(t, e) {
            return t === b ? e : Ao(t, e, Dn)
        }

        function In(t, e) {
            t = Mn(t);
            for (var n = -1, i = e.length, r = {}; ++n < i;) {
                var o = e[n];
                o in t && (r[o] = t[o])
            }
            return r
        }

        function Pn(t, e) {
            var n = {};
            return fe(t, function(t, i, r) {
                e(t, i, r) && (n[i] = t)
            }), n
        }

        function Hn(t) {
            for (var e = Ei(t), n = e.length, i = n && t.length, r = !!i && Ln(i) && ($o(t) || fi(t)), o = -1, s = []; ++o < n;) {
                var a = e[o];
                (r && jn(a, i) || tr.call(t, a)) && s.push(a)
            }
            return s
        }

        function Wn(t) {
            return null == t ? [] : An(t) ? gi(t) ? t : Xi(t) : Ai(t)
        }

        function Mn(t) {
            return gi(t) ? t : Xi(t)
        }

        function Rn(t) {
            if ($o(t)) return t;
            var e = [];
            return r(t).replace(mt, function(t, n, i, r) {
                e.push(i ? r.replace(Tt, "$1") : n || t)
            }), e
        }

        function qn(t) {
            return t instanceof Ht ? t.clone() : new Pt(t.__wrapped__, t.__chain__, qt(t.__actions__))
        }

        function Fn(t, e, n) {
            return t && t.length ? ((n ? On(t, e, n) : null == e) && (e = 1), $e(t, 0 > e ? 0 : e)) : []
        }

        function Bn(t, e, n) {
            var i = t ? t.length : 0;
            return i ? ((n ? On(t, e, n) : null == e) && (e = 1), e = i - (+e || 0), $e(t, 0, 0 > e ? 0 : e)) : []
        }

        function Un(t) {
            return t ? t[0] : b
        }

        function Xn(t, e, i) {
            var r = t ? t.length : 0;
            if (!r) return -1;
            if ("number" == typeof i) i = 0 > i ? xr(r + i, 0) : i;
            else if (i) return i = Pe(t, e), i < r && (e === e ? e === t[i] : t[i] !== t[i]) ? i : -1;
            return n(t, e, i || 0)
        }

        function Yn(t) {
            var e = t ? t.length : 0;
            return e ? t[e - 1] : b
        }

        function Vn(t) {
            return Fn(t, 1)
        }

        function Qn(t, e, i, r) {
            if (!t || !t.length) return [];
            null != e && "boolean" != typeof e && (r = i, i = On(t, e, r) ? b : e, e = !1);
            var o = bn();
            if ((null != i || o !== ie) && (i = o(i, r, 3)), e && Tn() === n) {
                e = i;
                var s;
                i = -1, r = t.length;
                for (var o = -1, a = []; ++i < r;) {
                    var l = t[i],
                        u = e ? e(l, i, t) : l;
                    i && s === u || (s = u, a[++o] = l)
                }
                t = a
            } else t = Ne(t, i);
            return t
        }

        function Gn(t) {
            if (!t || !t.length) return [];
            var e = -1,
                n = 0;
            t = Ut(t, function(t) {
                return An(t) ? (n = xr(t.length, n), !0) : void 0
            });
            for (var i = Mi(n); ++e < n;) i[e] = Vt(t, ke(e));
            return i
        }

        function Kn(t, e, n) {
            return t && t.length ? (t = Gn(t), null == e ? t : (e = We(e, n, 4), Vt(t, function(t) {
                return Gt(t, e, b, !0)
            }))) : []
        }

        function Jn(t, e) {
            var n = -1,
                i = t ? t.length : 0,
                r = {};
            for (!i || e || $o(t[0]) || (e = []); ++n < i;) {
                var o = t[n];
                e ? r[o] = e[n] : o && (r[o[0]] = o[1])
            }
            return r
        }

        function Zn(t) {
            return t = Dt(t), t.__chain__ = !0, t
        }

        function ti(t, e, n) {
            return e.call(n, t)
        }

        function ei(t, e, n) {
            var i = $o(t) ? Bt : ae;
            return n && On(t, e, n) && (e = b), ("function" != typeof e || n !== b) && (e = bn(e, n, 3)), i(t, e)
        }

        function ni(t, e, n) {
            var i = $o(t) ? Ut : ue;
            return e = bn(e, n, 3), i(t, e)
        }

        function ii(t, e, n, i) {
            var r = t ? Mr(t) : 0;
            return Ln(r) || (t = Ai(t), r = t.length), n = "number" != typeof n || i && On(e, n, i) ? 0 : 0 > n ? xr(r + n, 0) : n || 0, "string" == typeof t || !$o(t) && xi(t) ? n <= r && -1 < t.indexOf(e, n) : !!r && -1 < Tn(t, e, n)
        }

        function ri(t, e, n) {
            var i = $o(t) ? Vt : we;
            return e = bn(e, n, 3), i(t, e)
        }

        function oi(t, e, n) {
            if (n ? On(t, e, n) : null == e) {
                t = Wn(t);
                var i = t.length;
                return 0 < i ? t[Ce(0, i - 1)] : b
            }
            n = -1, t = _i(t);
            var i = t.length,
                r = i - 1;
            for (e = Tr(0 > e ? 0 : +e || 0, i); ++n < e;) {
                var i = Ce(n, r),
                    o = t[i];
                t[i] = t[n], t[n] = o
            }
            return t.length = e, t
        }

        function si(t, e, n) {
            var i = $o(t) ? Kt : Ae;
            return n && On(t, e, n) && (e = b), ("function" != typeof e || n !== b) && (e = bn(e, n, 3)), i(t, e)
        }

        function ai(t, e) {
            var n;
            if ("function" != typeof e) {
                if ("function" != typeof t) throw new Qi(H);
                var i = t;
                t = e, e = i
            }
            return function() {
                return 0 < --t && (n = e.apply(this, arguments)), 1 >= t && (e = b), n
            }
        }

        function li(t, e, n) {
            function i(e, n) {
                n && sr(n), l = f = p = b, e && (h = ho(), u = t.apply(d, a), f || l || (a = d = b))
            }

            function r() {
                var t = e - (ho() - c);
                0 >= t || t > e ? i(p, l) : f = dr(r, t)
            }

            function o() {
                i(g, f)
            }

            function s() {
                if (a = arguments, c = ho(), d = this, p = g && (f || !y), !1 === v) var n = y && !f;
                else {
                    l || y || (h = c);
                    var i = v - (c - h),
                        s = 0 >= i || i > v;
                    s ? (l && (l = sr(l)), h = c, u = t.apply(d, a)) : l || (l = dr(o, i))
                }
                return s && f ? f = sr(f) : f || e === v || (f = dr(r, e)), n && (s = !0, u = t.apply(d, a)), !s || f || l || (a = d = b), u
            }
            var a, l, u, c, d, f, p, h = 0,
                v = !1,
                g = !0;
            if ("function" != typeof t) throw new Qi(H);
            if (e = 0 > e ? 0 : +e || 0, !0 === n) var y = !0,
                g = !1;
            else gi(n) && (y = !!n.leading, v = "maxWait" in n && xr(+n.maxWait || 0, e), g = "trailing" in n ? !!n.trailing : g);
            return s.cancel = function() {
                f && sr(f), l && sr(l), h = 0, l = f = p = b
            }, s
        }

        function ui(t, e) {
            function n() {
                var i = arguments,
                    r = e ? e.apply(this, i) : i[0],
                    o = n.cache;
                return o.has(r) ? o.get(r) : (i = t.apply(this, i), n.cache = o.set(r, i), i)
            }
            if ("function" != typeof t || e && "function" != typeof e) throw new Qi(H);
            return n.cache = new ui.Cache, n
        }

        function ci(t, e) {
            if ("function" != typeof t) throw new Qi(H);
            return e = xr(e === b ? t.length - 1 : +e || 0, 0),
                function() {
                    for (var n = arguments, i = -1, r = xr(n.length - e, 0), o = Mi(r); ++i < r;) o[i] = n[e + i];
                    switch (e) {
                        case 0:
                            return t.call(this, o);
                        case 1:
                            return t.call(this, n[0], o);
                        case 2:
                            return t.call(this, n[0], n[1], o)
                    }
                    for (r = Mi(e + 1), i = -1; ++i < e;) r[i] = n[i];
                    return r[e] = o, t.apply(this, r)
                }
        }

        function di(t, e) {
            return t > e
        }

        function fi(t) {
            return p(t) && An(t) && tr.call(t, "callee") && !ur.call(t, "callee")
        }

        function pi(t, e, n, i) {
            return i = (n = "function" == typeof n ? We(n, i, 3) : b) ? n(t, e) : b, i === b ? ye(t, e, n) : !!i
        }

        function hi(t) {
            return p(t) && "string" == typeof t.message && nr.call(t) == B
        }

        function vi(t) {
            return gi(t) && nr.call(t) == U
        }

        function gi(t) {
            var e = typeof t;
            return !!t && ("object" == e || "function" == e)
        }

        function yi(t) {
            return null != t && (vi(t) ? rr.test(Zi.call(t)) : p(t) && Ct.test(t))
        }

        function mi(t) {
            return "number" == typeof t || p(t) && nr.call(t) == X
        }

        function wi(t) {
            var e;
            if (!p(t) || nr.call(t) != Y || fi(t) || !(tr.call(t, "constructor") || "function" != typeof(e = t.constructor) || e instanceof e)) return !1;
            var n;
            return fe(t, function(t, e) {
                n = e
            }), n === b || tr.call(t, n)
        }

        function bi(t) {
            return gi(t) && nr.call(t) == V
        }

        function xi(t) {
            return "string" == typeof t || p(t) && nr.call(t) == Q
        }

        function Ti(t) {
            return p(t) && Ln(t.length) && !!Nt[nr.call(t)]
        }

        function ki(t, e) {
            return t < e
        }

        function _i(t) {
            var e = t ? Mr(t) : 0;
            return Ln(e) ? e ? qt(t) : [] : Ai(t)
        }

        function Si(t) {
            return ne(t, Ei(t))
        }

        function Ci(t) {
            return ve(t, Ei(t))
        }

        function Ei(t) {
            if (null == t) return [];
            gi(t) || (t = Xi(t));
            for (var e = t.length, e = e && Ln(e) && ($o(t) || fi(t)) && e || 0, n = t.constructor, i = -1, n = "function" == typeof n && n.prototype === t, r = Mi(e), o = 0 < e; ++i < e;) r[i] = i + "";
            for (var s in t) o && jn(s, e) || "constructor" == s && (n || !tr.call(t, s)) || r.push(s);
            return r
        }

        function $i(t) {
            t = Mn(t);
            for (var e = -1, n = Wo(t), i = n.length, r = Mi(i); ++e < i;) {
                var o = n[e];
                r[e] = [o, t[o]]
            }
            return r
        }

        function Ai(t) {
            return Le(t, Wo(t))
        }

        function ji(t) {
            return (t = r(t)) && t.replace($t, l).replace(xt, "")
        }

        function Oi(t, e) {
            var n = "";
            if (t = r(t), 1 > (e = +e) || !t || !wr(e)) return n;
            do {
                e % 2 && (n += t), e = yr(e / 2), t += t
            } while (e);
            return n
        }

        function zi(t, e, n) {
            var i = t;
            return (t = r(t)) ? (n ? On(i, e, n) : null == e) ? t.slice(g(t), y(t) + 1) : (e += "", t.slice(o(t, e), s(t, e) + 1)) : t
        }

        function Ni(t, e, n) {
            return n && On(t, e, n) && (e = b), t = r(t), t.match(e || Ot) || []
        }

        function Li(t, e, n) {
            return n && On(t, e, n) && (e = b), p(t) ? Ii(t) : ie(t, e)
        }

        function Di(t) {
            return t
        }

        function Ii(t) {
            return be(re(t, !0))
        }

        function Pi(t, e, n) {
            if (null == n) {
                var i = gi(e),
                    r = i ? Wo(e) : b;
                ((r = r && r.length ? ve(e, r) : b) ? r.length : i) || (r = !1, n = e, e = t, t = this)
            }
            r || (r = ve(e, Wo(e)));
            var o = !0,
                i = -1,
                s = vi(t),
                a = r.length;
            !1 === n ? o = !1 : gi(n) && "chain" in n && (o = n.chain);
            for (; ++i < a;) {
                n = r[i];
                var l = e[n];
                t[n] = l, s && (t.prototype[n] = function(e) {
                    return function() {
                        var n = this.__chain__;
                        if (o || n) {
                            var i = t(this.__wrapped__);
                            return (i.__actions__ = qt(this.__actions__)).push({
                                func: e,
                                args: arguments,
                                thisArg: t
                            }), i.__chain__ = n, i
                        }
                        return e.apply(t, Qt([this.value()], arguments))
                    }
                }(l))
            }
            return t
        }

        function Hi() {}

        function Wi(t) {
            return zn(t) ? ke(t) : _e(t)
        }
        h = h ? Yt.defaults(Xt.Object(), h, Yt.pick(Xt, zt)) : Xt;
        var Mi = h.Array,
            Ri = h.Date,
            qi = h.Error,
            Fi = h.Function,
            Bi = h.Math,
            Ui = h.Number,
            Xi = h.Object,
            Yi = h.RegExp,
            Vi = h.String,
            Qi = h.TypeError,
            Gi = Mi.prototype,
            Ki = Xi.prototype,
            Ji = Vi.prototype,
            Zi = Fi.prototype.toString,
            tr = Ki.hasOwnProperty,
            er = 0,
            nr = Ki.toString,
            ir = Xt._,
            rr = Yi("^" + Zi.call(tr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            or = h.ArrayBuffer,
            sr = h.clearTimeout,
            ar = h.parseFloat,
            lr = Bi.pow,
            ur = Ki.propertyIsEnumerable,
            cr = _n(h, "Set"),
            dr = h.setTimeout,
            fr = Gi.splice,
            pr = h.Uint8Array,
            hr = _n(h, "WeakMap"),
            vr = Bi.ceil,
            gr = _n(Xi, "create"),
            yr = Bi.floor,
            mr = _n(Mi, "isArray"),
            wr = h.isFinite,
            br = _n(Xi, "keys"),
            xr = Bi.max,
            Tr = Bi.min,
            kr = _n(Ri, "now"),
            _r = h.parseInt,
            Sr = Bi.random,
            Cr = Ui.NEGATIVE_INFINITY,
            Er = Ui.POSITIVE_INFINITY,
            $r = 4294967294,
            Ar = 2147483647,
            jr = 9007199254740991,
            Or = hr && new hr,
            zr = {};
        Dt.support = {}, Dt.templateSettings = {
            escape: pt,
            evaluate: ht,
            interpolate: vt,
            variable: "",
            imports: {
                _: Dt
            }
        };
        var Nr = function() {
                function t() {}
                return function(e) {
                    if (gi(e)) {
                        t.prototype = e;
                        var n = new t;
                        t.prototype = b
                    }
                    return n || {}
                }
            }(),
            Lr = Ue(pe),
            Dr = Ue(he, !0),
            Ir = Xe(),
            Pr = Xe(!0),
            Hr = Or ? function(t, e) {
                return Or.set(t, e), t
            } : Di,
            Wr = Or ? function(t) {
                return Or.get(t)
            } : Hi,
            Mr = ke("length"),
            Rr = function() {
                var t = 0,
                    e = 0;
                return function(n, i) {
                    var r = ho(),
                        o = L - (r - e);
                    if (e = r, 0 < o) {
                        if (++t >= N) return n
                    } else t = 0;
                    return Hr(n, i)
                }
            }(),
            qr = ci(function(t, e) {
                return p(t) && An(t) ? se(t, de(e, !1, !0)) : []
            }),
            Fr = tn(),
            Br = tn(!0),
            Ur = ci(function(t) {
                for (var e = t.length, i = e, r = Mi(c), o = Tn(), s = o === n, a = []; i--;) {
                    var l = t[i] = An(l = t[i]) ? l : [];
                    r[i] = s && 120 <= l.length && gr && cr ? new Mt(i && l) : null
                }
                var s = t[0],
                    u = -1,
                    c = s ? s.length : 0,
                    d = r[0];
                t: for (; ++u < c;)
                    if (l = s[u], 0 > (d ? Rt(d, l) : o(a, l, 0))) {
                        for (i = e; --i;) {
                            var f = r[i];
                            if (0 > (f ? Rt(f, l) : o(t[i], l, 0))) continue t
                        }
                        d && d.push(l), a.push(l)
                    }
                return a
            }),
            Xr = ci(function(e, n) {
                n = de(n);
                var i = ee(e, n);
                return Se(e, n.sort(t)), i
            }),
            Yr = vn(),
            Vr = vn(!0),
            Qr = ci(function(t) {
                return Ne(de(t, !1, !0))
            }),
            Gr = ci(function(t, e) {
                return An(t) ? se(t, e) : []
            }),
            Kr = ci(Gn),
            Jr = ci(function(t) {
                var e = t.length,
                    n = 2 < e ? t[e - 2] : b,
                    i = 1 < e ? t[e - 1] : b;
                return 2 < e && "function" == typeof n ? e -= 2 : (n = 1 < e && "function" == typeof i ? (--e, i) : b, i = b), t.length = e, Kn(t, n, i)
            }),
            Zr = ci(function(t) {
                return t = de(t), this.thru(function(e) {
                    e = $o(e) ? e : [Mn(e)];
                    for (var n = t, i = -1, r = e.length, o = -1, s = n.length, a = Mi(r + s); ++i < r;) a[i] = e[i];
                    for (; ++o < s;) a[i++] = n[o];
                    return a
                })
            }),
            to = ci(function(t, e) {
                return ee(t, de(e))
            }),
            eo = Fe(function(t, e, n) {
                tr.call(t, n) ? ++t[n] : t[n] = 1
            }),
            no = Ze(Lr),
            io = Ze(Dr, !0),
            ro = rn(Ft, Lr),
            oo = rn(function(t, e) {
                for (var n = t.length; n-- && !1 !== e(t[n], n, t););
                return t
            }, Dr),
            so = Fe(function(t, e, n) {
                tr.call(t, n) ? t[n].push(e) : t[n] = [e]
            }),
            ao = Fe(function(t, e, n) {
                t[n] = e
            }),
            lo = ci(function(t, e, n) {
                var i = -1,
                    r = "function" == typeof e,
                    o = zn(e),
                    s = An(t) ? Mi(t.length) : [];
                return Lr(t, function(t) {
                    var a = r ? e : o && null != t ? t[e] : b;
                    s[++i] = a ? a.apply(t, n) : $n(t, e, n)
                }), s
            }),
            uo = Fe(function(t, e, n) {
                t[n ? 0 : 1].push(e)
            }, function() {
                return [
                    [],
                    []
                ]
            }),
            co = cn(Gt, Lr),
            fo = cn(function(t, e, n, i) {
                var r = t.length;
                for (i && r && (n = t[--r]); r--;) n = e(n, t[r], r, t);
                return n
            }, Dr),
            po = ci(function(t, e) {
                if (null == t) return [];
                var n = e[2];
                return n && On(e[0], e[1], n) && (e.length = 1), Oe(t, de(e), [])
            }),
            ho = kr || function() {
                return (new Ri).getTime()
            },
            vo = ci(function(t, e, n) {
                var i = T;
                if (n.length) var r = v(n, vo.placeholder),
                    i = i | E;
                return gn(t, i, e, n, r)
            }),
            go = ci(function(t, e) {
                e = e.length ? de(e) : Ci(t);
                for (var n = -1, i = e.length; ++n < i;) {
                    var r = e[n];
                    t[r] = gn(t[r], T, t)
                }
                return t
            }),
            yo = ci(function(t, e, n) {
                var i = T | k;
                if (n.length) var r = v(n, yo.placeholder),
                    i = i | E;
                return gn(e, i, t, n, r)
            }),
            mo = Ge(S),
            wo = Ge(C),
            bo = ci(function(t, e) {
                return oe(t, 1, e)
            }),
            xo = ci(function(t, e, n) {
                return oe(t, e, n)
            }),
            To = nn(),
            ko = nn(!0),
            _o = ci(function(t, e) {
                if (e = de(e), "function" != typeof t || !Bt(e, i)) throw new Qi(H);
                var n = e.length;
                return ci(function(i) {
                    for (var r = Tr(i.length, n); r--;) i[r] = e[r](i[r]);
                    return t.apply(this, i)
                })
            }),
            So = un(E),
            Co = un($),
            Eo = ci(function(t, e) {
                return gn(t, j, b, b, b, de(e))
            }),
            $o = mr || function(t) {
                return p(t) && Ln(t.length) && nr.call(t) == R
            },
            Ao = Be(Te),
            jo = Be(function(t, e, n) {
                return n ? Zt(t, e, n) : te(t, e)
            }),
            Oo = Ke(jo, function(t, e) {
                return t === b ? e : t
            }),
            zo = Ke(Ao, Dn),
            No = en(pe),
            Lo = en(he),
            Do = on(Ir),
            Io = on(Pr),
            Po = sn(pe),
            Ho = sn(he),
            Wo = br ? function(t) {
                var e = null == t ? b : t.constructor;
                return "function" == typeof e && e.prototype === t || "function" != typeof t && An(t) ? Hn(t) : gi(t) ? br(t) : []
            } : Hn,
            Mo = an(!0),
            Ro = an(),
            qo = ci(function(t, e) {
                if (null == t) return {};
                if ("function" != typeof e[0]) return e = Vt(de(e), Vi), In(t, se(Ei(t), e));
                var n = We(e[0], e[1], 3);
                return Pn(t, function(t, e, i) {
                    return !n(t, e, i)
                })
            }),
            Fo = ci(function(t, e) {
                return null == t ? {} : "function" == typeof e[0] ? Pn(t, We(e[0], e[1], 3)) : In(t, de(e))
            }),
            Bo = Ve(function(t, e, n) {
                return e = e.toLowerCase(), t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
            }),
            Uo = Ve(function(t, e, n) {
                return t + (n ? "-" : "") + e.toLowerCase()
            }),
            Xo = ln(),
            Yo = ln(!0),
            Vo = Ve(function(t, e, n) {
                return t + (n ? "_" : "") + e.toLowerCase()
            }),
            Qo = Ve(function(t, e, n) {
                return t + (n ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
            }),
            Go = ci(function(t, e) {
                try {
                    return t.apply(b, e)
                } catch (t) {
                    return hi(t) ? t : new qi(t)
                }
            }),
            Ko = ci(function(t, e) {
                return function(n) {
                    return $n(n, t, e)
                }
            }),
            Jo = ci(function(t, e) {
                return function(n) {
                    return $n(t, n, e)
                }
            }),
            Zo = hn("ceil"),
            ts = hn("floor"),
            es = Je(di, Cr),
            ns = Je(ki, Er),
            is = hn("round");
        return Dt.prototype = It.prototype, Pt.prototype = Nr(It.prototype), Pt.prototype.constructor = Pt, Ht.prototype = Nr(It.prototype), Ht.prototype.constructor = Ht, Wt.prototype.delete = function(t) {
                return this.has(t) && delete this.__data__[t]
            }, Wt.prototype.get = function(t) {
                return "__proto__" == t ? b : this.__data__[t]
            }, Wt.prototype.has = function(t) {
                return "__proto__" != t && tr.call(this.__data__, t)
            }, Wt.prototype.set = function(t, e) {
                return "__proto__" != t && (this.__data__[t] = e), this
            }, Mt.prototype.push = function(t) {
                var e = this.data;
                "string" == typeof t || gi(t) ? e.set.add(t) : e.hash[t] = !0
            }, ui.Cache = Wt, Dt.after = function(t, e) {
                if ("function" != typeof e) {
                    if ("function" != typeof t) throw new Qi(H);
                    var n = t;
                    t = e, e = n
                }
                return t = wr(t = +t) ? t : 0,
                    function() {
                        return 1 > --t ? e.apply(this, arguments) : void 0
                    }
            }, Dt.ary = function(t, e, n) {
                return n && On(t, e, n) && (e = b), e = t && null == e ? t.length : xr(+e || 0, 0), gn(t, A, b, b, b, b, e)
            }, Dt.assign = jo, Dt.at = to, Dt.before = ai, Dt.bind = vo, Dt.bindAll = go, Dt.bindKey = yo, Dt.callback = Li, Dt.chain = Zn, Dt.chunk = function(t, e, n) {
                e = (n ? On(t, e, n) : null == e) ? 1 : xr(yr(e) || 1, 1), n = 0;
                for (var i = t ? t.length : 0, r = -1, o = Mi(vr(i / e)); n < i;) o[++r] = $e(t, n, n += e);
                return o
            }, Dt.compact = function(t) {
                for (var e = -1, n = t ? t.length : 0, i = -1, r = []; ++e < n;) {
                    var o = t[e];
                    o && (r[++i] = o)
                }
                return r
            }, Dt.constant = function(t) {
                return function() {
                    return t
                }
            }, Dt.countBy = eo, Dt.create = function(t, e, n) {
                var i = Nr(t);
                return n && On(t, e, n) && (e = b), e ? te(i, e) : i
            }, Dt.curry = mo, Dt.curryRight = wo, Dt.debounce = li, Dt.defaults = Oo, Dt.defaultsDeep = zo, Dt.defer = bo, Dt.delay = xo, Dt.difference = qr, Dt.drop = Fn, Dt.dropRight = Bn, Dt.dropRightWhile = function(t, e, n) {
                return t && t.length ? De(t, bn(e, n, 3), !0, !0) : []
            }, Dt.dropWhile = function(t, e, n) {
                return t && t.length ? De(t, bn(e, n, 3), !0) : []
            }, Dt.fill = function(t, e, n, i) {
                var r = t ? t.length : 0;
                if (!r) return [];
                for (n && "number" != typeof n && On(t, e, n) && (n = 0, i = r), r = t.length, n = null == n ? 0 : +n || 0, 0 > n && (n = -n > r ? 0 : r + n), i = i === b || i > r ? r : +i || 0, 0 > i && (i += r), r = n > i ? 0 : i >>> 0, n >>>= 0; n < r;) t[n++] = e;
                return t
            }, Dt.filter = ni, Dt.flatten = function(t, e, n) {
                var i = t ? t.length : 0;
                return n && On(t, e, n) && (e = !1), i ? de(t, e) : []
            }, Dt.flattenDeep = function(t) {
                return t && t.length ? de(t, !0) : []
            }, Dt.flow = To, Dt.flowRight = ko, Dt.forEach = ro, Dt.forEachRight = oo, Dt.forIn = Do, Dt.forInRight = Io, Dt.forOwn = Po, Dt.forOwnRight = Ho, Dt.functions = Ci, Dt.groupBy = so, Dt.indexBy = ao, Dt.initial = function(t) {
                return Bn(t, 1)
            }, Dt.intersection = Ur, Dt.invert = function(t, e, n) {
                n && On(t, e, n) && (e = b), n = -1;
                for (var i = Wo(t), r = i.length, o = {}; ++n < r;) {
                    var s = i[n],
                        a = t[s];
                    e ? tr.call(o, a) ? o[a].push(s) : o[a] = [s] : o[a] = s
                }
                return o
            }, Dt.invoke = lo, Dt.keys = Wo, Dt.keysIn = Ei, Dt.map = ri, Dt.mapKeys = Mo, Dt.mapValues = Ro, Dt.matches = Ii,
            Dt.matchesProperty = function(t, e) {
                return xe(t, re(e, !0))
            }, Dt.memoize = ui, Dt.merge = Ao, Dt.method = Ko, Dt.methodOf = Jo, Dt.mixin = Pi, Dt.modArgs = _o, Dt.negate = function(t) {
                if ("function" != typeof t) throw new Qi(H);
                return function() {
                    return !t.apply(this, arguments)
                }
            }, Dt.omit = qo, Dt.once = function(t) {
                return ai(2, t)
            }, Dt.pairs = $i, Dt.partial = So, Dt.partialRight = Co, Dt.partition = uo, Dt.pick = Fo, Dt.pluck = function(t, e) {
                return ri(t, Wi(e))
            }, Dt.property = Wi, Dt.propertyOf = function(t) {
                return function(e) {
                    return ge(t, Rn(e), e + "")
                }
            }, Dt.pull = function() {
                var t = arguments,
                    e = t[0];
                if (!e || !e.length) return e;
                for (var n = 0, i = Tn(), r = t.length; ++n < r;)
                    for (var o = 0, s = t[n]; - 1 < (o = i(e, s, o));) fr.call(e, o, 1);
                return e
            }, Dt.pullAt = Xr, Dt.range = function(t, e, n) {
                n && On(t, e, n) && (e = n = b), t = +t || 0, n = null == n ? 1 : +n || 0, null == e ? (e = t, t = 0) : e = +e || 0;
                var i = -1;
                e = xr(vr((e - t) / (n || 1)), 0);
                for (var r = Mi(e); ++i < e;) r[i] = t, t += n;
                return r
            }, Dt.rearg = Eo, Dt.reject = function(t, e, n) {
                var i = $o(t) ? Ut : ue;
                return e = bn(e, n, 3), i(t, function(t, n, i) {
                    return !e(t, n, i)
                })
            }, Dt.remove = function(t, e, n) {
                var i = [];
                if (!t || !t.length) return i;
                var r = -1,
                    o = [],
                    s = t.length;
                for (e = bn(e, n, 3); ++r < s;) n = t[r], e(n, r, t) && (i.push(n), o.push(r));
                return Se(t, o), i
            }, Dt.rest = Vn, Dt.restParam = ci, Dt.set = function(t, e, n) {
                if (null == t) return t;
                var i = e + "";
                e = null != t[i] || zn(e, t) ? [i] : Rn(e);
                for (var i = -1, r = e.length, o = r - 1, s = t; null != s && ++i < r;) {
                    var a = e[i];
                    gi(s) && (i == o ? s[a] = n : null == s[a] && (s[a] = jn(e[i + 1]) ? [] : {})), s = s[a]
                }
                return t
            }, Dt.shuffle = function(t) {
                return oi(t, Er)
            }, Dt.slice = function(t, e, n) {
                var i = t ? t.length : 0;
                return i ? (n && "number" != typeof n && On(t, e, n) && (e = 0, n = i), $e(t, e, n)) : []
            }, Dt.sortBy = function(t, e, n) {
                if (null == t) return [];
                n && On(t, e, n) && (e = b);
                var i = -1;
                return e = bn(e, n, 3), t = we(t, function(t, n, r) {
                    return {
                        a: e(t, n, r),
                        b: ++i,
                        c: t
                    }
                }), je(t, a)
            }, Dt.sortByAll = po, Dt.sortByOrder = function(t, e, n, i) {
                return null == t ? [] : (i && On(e, n, i) && (n = b), $o(e) || (e = null == e ? [] : [e]), $o(n) || (n = null == n ? [] : [n]), Oe(t, e, n))
            }, Dt.spread = function(t) {
                if ("function" != typeof t) throw new Qi(H);
                return function(e) {
                    return t.apply(this, e)
                }
            }, Dt.take = function(t, e, n) {
                return t && t.length ? ((n ? On(t, e, n) : null == e) && (e = 1), $e(t, 0, 0 > e ? 0 : e)) : []
            }, Dt.takeRight = function(t, e, n) {
                var i = t ? t.length : 0;
                return i ? ((n ? On(t, e, n) : null == e) && (e = 1), e = i - (+e || 0), $e(t, 0 > e ? 0 : e)) : []
            }, Dt.takeRightWhile = function(t, e, n) {
                return t && t.length ? De(t, bn(e, n, 3), !1, !0) : []
            }, Dt.takeWhile = function(t, e, n) {
                return t && t.length ? De(t, bn(e, n, 3)) : []
            }, Dt.tap = function(t, e, n) {
                return e.call(n, t), t
            }, Dt.throttle = function(t, e, n) {
                var i = !0,
                    r = !0;
                if ("function" != typeof t) throw new Qi(H);
                return !1 === n ? i = !1 : gi(n) && (i = "leading" in n ? !!n.leading : i, r = "trailing" in n ? !!n.trailing : r), li(t, e, {
                    leading: i,
                    maxWait: +e,
                    trailing: r
                })
            }, Dt.thru = ti, Dt.times = function(t, e, n) {
                if (1 > (t = yr(t)) || !wr(t)) return [];
                var i = -1,
                    r = Mi(Tr(t, 4294967295));
                for (e = We(e, n, 1); ++i < t;) 4294967295 > i ? r[i] = e(i) : e(i);
                return r
            }, Dt.toArray = _i, Dt.toPlainObject = Si, Dt.transform = function(t, e, n, i) {
                var r = $o(t) || Ti(t);
                return e = bn(e, i, 4), null == n && (r || gi(t) ? (i = t.constructor, n = r ? $o(t) ? new i : [] : Nr(vi(i) ? i.prototype : b)) : n = {}), (r ? Ft : pe)(t, function(t, i, r) {
                    return e(n, t, i, r)
                }), n
            }, Dt.union = Qr, Dt.uniq = Qn, Dt.unzip = Gn, Dt.unzipWith = Kn, Dt.values = Ai, Dt.valuesIn = function(t) {
                return Le(t, Ei(t))
            }, Dt.where = function(t, e) {
                return ni(t, be(e))
            }, Dt.without = Gr, Dt.wrap = function(t, e) {
                return e = null == e ? Di : e, gn(e, E, b, [t], [])
            }, Dt.xor = function() {
                for (var t = -1, e = arguments.length; ++t < e;) {
                    var n = arguments[t];
                    if (An(n)) var i = i ? Qt(se(i, n), se(n, i)) : n
                }
                return i ? Ne(i) : []
            }, Dt.zip = Kr, Dt.zipObject = Jn, Dt.zipWith = Jr, Dt.backflow = ko, Dt.collect = ri, Dt.compose = ko, Dt.each = ro, Dt.eachRight = oo, Dt.extend = jo, Dt.iteratee = Li, Dt.methods = Ci, Dt.object = Jn, Dt.select = ni, Dt.tail = Vn, Dt.unique = Qn, Pi(Dt, Dt), Dt.add = function(t, e) {
                return (+t || 0) + (+e || 0)
            }, Dt.attempt = Go, Dt.camelCase = Bo, Dt.capitalize = function(t) {
                return (t = r(t)) && t.charAt(0).toUpperCase() + t.slice(1)
            }, Dt.ceil = Zo, Dt.clone = function(t, e, n, i) {
                return e && "boolean" != typeof e && On(t, e, n) ? e = !1 : "function" == typeof e && (i = n, n = e, e = !1), "function" == typeof n ? re(t, e, We(n, i, 3)) : re(t, e)
            }, Dt.cloneDeep = function(t, e, n) {
                return "function" == typeof e ? re(t, !0, We(e, n, 3)) : re(t, !0)
            }, Dt.deburr = ji, Dt.endsWith = function(t, e, n) {
                t = r(t), e += "";
                var i = t.length;
                return n = n === b ? i : Tr(0 > n ? 0 : +n || 0, i), 0 <= (n -= e.length) && t.indexOf(e, n) == n
            }, Dt.escape = function(t) {
                return (t = r(t)) && ft.test(t) ? t.replace(ct, u) : t
            }, Dt.escapeRegExp = function(t) {
                return (t = r(t)) && bt.test(t) ? t.replace(wt, c) : t || "(?:)"
            }, Dt.every = ei, Dt.find = no, Dt.findIndex = Fr, Dt.findKey = No, Dt.findLast = io, Dt.findLastIndex = Br, Dt.findLastKey = Lo, Dt.findWhere = function(t, e) {
                return no(t, be(e))
            }, Dt.first = Un, Dt.floor = ts, Dt.get = function(t, e, n) {
                return t = null == t ? b : ge(t, Rn(e), e + ""), t === b ? n : t
            }, Dt.gt = di, Dt.gte = function(t, e) {
                return t >= e
            }, Dt.has = function(t, e) {
                if (null == t) return !1;
                var n = tr.call(t, e);
                if (!n && !zn(e)) {
                    if (e = Rn(e), null == (t = 1 == e.length ? t : ge(t, $e(e, 0, -1)))) return !1;
                    e = Yn(e), n = tr.call(t, e)
                }
                return n || Ln(t.length) && jn(e, t.length) && ($o(t) || fi(t))
            }, Dt.identity = Di, Dt.includes = ii, Dt.indexOf = Xn, Dt.inRange = function(t, e, n) {
                return e = +e || 0, n === b ? (n = e, e = 0) : n = +n || 0, t >= Tr(e, n) && t < xr(e, n)
            }, Dt.isArguments = fi, Dt.isArray = $o, Dt.isBoolean = function(t) {
                return !0 === t || !1 === t || p(t) && nr.call(t) == q
            }, Dt.isDate = function(t) {
                return p(t) && nr.call(t) == F
            }, Dt.isElement = function(t) {
                return !!t && 1 === t.nodeType && p(t) && !wi(t)
            }, Dt.isEmpty = function(t) {
                return null == t || (An(t) && ($o(t) || xi(t) || fi(t) || p(t) && vi(t.splice)) ? !t.length : !Wo(t).length)
            }, Dt.isEqual = pi, Dt.isError = hi, Dt.isFinite = function(t) {
                return "number" == typeof t && wr(t)
            }, Dt.isFunction = vi, Dt.isMatch = function(t, e, n, i) {
                return n = "function" == typeof n ? We(n, i, 3) : b, me(t, kn(e), n)
            }, Dt.isNaN = function(t) {
                return mi(t) && t != +t
            }, Dt.isNative = yi, Dt.isNull = function(t) {
                return null === t
            }, Dt.isNumber = mi, Dt.isObject = gi, Dt.isPlainObject = wi, Dt.isRegExp = bi, Dt.isString = xi, Dt.isTypedArray = Ti, Dt.isUndefined = function(t) {
                return t === b
            }, Dt.kebabCase = Uo, Dt.last = Yn, Dt.lastIndexOf = function(t, e, n) {
                var i = t ? t.length : 0;
                if (!i) return -1;
                var r = i;
                if ("number" == typeof n) r = (0 > n ? xr(i + n, 0) : Tr(n || 0, i - 1)) + 1;
                else if (n) return r = Pe(t, e, !0) - 1, t = t[r], (e === e ? e === t : t !== t) ? r : -1;
                if (e !== e) return f(t, r, !0);
                for (; r--;)
                    if (t[r] === e) return r;
                return -1
            }, Dt.lt = ki, Dt.lte = function(t, e) {
                return t <= e
            }, Dt.max = es, Dt.min = ns, Dt.noConflict = function() {
                return Xt._ = ir, this
            }, Dt.noop = Hi, Dt.now = ho, Dt.pad = function(t, e, n) {
                t = r(t), e = +e;
                var i = t.length;
                return i < e && wr(e) ? (i = (e - i) / 2, e = yr(i), i = vr(i), n = fn("", i, n), n.slice(0, e) + t + n) : t
            }, Dt.padLeft = Xo, Dt.padRight = Yo, Dt.parseInt = function(t, e, n) {
                return (n ? On(t, e, n) : null == e) ? e = 0 : e && (e = +e), t = zi(t), _r(t, e || (St.test(t) ? 16 : 10))
            }, Dt.random = function(t, e, n) {
                n && On(t, e, n) && (e = n = b);
                var i = null == t,
                    r = null == e;
                return null == n && (r && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, r = !0)), i && r && (e = 1, r = !1), t = +t || 0, r ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1 ? (n = Sr(), Tr(t + n * (e - t + ar("1e-" + ((n + "").length - 1))), e)) : Ce(t, e)
            }, Dt.reduce = co, Dt.reduceRight = fo, Dt.repeat = Oi, Dt.result = function(t, e, n) {
                var i = null == t ? b : t[e];
                return i === b && (null == t || zn(e, t) || (e = Rn(e), t = 1 == e.length ? t : ge(t, $e(e, 0, -1)), i = null == t ? b : t[Yn(e)]), i = i === b ? n : i), vi(i) ? i.call(t) : i
            }, Dt.round = is, Dt.runInContext = w, Dt.size = function(t) {
                var e = t ? Mr(t) : 0;
                return Ln(e) ? e : Wo(t).length
            }, Dt.snakeCase = Vo, Dt.some = si, Dt.sortedIndex = Yr, Dt.sortedLastIndex = Vr, Dt.startCase = Qo, Dt.startsWith = function(t, e, n) {
                return t = r(t), n = null == n ? 0 : Tr(0 > n ? 0 : +n || 0, t.length), t.lastIndexOf(e, n) == n
            }, Dt.sum = function(t, e, n) {
                if (n && On(t, e, n) && (e = b), e = bn(e, n, 3), 1 == e.length) {
                    t = $o(t) ? t : Wn(t), n = t.length;
                    for (var i = 0; n--;) i += +e(t[n]) || 0;
                    t = i
                } else t = ze(t, e);
                return t
            }, Dt.template = function(t, e, n) {
                var i = Dt.templateSettings;
                n && On(t, e, n) && (e = n = b), t = r(t), e = Zt(te({}, n || e), i, Jt), n = Zt(te({}, e.imports), i.imports, Jt);
                var o, s, a = Wo(n),
                    l = Le(n, a),
                    u = 0;
                n = e.interpolate || At;
                var c = "__p+='";
                n = Yi((e.escape || At).source + "|" + n.source + "|" + (n === vt ? kt : At).source + "|" + (e.evaluate || At).source + "|$", "g");
                var f = "sourceURL" in e ? "//# sourceURL=" + e.sourceURL + "\n" : "";
                if (t.replace(n, function(e, n, i, r, a, l) {
                        return i || (i = r), c += t.slice(u, l).replace(jt, d), n && (o = !0, c += "'+__e(" + n + ")+'"), a && (s = !0, c += "';" + a + ";\n__p+='"), i && (c += "'+((__t=(" + i + "))==null?'':__t)+'"), u = l + e.length, e
                    }), c += "';", (e = e.variable) || (c = "with(obj){" + c + "}"), c = (s ? c.replace(st, "") : c).replace(at, "$1").replace(lt, "$1;"), c = "function(" + (e || "obj") + "){" + (e ? "" : "obj||(obj={});") + "var __t,__p=''" + (o ? ",__e=_.escape" : "") + (s ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + c + "return __p}", e = Go(function() {
                        return Fi(a, f + "return " + c).apply(b, l)
                    }), e.source = c, hi(e)) throw e;
                return e
            }, Dt.trim = zi, Dt.trimLeft = function(t, e, n) {
                var i = t;
                return (t = r(t)) ? t.slice((n ? On(i, e, n) : null == e) ? g(t) : o(t, e + "")) : t
            }, Dt.trimRight = function(t, e, n) {
                var i = t;
                return (t = r(t)) ? (n ? On(i, e, n) : null == e) ? t.slice(0, y(t) + 1) : t.slice(0, s(t, e + "") + 1) : t
            }, Dt.trunc = function(t, e, n) {
                n && On(t, e, n) && (e = b);
                var i = O;
                if (n = z, null != e)
                    if (gi(e)) {
                        var o = "separator" in e ? e.separator : o,
                            i = "length" in e ? +e.length || 0 : i;
                        n = "omission" in e ? r(e.omission) : n
                    } else i = +e || 0;
                if (t = r(t), i >= t.length) return t;
                if (1 > (i -= n.length)) return n;
                if (e = t.slice(0, i), null == o) return e + n;
                if (bi(o)) {
                    if (t.slice(i).search(o)) {
                        var s, a = t.slice(0, i);
                        for (o.global || (o = Yi(o.source, (_t.exec(o) || "") + "g")), o.lastIndex = 0; t = o.exec(a);) s = t.index;
                        e = e.slice(0, null == s ? i : s)
                    }
                } else t.indexOf(o, i) != i && -1 < (o = e.lastIndexOf(o)) && (e = e.slice(0, o));
                return e + n
            }, Dt.unescape = function(t) {
                return (t = r(t)) && dt.test(t) ? t.replace(ut, m) : t
            }, Dt.uniqueId = function(t) {
                var e = ++er;
                return r(t) + e
            }, Dt.words = Ni, Dt.all = ei, Dt.any = si, Dt.contains = ii, Dt.eq = pi, Dt.detect = no, Dt.foldl = co, Dt.foldr = fo, Dt.head = Un, Dt.include = ii, Dt.inject = co, Pi(Dt, function() {
                var t = {};
                return pe(Dt, function(e, n) {
                    Dt.prototype[n] || (t[n] = e)
                }), t
            }(), !1), Dt.sample = oi, Dt.prototype.sample = function(t) {
                return this.__chain__ || null != t ? this.thru(function(e) {
                    return oi(e, t)
                }) : oi(this.value())
            }, Dt.VERSION = x, Ft("bind bindKey curry curryRight partial partialRight".split(" "), function(t) {
                Dt[t].placeholder = Dt
            }), Ft(["drop", "take"], function(t, e) {
                Ht.prototype[t] = function(n) {
                    var i = this.__filtered__;
                    if (i && !e) return new Ht(this);
                    n = null == n ? 1 : xr(yr(n) || 0, 0);
                    var r = this.clone();
                    return i ? r.__takeCount__ = Tr(r.__takeCount__, n) : r.__views__.push({
                        size: n,
                        type: t + (0 > r.__dir__ ? "Right" : "")
                    }), r
                }, Ht.prototype[t + "Right"] = function(e) {
                    return this.reverse()[t](e).reverse()
                }
            }), Ft(["filter", "map", "takeWhile"], function(t, e) {
                var n = e + 1,
                    i = n != P;
                Ht.prototype[t] = function(t, e) {
                    var r = this.clone();
                    return r.__iteratees__.push({
                        iteratee: bn(t, e, 1),
                        type: n
                    }), r.__filtered__ = r.__filtered__ || i, r
                }
            }), Ft(["first", "last"], function(t, e) {
                var n = "take" + (e ? "Right" : "");
                Ht.prototype[t] = function() {
                    return this[n](1).value()[0]
                }
            }), Ft(["initial", "rest"], function(t, e) {
                var n = "drop" + (e ? "" : "Right");
                Ht.prototype[t] = function() {
                    return this.__filtered__ ? new Ht(this) : this[n](1)
                }
            }), Ft(["pluck", "where"], function(t, e) {
                var n = e ? "filter" : "map",
                    i = e ? be : Wi;
                Ht.prototype[t] = function(t) {
                    return this[n](i(t))
                }
            }), Ht.prototype.compact = function() {
                return this.filter(Di)
            }, Ht.prototype.reject = function(t, e) {
                return t = bn(t, e, 1), this.filter(function(e) {
                    return !t(e)
                })
            }, Ht.prototype.slice = function(t, e) {
                t = null == t ? 0 : +t || 0;
                var n = this;
                return n.__filtered__ && (0 < t || 0 > e) ? new Ht(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== b && (e = +e || 0, n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
            }, Ht.prototype.takeRightWhile = function(t, e) {
                return this.reverse().takeWhile(t, e).reverse()
            }, Ht.prototype.toArray = function() {
                return this.take(Er)
            }, pe(Ht.prototype, function(t, e) {
                var n = /^(?:filter|map|reject)|While$/.test(e),
                    i = /^(?:first|last)$/.test(e),
                    r = Dt[i ? "take" + ("last" == e ? "Right" : "") : e];
                r && (Dt.prototype[e] = function() {
                    function e(t) {
                        return i && s ? r(t, 1)[0] : r.apply(b, Qt([t], o))
                    }
                    var o = i ? [1] : arguments,
                        s = this.__chain__,
                        a = this.__wrapped__,
                        l = !!this.__actions__.length,
                        u = a instanceof Ht,
                        c = o[0],
                        d = u || $o(a);
                    return d && n && "function" == typeof c && 1 != c.length && (u = d = !1), c = {
                        func: ti,
                        args: [e],
                        thisArg: b
                    }, l = u && !l, i && !s ? l ? (a = a.clone(), a.__actions__.push(c), t.call(a)) : r.call(b, this.value())[0] : !i && d ? (a = l ? a : new Ht(this), a = t.apply(a, o), a.__actions__.push(c), new Pt(a, s)) : this.thru(e)
                })
            }), Ft("join pop push replace shift sort splice split unshift".split(" "), function(t) {
                var e = (/^(?:replace|split)$/.test(t) ? Ji : Gi)[t],
                    n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                    i = /^(?:join|pop|replace|shift)$/.test(t);
                Dt.prototype[t] = function() {
                    var t = arguments;
                    return i && !this.__chain__ ? e.apply(this.value(), t) : this[n](function(n) {
                        return e.apply(n, t)
                    })
                }
            }), pe(Ht.prototype, function(t, e) {
                var n = Dt[e];
                if (n) {
                    var i = n.name + "";
                    (zr[i] || (zr[i] = [])).push({
                        name: e,
                        func: n
                    })
                }
            }), zr[dn(b, k).name] = [{
                name: "wrapper",
                func: b
            }], Ht.prototype.clone = function() {
                var t = new Ht(this.__wrapped__);
                return t.__actions__ = qt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = qt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = qt(this.__views__), t
            }, Ht.prototype.reverse = function() {
                if (this.__filtered__) {
                    var t = new Ht(this);
                    t.__dir__ = -1, t.__filtered__ = !0
                } else t = this.clone(), t.__dir__ *= -1;
                return t
            }, Ht.prototype.value = function() {
                var t, e = this.__wrapped__.value(),
                    n = this.__dir__,
                    i = $o(e),
                    r = 0 > n,
                    o = i ? e.length : 0;
                t = o;
                for (var s = this.__views__, a = 0, l = -1, u = s.length; ++l < u;) {
                    var c = s[l],
                        d = c.size;
                    switch (c.type) {
                        case "drop":
                            a += d;
                            break;
                        case "dropRight":
                            t -= d;
                            break;
                        case "take":
                            t = Tr(t, a + d);
                            break;
                        case "takeRight":
                            a = xr(a, t - d)
                    }
                }
                if (t = {
                        start: a,
                        end: t
                    }, s = t.start, a = t.end, t = a - s, r = r ? a : s - 1, s = this.__iteratees__, a = s.length, l = 0, u = Tr(t, this.__takeCount__), !i || o < D || o == t && u == t) return Ie(e, this.__actions__);
                i = [];
                t: for (; t-- && l < u;) {
                    for (r += n, o = -1, c = e[r]; ++o < a;) {
                        var f = s[o],
                            d = f.type,
                            f = f.iteratee(c);
                        if (d == P) c = f;
                        else if (!f) {
                            if (d == I) continue t;
                            break t
                        }
                    }
                    i[l++] = c
                }
                return i
            }, Dt.prototype.chain = function() {
                return Zn(this)
            }, Dt.prototype.commit = function() {
                return new Pt(this.value(), this.__chain__)
            }, Dt.prototype.concat = Zr, Dt.prototype.plant = function(t) {
                for (var e, n = this; n instanceof It;) {
                    var i = qn(n);
                    e ? r.__wrapped__ = i : e = i;
                    var r = i,
                        n = n.__wrapped__
                }
                return r.__wrapped__ = t, e
            }, Dt.prototype.reverse = function() {
                function t(t) {
                    return t.reverse()
                }
                var e = this.__wrapped__;
                return e instanceof Ht ? (this.__actions__.length && (e = new Ht(this)), e = e.reverse(), e.__actions__.push({
                    func: ti,
                    args: [t],
                    thisArg: b
                }), new Pt(e, this.__chain__)) : this.thru(t)
            }, Dt.prototype.toString = function() {
                return this.value() + ""
            }, Dt.prototype.run = Dt.prototype.toJSON = Dt.prototype.valueOf = Dt.prototype.value = function() {
                return Ie(this.__wrapped__, this.__actions__)
            }, Dt.prototype.collect = Dt.prototype.map, Dt.prototype.head = Dt.prototype.first, Dt.prototype.select = Dt.prototype.filter, Dt.prototype.tail = Dt.prototype.rest, Dt
    }
    var b, x = "3.10.1",
        T = 1,
        k = 2,
        _ = 4,
        S = 8,
        C = 16,
        E = 32,
        $ = 64,
        A = 128,
        j = 256,
        O = 30,
        z = "...",
        N = 150,
        L = 16,
        D = 200,
        I = 1,
        P = 2,
        H = "Expected a function",
        W = "__lodash_placeholder__",
        M = "[object Arguments]",
        R = "[object Array]",
        q = "[object Boolean]",
        F = "[object Date]",
        B = "[object Error]",
        U = "[object Function]",
        X = "[object Number]",
        Y = "[object Object]",
        V = "[object RegExp]",
        Q = "[object String]",
        G = "[object ArrayBuffer]",
        K = "[object Float32Array]",
        J = "[object Float64Array]",
        Z = "[object Int8Array]",
        tt = "[object Int16Array]",
        et = "[object Int32Array]",
        nt = "[object Uint8Array]",
        it = "[object Uint8ClampedArray]",
        rt = "[object Uint16Array]",
        ot = "[object Uint32Array]",
        st = /\b__p\+='';/g,
        at = /\b(__p\+=)''\+/g,
        lt = /(__e\(.*?\)|\b__t\))\+'';/g,
        ut = /&(?:amp|lt|gt|quot|#39|#96);/g,
        ct = /[&<>"'`]/g,
        dt = RegExp(ut.source),
        ft = RegExp(ct.source),
        pt = /<%-([\s\S]+?)%>/g,
        ht = /<%([\s\S]+?)%>/g,
        vt = /<%=([\s\S]+?)%>/g,
        gt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
        yt = /^\w*$/,
        mt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
        wt = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
        bt = RegExp(wt.source),
        xt = /[\u0300-\u036f\ufe20-\ufe23]/g,
        Tt = /\\(\\)?/g,
        kt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
        _t = /\w*$/,
        St = /^0[xX]/,
        Ct = /^\[object .+?Constructor\]$/,
        Et = /^\d+$/,
        $t = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
        At = /($^)/,
        jt = /['\n\r\u2028\u2029\\]/g,
        Ot = RegExp("[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?=[A-Z\\xc0-\\xd6\\xd8-\\xde][a-z\\xdf-\\xf6\\xf8-\\xff]+)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|[0-9]+", "g"),
        zt = "Array ArrayBuffer Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Math Number Object RegExp Set String _ clearTimeout isFinite parseFloat parseInt setTimeout TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap".split(" "),
        Nt = {};
    Nt[K] = Nt[J] = Nt[Z] = Nt[tt] = Nt[et] = Nt[nt] = Nt[it] = Nt[rt] = Nt[ot] = !0, Nt[M] = Nt[R] = Nt[G] = Nt[q] = Nt[F] = Nt[B] = Nt[U] = Nt["[object Map]"] = Nt[X] = Nt[Y] = Nt[V] = Nt["[object Set]"] = Nt[Q] = Nt["[object WeakMap]"] = !1;
    var Lt = {};
    Lt[M] = Lt[R] = Lt[G] = Lt[q] = Lt[F] = Lt[K] = Lt[J] = Lt[Z] = Lt[tt] = Lt[et] = Lt[X] = Lt[Y] = Lt[V] = Lt[Q] = Lt[nt] = Lt[it] = Lt[rt] = Lt[ot] = !0, Lt[B] = Lt[U] = Lt["[object Map]"] = Lt["[object Set]"] = Lt["[object WeakMap]"] = !1;
    var Dt = {
            "À": "A",
            "Á": "A",
            "Â": "A",
            "Ã": "A",
            "Ä": "A",
            "Å": "A",
            "à": "a",
            "á": "a",
            "â": "a",
            "ã": "a",
            "ä": "a",
            "å": "a",
            "Ç": "C",
            "ç": "c",
            "Ð": "D",
            "ð": "d",
            "È": "E",
            "É": "E",
            "Ê": "E",
            "Ë": "E",
            "è": "e",
            "é": "e",
            "ê": "e",
            "ë": "e",
            "Ì": "I",
            "Í": "I",
            "Î": "I",
            "Ï": "I",
            "ì": "i",
            "í": "i",
            "î": "i",
            "ï": "i",
            "Ñ": "N",
            "ñ": "n",
            "Ò": "O",
            "Ó": "O",
            "Ô": "O",
            "Õ": "O",
            "Ö": "O",
            "Ø": "O",
            "ò": "o",
            "ó": "o",
            "ô": "o",
            "õ": "o",
            "ö": "o",
            "ø": "o",
            "Ù": "U",
            "Ú": "U",
            "Û": "U",
            "Ü": "U",
            "ù": "u",
            "ú": "u",
            "û": "u",
            "ü": "u",
            "Ý": "Y",
            "ý": "y",
            "ÿ": "y",
            "Æ": "Ae",
            "æ": "ae",
            "Þ": "Th",
            "þ": "th",
            "ß": "ss"
        },
        It = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#96;"
        },
        Pt = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
            "&#96;": "`"
        },
        Ht = {
            function: !0,
            object: !0
        },
        Wt = {
            0: "x30",
            1: "x31",
            2: "x32",
            3: "x33",
            4: "x34",
            5: "x35",
            6: "x36",
            7: "x37",
            8: "x38",
            9: "x39",
            A: "x41",
            B: "x42",
            C: "x43",
            D: "x44",
            E: "x45",
            F: "x46",
            a: "x61",
            b: "x62",
            c: "x63",
            d: "x64",
            e: "x65",
            f: "x66",
            n: "x6e",
            r: "x72",
            t: "x74",
            u: "x75",
            v: "x76",
            x: "x78"
        },
        Mt = {
            "\\": "\\",
            "'": "'",
            "\n": "n",
            "\r": "r",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        Rt = Ht[typeof exports] && exports && !exports.nodeType && exports,
        qt = Ht[typeof module] && module && !module.nodeType && module,
        Ft = Ht[typeof self] && self && self.Object && self,
        Bt = Ht[typeof window] && window && window.Object && window,
        Ut = qt && qt.exports === Rt && Rt,
        Xt = Rt && qt && "object" == typeof global && global && global.Object && global || Bt !== (this && this.window) && Bt || Ft || this,
        Yt = w();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Xt._ = Yt, define(function() {
        return Yt
    })) : Rt && qt ? Ut ? (qt.exports = Yt)._ = Yt : Rt._ = Yt : Xt._ = Yt
}).call(this),
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function n(t) {
            var e = "length" in t && t.length,
                n = Z.type(t);
            return "function" !== n && !Z.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function i(t, e, n) {
            if (Z.isFunction(e)) return Z.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return Z.grep(t, function(t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (at.test(e)) return Z.filter(e, t, n);
                e = Z.filter(e, t)
            }
            return Z.grep(t, function(t) {
                return X.call(e, t) >= 0 !== n
            })
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function o(t) {
            var e = pt[t] = {};
            return Z.each(t.match(ft) || [], function(t, n) {
                e[n] = !0
            }), e
        }

        function s() {
            K.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1), Z.ready()
        }

        function a() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }), this.expando = Z.expando + a.uid++
        }

        function l(t, e, n) {
            var i;
            if (void 0 === n && 1 === t.nodeType)
                if (i = "data-" + e.replace(wt, "-$1").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : mt.test(n) ? Z.parseJSON(n) : n)
                    } catch (t) {}
                    yt.set(t, e, n)
                } else n = void 0;
            return n
        }

        function u() {
            return !0
        }

        function c() {
            return !1
        }

        function d() {
            try {
                return K.activeElement
            } catch (t) {}
        }

        function f(t, e) {
            return Z.nodeName(t, "table") && Z.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function p(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function h(t) {
            var e = Dt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function v(t, e) {
            for (var n = 0, i = t.length; i > n; n++) gt.set(t[n], "globalEval", !e || gt.get(e[n], "globalEval"))
        }

        function g(t, e) {
            var n, i, r, o, s, a, l, u;
            if (1 === e.nodeType) {
                if (gt.hasData(t) && (o = gt.access(t), s = gt.set(e, o), u = o.events)) {
                    delete s.handle, s.events = {};
                    for (r in u)
                        for (n = 0, i = u[r].length; i > n; n++) Z.event.add(e, r, u[r][n])
                }
                yt.hasData(t) && (a = yt.access(t), l = Z.extend({}, a), yt.set(e, l))
            }
        }

        function y(t, e) {
            var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && Z.nodeName(t, e) ? Z.merge([t], n) : n
        }

        function m(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && kt.test(t.type) ? e.checked = t.checked : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }

        function w(e, n) {
            var i, r = Z(n.createElement(e)).appendTo(n.body),
                o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : Z.css(r[0], "display");
            return r.detach(), o
        }

        function b(t) {
            var e = K,
                n = Wt[t];
            return n || (n = w(t, e), "none" !== n && n || (Ht = (Ht || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Ht[0].contentDocument, e.write(), e.close(), n = w(t, e), Ht.detach()), Wt[t] = n), n
        }

        function x(t, e, n) {
            var i, r, o, s, a = t.style;
            return n = n || qt(t), n && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || Z.contains(t.ownerDocument, t) || (s = Z.style(t, e)), Rt.test(s) && Mt.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
        }

        function T(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function k(t, e) {
            if (e in t) return e;
            for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Vt.length; r--;)
                if ((e = Vt[r] + n) in t) return e;
            return i
        }

        function _(t, e, n) {
            var i = Bt.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function S(t, e, n, i, r) {
            for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Z.css(t, n + xt[o], !0, r)), i ? ("content" === n && (s -= Z.css(t, "padding" + xt[o], !0, r)), "margin" !== n && (s -= Z.css(t, "border" + xt[o] + "Width", !0, r))) : (s += Z.css(t, "padding" + xt[o], !0, r), "padding" !== n && (s += Z.css(t, "border" + xt[o] + "Width", !0, r)));
            return s
        }

        function C(t, e, n) {
            var i = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = qt(t),
                s = "border-box" === Z.css(t, "boxSizing", !1, o);
            if (0 >= r || null == r) {
                if (r = x(t, e, o), (0 > r || null == r) && (r = t.style[e]), Rt.test(r)) return r;
                i = s && (G.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + S(t, e, n || (s ? "border" : "content"), i, o) + "px"
        }

        function E(t, e) {
            for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++) i = t[s], i.style && (o[s] = gt.get(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Tt(i) && (o[s] = gt.access(i, "olddisplay", b(i.nodeName)))) : (r = Tt(i), "none" === n && r || gt.set(i, "olddisplay", r ? n : Z.css(i, "display"))));
            for (s = 0; a > s; s++) i = t[s], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
            return t
        }

        function $(t, e, n, i, r) {
            return new $.prototype.init(t, e, n, i, r)
        }

        function A() {
            return setTimeout(function() {
                Qt = void 0
            }), Qt = Z.now()
        }

        function j(t, e) {
            var n, i = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = xt[i], r["margin" + n] = r["padding" + n] = t;
            return e && (r.opacity = r.width = t), r
        }

        function O(t, e, n) {
            for (var i, r = (ee[e] || []).concat(ee["*"]), o = 0, s = r.length; s > o; o++)
                if (i = r[o].call(n, e, t)) return i
        }

        function z(t, e, n) {
            var i, r, o, s, a, l, u, c = this,
                d = {},
                f = t.style,
                p = t.nodeType && Tt(t),
                h = gt.get(t, "fxshow");
            n.queue || (a = Z._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, Z.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = Z.css(t, "display"), "inline" === ("none" === u ? gt.get(t, "olddisplay") || b(t.nodeName) : u) && "none" === Z.css(t, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in e)
                if (r = e[i], Kt.exec(r)) {
                    if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) {
                        if ("show" !== r || !h || void 0 === h[i]) continue;
                        p = !0
                    }
                    d[i] = h && h[i] || Z.style(t, i)
                } else u = void 0;
            if (Z.isEmptyObject(d)) "inline" === ("none" === u ? b(t.nodeName) : u) && (f.display = u);
            else {
                h ? "hidden" in h && (p = h.hidden) : h = gt.access(t, "fxshow", {}), o && (h.hidden = !p), p ? Z(t).show() : c.done(function() {
                    Z(t).hide()
                }), c.done(function() {
                    var e;
                    gt.remove(t, "fxshow");
                    for (e in d) Z.style(t, e, d[e])
                });
                for (i in d) s = O(p ? h[i] : 0, i, c), i in h || (h[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function N(t, e) {
            var n, i, r, o, s;
            for (n in t)
                if (i = Z.camelCase(n), r = e[i], o = t[n], Z.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = Z.cssHooks[i]) && "expand" in s) {
                    o = s.expand(o), delete t[i];
                    for (n in o) n in t || (t[n] = o[n], e[n] = r)
                } else e[i] = r
        }

        function L(t, e, n) {
            var i, r, o = 0,
                s = te.length,
                a = Z.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Qt || A(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, o = 1 - i, s = 0, l = u.tweens.length; l > s; s++) u.tweens[s].run(o);
                    return a.notifyWith(t, [u, o, n]), 1 > o && l ? n : (a.resolveWith(t, [u]), !1)
                },
                u = a.promise({
                    elem: t,
                    props: Z.extend({}, e),
                    opts: Z.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: Qt || A(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(e, n) {
                        var i = Z.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(i), i
                    },
                    stop: function(e) {
                        var n = 0,
                            i = e ? u.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; i > n; n++) u.tweens[n].run(1);
                        return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this
                    }
                }),
                c = u.props;
            for (N(c, u.opts.specialEasing); s > o; o++)
                if (i = te[o].call(u, t, c, u.opts)) return i;
            return Z.map(c, O, u), Z.isFunction(u.opts.start) && u.opts.start.call(t, u), Z.fx.timer(Z.extend(l, {
                elem: t,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function D(t) {
            return function(e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, r = 0,
                    o = e.toLowerCase().match(ft) || [];
                if (Z.isFunction(n))
                    for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function I(t, e, n, i) {
            function r(a) {
                var l;
                return o[a] = !0, Z.each(t[a] || [], function(t, a) {
                    var u = a(e, n, i);
                    return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
                }), l
            }
            var o = {},
                s = t === ye;
            return r(e.dataTypes[0]) || !o["*"] && r("*")
        }

        function P(t, e) {
            var n, i, r = Z.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
            return i && Z.extend(!0, t, i), t
        }

        function H(t, e, n) {
            for (var i, r, o, s, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
            if (i)
                for (r in a)
                    if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break
                    }
            if (l[0] in n) o = l[0];
            else {
                for (r in n) {
                    if (!l[0] || t.converters[r + " " + l[0]]) {
                        o = r;
                        break
                    }
                    s || (s = r)
                }
                o = o || s
            }
            return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
        }

        function W(t, e, n, i) {
            var r, o, s, a, l, u = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (!(s = u[l + " " + o] || u["* " + o]))
                    for (r in u)
                        if (a = r.split(" "), a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                            break
                        }
                if (!0 !== s)
                    if (s && t.throws) e = s(e);
                    else try {
                        e = s(e)
                    } catch (t) {
                        return {
                            state: "parsererror",
                            error: s ? t : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function M(t, e, n, i) {
            var r;
            if (Z.isArray(e)) Z.each(e, function(e, r) {
                n || Te.test(t) ? i(t, r) : M(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
            else if (n || "object" !== Z.type(e)) i(t, e);
            else
                for (r in e) M(t + "[" + r + "]", e[r], n, i)
        }

        function R(t) {
            return Z.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var q = [],
            F = q.slice,
            B = q.concat,
            U = q.push,
            X = q.indexOf,
            Y = {},
            V = Y.toString,
            Q = Y.hasOwnProperty,
            G = {},
            K = t.document,
            J = "2.1.4",
            Z = function(t, e) {
                return new Z.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            nt = /-([\da-z])/gi,
            it = function(t, e) {
                return e.toUpperCase()
            };
        Z.fn = Z.prototype = {
            jquery: J,
            constructor: Z,
            selector: "",
            length: 0,
            toArray: function() {
                return F.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : F.call(this)
            },
            pushStack: function(t) {
                var e = Z.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return Z.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(Z.map(this, function(e, n) {
                    return t.call(e, n, e)
                }))
            },
            slice: function() {
                return this.pushStack(F.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    n = +t + (0 > t ? e : 0);
                return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: U,
            sort: q.sort,
            splice: q.splice
        }, Z.extend = Z.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || Z.isFunction(s) || (s = {}), a === l && (s = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) n = s[e], i = t[e], s !== i && (u && i && (Z.isPlainObject(i) || (r = Z.isArray(i))) ? (r ? (r = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, s[e] = Z.extend(u, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }, Z.extend({
            expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === Z.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !Z.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" === Z.type(t) && !t.nodeType && !Z.isWindow(t) && !(t.constructor && !Q.call(t.constructor.prototype, "isPrototypeOf"))
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? Y[V.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                (t = Z.trim(t)) && (1 === t.indexOf("use strict") ? (e = K.createElement("script"), e.text = t, K.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(nt, it)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var r = 0,
                    o = t.length,
                    s = n(t);
                if (i) {
                    if (s)
                        for (; o > r && !1 !== e.apply(t[r], i); r++);
                    else
                        for (r in t)
                            if (!1 === e.apply(t[r], i)) break
                } else if (s)
                    for (; o > r && !1 !== e.call(t[r], r, t[r]); r++);
                else
                    for (r in t)
                        if (!1 === e.call(t[r], r, t[r])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? Z.merge(i, "string" == typeof t ? [t] : t) : U.call(i, t)), i
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : X.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
                return t.length = r, t
            },
            grep: function(t, e, n) {
                for (var i = [], r = 0, o = t.length, s = !n; o > r; r++) !e(t[r], r) !== s && i.push(t[r]);
                return i
            },
            map: function(t, e, i) {
                var r, o = 0,
                    s = t.length,
                    a = n(t),
                    l = [];
                if (a)
                    for (; s > o; o++) null != (r = e(t[o], o, i)) && l.push(r);
                else
                    for (o in t) null != (r = e(t[o], o, i)) && l.push(r);
                return B.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                return "string" == typeof e && (n = t[e], e = t, t = n), Z.isFunction(t) ? (i = F.call(arguments, 2), r = function() {
                    return t.apply(e || this, i.concat(F.call(arguments)))
                }, r.guid = t.guid = t.guid || Z.guid++, r) : void 0
            },
            now: Date.now,
            support: G
        }), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            Y["[object " + e + "]"] = e.toLowerCase()
        });
        var rt = function(t) {
            function e(t, e, n, i) {
                var r, o, s, a, u, d, f, p, h, v;
                if ((e ? e.ownerDocument || e : H) !== j && A(e), e = e || j, n = n || [], a = e.nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
                if (!i && z) {
                    if (11 !== a && (r = gt.exec(t)))
                        if (s = r[1]) {
                            if (9 === a) {
                                if (!(o = e.getElementById(s)) || !o.parentNode) return n;
                                if (o.id === s) return n.push(o), n
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && I(e, o) && o.id === s) return n.push(o), n
                        } else {
                            if (r[2]) return G.apply(n, e.getElementsByTagName(t)), n;
                            if ((s = r[3]) && w.getElementsByClassName) return G.apply(n, e.getElementsByClassName(s)), n
                        }
                    if (w.qsa && (!N || !N.test(t))) {
                        if (p = f = P, h = e, v = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (d = k(t), (f = e.getAttribute("id")) ? p = f.replace(mt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", u = d.length; u--;) d[u] = p + c(d[u]);
                            h = yt.test(t) && l(e.parentNode) || e, v = d.join(",")
                        }
                        if (v) try {
                            return G.apply(n, h.querySelectorAll(v)), n
                        } catch (t) {} finally {
                            f || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(st, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > b.cacheLength && delete t[e.shift()], t[n + " "] = i
                }
                var e = [];
                return t
            }

            function i(t) {
                return t[P] = !0, t
            }

            function r(t) {
                var e = j.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) b.attrHandle[n[i]] = e
            }

            function s(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || U) - (~t.sourceIndex || U);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return i(function(e) {
                    return e = +e, i(function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
                })
            }

            function l(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function u() {}

            function c(t) {
                for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
                return i
            }

            function d(t, e, n) {
                var i = e.dir,
                    r = n && "parentNode" === i,
                    o = M++;
                return e.first ? function(e, n, o) {
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) return t(e, n, o)
                } : function(e, n, s) {
                    var a, l, u = [W, o];
                    if (s) {
                        for (; e = e[i];)
                            if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                    } else
                        for (; e = e[i];)
                            if (1 === e.nodeType || r) {
                                if (l = e[P] || (e[P] = {}), (a = l[i]) && a[0] === W && a[1] === o) return u[2] = a[2];
                                if (l[i] = u, u[2] = t(e, n, s)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function p(t, n, i) {
                for (var r = 0, o = n.length; o > r; r++) e(t, n[r], i);
                return i
            }

            function h(t, e, n, i, r) {
                for (var o, s = [], a = 0, l = t.length, u = null != e; l > a; a++)(o = t[a]) && (!n || n(o, i, r)) && (s.push(o), u && e.push(a));
                return s
            }

            function v(t, e, n, r, o, s) {
                return r && !r[P] && (r = v(r)), o && !o[P] && (o = v(o, s)), i(function(i, s, a, l) {
                    var u, c, d, f = [],
                        v = [],
                        g = s.length,
                        y = i || p(e || "*", a.nodeType ? [a] : a, []),
                        m = !t || !i && e ? y : h(y, f, t, a, l),
                        w = n ? o || (i ? t : g || r) ? [] : s : m;
                    if (n && n(m, w, a, l), r)
                        for (u = h(w, v), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (w[v[c]] = !(m[v[c]] = d));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (u = [], c = w.length; c--;)(d = w[c]) && u.push(m[c] = d);
                                o(null, w = [], u, l)
                            }
                            for (c = w.length; c--;)(d = w[c]) && (u = o ? J(i, d) : f[c]) > -1 && (i[u] = !(s[u] = d))
                        }
                    } else w = h(w === s ? w.splice(g, w.length) : w), o ? o(null, s, w, l) : G.apply(s, w)
                })
            }

            function g(t) {
                for (var e, n, i, r = t.length, o = b.relative[t[0].type], s = o || b.relative[" "], a = o ? 1 : 0, l = d(function(t) {
                        return t === e
                    }, s, !0), u = d(function(t) {
                        return J(e, t) > -1
                    }, s, !0), p = [function(t, n, i) {
                        var r = !o && (i || n !== C) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                        return e = null, r
                    }]; r > a; a++)
                    if (n = b.relative[t[a].type]) p = [d(f(p), n)];
                    else {
                        if (n = b.filter[t[a].type].apply(null, t[a].matches), n[P]) {
                            for (i = ++a; r > i && !b.relative[t[i].type]; i++);
                            return v(a > 1 && f(p), a > 1 && c(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(st, "$1"), n, i > a && g(t.slice(a, i)), r > i && g(t = t.slice(i)), r > i && c(t))
                        }
                        p.push(n)
                    }
                return f(p)
            }

            function y(t, n) {
                var r = n.length > 0,
                    o = t.length > 0,
                    s = function(i, s, a, l, u) {
                        var c, d, f, p = 0,
                            v = "0",
                            g = i && [],
                            y = [],
                            m = C,
                            w = i || o && b.find.TAG("*", u),
                            x = W += null == m ? 1 : Math.random() || .1,
                            T = w.length;
                        for (u && (C = s !== j && s); v !== T && null != (c = w[v]); v++) {
                            if (o && c) {
                                for (d = 0; f = t[d++];)
                                    if (f(c, s, a)) {
                                        l.push(c);
                                        break
                                    }
                                u && (W = x)
                            }
                            r && ((c = !f && c) && p--, i && g.push(c))
                        }
                        if (p += v, r && v !== p) {
                            for (d = 0; f = n[d++];) f(g, y, s, a);
                            if (i) {
                                if (p > 0)
                                    for (; v--;) g[v] || y[v] || (y[v] = V.call(l));
                                y = h(y)
                            }
                            G.apply(l, y), u && !i && y.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                        }
                        return u && (W = x, C = m), g
                    };
                return r ? i(s) : s
            }
            var m, w, b, x, T, k, _, S, C, E, $, A, j, O, z, N, L, D, I, P = "sizzle" + 1 * new Date,
                H = t.document,
                W = 0,
                M = 0,
                R = n(),
                q = n(),
                F = n(),
                B = function(t, e) {
                    return t === e && ($ = !0), 0
                },
                U = 1 << 31,
                X = {}.hasOwnProperty,
                Y = [],
                V = Y.pop,
                Q = Y.push,
                G = Y.push,
                K = Y.slice,
                J = function(t, e) {
                    for (var n = 0, i = t.length; i > n; n++)
                        if (t[n] === e) return n;
                    return -1
                },
                Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                nt = et.replace("w", "w#"),
                it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + tt + "*\\]",
                rt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                ot = new RegExp(tt + "+", "g"),
                st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                at = new RegExp("^" + tt + "*," + tt + "*"),
                lt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                ut = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ct = new RegExp(rt),
                dt = new RegExp("^" + nt + "$"),
                ft = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + rt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + Z + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                ht = /^h\d$/i,
                vt = /^[^{]+\{\s*\[native \w/,
                gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                mt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                bt = function(t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                },
                xt = function() {
                    A()
                };
            try {
                G.apply(Y = K.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
            } catch (t) {
                G = {
                    apply: Y.length ? function(t, e) {
                        Q.apply(t, K.call(e))
                    } : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];);
                        t.length = n - 1
                    }
                }
            }
            w = e.support = {}, T = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, A = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : H;
                return i !== j && 9 === i.nodeType && i.documentElement ? (j = i, O = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), z = !T(i), w.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = r(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = vt.test(i.getElementsByClassName), w.getById = r(function(t) {
                    return O.appendChild(t).id = P, !i.getElementsByName || !i.getElementsByName(P).length
                }), w.getById ? (b.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && z) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, b.filter.ID = function(t) {
                    var e = t.replace(wt, bt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete b.find.ID, b.filter.ID = function(t) {
                    var e = t.replace(wt, bt);
                    return function(t) {
                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), b.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        r = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return o
                }, b.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return z ? e.getElementsByClassName(t) : void 0
                }, L = [], N = [], (w.qsa = vt.test(i.querySelectorAll)) && (r(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + P + "'></a><select id='" + P + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + P + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + P + "+*").length || N.push(".#.+[+~]")
                }), r(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                })), (w.matchesSelector = vt.test(D = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && r(function(t) {
                    w.disconnectedMatch = D.call(t, "div"), D.call(t, "[s!='']:x"), L.push("!=", rt)
                }), N = N.length && new RegExp(N.join("|")), L = L.length && new RegExp(L.join("|")), e = vt.test(O.compareDocumentPosition), I = e || vt.test(O.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, B = e ? function(t, e) {
                    if (t === e) return $ = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === H && I(H, t) ? -1 : e === i || e.ownerDocument === H && I(H, e) ? 1 : E ? J(E, t) - J(E, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return $ = !0, 0;
                    var n, r = 0,
                        o = t.parentNode,
                        a = e.parentNode,
                        l = [t],
                        u = [e];
                    if (!o || !a) return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : E ? J(E, t) - J(E, e) : 0;
                    if (o === a) return s(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) u.unshift(n);
                    for (; l[r] === u[r];) r++;
                    return r ? s(l[r], u[r]) : l[r] === H ? -1 : u[r] === H ? 1 : 0
                }, i) : j
            }, e.matches = function(t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== j && A(t), n = n.replace(ut, "='$1']"), !(!w.matchesSelector || !z || L && L.test(n) || N && N.test(n))) try {
                    var i = D.call(t, n);
                    if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {}
                return e(n, j, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== j && A(t), I(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== j && A(t);
                var n = b.attrHandle[e.toLowerCase()],
                    i = n && X.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !z) : void 0;
                return void 0 !== i ? i : w.attributes || !z ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    r = 0;
                if ($ = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(B), $) {
                    for (; e = t[r++];) e === t[r] && (i = n.push(r));
                    for (; i--;) t.splice(n[i], 1)
                }
                return E = null, t
            }, x = e.getText = function(t) {
                var e, n = "",
                    i = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += x(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[i++];) n += x(e);
                return n
            }, b = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ct.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, bt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = R[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && R(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3),
                            s = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, n, l) {
                            var u, c, d, f, p, h, v = o !== s ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                y = a && e.nodeName.toLowerCase(),
                                m = !l && !a;
                            if (g) {
                                if (o) {
                                    for (; v;) {
                                        for (d = e; d = d[v];)
                                            if (a ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                                        h = v = "only" === t && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? g.firstChild : g.lastChild], s && m) {
                                    for (c = g[P] || (g[P] = {}), u = c[t] || [], p = u[0] === W && u[1], f = u[0] === W && u[2], d = p && g.childNodes[p]; d = ++p && d && d[v] || (f = p = 0) || h.pop();)
                                        if (1 === d.nodeType && ++f && d === e) {
                                            c[t] = [W, p, f];
                                            break
                                        }
                                } else if (m && (u = (e[P] || (e[P] = {}))[t]) && u[0] === W) f = u[1];
                                else
                                    for (;
                                        (d = ++p && d && d[v] || (f = p = 0) || h.pop()) && ((a ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++f || (m && ((d[P] || (d[P] = {}))[t] = [W, f]), d !== e)););
                                return (f -= r) === i || f % i == 0 && f / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, n) {
                        var r, o = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[P] ? o(n) : o.length > 1 ? (r = [t, t, "", n], b.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                            for (var i, r = o(t, n), s = r.length; s--;) i = J(t, r[s]), t[i] = !(e[i] = r[s])
                        }) : function(t) {
                            return o(t, 0, r)
                        }) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = [],
                            n = [],
                            r = _(t.replace(st, "$1"));
                        return r[P] ? i(function(t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, i, o) {
                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(wt, bt),
                            function(e) {
                                return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, bt).toLowerCase(),
                            function(e) {
                                var n;
                                do {
                                    if (n = z ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !b.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ht.test(t.nodeName)
                    },
                    input: function(t) {
                        return pt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: a(function() {
                        return [0]
                    }),
                    last: a(function(t, e) {
                        return [e - 1]
                    }),
                    eq: a(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: a(function(t, e) {
                        for (var n = 0; e > n; n += 2) t.push(n);
                        return t
                    }),
                    odd: a(function(t, e) {
                        for (var n = 1; e > n; n += 2) t.push(n);
                        return t
                    }),
                    lt: a(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }),
                    gt: a(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, b.pseudos.nth = b.pseudos.eq;
            for (m in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[m] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(m);
            for (m in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[m] = function(t) {
                return function(e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }(m);
            return u.prototype = b.filters = b.pseudos, b.setFilters = new u, k = e.tokenize = function(t, n) {
                var i, r, o, s, a, l, u, c = q[t + " "];
                if (c) return n ? 0 : c.slice(0);
                for (a = t, l = [], u = b.preFilter; a;) {
                    (!i || (r = at.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = lt.exec(a)) && (i = r.shift(), o.push({
                        value: i,
                        type: r[0].replace(st, " ")
                    }), a = a.slice(i.length));
                    for (s in b.filter) !(r = ft[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                        value: i,
                        type: s,
                        matches: r
                    }), a = a.slice(i.length));
                    if (!i) break
                }
                return n ? a.length : a ? e.error(t) : q(t, l).slice(0)
            }, _ = e.compile = function(t, e) {
                var n, i = [],
                    r = [],
                    o = F[t + " "];
                if (!o) {
                    for (e || (e = k(t)), n = e.length; n--;) o = g(e[n]), o[P] ? i.push(o) : r.push(o);
                    o = F(t, y(r, i)), o.selector = t
                }
                return o
            }, S = e.select = function(t, e, n, i) {
                var r, o, s, a, u, d = "function" == typeof t && t,
                    f = !i && k(t = d.selector || t);
                if (n = n || [], 1 === f.length) {
                    if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === e.nodeType && z && b.relative[o[1].type]) {
                        if (!(e = (b.find.ID(s.matches[0].replace(wt, bt), e) || [])[0])) return n;
                        d && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (r = ft.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !b.relative[a = s.type]);)
                        if ((u = b.find[a]) && (i = u(s.matches[0].replace(wt, bt), yt.test(o[0].type) && l(e.parentNode) || e))) {
                            if (o.splice(r, 1), !(t = i.length && c(o))) return G.apply(n, i), n;
                            break
                        }
                }
                return (d || _(t, f))(i, e, !z, n, yt.test(t) && l(e.parentNode) || e), n
            }, w.sortStable = P.split("").sort(B).join("") === P, w.detectDuplicates = !!$, A(), w.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(j.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, n) {
                return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, n) {
                return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(Z, function(t, e, n) {
                var i;
                return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        Z.find = rt, Z.expr = rt.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = rt.uniqueSort, Z.text = rt.getText, Z.isXMLDoc = rt.isXML, Z.contains = rt.contains;
        var ot = Z.expr.match.needsContext,
            st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            at = /^.[^:#\[\.,]*$/;
        Z.filter = function(t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? Z.find.matchesSelector(i, t) ? [i] : [] : Z.find.matches(t, Z.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, Z.fn.extend({
            find: function(t) {
                var e, n = this.length,
                    i = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(Z(t).filter(function() {
                    for (e = 0; n > e; e++)
                        if (Z.contains(r[e], this)) return !0
                }));
                for (e = 0; n > e; e++) Z.find(t, r[e], i);
                return i = this.pushStack(n > 1 ? Z.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && ot.test(t) ? Z(t) : t || [], !1).length
            }
        });
        var lt, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (Z.fn.init = function(t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || lt).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof Z ? e[0] : e, Z.merge(this, Z.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : K, !0)), st.test(n[1]) && Z.isPlainObject(e))
                        for (n in e) Z.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = K.getElementById(n[2]), i && i.parentNode && (this.length = 1, this[0] = i), this.context = K, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : Z.isFunction(t) ? void 0 !== lt.ready ? lt.ready(t) : t(Z) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), Z.makeArray(t, this))
        }).prototype = Z.fn, lt = Z(K);
        var ct = /^(?:parents|prev(?:Until|All))/,
            dt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        Z.extend({
            dir: function(t, e, n) {
                for (var i = [], r = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && Z(t).is(n)) break;
                        i.push(t)
                    }
                return i
            },
            sibling: function(t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), Z.fn.extend({
            has: function(t) {
                var e = Z(t, this),
                    n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (Z.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], s = ot.test(t) || "string" != typeof t ? Z(t, e || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? Z.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? X.call(Z(t), this[0]) : X.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(Z.unique(Z.merge(this.get(), Z(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), Z.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return Z.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return Z.dir(t, "parentNode", n)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return Z.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return Z.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return Z.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return Z.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return Z.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return Z.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || Z.merge([], t.childNodes)
            }
        }, function(t, e) {
            Z.fn[t] = function(n, i) {
                var r = Z.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = Z.filter(i, r)), this.length > 1 && (dt[t] || Z.unique(r), ct.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var ft = /\S+/g,
            pt = {};
        Z.Callbacks = function(t) {
            t = "string" == typeof t ? pt[t] || o(t) : Z.extend({}, t);
            var e, n, i, r, s, a, l = [],
                u = !t.once && [],
                c = function(o) {
                    for (e = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, i = !0; l && s > a; a++)
                        if (!1 === l[a].apply(o[0], o[1]) && t.stopOnFalse) {
                            e = !1;
                            break
                        }
                    i = !1, l && (u ? u.length && c(u.shift()) : e ? l = [] : d.disable())
                },
                d = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function e(n) {
                                Z.each(n, function(n, i) {
                                    var r = Z.type(i);
                                    "function" === r ? t.unique && d.has(i) || l.push(i) : i && i.length && "string" !== r && e(i)
                                })
                            }(arguments), i ? s = l.length : e && (r = n, c(e))
                        }
                        return this
                    },
                    remove: function() {
                        return l && Z.each(arguments, function(t, e) {
                            for (var n;
                                (n = Z.inArray(e, l, n)) > -1;) l.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? Z.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = u = e = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return u = void 0, e || d.disable(), this
                    },
                    locked: function() {
                        return !u
                    },
                    fireWith: function(t, e) {
                        return !l || n && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? u.push(e) : c(e)), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return d
        }, Z.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", Z.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", Z.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", Z.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return Z.Deferred(function(n) {
                                Z.each(e, function(e, o) {
                                    var s = Z.isFunction(t[e]) && t[e];
                                    r[o[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && Z.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? Z.extend(t, i) : i
                        }
                    },
                    r = {};
                return i.pipe = i.then, Z.each(e, function(t, o) {
                    var s = o[2],
                        a = o[3];
                    i[o[1]] = s.add, a && s.add(function() {
                        n = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function() {
                        return r[o[0] + "With"](this === r ? i : this, arguments), this
                    }, r[o[0] + "With"] = s.fireWith
                }), i.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, n, i, r = 0,
                    o = F.call(arguments),
                    s = o.length,
                    a = 1 !== s || t && Z.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : Z.Deferred(),
                    u = function(t, n, i) {
                        return function(r) {
                            n[t] = this, i[t] = arguments.length > 1 ? F.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && Z.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, e)) : --a;
                return a || l.resolveWith(i, o), l.promise()
            }
        });
        var ht;
        Z.fn.ready = function(t) {
            return Z.ready.promise().done(t), this
        }, Z.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? Z.readyWait++ : Z.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, !0 !== t && --Z.readyWait > 0 || (ht.resolveWith(K, [Z]), Z.fn.triggerHandler && (Z(K).triggerHandler("ready"), Z(K).off("ready"))))
            }
        }), Z.ready.promise = function(e) {
            return ht || (ht = Z.Deferred(), "complete" === K.readyState ? setTimeout(Z.ready) : (K.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1))), ht.promise(e)
        }, Z.ready.promise();
        var vt = Z.access = function(t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === Z.type(n)) {
                r = !0;
                for (a in n) Z.access(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0, Z.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
                    return u.call(Z(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        };
        Z.acceptData = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        }, a.uid = 1, a.accepts = Z.acceptData, a.prototype = {
            key: function(t) {
                if (!a.accepts(t)) return 0;
                var e = {},
                    n = t[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        e[this.expando] = {
                            value: n
                        }, Object.defineProperties(t, e)
                    } catch (i) {
                        e[this.expando] = n, Z.extend(t, e)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}), n
            },
            set: function(t, e, n) {
                var i, r = this.key(t),
                    o = this.cache[r];
                if ("string" == typeof e) o[e] = n;
                else if (Z.isEmptyObject(o)) Z.extend(this.cache[r], e);
                else
                    for (i in e) o[i] = e[i];
                return o
            },
            get: function(t, e) {
                var n = this.cache[this.key(t)];
                return void 0 === e ? n : n[e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e), void 0 !== i ? i : this.get(t, Z.camelCase(e))) : (this.set(t, e, n), void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, r, o = this.key(t),
                    s = this.cache[o];
                if (void 0 === e) this.cache[o] = {};
                else {
                    Z.isArray(e) ? i = e.concat(e.map(Z.camelCase)) : (r = Z.camelCase(e), e in s ? i = [e, r] : (i = r, i = i in s ? [i] : i.match(ft) || [])), n = i.length;
                    for (; n--;) delete s[i[n]]
                }
            },
            hasData: function(t) {
                return !Z.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
        var gt = new a,
            yt = new a,
            mt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            wt = /([A-Z])/g;
        Z.extend({
            hasData: function(t) {
                return yt.hasData(t) || gt.hasData(t)
            },
            data: function(t, e, n) {
                return yt.access(t, e, n)
            },
            removeData: function(t, e) {
                yt.remove(t, e)
            },
            _data: function(t, e, n) {
                return gt.access(t, e, n)
            },
            _removeData: function(t, e) {
                gt.remove(t, e)
            }
        }), Z.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0],
                    s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = yt.get(o), 1 === o.nodeType && !gt.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--;) s[n] && (i = s[n].name, 0 === i.indexOf("data-") && (i = Z.camelCase(i.slice(5)), l(o, i, r[i])));
                        gt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : vt(this, function(e) {
                    var n, i = Z.camelCase(t);
                    if (o && void 0 === e) {
                        if (void 0 !== (n = yt.get(o, t))) return n;
                        if (void 0 !== (n = yt.get(o, i))) return n;
                        if (void 0 !== (n = l(o, i, void 0))) return n
                    } else this.each(function() {
                        var n = yt.get(this, i);
                        yt.set(this, i, e), -1 !== t.indexOf("-") && void 0 !== n && yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    yt.remove(this, t)
                })
            }
        }), Z.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue", i = gt.get(t, e), n && (!i || Z.isArray(n) ? i = gt.access(t, e, Z.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = Z.queue(t, e),
                    i = n.length,
                    r = n.shift(),
                    o = Z._queueHooks(t, e),
                    s = function() {
                        Z.dequeue(t, e)
                    };
                "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return gt.get(t, n) || gt.access(t, n, {
                    empty: Z.Callbacks("once memory").add(function() {
                        gt.remove(t, [e + "queue", n])
                    })
                })
            }
        }), Z.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? Z.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var n = Z.queue(this, t, e);
                    Z._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && Z.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    Z.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1,
                    r = Z.Deferred(),
                    o = this,
                    s = this.length,
                    a = function() {
                        --i || r.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = gt.get(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            xt = ["Top", "Right", "Bottom", "Left"],
            Tt = function(t, e) {
                return t = e || t, "none" === Z.css(t, "display") || !Z.contains(t.ownerDocument, t)
            },
            kt = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = K.createDocumentFragment(),
                e = t.appendChild(K.createElement("div")),
                n = K.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), G.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var _t = "undefined";
        G.focusinBubbles = "onfocusin" in t;
        var St = /^key/,
            Ct = /^(?:mouse|pointer|contextmenu)|click/,
            Et = /^(?:focusinfocus|focusoutblur)$/,
            $t = /^([^.]*)(?:\.(.+)|)$/;
        Z.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, s, a, l, u, c, d, f, p, h, v, g = gt.get(t);
                if (g)
                    for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Z.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(e) {
                            return typeof Z !== _t && Z.event.triggered !== e.type ? Z.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(ft) || [""], u = e.length; u--;) a = $t.exec(e[u]) || [], p = v = a[1], h = (a[2] || "").split(".").sort(), p && (d = Z.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, d = Z.event.special[p] || {}, c = Z.extend({
                        type: p,
                        origType: v,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && Z.expr.match.needsContext.test(r),
                        namespace: h.join(".")
                    }, o), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, h, s) || t.addEventListener && t.addEventListener(p, s, !1)), d.add && (d.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, c) : f.push(c), Z.event.global[p] = !0)
            },
            remove: function(t, e, n, i, r) {
                var o, s, a, l, u, c, d, f, p, h, v, g = gt.hasData(t) && gt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(ft) || [""], u = e.length; u--;)
                        if (a = $t.exec(e[u]) || [], p = v = a[1], h = (a[2] || "").split(".").sort(), p) {
                            for (d = Z.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, f = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) c = f[o], !r && v !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(o, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(t, c));
                            s && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || Z.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) Z.event.remove(t, p + e[u], n, i, !0);
                    Z.isEmptyObject(l) && (delete g.handle, gt.remove(t, "events"))
                }
            },
            trigger: function(e, n, i, r) {
                var o, s, a, l, u, c, d, f = [i || K],
                    p = Q.call(e, "type") ? e.type : e,
                    h = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = i = i || K, 3 !== i.nodeType && 8 !== i.nodeType && !Et.test(p + Z.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[Z.expando] ? e : new Z.Event(p, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : Z.makeArray(n, [e]), d = Z.event.special[p] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, n))) {
                    if (!r && !d.noBubble && !Z.isWindow(i)) {
                        for (l = d.delegateType || p, Et.test(l + p) || (s = s.parentNode); s; s = s.parentNode) f.push(s), a = s;
                        a === (i.ownerDocument || K) && f.push(a.defaultView || a.parentWindow || t)
                    }
                    for (o = 0;
                        (s = f[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : d.bindType || p, c = (gt.get(s, "events") || {})[e.type] && gt.get(s, "handle"), c && c.apply(s, n), (c = u && s[u]) && c.apply && Z.acceptData(s) && (e.result = c.apply(s, n), !1 === e.result && e.preventDefault());
                    return e.type = p, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !Z.acceptData(i) || u && Z.isFunction(i[p]) && !Z.isWindow(i) && (a = i[u], a && (i[u] = null), Z.event.triggered = p, i[p](), Z.event.triggered = void 0, a && (i[u] = a)), e.result
                }
            },
            dispatch: function(t) {
                t = Z.event.fix(t);
                var e, n, i, r, o, s = [],
                    a = F.call(arguments),
                    l = (gt.get(this, "events") || {})[t.type] || [],
                    u = Z.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                    for (s = Z.event.handlers.call(this, t, l),
                        e = 0;
                        (r = s[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, n = 0;
                            (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (i = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return u.postDispatch && u.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var n, i, r, o, s = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l !== this; l = l.parentNode || this)
                        if (!0 !== l.disabled || "click" !== t.type) {
                            for (i = [], n = 0; a > n; n++) o = e[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Z(r, this).index(l) >= 0 : Z.find(r, this, null, [l]).length), i[r] && i.push(o);
                            i.length && s.push({
                                elem: l,
                                handlers: i
                            })
                        }
                return a < e.length && s.push({
                    elem: this,
                    handlers: e.slice(a)
                }), s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var n, i, r, o = e.button;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || K, i = n.documentElement, r = n.body, t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[Z.expando]) return t;
                var e, n, i, r = t.type,
                    o = t,
                    s = this.fixHooks[r];
                for (s || (this.fixHooks[r] = s = Ct.test(r) ? this.mouseHooks : St.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new Z.Event(o), e = i.length; e--;) n = i[e], t[n] = o[n];
                return t.target || (t.target = K), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, o) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== d() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return Z.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, n, i) {
                var r = Z.extend(new Z.Event, n, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? Z.event.trigger(r, null, e) : Z.event.dispatch.call(e, r), r.isDefaultPrevented() && n.preventDefault()
            }
        }, Z.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        }, Z.Event = function(t, e) {
            return this instanceof Z.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? u : c) : this.type = t, e && Z.extend(this, e), this.timeStamp = t && t.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(t, e)
        }, Z.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = u, t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = u, t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = u, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, Z.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            Z.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this,
                        r = t.relatedTarget,
                        o = t.handleObj;
                    return (!r || r !== i && !Z.contains(i, r)) && (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), G.focusinBubbles || Z.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var n = function(t) {
                Z.event.simulate(e, t.target, Z.event.fix(t), !0)
            };
            Z.event.special[e] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = gt.access(i, e);
                    r || i.addEventListener(t, n, !0), gt.access(i, e, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = gt.access(i, e) - 1;
                    r ? gt.access(i, e, r) : (i.removeEventListener(t, n, !0), gt.remove(i, e))
                }
            }
        }), Z.fn.extend({
            on: function(t, e, n, i, r) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (s in t) this.on(s, e, n, t[s], r);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = c;
                else if (!i) return this;
                return 1 === r && (o = i, i = function(t) {
                    return Z().off(t), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
                    Z.event.add(this, t, i, n, e)
                })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, Z(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = c), this.each(function() {
                    Z.event.remove(this, t, n, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    Z.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? Z.event.trigger(t, e, n, !0) : void 0
            }
        });
        var At = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            jt = /<([\w:]+)/,
            Ot = /<|&#?\w+;/,
            zt = /<(?:script|style|link)/i,
            Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Lt = /^$|\/(?:java|ecma)script/i,
            Dt = /^true\/(.*)/,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Pt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Pt.optgroup = Pt.option, Pt.tbody = Pt.tfoot = Pt.colgroup = Pt.caption = Pt.thead, Pt.th = Pt.td, Z.extend({
            clone: function(t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0),
                    l = Z.contains(t.ownerDocument, t);
                if (!(G.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || Z.isXMLDoc(t)))
                    for (s = y(a), o = y(t), i = 0, r = o.length; r > i; i++) m(o[i], s[i]);
                if (e)
                    if (n)
                        for (o = o || y(t), s = s || y(a), i = 0, r = o.length; r > i; i++) g(o[i], s[i]);
                    else g(t, a);
                return s = y(a, "script"), s.length > 0 && v(s, !l && y(t, "script")), a
            },
            buildFragment: function(t, e, n, i) {
                for (var r, o, s, a, l, u, c = e.createDocumentFragment(), d = [], f = 0, p = t.length; p > f; f++)
                    if ((r = t[f]) || 0 === r)
                        if ("object" === Z.type(r)) Z.merge(d, r.nodeType ? [r] : r);
                        else if (Ot.test(r)) {
                    for (o = o || c.appendChild(e.createElement("div")), s = (jt.exec(r) || ["", ""])[1].toLowerCase(), a = Pt[s] || Pt._default, o.innerHTML = a[1] + r.replace(At, "<$1></$2>") + a[2], u = a[0]; u--;) o = o.lastChild;
                    Z.merge(d, o.childNodes), o = c.firstChild, o.textContent = ""
                } else d.push(e.createTextNode(r));
                for (c.textContent = "", f = 0; r = d[f++];)
                    if ((!i || -1 === Z.inArray(r, i)) && (l = Z.contains(r.ownerDocument, r), o = y(c.appendChild(r), "script"), l && v(o), n))
                        for (u = 0; r = o[u++];) Lt.test(r.type || "") && n.push(r);
                return c
            },
            cleanData: function(t) {
                for (var e, n, i, r, o = Z.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                    if (Z.acceptData(n) && (r = n[gt.expando]) && (e = gt.cache[r])) {
                        if (e.events)
                            for (i in e.events) o[i] ? Z.event.remove(n, i) : Z.removeEvent(n, i, e.handle);
                        gt.cache[r] && delete gt.cache[r]
                    }
                    delete yt.cache[n[yt.expando]]
                }
            }
        }), Z.fn.extend({
            text: function(t) {
                return vt(this, function(t) {
                    return void 0 === t ? Z.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        f(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? Z.filter(t, this) : this, r = 0; null != (n = i[r]); r++) e || 1 !== n.nodeType || Z.cleanData(y(n)), n.parentNode && (e && Z.contains(n.ownerDocument, n) && v(y(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (Z.cleanData(y(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return Z.clone(this, t, e)
                })
            },
            html: function(t) {
                return vt(this, function(t) {
                    var e = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !zt.test(t) && !Pt[(jt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(At, "<$1></$2>");
                        try {
                            for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (Z.cleanData(y(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, Z.cleanData(y(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = B.apply([], t);
                var n, i, r, o, s, a, l = 0,
                    u = this.length,
                    c = this,
                    d = u - 1,
                    f = t[0],
                    v = Z.isFunction(f);
                if (v || u > 1 && "string" == typeof f && !G.checkClone && Nt.test(f)) return this.each(function(n) {
                    var i = c.eq(n);
                    v && (t[0] = f.call(this, n, i.html())), i.domManip(t, e)
                });
                if (u && (n = Z.buildFragment(t, this[0].ownerDocument, !1, this), i = n.firstChild, 1 === n.childNodes.length && (n = i), i)) {
                    for (r = Z.map(y(n, "script"), p), o = r.length; u > l; l++) s = n, l !== d && (s = Z.clone(s, !0, !0), o && Z.merge(r, y(s, "script"))), e.call(this[l], s, l);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, Z.map(r, h), l = 0; o > l; l++) s = r[l], Lt.test(s.type || "") && !gt.access(s, "globalEval") && Z.contains(a, s) && (s.src ? Z._evalUrl && Z._evalUrl(s.src) : Z.globalEval(s.textContent.replace(It, "")))
                }
                return this
            }
        }), Z.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            Z.fn[t] = function(t) {
                for (var n, i = [], r = Z(t), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), Z(r[s])[e](n), U.apply(i, n.get());
                return this.pushStack(i)
            }
        });
        var Ht, Wt = {},
            Mt = /^margin/,
            Rt = new RegExp("^(" + bt + ")(?!px)[a-z%]+$", "i"),
            qt = function(e) {
                return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
            };
        ! function() {
            function e() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", r.appendChild(o);
                var e = t.getComputedStyle(s, null);
                n = "1%" !== e.top, i = "4px" === e.width, r.removeChild(o)
            }
            var n, i, r = K.documentElement,
                o = K.createElement("div"),
                s = K.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(s), t.getComputedStyle && Z.extend(G, {
                pixelPosition: function() {
                    return e(), n
                },
                boxSizingReliable: function() {
                    return null == i && e(), i
                },
                reliableMarginRight: function() {
                    var e, n = s.appendChild(K.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", s.style.width = "1px", r.appendChild(o), e = !parseFloat(t.getComputedStyle(n, null).marginRight), r.removeChild(o), s.removeChild(n), e
                }
            }))
        }(), Z.swap = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e) t.style[o] = s[o];
            return r
        };
        var Ft = /^(none|table(?!-c[ea]).+)/,
            Bt = new RegExp("^(" + bt + ")(.*)$", "i"),
            Ut = new RegExp("^([+-])=(" + bt + ")", "i"),
            Xt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Yt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Vt = ["Webkit", "O", "Moz", "ms"];
        Z.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var n = x(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, o, s, a = Z.camelCase(e),
                        l = t.style;
                    return e = Z.cssProps[a] || (Z.cssProps[a] = k(l, a)), s = Z.cssHooks[e] || Z.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(t, !1, i)) ? r : l[e] : (o = typeof n, "string" === o && (r = Ut.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(Z.css(t, e)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[a] || (n += "px"), G.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
                }
            },
            css: function(t, e, n, i) {
                var r, o, s, a = Z.camelCase(e);
                return e = Z.cssProps[a] || (Z.cssProps[a] = k(t.style, a)), s = Z.cssHooks[e] || Z.cssHooks[a], s && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = x(t, e, i)), "normal" === r && e in Yt && (r = Yt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || Z.isNumeric(o) ? o || 0 : r) : r
            }
        }), Z.each(["height", "width"], function(t, e) {
            Z.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? Ft.test(Z.css(t, "display")) && 0 === t.offsetWidth ? Z.swap(t, Xt, function() {
                        return C(t, e, i)
                    }) : C(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var r = i && qt(t);
                    return _(t, n, i ? S(t, e, i, "border-box" === Z.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }), Z.cssHooks.marginRight = T(G.reliableMarginRight, function(t, e) {
            return e ? Z.swap(t, {
                display: "inline-block"
            }, x, [t, "marginRight"]) : void 0
        }), Z.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            Z.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + xt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            }, Mt.test(t) || (Z.cssHooks[t + e].set = _)
        }), Z.fn.extend({
            css: function(t, e) {
                return vt(this, function(t, e, n) {
                    var i, r, o = {},
                        s = 0;
                    if (Z.isArray(e)) {
                        for (i = qt(t), r = e.length; r > s; s++) o[e[s]] = Z.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? Z.style(t, e, n) : Z.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Tt(this) ? Z(this).show() : Z(this).hide()
                })
            }
        }), Z.Tween = $, $.prototype = {
            constructor: $,
            init: function(t, e, n, i, r, o) {
                this.elem = t, this.prop = n, this.easing = r || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (Z.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = $.propHooks[this.prop];
                return t && t.get ? t.get(this) : $.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = $.propHooks[this.prop];
                return this.options.duration ? this.pos = e = Z.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
            }
        }, $.prototype.init.prototype = $.prototype, $.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = Z.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    Z.fx.step[t.prop] ? Z.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[Z.cssProps[t.prop]] || Z.cssHooks[t.prop]) ? Z.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, Z.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, Z.fx = $.prototype.init, Z.fx.step = {};
        var Qt, Gt, Kt = /^(?:toggle|show|hide)$/,
            Jt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$", "i"),
            Zt = /queueHooks$/,
            te = [z],
            ee = {
                "*": [function(t, e) {
                    var n = this.createTween(t, e),
                        i = n.cur(),
                        r = Jt.exec(e),
                        o = r && r[3] || (Z.cssNumber[t] ? "" : "px"),
                        s = (Z.cssNumber[t] || "px" !== o && +i) && Jt.exec(Z.css(n.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== o) {
                        o = o || s[3], r = r || [], s = +i || 1;
                        do {
                            a = a || ".5", s /= a, Z.style(n.elem, t, s + o)
                        } while (a !== (a = n.cur() / i) && 1 !== a && --l)
                    }
                    return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]), n
                }]
            };
        Z.Animation = Z.extend(L, {
                tweener: function(t, e) {
                    Z.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, i = 0, r = t.length; r > i; i++) n = t[i], ee[n] = ee[n] || [], ee[n].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? te.unshift(t) : te.push(t)
                }
            }), Z.speed = function(t, e, n) {
                var i = t && "object" == typeof t ? Z.extend({}, t) : {
                    complete: n || !n && e || Z.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !Z.isFunction(e) && e
                };
                return i.duration = Z.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Z.fx.speeds ? Z.fx.speeds[i.duration] : Z.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    Z.isFunction(i.old) && i.old.call(this), i.queue && Z.dequeue(this, i.queue)
                }, i
            }, Z.fn.extend({
                fadeTo: function(t, e, n, i) {
                    return this.filter(Tt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = Z.isEmptyObject(t),
                        o = Z.speed(e, n, i),
                        s = function() {
                            var e = L(this, Z.extend({}, t), o);
                            (r || gt.get(this, "finish")) && e.stop(!0)
                        };
                    return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(t, e, n) {
                    var i = function(t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            o = Z.timers,
                            s = gt.get(this);
                        if (r) s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s) s[r] && s[r].stop && Zt.test(r) && i(s[r]);
                        for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                        (e || !n) && Z.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, n = gt.get(this),
                            i = n[t + "queue"],
                            r = n[t + "queueHooks"],
                            o = Z.timers,
                            s = i ? i.length : 0;
                        for (n.finish = !0, Z.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; s > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), Z.each(["toggle", "show", "hide"], function(t, e) {
                var n = Z.fn[e];
                Z.fn[e] = function(t, i, r) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(j(e, !0), t, i, r)
                }
            }), Z.each({
                slideDown: j("show"),
                slideUp: j("hide"),
                slideToggle: j("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                Z.fn[t] = function(t, n, i) {
                    return this.animate(e, t, n, i)
                }
            }), Z.timers = [], Z.fx.tick = function() {
                var t, e = 0,
                    n = Z.timers;
                for (Qt = Z.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || Z.fx.stop(), Qt = void 0
            }, Z.fx.timer = function(t) {
                Z.timers.push(t), t() ? Z.fx.start() : Z.timers.pop()
            }, Z.fx.interval = 13, Z.fx.start = function() {
                Gt || (Gt = setInterval(Z.fx.tick, Z.fx.interval))
            }, Z.fx.stop = function() {
                clearInterval(Gt), Gt = null
            }, Z.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, Z.fn.delay = function(t, e) {
                return t = Z.fx ? Z.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var t = K.createElement("input"),
                    e = K.createElement("select"),
                    n = e.appendChild(K.createElement("option"));
                t.type = "checkbox", G.checkOn = "" !== t.value, G.optSelected = n.selected, e.disabled = !0, G.optDisabled = !n.disabled, t = K.createElement("input"), t.value = "t", t.type = "radio", G.radioValue = "t" === t.value
            }();
        var ne, ie = Z.expr.attrHandle;
        Z.fn.extend({
            attr: function(t, e) {
                return vt(this, Z.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    Z.removeAttr(this, t)
                })
            }
        }), Z.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === _t ? Z.prop(t, e, n) : (1 === o && Z.isXMLDoc(t) || (e = e.toLowerCase(), i = Z.attrHooks[e] || (Z.expr.match.bool.test(e) ? ne : void 0)), void 0 === n ? i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = Z.find.attr(t, e), null == r ? void 0 : r) : null !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : void Z.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, r = 0,
                    o = e && e.match(ft);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++];) i = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!G.radioValue && "radio" === e && Z.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), ne = {
            set: function(t, e, n) {
                return !1 === e ? Z.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = ie[e] || Z.find.attr;
            ie[e] = function(t, e, i) {
                var r, o;
                return i || (o = ie[e], ie[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, ie[e] = o), r
            }
        });
        var re = /^(?:input|select|textarea|button)$/i;
        Z.fn.extend({
            prop: function(t, e) {
                return vt(this, Z.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[Z.propFix[t] || t]
                })
            }
        }), Z.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(t, e, n) {
                var i, r, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return o = 1 !== s || !Z.isXMLDoc(t), o && (e = Z.propFix[e] || e, r = Z.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || re.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }), G.optSelected || (Z.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }
        }), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            Z.propFix[this.toLowerCase()] = this
        });
        var oe = /[\t\r\n\f]/g;
        Z.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, s, a = "string" == typeof t && t,
                    l = 0,
                    u = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).addClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ft) || []; u > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(oe, " ") : " ")) {
                            for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s = Z.trim(i), n.className !== s && (n.className = s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t,
                    l = 0,
                    u = this.length;
                if (Z.isFunction(t)) return this.each(function(e) {
                    Z(this).removeClass(t.call(this, e, this.className))
                });
                if (a)
                    for (e = (t || "").match(ft) || []; u > l; l++)
                        if (n = this[l], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(oe, " ") : "")) {
                            for (o = 0; r = e[o++];)
                                for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                            s = t ? Z.trim(i) : "", n.className !== s && (n.className = s)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : this.each(Z.isFunction(t) ? function(n) {
                    Z(this).toggleClass(t.call(this, n, this.className, e), e)
                } : function() {
                    if ("string" === n)
                        for (var e, i = 0, r = Z(this), o = t.match(ft) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else(n === _t || "boolean" === n) && (this.className && gt.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : gt.get(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(oe, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        });
        var se = /\r/g;
        Z.fn.extend({
            val: function(t) {
                var e, n, i, r = this[0];
                return arguments.length ? (i = Z.isFunction(t), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = i ? t.call(this, n, Z(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : Z.isArray(r) && (r = Z.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = Z.valHooks[r.type] || Z.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(se, "") : null == n ? "" : n)) : void 0
            }
        }), Z.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = Z.find.attr(t, "value");
                        return null != e ? e : Z.trim(Z.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++)
                            if (n = i[l], !(!n.selected && l !== r || (G.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
                                if (e = Z(n).val(), o) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = Z.makeArray(e), s = r.length; s--;) i = r[s], (i.selected = Z.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), Z.each(["radio", "checkbox"], function() {
            Z.valHooks[this] = {
                set: function(t, e) {
                    return Z.isArray(e) ? t.checked = Z.inArray(Z(t).val(), e) >= 0 : void 0
                }
            }, G.checkOn || (Z.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            Z.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), Z.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var ae = Z.now(),
            le = /\?/;
        Z.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, Z.parseXML = function(t) {
            var e, n;
            if (!t || "string" != typeof t) return null;
            try {
                n = new DOMParser, e = n.parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return (!e || e.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + t), e
        };
        var ue = /#.*$/,
            ce = /([?&])_=[^&]*/,
            de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            pe = /^(?:GET|HEAD)$/,
            he = /^\/\//,
            ve = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            ge = {},
            ye = {},
            me = "*/".concat("*"),
            we = t.location.href,
            be = ve.exec(we.toLowerCase()) || [];
        Z.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: we,
                type: "GET",
                isLocal: fe.test(be[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": me,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": Z.parseJSON,
                    "text xml": Z.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? P(P(t, Z.ajaxSettings), e) : P(Z.ajaxSettings, t)
            },
            ajaxPrefilter: D(ge),
            ajaxTransport: D(ye),
            ajax: function(t, e) {
                function n(t, e, n, s) {
                    var l, c, y, m, b, T = e;
                    2 !== w && (w = 2, a && clearTimeout(a), i = void 0, o = s || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, n && (m = H(d, x, n)), m = W(d, m, x, l), l ? (d.ifModified && (b = x.getResponseHeader("Last-Modified"), b && (Z.lastModified[r] = b), (b = x.getResponseHeader("etag")) && (Z.etag[r] = b)), 204 === t || "HEAD" === d.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = m.state, c = m.data, y = m.error, l = !y)) : (y = T, (t || !T) && (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (e || T) + "", l ? h.resolveWith(f, [c, T, x]) : h.rejectWith(f, [x, T, y]), x.statusCode(g), g = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [x, d, l ? c : y]), v.fireWith(f, [x, T]), u && (p.trigger("ajaxComplete", [x, d]), --Z.active || Z.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, r, o, s, a, l, u, c, d = Z.ajaxSetup({}, e),
                    f = d.context || d,
                    p = d.context && (f.nodeType || f.jquery) ? Z(f) : Z.event,
                    h = Z.Deferred(),
                    v = Z.Callbacks("once memory"),
                    g = d.statusCode || {},
                    y = {},
                    m = {},
                    w = 0,
                    b = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!s)
                                    for (s = {}; e = de.exec(o);) s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var n = t.toLowerCase();
                            return w || (t = m[n] = m[n] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return i && i.abort(e), n(0, e), this
                        }
                    };
                if (h.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || we) + "").replace(ue, "").replace(he, be[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(ft) || [""], null == d.crossDomain && (l = ve.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === be[1] && l[2] === be[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (be[3] || ("http:" === be[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), I(ge, d, e, x), 2 === w) return x;
                u = Z.event && d.global, u && 0 == Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !pe.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (le.test(r) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = ce.test(r) ? r.replace(ce, "$1_=" + ae++) : r + (le.test(r) ? "&" : "?") + "_=" + ae++)), d.ifModified && (Z.lastModified[r] && x.setRequestHeader("If-Modified-Since", Z.lastModified[r]), Z.etag[r] && x.setRequestHeader("If-None-Match", Z.etag[r])), (d.data && d.hasContent && !1 !== d.contentType || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + me + "; q=0.01" : "") : d.accepts["*"]);
                for (c in d.headers) x.setRequestHeader(c, d.headers[c]);
                if (d.beforeSend && (!1 === d.beforeSend.call(f, x, d) || 2 === w)) return x.abort();
                b = "abort";
                for (c in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[c](d[c]);
                if (i = I(ye, d, e, x)) {
                    x.readyState = 1, u && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (a = setTimeout(function() {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        w = 1, i.send(y, n)
                    } catch (t) {
                        if (!(2 > w)) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, n) {
                return Z.get(t, e, n, "json")
            },
            getScript: function(t, e) {
                return Z.get(t, void 0, e, "script")
            }
        }), Z.each(["get", "post"], function(t, e) {
            Z[e] = function(t, n, i, r) {
                return Z.isFunction(n) && (r = r || i, i = n, n = void 0), Z.ajax({
                    url: t,
                    type: e,
                    dataType: r,
                    data: n,
                    success: i
                })
            }
        }), Z._evalUrl = function(t) {
            return Z.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, Z.fn.extend({
            wrapAll: function(t) {
                var e;
                return Z.isFunction(t) ? this.each(function(e) {
                    Z(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = Z(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return this.each(Z.isFunction(t) ? function(e) {
                    Z(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = Z(this),
                        n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = Z.isFunction(t);
                return this.each(function(n) {
                    Z(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
                }).end()
            }
        }), Z.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }, Z.expr.filters.visible = function(t) {
            return !Z.expr.filters.hidden(t)
        };
        var xe = /%20/g,
            Te = /\[\]$/,
            ke = /\r?\n/g,
            _e = /^(?:submit|button|image|reset|file)$/i,
            Se = /^(?:input|select|textarea|keygen)/i;
        Z.param = function(t, e) {
            var n, i = [],
                r = function(t, e) {
                    e = Z.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(t) || t.jquery && !Z.isPlainObject(t)) Z.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) M(n, t[n], e, r);
            return i.join("&").replace(xe, "+")
        }, Z.fn.extend({
            serialize: function() {
                return Z.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = Z.prop(this, "elements");
                    return t ? Z.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !Z(this).is(":disabled") && Se.test(this.nodeName) && !_e.test(t) && (this.checked || !kt.test(t))
                }).map(function(t, e) {
                    var n = Z(this).val();
                    return null == n ? null : Z.isArray(n) ? Z.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ke, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(ke, "\r\n")
                    }
                }).get()
            }
        }), Z.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        };
        var Ce = 0,
            Ee = {},
            $e = {
                0: 200,
                1223: 204
            },
            Ae = Z.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function() {
                for (var t in Ee) Ee[t]()
            }), G.cors = !!Ae && "withCredentials" in Ae, G.ajax = Ae = !!Ae,
            Z.ajaxTransport(function(t) {
                var e;
                return G.cors || Ae && !t.crossDomain ? {
                    send: function(n, i) {
                        var r, o = t.xhr(),
                            s = ++Ce;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (r in t.xhrFields) o[r] = t.xhrFields[r];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (r in n) o.setRequestHeader(r, n[r]);
                        e = function(t) {
                            return function() {
                                e && (delete Ee[s], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i($e[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = e(), o.onerror = e("error"), e = Ee[s] = e("abort");
                        try {
                            o.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e) throw t
                        }
                    },
                    abort: function() {
                        e && e()
                    }
                } : void 0
            }), Z.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /(?:java|ecma)script/
                },
                converters: {
                    "text script": function(t) {
                        return Z.globalEval(t), t
                    }
                }
            }), Z.ajaxPrefilter("script", function(t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), Z.ajaxTransport("script", function(t) {
                if (t.crossDomain) {
                    var e, n;
                    return {
                        send: function(i, r) {
                            e = Z("<script>").prop({
                                async: !0,
                                charset: t.scriptCharset,
                                src: t.url
                            }).on("load error", n = function(t) {
                                e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                            }), K.head.appendChild(e[0])
                        },
                        abort: function() {
                            n && n()
                        }
                    }
                }
            });
        var je = [],
            Oe = /(=)\?(?=&|$)|\?\?/;
        Z.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = je.pop() || Z.expando + "_" + ae++;
                return this[t] = !0, t
            }
        }), Z.ajaxPrefilter("json jsonp", function(e, n, i) {
            var r, o, s, a = !1 !== e.jsonp && (Oe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = Z.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Oe, "$1" + r) : !1 !== e.jsonp && (e.url += (le.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return s || Z.error(r + " was not called"), s[0]
            }, e.dataTypes[0] = "json", o = t[r], t[r] = function() {
                s = arguments
            }, i.always(function() {
                t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, je.push(r)), s && Z.isFunction(o) && o(s[0]), s = o = void 0
            }), "script") : void 0
        }), Z.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || K;
            var i = st.exec(t),
                r = !n && [];
            return i ? [e.createElement(i[1])] : (i = Z.buildFragment([t], e, r), r && r.length && Z(r).remove(), Z.merge([], i.childNodes))
        };
        var ze = Z.fn.load;
        Z.fn.load = function(t, e, n) {
            if ("string" != typeof t && ze) return ze.apply(this, arguments);
            var i, r, o, s = this,
                a = t.indexOf(" ");
            return a >= 0 && (i = Z.trim(t.slice(a)), t = t.slice(0, a)), Z.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), s.length > 0 && Z.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, s.html(i ? Z("<div>").append(Z.parseHTML(t)).find(i) : t)
            }).complete(n && function(t, e) {
                s.each(n, o || [t.responseText, e, t])
            }), this
        }, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            Z.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), Z.expr.filters.animated = function(t) {
            return Z.grep(Z.timers, function(e) {
                return t === e.elem
            }).length
        };
        var Ne = t.document.documentElement;
        Z.offset = {
            setOffset: function(t, e, n) {
                var i, r, o, s, a, l, u, c = Z.css(t, "position"),
                    d = Z(t),
                    f = {};
                "static" === c && (t.style.position = "relative"), a = d.offset(), o = Z.css(t, "top"), l = Z.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (i = d.position(), s = i.top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), Z.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + r), "using" in e ? e.using.call(t, f) : d.css(f)
            }
        }, Z.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    Z.offset.setOffset(this, t, e)
                });
                var e, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    o = i && i.ownerDocument;
                return o ? (e = o.documentElement, Z.contains(e, i) ? (typeof i.getBoundingClientRect !== _t && (r = i.getBoundingClientRect()), n = R(o), {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0],
                        i = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === Z.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), Z.nodeName(t[0], "html") || (i = t.offset()), i.top += Z.css(t[0], "borderTopWidth", !0), i.left += Z.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - Z.css(n, "marginTop", !0),
                        left: e.left - i.left - Z.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Ne; t && !Z.nodeName(t, "html") && "static" === Z.css(t, "position");) t = t.offsetParent;
                    return t || Ne
                })
            }
        }), Z.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = "pageYOffset" === n;
            Z.fn[e] = function(r) {
                return vt(this, function(e, r, o) {
                    var s = R(e);
                    return void 0 === o ? s ? s[n] : e[r] : void(s ? s.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
                }, e, r, arguments.length, null)
            }
        }), Z.each(["top", "left"], function(t, e) {
            Z.cssHooks[e] = T(G.pixelPosition, function(t, n) {
                return n ? (n = x(t, e), Rt.test(n) ? Z(t).position()[e] + "px" : n) : void 0
            })
        }), Z.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            Z.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                Z.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i),
                        s = n || (!0 === i || !0 === r ? "margin" : "border");
                    return vt(this, function(e, n, i) {
                        var r;
                        return Z.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? Z.css(e, n, s) : Z.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }), Z.fn.size = function() {
            return this.length
        }, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return Z
        });
        var Le = t.jQuery,
            De = t.$;
        return Z.noConflict = function(e) {
            return t.$ === Z && (t.$ = De), e && t.jQuery === Z && (t.jQuery = Le), Z
        }, typeof e === _t && (t.jQuery = t.$ = Z), Z
    }),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = window.Slick || {};
        e = function() {
            function e(e, i) {
                var r, o = this;
                o.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: t(e),
                    appendDots: t(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(t, e) {
                        return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (e + 1) + "</button>"
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !1,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, o.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, t.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.hidden = "hidden", o.paused = !1, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = t(e), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, r = t(e).data("slick") || {}, o.options = t.extend({}, o.defaults, r, i), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = t.proxy(o.autoPlay, o), o.autoPlayClear = t.proxy(o.autoPlayClear, o), o.changeSlide = t.proxy(o.changeSlide, o), o.clickHandler = t.proxy(o.clickHandler, o), o.selectHandler = t.proxy(o.selectHandler, o), o.setPosition = t.proxy(o.setPosition, o), o.swipeHandler = t.proxy(o.swipeHandler, o), o.dragHandler = t.proxy(o.dragHandler, o), o.keyHandler = t.proxy(o.keyHandler, o), o.autoPlayIterator = t.proxy(o.autoPlayIterator, o), o.instanceUid = n++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0), o.checkResponsive(!0)
            }
            var n = 0;
            return e
        }(), e.prototype.addSlide = e.prototype.slickAdd = function(e, n, i) {
            var r = this;
            if ("boolean" == typeof n) i = n, n = null;
            else if (0 > n || n >= r.slideCount) return !1;
            r.unload(), "number" == typeof n ? 0 === n && 0 === r.$slides.length ? t(e).appendTo(r.$slideTrack) : i ? t(e).insertBefore(r.$slides.eq(n)) : t(e).insertAfter(r.$slides.eq(n)) : !0 === i ? t(e).prependTo(r.$slideTrack) : t(e).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e)
            }), r.$slidesCache = r.$slides, r.reinit()
        }, e.prototype.animateHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.animate({
                    height: e
                }, t.options.speed)
            }
        }, e.prototype.animateSlide = function(e, n) {
            var i = {},
                r = this;
            r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (e = -e), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
                left: e
            }, r.options.speed, r.options.easing, n) : r.$slideTrack.animate({
                top: e
            }, r.options.speed, r.options.easing, n) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), t({
                animStart: r.currentLeft
            }).animate({
                animStart: e
            }, {
                duration: r.options.speed,
                easing: r.options.easing,
                step: function(t) {
                    t = Math.ceil(t), !1 === r.options.vertical ? (i[r.animType] = "translate(" + t + "px, 0px)", r.$slideTrack.css(i)) : (i[r.animType] = "translate(0px," + t + "px)", r.$slideTrack.css(i))
                },
                complete: function() {
                    n && n.call()
                }
            })) : (r.applyTransition(), e = Math.ceil(e), !1 === r.options.vertical ? i[r.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[r.animType] = "translate3d(0px," + e + "px, 0px)", r.$slideTrack.css(i), n && setTimeout(function() {
                r.disableTransition(), n.call()
            }, r.options.speed))
        }, e.prototype.asNavFor = function(e) {
            var n = this,
                i = n.options.asNavFor;
            i && null !== i && (i = t(i).not(n.$slider)), null !== i && "object" == typeof i && i.each(function() {
                var n = t(this).slick("getSlick");
                n.unslicked || n.slideHandler(e, !0)
            })
        }, e.prototype.applyTransition = function(t) {
            var e = this,
                n = {};
            !1 === e.options.fade ? n[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : n[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.autoPlay = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer), t.slideCount > t.options.slidesToShow && !0 !== t.paused && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
        }, e.prototype.autoPlayClear = function() {
            var t = this;
            t.autoPlayTimer && clearInterval(t.autoPlayTimer)
        }, e.prototype.autoPlayIterator = function() {
            var t = this;
            !1 === t.options.infinite ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0), t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 == 0 && (t.direction = 1), t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
        }, e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, e.prototype.buildDots = function() {
            var e, n, i = this;
            if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
                for (n = '<ul class="' + i.options.dotsClass + '">', e = 0; e <= i.getDotCount(); e += 1) n += "<li>" + i.options.customPaging.call(this, i, e) + "</li>";
                n += "</ul>", i.$dots = t(n).appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
            }
        }, e.prototype.buildOut = function() {
            var e = this;
            e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, n) {
                t(n).attr("data-slick-index", e).data("originalStyling", t(n).attr("style") || "")
            }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), (!0 === e.options.centerMode || !0 === e.options.swipeToSlide) && (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
        }, e.prototype.buildRows = function() {
            var t, e, n, i, r, o, s, a = this;
            if (i = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
                for (s = a.options.slidesPerRow * a.options.rows, r = Math.ceil(o.length / s), t = 0; r > t; t++) {
                    var l = document.createElement("div");
                    for (e = 0; e < a.options.rows; e++) {
                        var u = document.createElement("div");
                        for (n = 0; n < a.options.slidesPerRow; n++) {
                            var c = t * s + (e * a.options.slidesPerRow + n);
                            o.get(c) && u.appendChild(o.get(c))
                        }
                        l.appendChild(u)
                    }
                    i.appendChild(l)
                }
                a.$slider.html(i), a.$slider.children().children().children().css({
                    width: 100 / a.options.slidesPerRow + "%",
                    display: "inline-block"
                })
            }
        }, e.prototype.checkResponsive = function(e, n) {
            var i, r, o, s = this,
                a = !1,
                l = s.$slider.width(),
                u = window.innerWidth || t(window).width();
            if ("window" === s.respondTo ? o = u : "slider" === s.respondTo ? o = l : "min" === s.respondTo && (o = Math.min(u, l)), s.options.responsive && s.options.responsive.length && null !== s.options.responsive) {
                r = null;
                for (i in s.breakpoints) s.breakpoints.hasOwnProperty(i) && (!1 === s.originalSettings.mobileFirst ? o < s.breakpoints[i] && (r = s.breakpoints[i]) : o > s.breakpoints[i] && (r = s.breakpoints[i]));
                null !== r ? null !== s.activeBreakpoint ? (r !== s.activeBreakpoint || n) && (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : (s.activeBreakpoint = r, "unslick" === s.breakpointSettings[r] ? s.unslick(r) : (s.options = t.extend({}, s.originalSettings, s.breakpointSettings[r]), !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e)), a = r) : null !== s.activeBreakpoint && (s.activeBreakpoint = null, s.options = s.originalSettings, !0 === e && (s.currentSlide = s.options.initialSlide), s.refresh(e), a = r), e || !1 === a || s.$slider.trigger("breakpoint", [s, a])
            }
        }, e.prototype.changeSlide = function(e, n) {
            var i, r, o, s = this,
                a = t(e.target);
            switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), o = s.slideCount % s.options.slidesToScroll != 0, i = o ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
                case "previous":
                    r = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, n);
                    break;
                case "next":
                    r = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, n);
                    break;
                case "index":
                    var l = 0 === e.data.index ? 0 : e.data.index || a.index() * s.options.slidesToScroll;
                    s.slideHandler(s.checkNavigable(l), !1, n), a.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, e.prototype.checkNavigable = function(t) {
            var e, n;
            if (e = this.getNavigableIndexes(), n = 0, t > e[e.length - 1]) t = e[e.length - 1];
            else
                for (var i in e) {
                    if (t < e[i]) {
                        t = n;
                        break
                    }
                    n = e[i]
                }
            return t
        }, e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide), !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && t("li", e.$dots).off("mouseenter.slick", t.proxy(e.setPaused, e, !0)).off("mouseleave.slick", t.proxy(e.setPaused, e, !1))), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.$list.off("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.cleanUpRows = function() {
            var t, e = this;
            e.options.rows > 1 && (t = e.$slides.children().children(), t.removeAttr("style"), e.$slider.html(t))
        }, e.prototype.clickHandler = function(t) {
            !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
        }, e.prototype.destroy = function(e) {
            var n = this;
            n.autoPlayClear(), n.touchObject = {}, n.cleanUpEvents(), t(".slick-cloned", n.$slider).detach(), n.$dots && n.$dots.remove(), n.$prevArrow && n.$prevArrow.length && (n.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.prevArrow) && n.$prevArrow.remove()), n.$nextArrow && n.$nextArrow.length && (n.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), n.htmlExpr.test(n.options.nextArrow) && n.$nextArrow.remove()), n.$slides && (n.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                t(this).attr("style", t(this).data("originalStyling"))
            }), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.detach(), n.$list.detach(), n.$slider.append(n.$slides)), n.cleanUpRows(), n.$slider.removeClass("slick-slider"), n.$slider.removeClass("slick-initialized"), n.unslicked = !0, e || n.$slider.trigger("destroy", [n])
        }, e.prototype.disableTransition = function(t) {
            var e = this,
                n = {};
            n[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(n) : e.$slides.eq(t).css(n)
        }, e.prototype.fadeSlide = function(t, e) {
            var n = this;
            !1 === n.cssTransitions ? (n.$slides.eq(t).css({
                zIndex: n.options.zIndex
            }), n.$slides.eq(t).animate({
                opacity: 1
            }, n.options.speed, n.options.easing, e)) : (n.applyTransition(t), n.$slides.eq(t).css({
                opacity: 1,
                zIndex: n.options.zIndex
            }), e && setTimeout(function() {
                n.disableTransition(t), e.call()
            }, n.options.speed))
        }, e.prototype.fadeSlideOut = function(t) {
            var e = this;
            !1 === e.cssTransitions ? e.$slides.eq(t).animate({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
                opacity: 0,
                zIndex: e.options.zIndex - 2
            }))
        }, e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
            var e = this;
            null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
        }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
            return this.currentSlide
        }, e.prototype.getDotCount = function() {
            var t = this,
                e = 0,
                n = 0,
                i = 0;
            if (!0 === t.options.infinite)
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            else if (!0 === t.options.centerMode) i = t.slideCount;
            else
                for (; e < t.slideCount;) ++i, e = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
            return i - 1
        }, e.prototype.getLeft = function(t) {
            var e, n, i, r = this,
                o = 0;
            return r.slideOffset = 0, n = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = n * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && t + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (t > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (t - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (t - r.slideCount)) * n * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * n * -1))) : t + r.options.slidesToShow > r.slideCount && (r.slideOffset = (t + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (t + r.options.slidesToShow - r.slideCount) * n), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), e = !1 === r.options.vertical ? t * r.slideWidth * -1 + r.slideOffset : t * n * -1 + o, !0 === r.options.variableWidth && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow), e = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, !0 === r.options.centerMode && (i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(t) : r.$slideTrack.children(".slick-slide").eq(t + r.options.slidesToShow + 1), e = !0 === r.options.rtl ? i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0 : i[0] ? -1 * i[0].offsetLeft : 0, e += (r.$list.width() - i.outerWidth()) / 2)), e
        }, e.prototype.getOption = e.prototype.slickGetOption = function(t) {
            return this.options[t]
        }, e.prototype.getNavigableIndexes = function() {
            var t, e = this,
                n = 0,
                i = 0,
                r = [];
            for (!1 === e.options.infinite ? t = e.slideCount : (n = -1 * e.options.slidesToScroll, i = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); t > n;) r.push(n), n = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
            return r
        }, e.prototype.getSlick = function() {
            return this
        }, e.prototype.getSlideCount = function() {
            var e, n, i = this;
            return n = !0 === i.options.centerMode ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0, !0 === i.options.swipeToSlide ? (i.$slideTrack.find(".slick-slide").each(function(r, o) {
                return o.offsetLeft - n + t(o).outerWidth() / 2 > -1 * i.swipeLeft ? (e = o, !1) : void 0
            }), Math.abs(t(e).attr("data-slick-index") - i.currentSlide) || 1) : i.options.slidesToScroll
        }, e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
            this.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(t)
                }
            }, e)
        }, e.prototype.init = function(e) {
            var n = this;
            t(n.$slider).hasClass("slick-initialized") || (t(n.$slider).addClass("slick-initialized"), n.buildRows(), n.buildOut(), n.setProps(), n.startLoad(), n.loadSlider(), n.initializeEvents(), n.updateArrows(), n.updateDots()), e && n.$slider.trigger("init", [n]), !0 === n.options.accessibility && n.initADA()
        }, e.prototype.initArrowEvents = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on("click.slick", {
                message: "previous"
            }, t.changeSlide), t.$nextArrow.on("click.slick", {
                message: "next"
            }, t.changeSlide))
        }, e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots && e.slideCount > e.options.slidesToShow && t("li", e.$dots).on("click.slick", {
                message: "index"
            }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && !0 === e.options.autoplay && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.setPaused, e, !0)).on("mouseleave.slick", t.proxy(e.setPaused, e, !1))
        }, e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(), e.initDotEvents(), e.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), e.$list.on("mouseenter.slick", t.proxy(e.setPaused, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.setPaused, e, !1)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
        }, e.prototype.initUI = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show(), !0 === t.options.autoplay && t.autoPlay()
        }, e.prototype.keyHandler = function(t) {
            var e = this;
            t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({
                data: {
                    message: "previous"
                }
            }) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({
                data: {
                    message: "next"
                }
            }))
        }, e.prototype.lazyLoad = function() {
            function e(e) {
                t("img[data-lazy]", e).each(function() {
                    var e = t(this),
                        n = t(this).attr("data-lazy"),
                        i = document.createElement("img");
                    i.onload = function() {
                        e.animate({
                            opacity: 0
                        }, 100, function() {
                            e.attr("src", n).animate({
                                opacity: 1
                            }, 200, function() {
                                e.removeAttr("data-lazy").removeClass("slick-loading")
                            })
                        })
                    }, i.src = n
                })
            }
            var n, i, r, o, s = this;
            !0 === s.options.centerMode ? !0 === s.options.infinite ? (r = s.currentSlide + (s.options.slidesToShow / 2 + 1), o = r + s.options.slidesToShow + 2) : (r = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1)), o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide) : (r = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide, o = r + s.options.slidesToShow, !0 === s.options.fade && (r > 0 && r--, o <= s.slideCount && o++)), n = s.$slider.find(".slick-slide").slice(r, o), e(n), s.slideCount <= s.options.slidesToShow ? (i = s.$slider.find(".slick-slide"), e(i)) : s.currentSlide >= s.slideCount - s.options.slidesToShow ? (i = s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow), e(i)) : 0 === s.currentSlide && (i = s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow), e(i))
        }, e.prototype.loadSlider = function() {
            var t = this;
            t.setPosition(), t.$slideTrack.css({
                opacity: 1
            }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
        }, e.prototype.next = e.prototype.slickNext = function() {
            this.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, e.prototype.orientationChange = function() {
            var t = this;
            t.checkResponsive(), t.setPosition()
        }, e.prototype.pause = e.prototype.slickPause = function() {
            var t = this;
            t.autoPlayClear(), t.paused = !0
        }, e.prototype.play = e.prototype.slickPlay = function() {
            var t = this;
            t.paused = !1, t.autoPlay()
        }, e.prototype.postSlide = function(t) {
            var e = this;
            e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.setPosition(), e.swipeLeft = null, !0 === e.options.autoplay && !1 === e.paused && e.autoPlay(), !0 === e.options.accessibility && e.initADA()
        }, e.prototype.prev = e.prototype.slickPrev = function() {
            this.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, e.prototype.preventDefault = function(t) {
            t.preventDefault()
        }, e.prototype.progressiveLazyLoad = function() {
            var e, n = this;
            t("img[data-lazy]", n.$slider).length > 0 && (e = t("img[data-lazy]", n.$slider).first(), e.attr("src", null), e.attr("src", e.attr("data-lazy")).removeClass("slick-loading").load(function() {
                e.removeAttr("data-lazy"), n.progressiveLazyLoad(), !0 === n.options.adaptiveHeight && n.setPosition()
            }).error(function() {
                e.removeAttr("data-lazy"), n.progressiveLazyLoad()
            }))
        }, e.prototype.refresh = function(e) {
            var n, i, r = this;
            i = r.slideCount - r.options.slidesToShow, r.options.infinite || (r.slideCount <= r.options.slidesToShow ? r.currentSlide = 0 : r.currentSlide > i && (r.currentSlide = i)), n = r.currentSlide, r.destroy(!0), t.extend(r, r.initials, {
                currentSlide: n
            }), r.init(), e || r.changeSlide({
                data: {
                    message: "index",
                    index: n
                }
            }, !1)
        }, e.prototype.registerBreakpoints = function() {
            var e, n, i, r = this,
                o = r.options.responsive || null;
            if ("array" === t.type(o) && o.length) {
                r.respondTo = r.options.respondTo || "window";
                for (e in o)
                    if (i = r.breakpoints.length - 1, n = o[e].breakpoint, o.hasOwnProperty(e)) {
                        for (; i >= 0;) r.breakpoints[i] && r.breakpoints[i] === n && r.breakpoints.splice(i, 1), i--;
                        r.breakpoints.push(n), r.breakpointSettings[n] = o[e].settings
                    }
                r.breakpoints.sort(function(t, e) {
                    return r.options.mobileFirst ? t - e : e - t
                })
            }
        }, e.prototype.reinit = function() {
            var e = this;
            e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses(0), e.setPosition(), e.$slider.trigger("reInit", [e]), !0 === e.options.autoplay && e.focusHandler()
        }, e.prototype.resize = function() {
            var e = this;
            t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
                e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
            }, 50))
        }, e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, n) {
            var i = this;
            return "boolean" == typeof t ? (e = t, t = !0 === e ? 0 : i.slideCount - 1) : t = !0 === e ? --t : t, !(i.slideCount < 1 || 0 > t || t > i.slideCount - 1) && (i.unload(), !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(t).remove(), i.$slides = i.$slideTrack.children(this.options.slide), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.append(i.$slides), i.$slidesCache = i.$slides, void i.reinit())
        }, e.prototype.setCSS = function(t) {
            var e, n, i = this,
                r = {};
            !0 === i.options.rtl && (t = -t), e = "left" == i.positionProp ? Math.ceil(t) + "px" : "0px", n = "top" == i.positionProp ? Math.ceil(t) + "px" : "0px", r[i.positionProp] = t, !1 === i.transformsEnabled ? i.$slideTrack.css(r) : (r = {}, !1 === i.cssTransitions ? (r[i.animType] = "translate(" + e + ", " + n + ")", i.$slideTrack.css(r)) : (r[i.animType] = "translate3d(" + e + ", " + n + ", 0px)", i.$slideTrack.css(r)))
        }, e.prototype.setDimensions = function() {
            var t = this;
            !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({
                padding: "0px " + t.options.centerPadding
            }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({
                padding: t.options.centerPadding + " 0px"
            })), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
                t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
            var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
            !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
        }, e.prototype.setFade = function() {
            var e, n = this;
            n.$slides.each(function(i, r) {
                e = n.slideWidth * i * -1, !0 === n.options.rtl ? t(r).css({
                    position: "relative",
                    right: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                }) : t(r).css({
                    position: "relative",
                    left: e,
                    top: 0,
                    zIndex: n.options.zIndex - 2,
                    opacity: 0
                })
            }), n.$slides.eq(n.currentSlide).css({
                zIndex: n.options.zIndex - 1,
                opacity: 1
            })
        }, e.prototype.setHeight = function() {
            var t = this;
            if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                t.$list.css("height", e)
            }
        }, e.prototype.setOption = e.prototype.slickSetOption = function(e, n, i) {
            var r, o, s = this;
            if ("responsive" === e && "array" === t.type(n))
                for (o in n)
                    if ("array" !== t.type(s.options.responsive)) s.options.responsive = [n[o]];
                    else {
                        for (r = s.options.responsive.length - 1; r >= 0;) s.options.responsive[r].breakpoint === n[o].breakpoint && s.options.responsive.splice(r, 1), r--;
                        s.options.responsive.push(n[o])
                    }
            else s.options[e] = n;
            !0 === i && (s.unload(), s.reinit())
        }, e.prototype.setPosition = function() {
            var t = this;
            t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
        }, e.prototype.setProps = function() {
            var t = this,
                e = document.body.style;
            t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
        }, e.prototype.setSlideClasses = function(t) {
            var e, n, i, r, o = this;
            n = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(t).addClass("slick-current"), !0 === o.options.centerMode ? (e = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (t >= e && t <= o.slideCount - 1 - e ? o.$slides.slice(t - e, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (i = o.options.slidesToShow + t, n.slice(i - e + 1, i + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? n.eq(n.length - 1 - o.options.slidesToShow).addClass("slick-center") : t === o.slideCount - 1 && n.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(t).addClass("slick-center")) : t >= 0 && t <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(t, t + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : n.length <= o.options.slidesToShow ? n.addClass("slick-active").attr("aria-hidden", "false") : (r = o.slideCount % o.options.slidesToShow, i = !0 === o.options.infinite ? o.options.slidesToShow + t : t, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - t < o.options.slidesToShow ? n.slice(i - (o.options.slidesToShow - r), i + r).addClass("slick-active").attr("aria-hidden", "false") : n.slice(i, i + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad()
        }, e.prototype.setupInfinite = function() {
            var e, n, i, r = this;
            if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (n = null, r.slideCount > r.options.slidesToShow)) {
                for (i = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, e = r.slideCount; e > r.slideCount - i; e -= 1) n = e - 1, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
                for (e = 0; i > e; e += 1) n = e, t(r.$slides[n]).clone(!0).attr("id", "").attr("data-slick-index", n + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
                r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    t(this).attr("id", "")
                })
            }
        }, e.prototype.setPaused = function(t) {
            var e = this;
            !0 === e.options.autoplay && !0 === e.options.pauseOnHover && (e.paused = t, t ? e.autoPlayClear() : e.autoPlay())
        }, e.prototype.selectHandler = function(e) {
            var n = this,
                i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                r = parseInt(i.attr("data-slick-index"));
            return r || (r = 0), n.slideCount <= n.options.slidesToShow ? (n.setSlideClasses(r), void n.asNavFor(r)) : void n.slideHandler(r)
        }, e.prototype.slideHandler = function(t, e, n) {
            var i, r, o, s, a = null,
                l = this;
            return e = e || !1, !0 === l.animating && !0 === l.options.waitForAnimate || !0 === l.options.fade && l.currentSlide === t || l.slideCount <= l.options.slidesToShow ? void 0 : (!1 === e && l.asNavFor(t), i = t, a = l.getLeft(i), s = l.getLeft(l.currentSlide), l.currentLeft = null === l.swipeLeft ? s : l.swipeLeft, !1 === l.options.infinite && !1 === l.options.centerMode && (0 > t || t > l.getDotCount() * l.options.slidesToScroll) ? void(!1 === l.options.fade && (i = l.currentSlide, !0 !== n ? l.animateSlide(s, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : !1 === l.options.infinite && !0 === l.options.centerMode && (0 > t || t > l.slideCount - l.options.slidesToScroll) ? void(!1 === l.options.fade && (i = l.currentSlide, !0 !== n ? l.animateSlide(s, function() {
                l.postSlide(i)
            }) : l.postSlide(i))) : (!0 === l.options.autoplay && clearInterval(l.autoPlayTimer), r = 0 > i ? l.slideCount % l.options.slidesToScroll != 0 ? l.slideCount - l.slideCount % l.options.slidesToScroll : l.slideCount + i : i >= l.slideCount ? l.slideCount % l.options.slidesToScroll != 0 ? 0 : i - l.slideCount : i, l.animating = !0, l.$slider.trigger("beforeChange", [l, l.currentSlide, r]), o = l.currentSlide, l.currentSlide = r, l.setSlideClasses(l.currentSlide), l.updateDots(), l.updateArrows(), !0 === l.options.fade ? (!0 !== n ? (l.fadeSlideOut(o), l.fadeSlide(r, function() {
                l.postSlide(r)
            })) : l.postSlide(r), void l.animateHeight()) : void(!0 !== n ? l.animateSlide(a, function() {
                l.postSlide(r)
            }) : l.postSlide(r))))
        }, e.prototype.startLoad = function() {
            var t = this;
            !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
        }, e.prototype.swipeDirection = function() {
            var t, e, n, i, r = this;
            return t = r.touchObject.startX - r.touchObject.curX, e = r.touchObject.startY - r.touchObject.curY, n = Math.atan2(e, t), i = Math.round(180 * n / Math.PI), 0 > i && (i = 360 - Math.abs(i)), 45 >= i && i >= 0 ? !1 === r.options.rtl ? "left" : "right" : 360 >= i && i >= 315 ? !1 === r.options.rtl ? "left" : "right" : i >= 135 && 225 >= i ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? i >= 35 && 135 >= i ? "left" : "right" : "vertical"
        }, e.prototype.swipeEnd = function(t) {
            var e, n = this;
            if (n.dragging = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
            if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) switch (n.swipeDirection()) {
                case "left":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.slideHandler(e), n.currentDirection = 0, n.touchObject = {}, n.$slider.trigger("swipe", [n, "left"]);
                    break;
                case "right":
                    e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.slideHandler(e), n.currentDirection = 1, n.touchObject = {}, n.$slider.trigger("swipe", [n, "right"])
            } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
        }, e.prototype.swipeHandler = function(t) {
            var e = this;
            if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
                case "start":
                    e.swipeStart(t);
                    break;
                case "move":
                    e.swipeMove(t);
                    break;
                case "end":
                    e.swipeEnd(t)
            }
        }, e.prototype.swipeMove = function(t) {
            var e, n, i, r, o, s = this;
            return o = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!s.dragging || o && 1 !== o.length) && (e = s.getLeft(s.currentSlide), s.touchObject.curX = void 0 !== o ? o[0].pageX : t.clientX, s.touchObject.curY = void 0 !== o ? o[0].pageY : t.clientY, s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curX - s.touchObject.startX, 2))), !0 === s.options.verticalSwiping && (s.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(s.touchObject.curY - s.touchObject.startY, 2)))), n = s.swipeDirection(), "vertical" !== n ? (void 0 !== t.originalEvent && s.touchObject.swipeLength > 4 && t.preventDefault(), r = (!1 === s.options.rtl ? 1 : -1) * (s.touchObject.curX > s.touchObject.startX ? 1 : -1), !0 === s.options.verticalSwiping && (r = s.touchObject.curY > s.touchObject.startY ? 1 : -1), i = s.touchObject.swipeLength, s.touchObject.edgeHit = !1, !1 === s.options.infinite && (0 === s.currentSlide && "right" === n || s.currentSlide >= s.getDotCount() && "left" === n) && (i = s.touchObject.swipeLength * s.options.edgeFriction, s.touchObject.edgeHit = !0), !1 === s.options.vertical ? s.swipeLeft = e + i * r : s.swipeLeft = e + i * (s.$list.height() / s.listWidth) * r, !0 === s.options.verticalSwiping && (s.swipeLeft = e + i * r), !0 !== s.options.fade && !1 !== s.options.touchMove && (!0 === s.animating ? (s.swipeLeft = null, !1) : void s.setCSS(s.swipeLeft))) : void 0)
        }, e.prototype.swipeStart = function(t) {
            var e, n = this;
            return 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow ? (n.touchObject = {}, !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), n.touchObject.startX = n.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, n.touchObject.startY = n.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, void(n.dragging = !0))
        }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
            var t = this;
            null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
        }, e.prototype.unload = function() {
            var e = this;
            t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, e.prototype.unslick = function(t) {
            var e = this;
            e.$slider.trigger("unslick", [e, t]), e.destroy()
        }, e.prototype.updateArrows = function() {
            var t = this;
            Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, e.prototype.updateDots = function() {
            var t = this;
            null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
        }, e.prototype.visibility = function() {
            var t = this;
            document[t.hidden] ? (t.paused = !0, t.autoPlayClear()) : !0 === t.options.autoplay && (t.paused = !1, t.autoPlay())
        }, e.prototype.initADA = function() {
            var e = this;
            e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
                "aria-hidden": "true",
                tabindex: "-1"
            }).find("a, input, button, select").attr({
                tabindex: "-1"
            }), e.$slideTrack.attr("role", "listbox"), e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(n) {
                t(this).attr({
                    role: "option",
                    "aria-describedby": "slick-slide" + e.instanceUid + n
                })
            }), null !== e.$dots && e.$dots.attr("role", "tablist").find("li").each(function(n) {
                t(this).attr({
                    role: "presentation",
                    "aria-selected": "false",
                    "aria-controls": "navigation" + e.instanceUid + n,
                    id: "slick-slide" + e.instanceUid + n
                })
            }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), e.activateADA()
        }, e.prototype.activateADA = function() {
            this.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, e.prototype.focusHandler = function() {
            var e = this;
            e.$slider.on("focus.slick blur.slick", "*", function(n) {
                n.stopImmediatePropagation();
                var i = t(this);
                setTimeout(function() {
                    e.isPlay && (i.is(":focus") ? (e.autoPlayClear(), e.paused = !0) : (e.paused = !1, e.autoPlay()))
                }, 0)
            })
        }, t.fn.slick = function() {
            var t, n, i = this,
                r = arguments[0],
                o = Array.prototype.slice.call(arguments, 1),
                s = i.length;
            for (t = 0; s > t; t++)
                if ("object" == typeof r || void 0 === r ? i[t].slick = new e(i[t], r) : n = i[t].slick[r].apply(i[t].slick, o), void 0 !== n) return n;
            return i
        }
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(n) {
            e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function n(n, o, a) {
            function l(t, e, i) {
                var r, o = "$()." + n + '("' + e + '")';
                return t.each(function(t, l) {
                    var u = a.data(l, n);
                    if (!u) return void s(n + " not initialized. Cannot call methods, i.e. " + o);
                    var c = u[e];
                    if (!c || "_" == e.charAt(0)) return void s(o + " is not a valid method");
                    var d = c.apply(u, i);
                    r = void 0 === r ? d : r
                }), void 0 !== r ? r : t
            }

            function u(t, e) {
                t.each(function(t, i) {
                    var r = a.data(i, n);
                    r ? (r.option(e), r._init()) : (r = new o(i, e), a.data(i, n, r))
                })
            }(a = a || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[n] = function(t) {
                if ("string" == typeof t) {
                    return l(this, t, r.call(arguments, 1))
                }
                return u(this, t), this
            }, i(a))
        }

        function i(t) {
            !t || t && t.bridget || (t.bridget = n)
        }
        var r = Array.prototype.slice,
            o = t.console,
            s = void 0 === o ? function() {} : function(t) {
                o.error(t)
            };
        return i(e || t.jQuery), n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var n = this._events = this._events || {},
                    i = n[t] = n[t] || [];
                return -1 == i.indexOf(e) && i.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var n = this._onceEvents = this._onceEvents || {};
                return (n[t] = n[t] || [])[e] = !0, this
            }
        }, e.off = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = n.indexOf(e);
                return -1 != i && n.splice(i, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var n = this._events && this._events[t];
            if (n && n.length) {
                var i = 0,
                    r = n[i];
                e = e || [];
                for (var o = this._onceEvents && this._onceEvents[t]; r;) {
                    var s = o && o[r];
                    s && (this.off(t, r), delete o[r]), r.apply(this, e), i += s ? 0 : 1, r = n[i]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }

        function e() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; u > e; e++) {
                t[l[e]] = 0
            }
            return t
        }

        function i(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function r() {
            if (!c) {
                c = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(e);
                var r = i(e);
                o.isBoxSizeOuter = s = 200 == t(r.width), n.removeChild(e)
            }
        }

        function o(e) {
            if (r(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var o = i(e);
                if ("none" == o.display) return n();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var c = a.isBorderBox = "border-box" == o.boxSizing, d = 0; u > d; d++) {
                    var f = l[d],
                        p = o[f],
                        h = parseFloat(p);
                    a[f] = isNaN(h) ? 0 : h
                }
                var v = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    y = a.marginLeft + a.marginRight,
                    m = a.marginTop + a.marginBottom,
                    w = a.borderLeftWidth + a.borderRightWidth,
                    b = a.borderTopWidth + a.borderBottomWidth,
                    x = c && s,
                    T = t(o.width);
                !1 !== T && (a.width = T + (x ? 0 : v + w));
                var k = t(o.height);
                return !1 !== k && (a.height = k + (x ? 0 : g + b)), a.innerWidth = a.width - (v + w), a.innerHeight = a.height - (g + b), a.outerWidth = a.width + y, a.outerHeight = a.height + m, a
            }
        }
        var s, a = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            u = l.length,
            c = !1;
        return o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
                var i = e[n],
                    r = i + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        return function(e, n) {
            return e[t](n)
        }
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["matches-selector/matches-selector"], function(n) {
            return e(t, n)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var n = {};
        n.extend = function(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        }, n.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0; n < t.length; n++) e.push(t[n]);
            else e.push(t);
            return e
        }, n.removeFrom = function(t, e) {
            var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
        }, n.getParent = function(t, n) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, n)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, i) {
            t = n.makeArray(t);
            var r = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!i) return void r.push(t);
                    e(t, i) && r.push(t);
                    for (var n = t.querySelectorAll(i), o = 0; o < n.length; o++) r.push(n[o])
                }
            }), r
        }, n.debounceMethod = function(t, e, n) {
            var i = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    o = this;
                this[r] = setTimeout(function() {
                    i.apply(o, e), delete o[r]
                }, n || 100)
            }
        }, n.docReady = function(t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        };
        var i = t.console;
        return n.htmlInit = function(e, r) {
            n.docReady(function() {
                var o = n.toDashed(r),
                    s = "data-" + o,
                    a = document.querySelectorAll("[" + s + "]"),
                    l = document.querySelectorAll(".js-" + o),
                    u = n.makeArray(a).concat(n.makeArray(l)),
                    c = s + "-options",
                    d = t.jQuery;
                u.forEach(function(t) {
                    var n, o = t.getAttribute(s) || t.getAttribute(c);
                    try {
                        n = o && JSON.parse(o)
                    } catch (e) {
                        return void(i && i.error("Error parsing " + s + " on " + t.className + ": " + e))
                    }
                    var a = new e(t, n);
                    d && d.data(t, r, a)
                })
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], function(n, i) {
            return e(t, n, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EvEmitter, t.getSize))
    }(window, function(t, e, n) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return null, !0
        }

        function r(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }
        var o = document.documentElement.style,
            s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[s],
            u = [a, s, s + "Duration", s + "Property"],
            c = r.prototype = Object.create(e.prototype);
        c.constructor = r, c._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, c.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, c.getSize = function() {
            this.size = n(this.element)
        }, c.css = function(t) {
            var e = this.element.style;
            for (var n in t) {
                e[u[n] || n] = t[n]
            }
        }, c.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                i = t[e ? "left" : "right"],
                r = t[n ? "top" : "bottom"],
                o = this.layout.size,
                s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * o.width : parseInt(i, 10),
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.height : parseInt(r, 10);
            s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? o.paddingLeft : o.paddingRight, a -= n ? o.paddingTop : o.paddingBottom, this.position.x = s, this.position.y = a
        }, c.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                r = n ? "paddingLeft" : "paddingRight",
                o = n ? "left" : "right",
                s = n ? "right" : "left",
                a = this.position.x + t[r];
            e[o] = this.getXValue(a), e[s] = "";
            var l = i ? "paddingTop" : "paddingBottom",
                u = i ? "top" : "bottom",
                c = i ? "bottom" : "top",
                d = this.position.y + t[l];
            e[u] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this])
        }, c.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, c.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, c._transitionTo = function(t, e) {
            this.getPosition();
            var n = this.position.x,
                i = this.position.y,
                r = parseInt(t, 10),
                o = parseInt(e, 10),
                s = r === this.position.x && o === this.position.y;
            if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();
            var a = t - n,
                l = e - i,
                u = {};
            u.transform = this.getTranslate(a, l), this.transition({
                to: u,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, c.getTranslate = function(t, e) {
            var n = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop");
            return t = n ? t : -t, e = i ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, c.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, c.moveTo = c._transitionTo, c.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, c._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, c._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
            for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var d = "opacity," + function(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }(u.transform || "transform");
        c.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: d,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(l, this, !1))
        }, c.transition = r.prototype[s ? "_transition" : "_nonTransition"], c.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, c.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var f = {
            "-webkit-transform": "transform"
        };
        c.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = f[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    e.onEnd[n].call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, c.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, c._removeStyles = function(t) {
            var e = {};
            for (var n in t) e[n] = "";
            this.css(e)
        };
        var p = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return c.removeTransitionStyles = function() {
            this.css(p)
        }, c.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, c.remove = function() {
            return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, c.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, c.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var n in e) return n
        }, c.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {};
            e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, c.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, c.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, r
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(n, i, r, o) {
            return e(t, n, i, r, o)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, n, i, r) {
        "use strict";

        function o(t, e) {
            var n = i.getQueryElement(t);
            if (!n) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t)));
            this.element = n, l && (this.$element = l(this.element)), this.options = i.extend({}, this.constructor.defaults), this.option(e);
            var r = ++c;
            this.element.outlayerGUID = r, d[r] = this, this._create(), this._getOption("initLayout") && this.layout()
        }

        function s(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }
        var a = t.console,
            l = t.jQuery,
            u = function() {},
            c = 0,
            d = {};
        o.namespace = "outlayer", o.Item = r, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var f = o.prototype;
        return i.extend(f, e.prototype), f.option = function(t) {
                i.extend(this.options, t)
            }, f._getOption = function(t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
            }, o.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer"
            }, f._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), i.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
            }, f.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, f._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
                    var o = e[r],
                        s = new n(o, this);
                    i.push(s)
                }
                return i
            }, f._filterFindItemElements = function(t) {
                return i.filterFindElements(t, this.options.itemSelector)
            }, f.getItemElements = function() {
                return this.items.map(function(t) {
                    return t.element
                })
            }, f.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0
            }, f._init = f.layout, f._resetLayout = function() {
                this.getSize()
            }, f.getSize = function() {
                this.size = n(this.element)
            }, f._getMeasurement = function(t, e) {
                var i, r = this.options[t];
                r ? ("string" == typeof r ? i = this.element.querySelector(r) : r instanceof HTMLElement && (i = r), this[t] = i ? n(i)[e] : r) : this[t] = 0
            }, f.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, f._getItemsForLayout = function(t) {
                return t.filter(function(t) {
                    return !t.isIgnored
                })
            }, f._layoutItems = function(t, e) {
                if (this._emitCompleteOnItems("layout", t), t && t.length) {
                    var n = [];
                    t.forEach(function(t) {
                        var i = this._getItemLayoutPosition(t);
                        i.item = t, i.isInstant = e || t.isLayoutInstant, n.push(i)
                    }, this), this._processLayoutQueue(n)
                }
            }, f._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, f._processLayoutQueue = function(t) {
                t.forEach(function(t) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant)
                }, this)
            }, f._positionItem = function(t, e, n, i) {
                i ? t.goTo(e, n) : t.moveTo(e, n)
            }, f._postLayout = function() {
                this.resizeContainer()
            }, f.resizeContainer = function() {
                if (this._getOption("resizeContainer")) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, f._getContainerSize = u, f._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var n = this.size;
                    n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, f._emitCompleteOnItems = function(t, e) {
                function n() {
                    r.dispatchEvent(t + "Complete", null, [e])
                }

                function i() {
                    ++s == o && n()
                }
                var r = this,
                    o = e.length;
                if (!e || !o) return void n();
                var s = 0;
                e.forEach(function(e) {
                    e.once(t, i)
                })
            }, f.dispatchEvent = function(t, e, n) {
                var i = e ? [e].concat(n) : n;
                if (this.emitEvent(t, i), l)
                    if (this.$element = this.$element || l(this.element), e) {
                        var r = l.Event(e);
                        r.type = t, this.$element.trigger(r, n)
                    } else this.$element.trigger(t, n)
            }, f.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, f.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, f.stamp = function(t) {
                (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
            }, f.unstamp = function(t) {
                (t = this._find(t)) && t.forEach(function(t) {
                    i.removeFrom(this.stamps, t), this.unignore(t)
                }, this)
            }, f._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i.makeArray(t)) : void 0
            }, f._manageStamps = function() {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
            }, f._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, f._manageStamp = u, f._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    r = n(t);
                return {
                    left: e.left - i.left - r.marginLeft,
                    top: e.top - i.top - r.marginTop,
                    right: i.right - e.right - r.marginRight,
                    bottom: i.bottom - e.bottom - r.marginBottom
                }
            }, f.handleEvent = i.handleEvent, f.bindResize = function() {
                t.addEventListener("resize", this), this.isResizeBound = !0
            },
            f.unbindResize = function() {
                t.removeEventListener("resize", this), this.isResizeBound = !1
            }, f.onresize = function() {
                this.resize()
            }, i.debounceMethod(o, "onresize", 100), f.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, f.needsResizeLayout = function() {
                var t = n(this.element);
                return this.size && t && t.innerWidth !== this.size.innerWidth
            }, f.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, f.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, f.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var n = this.items.slice(0);
                    this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
                }
            }, f.reveal = function(t) {
                this._emitCompleteOnItems("reveal", t), t && t.length && t.forEach(function(t) {
                    t.reveal()
                })
            }, f.hide = function(t) {
                this._emitCompleteOnItems("hide", t), t && t.length && t.forEach(function(t) {
                    t.hide()
                })
            }, f.revealItemElements = function(t) {
                var e = this.getItems(t);
                this.reveal(e)
            }, f.hideItemElements = function(t) {
                var e = this.getItems(t);
                this.hide(e)
            }, f.getItem = function(t) {
                for (var e = 0; e < this.items.length; e++) {
                    var n = this.items[e];
                    if (n.element == t) return n
                }
            }, f.getItems = function(t) {
                t = i.makeArray(t);
                var e = [];
                return t.forEach(function(t) {
                    var n = this.getItem(t);
                    n && e.push(n)
                }, this), e
            }, f.remove = function(t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                    t.remove(), i.removeFrom(this.items, t)
                }, this)
            }, f.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                    t.destroy()
                }), this.unbindResize();
                var e = this.element.outlayerGUID;
                delete d[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
            }, o.data = function(t) {
                t = i.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && d[e]
            }, o.create = function(t, e) {
                var n = s(o);
                return n.defaults = i.extend({}, o.defaults), i.extend(n.defaults, e), n.compatOptions = i.extend({}, o.compatOptions), n.namespace = t, n.data = o.data, n.Item = s(r), i.htmlInit(n, t), l && l.bridget && l.bridget(t, n), n
            }, o.Item = r, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var n = t.create("masonry");
        return n.compatOptions.fitWidth = "isFitWidth", n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    n = t && t.element;
                this.columnWidth = n && e(n).outerWidth || this.containerWidth
            }
            var i = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                o = r / i,
                s = i - r % i,
                a = s && 1 > s ? "round" : "floor";
            o = Math[a](o), this.cols = Math.max(o, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                n = t ? this.element.parentNode : this.element,
                i = e(n);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                i = Math[n](t.size.outerWidth / this.columnWidth);
            i = Math.min(i, this.cols);
            for (var r = this._getColGroup(i), o = Math.min.apply(Math, r), s = r.indexOf(o), a = {
                    x: this.columnWidth * s,
                    y: o
                }, l = o + t.size.outerHeight, u = this.cols + 1 - r.length, c = 0; u > c; c++) this.colYs[s + c] = l;
            return a
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                var r = this.colYs.slice(i, i + t);
                e[i] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var n = e(t),
                i = this._getElementOffset(t),
                r = this._getOption("originLeft"),
                o = r ? i.left : i.right,
                s = o + n.outerWidth,
                a = Math.floor(o / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(s / this.columnWidth);
            l -= s % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var u = this._getOption("originTop"), c = (u ? i.top : i.bottom) + n.outerHeight, d = a; l >= d; d++) this.colYs[d] = Math.max(c, this.colYs[d])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, n
    }),
    function(t, e) {
        var n = function(t, e) {
            "use strict";
            if (e.getElementsByClassName) {
                var n, i = e.documentElement,
                    r = t.HTMLPictureElement && "sizes" in e.createElement("img"),
                    o = "addEventListener",
                    s = "getAttribute",
                    a = t[o],
                    l = t.setTimeout,
                    u = t.requestAnimationFrame || l,
                    c = /^picture$/i,
                    d = ["load", "error", "lazyincluded", "_lazyloaded"],
                    f = {},
                    p = Array.prototype.forEach,
                    h = function(t, e) {
                        return f[e] || (f[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), f[e].test(t[s]("class") || "") && f[e]
                    },
                    v = function(t, e) {
                        h(t, e) || t.setAttribute("class", (t[s]("class") || "").trim() + " " + e)
                    },
                    g = function(t, e) {
                        var n;
                        (n = h(t, e)) && t.setAttribute("class", (t[s]("class") || "").replace(n, " "))
                    },
                    y = function(t, e, n) {
                        var i = n ? o : "removeEventListener";
                        n && y(t, e), d.forEach(function(n) {
                            t[i](n, e)
                        })
                    },
                    m = function(t, n, i, r, o) {
                        var s = e.createEvent("CustomEvent");
                        return s.initCustomEvent(n, !r, !o, i || {}), t.dispatchEvent(s), s
                    },
                    w = function(e, i) {
                        var o;
                        !r && (o = t.picturefill || n.pf) ? o({
                            reevaluate: !0,
                            elements: [e]
                        }) : i && i.src && (e.src = i.src)
                    },
                    b = function(t, e) {
                        return (getComputedStyle(t, null) || {})[e]
                    },
                    x = function(t, e, i) {
                        for (i = i || t.offsetWidth; i < n.minSize && e && !t._lazysizesWidth;) i = e.offsetWidth, e = e.parentNode;
                        return i
                    },
                    T = function(e) {
                        var n, i = 0,
                            r = t.Date,
                            o = function() {
                                n = !1, i = r.now(), e()
                            },
                            s = function() {
                                l(o)
                            },
                            a = function() {
                                u(s)
                            };
                        return function() {
                            if (!n) {
                                var t = 125 - (r.now() - i);
                                n = !0, 6 > t && (t = 6), l(a, t)
                            }
                        }
                    },
                    k = function() {
                        var r, d, f, x, k, S, C, E, $, A, j, O, z, N, L, D = /^img$/i,
                            I = /^iframe$/i,
                            P = "onscroll" in t && !/glebot/.test(navigator.userAgent),
                            H = 0,
                            W = 0,
                            M = 0,
                            R = function(t) {
                                W--, t && t.target && y(t.target, R), (!t || 0 > W || !t.target) && (W = 0)
                            },
                            q = function(t, n) {
                                var r, o = t,
                                    s = "hidden" == b(e.body, "visibility") || "hidden" != b(t, "visibility");
                                for ($ -= n, O += n, A -= n, j += n; s && (o = o.offsetParent) && o != e.body && o != i;)(s = (b(o, "opacity") || 1) > 0) && "visible" != b(o, "overflow") && (r = o.getBoundingClientRect(), s = j > r.left && A < r.right && O > r.top - 1 && $ < r.bottom + 1);
                                return s
                            },
                            F = function() {
                                var t, e, o, a, l, u, c, p, h;
                                if ((k = n.loadMode) && 8 > W && (t = r.length)) {
                                    e = 0, M++, null == N && ("expand" in n || (n.expand = i.clientHeight > 600 ? i.clientWidth > 600 ? 550 : 410 : 359), z = n.expand, N = z * n.expFactor), N > H && 1 > W && M > 3 && k > 2 ? (H = N, M = 0) : H = k > 1 && M > 2 && 6 > W ? z : 0;
                                    for (; t > e; e++)
                                        if (r[e] && !r[e]._lazyRace)
                                            if (P)
                                                if ((p = r[e][s]("data-expand")) && (u = 1 * p) || (u = H), h !== u && (C = innerWidth + u * L, E = innerHeight + u, c = -1 * u, h = u), o = r[e].getBoundingClientRect(), (O = o.bottom) >= c && ($ = o.top) <= E && (j = o.right) >= c * L && (A = o.left) <= C && (O || j || A || $) && (f && 3 > W && !p && (3 > k || 4 > M) || q(r[e], u))) {
                                                    if (G(r[e]), l = !0, W > 9) break
                                                } else !l && f && !a && 4 > W && 4 > M && k > 2 && (d[0] || n.preloadAfterLoad) && (d[0] || !p && (O || j || A || $ || "auto" != r[e][s](n.sizesAttr))) && (a = d[0] || r[e]);
                                    else G(r[e]);
                                    a && !l && G(a)
                                }
                            },
                            B = T(F),
                            U = function(t) {
                                v(t.target, n.loadedClass), g(t.target, n.loadingClass), y(t.target, X)
                            },
                            X = function(t) {
                                t = {
                                    target: t.target
                                }, u(function() {
                                    U(t)
                                })
                            },
                            Y = function(t, e) {
                                try {
                                    t.contentWindow.location.replace(e)
                                } catch (n) {
                                    t.src = e
                                }
                            },
                            V = function(t) {
                                var e, i, r = t[s](n.srcsetAttr);
                                (e = n.customMedia[t[s]("data-media") || t[s]("media")]) && t.setAttribute("media", e), r && t.setAttribute("srcset", r), e && (i = t.parentNode, i.insertBefore(t.cloneNode(), t), i.removeChild(t))
                            },
                            Q = function() {
                                var t, e = [],
                                    n = function() {
                                        for (; e.length;) e.shift()();
                                        t = !1
                                    };
                                return {
                                    add: function(i) {
                                        e.push(i), t || (t = !0, u(n))
                                    },
                                    run: n
                                }
                            }(),
                            G = function(t) {
                                var e, i, r, o, a, d, b, T = D.test(t.nodeName),
                                    k = T && (t[s](n.sizesAttr) || t[s]("sizes")),
                                    S = "auto" == k;
                                (!S && f || !T || !t.src && !t.srcset || t.complete || h(t, n.errorClass)) && (S && (b = t.offsetWidth), t._lazyRace = !0, W++, n.rC && (b = n.rC(t, b) || b), Q.add(function() {
                                    (a = m(t, "lazybeforeunveil")).defaultPrevented || (k && (S ? (_.updateElem(t, !0, b), v(t, n.autosizesClass)) : t.setAttribute("sizes", k)), i = t[s](n.srcsetAttr), e = t[s](n.srcAttr), T && (r = t.parentNode, o = r && c.test(r.nodeName || "")), d = a.detail.firesLoad || "src" in t && (i || e || o), a = {
                                        target: t
                                    }, d && (y(t, R, !0), clearTimeout(x), x = l(R, 2500), v(t, n.loadingClass), y(t, X, !0)), o && p.call(r.getElementsByTagName("source"), V), i ? t.setAttribute("srcset", i) : e && !o && (I.test(t.nodeName) ? Y(t, e) : t.src = e), (i || o) && w(t, {
                                        src: e
                                    })), u(function() {
                                        t._lazyRace && delete t._lazyRace, g(t, n.lazyClass), (!d || t.complete) && (d ? R(a) : W--, U(a))
                                    })
                                }))
                            },
                            K = function() {
                                if (!f) {
                                    if (Date.now() - S < 999) return void l(K, 999);
                                    var t, i = function() {
                                        n.loadMode = 3, B()
                                    };
                                    f = !0, n.loadMode = 3, e.hidden ? (F(), Q.run()) : B(), a("scroll", function() {
                                        3 == n.loadMode && (n.loadMode = 2), clearTimeout(t), t = l(i, 99)
                                    }, !0)
                                }
                            };
                        return {
                            _: function() {
                                S = Date.now(), r = e.getElementsByClassName(n.lazyClass), d = e.getElementsByClassName(n.lazyClass + " " + n.preloadClass), L = n.hFac, a("scroll", B, !0), a("resize", B, !0), t.MutationObserver ? new MutationObserver(B).observe(i, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0
                                }) : (i[o]("DOMNodeInserted", B, !0), i[o]("DOMAttrModified", B, !0), setInterval(B, 999)), a("hashchange", B, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                                    e[o](t, B, !0)
                                }), /d$|^c/.test(e.readyState) ? K() : (a("load", K), e[o]("DOMContentLoaded", B), l(K, 2e4)), B(r.length > 0)
                            },
                            checkElems: B,
                            unveil: G
                        }
                    }(),
                    _ = function() {
                        var t, i = function(t, e, n) {
                                var i, r, o, s, a = t.parentNode;
                                if (a && (n = x(t, a, n), s = m(t, "lazybeforesizes", {
                                        width: n,
                                        dataAttr: !!e
                                    }), !s.defaultPrevented && (n = s.detail.width) && n !== t._lazysizesWidth)) {
                                    if (t._lazysizesWidth = n, n += "px", t.setAttribute("sizes", n), c.test(a.nodeName || ""))
                                        for (i = a.getElementsByTagName("source"), r = 0, o = i.length; o > r; r++) i[r].setAttribute("sizes", n);
                                    s.detail.dataAttr || w(t, s.detail)
                                }
                            },
                            r = function() {
                                var e, n = t.length;
                                if (n)
                                    for (e = 0; n > e; e++) i(t[e])
                            },
                            o = T(r);
                        return {
                            _: function() {
                                t = e.getElementsByClassName(n.autosizesClass), a("resize", o)
                            },
                            checkElems: o,
                            updateElem: i
                        }
                    }(),
                    S = function() {
                        S.i || (S.i = !0, _._(), k._())
                    };
                return function() {
                    var e, i = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.7,
                        hFac: .8,
                        loadMode: 2
                    };
                    n = t.lazySizesConfig || t.lazysizesConfig || {};
                    for (e in i) e in n || (n[e] = i[e]);
                    t.lazySizesConfig = n, l(function() {
                        n.init && S()
                    })
                }(), {
                    cfg: n,
                    autoSizer: _,
                    loader: k,
                    init: S,
                    uP: w,
                    aC: v,
                    rC: g,
                    hC: h,
                    fire: m,
                    gW: x
                }
            }
        }(t, t.document);
        t.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
    }(window);